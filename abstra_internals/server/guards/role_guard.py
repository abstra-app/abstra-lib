from dataclasses import dataclass
from functools import wraps
from typing import Callable, Optional, Union

import flask
import flask_sock

from ...contracts_generated import (
    AbstraLibApiPlayerUserNavigationGuard as NavigationGuard,
)
from ...contracts_generated import (
    CommonUserRolesItem,
)
from ...jwt_auth import UserClaims
from ...repositories.project.project import (
    AccessSettings,
    ProjectRepository,
)
from ...repositories.users import UsersRepository

SOCKET_AUTH_HEADER_PREFIX = "base64url.bearer.authorization."


def default_auth_decoder(auth_header: str) -> Optional[UserClaims]:
    return UserClaims.from_jwt(auth_header.split(" ")[1])


@dataclass
class StageIdSelector:
    value: str


@dataclass
class PathArgSelector:
    value: str


@dataclass
class IdArgSelector:
    value: str


@dataclass
class QueryArgSelector:
    value: str


Selector = Union[StageIdSelector, PathArgSelector, IdArgSelector, QueryArgSelector]


class Guard:
    repository: UsersRepository
    auth_decoder: Callable[[str], Optional[UserClaims]]

    def __init__(
        self,
        repository: UsersRepository,
        auth_decoder: Callable[[str], Optional[UserClaims]] = default_auth_decoder,
    ) -> None:
        self.repository = repository
        self.auth_decoder = auth_decoder

    def __get_access_settings(self, selector: Selector, **kwargs):
        if isinstance(selector, IdArgSelector):
            stage_id = str(kwargs.get(selector.value))
            return ProjectRepository.load().get_access_control_by_stage_id(stage_id)

        elif isinstance(selector, StageIdSelector):
            return ProjectRepository.load().get_access_control_by_stage_id(
                selector.value
            )

        elif isinstance(selector, QueryArgSelector):
            stage_id = str(flask.request.args.get(selector.value))
            return ProjectRepository.load().get_access_control_by_stage_id(stage_id)

        ##path arg is default
        path = str(kwargs.get(selector.value))
        return ProjectRepository.load().get_access_control_by_stage_path(path)

    def __allow(
        self, access_setting: AccessSettings, authHeader: Optional[str]
    ) -> NavigationGuard:
        ##public access
        if access_setting.is_public:
            return NavigationGuard("ALLOWED")

        if authHeader is None:
            return NavigationGuard("UNAUTHORIZED")

        claims = self.auth_decoder(authHeader)
        if claims is None or claims.email is None:
            return NavigationGuard("UNAUTHORIZED")

        user = self.repository.get_user(claims.email)
        if user is None:
            return NavigationGuard("FORBIDEN")

        ##protected access
        if len(access_setting.required_roles) == 0:
            return NavigationGuard("ALLOWED")

        if len(set(user.roles).intersection(set(access_setting.required_roles))) > 0:
            return NavigationGuard("ALLOWED")

        ##private access
        return NavigationGuard("FORBIDEN")

    def allow(self, path: str, auth: Optional[str]) -> NavigationGuard:
        access_settings = ProjectRepository.load().get_access_control_by_stage_path(
            path
        )
        ##404 allow this to be handled by the frontend
        if access_settings is None:
            return NavigationGuard("ALLOWED")

        return self.__allow(access_settings, auth)

    def requires(self, role: CommonUserRolesItem):
        def decorator(func):
            @wraps(func)
            def wrapper(*args, **kwargs):
                auth = flask.request.headers.get("Authorization")
                if auth is None:
                    flask.abort(401)

                claims = self.auth_decoder(auth)
                if claims is None or claims.email is None:
                    flask.abort(401)

                user_roles = self.repository.get_user_roles(claims.email)
                if len(user_roles) == 0 or role not in user_roles:
                    flask.abort(403)

                return func(*args, **kwargs)

            return wrapper

        return decorator

    def by(self, selector: Selector):
        def decorator(func):
            @wraps(func)
            def wrapper(*args, **kwargs):
                access_settings = self.__get_access_settings(selector, **kwargs)
                if access_settings is None:
                    flask.abort(401)

                auth = flask.request.headers.get("Authorization")

                status = self.__allow(access_settings, auth).status

                if status == "ALLOWED":
                    return func(*args, **kwargs)

                elif status == "UNAUTHORIZED":
                    flask.abort(401)

                ##status == "FORBIDEN"
                flask.abort(403)

            return wrapper

        return decorator

    def __extract_ws_auth(self, header: Optional[str]) -> Optional[str]:
        if header is None:
            return None

        for protocol in header.split(","):
            if SOCKET_AUTH_HEADER_PREFIX in protocol:
                jwt = protocol.replace(SOCKET_AUTH_HEADER_PREFIX, "").strip(" ")
                return f"bearer {jwt}"

        return None

    def socket_by(self, selector: Selector):
        def decorator(func):
            @wraps(func)
            def wrapper(conn: flask_sock.Server, *args, **kwargs):
                access_settings = self.__get_access_settings(selector, **kwargs)
                if access_settings is None:
                    return conn.close(reason=404, message="No path")

                protocols = flask.request.headers.get("Sec-WebSocket-Protocol")

                auth = self.__extract_ws_auth(protocols)

                status = self.__allow(access_settings, auth).status

                if status == "ALLOWED":
                    return func(conn, *args, **kwargs)

                elif status == "UNAUTHORIZED":
                    return conn.close(reason=401, message="No header")

                ##status == "FORBIDEN"
                return conn.close(reason=403, message="Forbidden")

            return wrapper

        return decorator
