from abstra_internals.session import get_live_session_throwable
from abstra_internals.utils import decode_jwt
from abstra_internals.contract import common


class AuthResponse:
    """The response from the authentication process

    Attributes:
      email (str): The email address of the user
    """

    def __init__(self, email: str):
        self.email = email


def get_user():
    session = get_live_session_throwable()
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


def execute_js(code: str, context: dict = {}):
    session = get_live_session_throwable()
    session.send(common.ExecuteJSRequestMessage(code, context))

    while True:
        type, data = session.recv()
        if type != "execute-js:response":
            continue

        return data.get("value")


def alert(message: str, severity: str = "info"):
    session = get_live_session_throwable()
    severity = severity if severity in ["info", "warn", "error", "success"] else "info"
    session.send(common.AlertMessage(message, severity))


def redirect(url: str, query_params: dict = {}):
    session = get_live_session_throwable()
    query_params = query_params or get_query_params()
    session.send(common.RedirectMessage(url, query_params))


def get_query_params() -> dict:
    session = get_live_session_throwable()
    return session.context.get("query_params", {})
