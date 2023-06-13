from .session import LiveSession
from .contract import common
from .utils import decode_jwt


class AuthResponse:
    """The response from the authentication process

    Attributes:
      email (str): The email address of the user
    """

    def __init__(self, email: str):
        self.email = email


def get_user(session: LiveSession):
    session.send(common.AuthRequireInfoMessage())
    while True:
        type, data = session.recv()
        if type != "auth:saved-jwt":
            continue

        jwt_claims = decode_jwt(data["jwt"])
        if not jwt_claims:
            session.send(common.AuthInvalidJWTMessage())
            continue

        session.send(common.AuthValidJWTMessage())
        return AuthResponse(jwt_claims["email"])
