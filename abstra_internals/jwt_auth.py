import jwt, typing
from dataclasses import dataclass
from .utils import is_valid_email
from .utils.environment import PUBLIC_KEY, PROJECT_ID

USER_AUTH_HEADER_KEY = "Authorization"
API_AUTH_HEADER_KEY = "Api-Authorization"
AUTHOR_AUTH_HEADER_KEY = "Author-Authorization"


def decode_jwt(jwt_str: str):
    try:
        if PUBLIC_KEY:
            return jwt.decode(
                jwt_str, key=PUBLIC_KEY, algorithms=["RS256"], audience=PROJECT_ID
            )
        return jwt.decode(
            jwt_str, options={"verify_signature": False}, audience=PROJECT_ID
        )

    except Exception as e:
        print("error decoding jwt", e)
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

    @classmethod
    def from_jwt(cls, jwt_str: str) -> typing.Optional["UserClaims"]:
        claims = decode_jwt(jwt_str)
        if claims is None:
            return None

        email = claims.get("email")
        if not is_valid_email(email):
            return None

        return cls(claims)

    def __getattr__(self, name):
        return self.claims.get(name)
