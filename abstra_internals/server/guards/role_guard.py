import flask
from typing import Callable
from functools import wraps
from ...contracts_generated import CommonUserRolesItem
from ...repositories.members import MembersRepository
from ...jwt_auth import UserClaims
from typing import Callable, Optional


def default_auth_decoder(auth_header: str) -> Optional[UserClaims]:
    return UserClaims.from_jwt(auth_header.split(" ")[1])


class RoleGuardFactory:
    repository: MembersRepository
    auth_decoder: Callable[[str], Optional[UserClaims]]

    def __init__(
        self,
        repository: MembersRepository,
        auth_decoder: Callable[[str], Optional[UserClaims]] = default_auth_decoder,
    ) -> None:
        self.repository = repository
        self.auth_decoder = auth_decoder

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

                user_roles = self.repository.get_member_roles(claims.email)
                if len(user_roles) == 0 or role not in user_roles:
                    flask.abort(403)

                return func(*args, **kwargs)

            return wrapper

        return decorator
