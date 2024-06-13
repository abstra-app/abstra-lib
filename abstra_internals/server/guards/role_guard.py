from dataclasses import dataclass
from functools import wraps
from typing import Callable, Optional, Union

import flask
import flask_sock

from abstra_internals.contracts_generated import (
    AbstraLibApiPlayerUserNavigationGuard as NavigationGuard,
)
from abstra_internals.contracts_generated import CommonUser
from abstra_internals.jwt_auth import USER_AUTH_HEADER_KEY, UserClaims
from abstra_internals.repositories.project.project import (
    AccessSettings,
    ProjectRepository,
    Sidebar,
    StyleSettingsWithSidebar,
)
from abstra_internals.repositories.users import UsersRepository

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
        enabled: bool,
        auth_decoder: Callable[[str], Optional[UserClaims]] = default_auth_decoder,
    ) -> None:
        self.repository = repository
        self.auth_decoder = auth_decoder
        self.enable = enabled

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
        if not self.enable:
            return NavigationGuard("ALLOWED")

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

        if access_setting.should_allow(user):
            return NavigationGuard("ALLOWED")

        return NavigationGuard("FORBIDEN")

    def should_allow(self, path: str, auth: Optional[str]) -> NavigationGuard:
        access_settings = ProjectRepository.load().get_access_control_by_stage_path(
            path
        )
        ##404 allow this to be handled by the frontend
        if access_settings is None:
            return NavigationGuard("NOT_FOUND")

        return self.__allow(access_settings, auth)

    def filtered_workspace(self, auth: Optional[str]) -> StyleSettingsWithSidebar:
        project = ProjectRepository.load()
        user: Optional[CommonUser] = None

        visible_sidebar = Sidebar(items=[])
        if not self.enable:
            visible_sidebar.items = [
                stage.to_sidebar_item for stage in project.list_accessible_stages()
            ]
            return StyleSettingsWithSidebar.from_dict(
                {**project.workspace.as_dict, "sidebar": visible_sidebar.as_dict}
            )

        if auth is not None:
            claims = self.auth_decoder(auth)
            if claims is not None and claims.email:
                user = self.repository.get_user(claims.email)

        if project.home.access_control.should_allow(user):
            stages = [stage for stage in project.list_accessible_stages()]
            for stage in stages:
                if stage.access_control.should_allow(user):
                    visible_sidebar.items.append(stage.to_sidebar_item)

        return StyleSettingsWithSidebar.from_dict(
            {**project.workspace.as_dict, "sidebar": visible_sidebar.as_dict}
        )

    def by(self, selector: Selector):
        def decorator(func):
            @wraps(func)
            def wrapper(*args, **kwargs):
                access_settings = self.__get_access_settings(selector, **kwargs)
                if access_settings is None:
                    flask.abort(401)

                auth = flask.request.headers.get(USER_AUTH_HEADER_KEY)

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
