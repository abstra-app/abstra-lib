from dataclasses import dataclass
import jwt, datetime, typing
from .utils import is_valid_email
from .utils.environment import PUBLIC_KEY


def decode_jwt(jwt_str: str):
    try:
        if PUBLIC_KEY:
            return jwt.decode(jwt_str, key=PUBLIC_KEY, algorithms=["RS256"])
        return jwt.decode(jwt_str, options={"verify_signature": False})
    except Exception as e:
        print("error decoding jwt", e)
        return None


def endcode_fake_jwt(email: str):
    return jwt.encode(
        key="fake",
        algorithm="HS256",
        payload={
            "email": email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7),
        },
    )


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
