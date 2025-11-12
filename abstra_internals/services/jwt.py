import typing
from dataclasses import dataclass
from functools import lru_cache

import jwt

from abstra_internals.environment import PROJECT_ID, PUBLIC_KEY
from abstra_internals.logger import AbstraLogger
from abstra_internals.utils.email import is_valid_email

USER_AUTH_HEADER_KEY = "Authorization"


@lru_cache(maxsize=10)
def decode_jwt(jwt_str: str, aud=PROJECT_ID, skip_verify: bool = False):
    try:
        if not skip_verify and PUBLIC_KEY:
            return jwt.decode(
                jwt_str, key=PUBLIC_KEY, algorithms=["RS256"], audience=aud
            )
        return jwt.decode(jwt_str, options={"verify_signature": False}, audience=aud)

    except jwt.ExpiredSignatureError:
        return None
    except Exception as e:
        AbstraLogger.capture_exception(e)
        return None


@dataclass
class UserClaims:
    """The response from the authentication process

    Attributes:
      email (str): The email address of the user
      claims (dict): The claims from the JWT token
    """

    claims: typing.Dict[str, typing.Any]

    @property
    def email(self) -> str:
        return self.claims["email"]

    def add_roles(self, roles: typing.List[str]) -> None:
        self.claims["roles"] = roles

    @property
    def roles(self) -> typing.List[str]:
        return self.claims.get("roles", [])

    @classmethod
    def from_jwt(
        cls, jwt_str: str, skip_verify: bool = False
    ) -> typing.Optional["UserClaims"]:
        claims = decode_jwt(jwt_str, skip_verify=skip_verify)
        if claims is None:
            return None

        email = claims.get("email")
        if not is_valid_email(email):
            return None

        return cls(claims)

    def __getattr__(self, name):
        return self.claims.get(name)
