from .execution.live_execution import get_live_execution_throwable
from .utils import decode_jwt
from .contract import common


class AuthResponse:
    """The response from the authentication process

    Attributes:
      email (str): The email address of the user
    """

    def __init__(self, email: str):
        self.email = email


def get_user(refresh: bool = False):
    execution = get_live_execution_throwable()
    execution.send(common.AuthRequireInfoMessage(refresh=refresh))

    while True:
        type, data = execution.recv()
        if type != "auth:saved-jwt":
            continue

        jwt_claims = decode_jwt(data["jwt"])
        if not jwt_claims:
            execution.send(common.AuthInvalidJWTMessage())
            continue

        execution.send(common.AuthValidJWTMessage())
        return AuthResponse(jwt_claims["email"])


def execute_js(code: str, context: dict = {}):
    execution = get_live_execution_throwable()
    execution.send(common.ExecuteJSRequestMessage(code, context))

    while True:
        type, data = execution.recv()
        if type != "execute-js:response":
            continue

        return data.get("value")


def alert(message: str, severity: str = "info"):
    execution = get_live_execution_throwable()
    severity = severity if severity in ["info", "warn", "error", "success"] else "info"
    execution.send(common.AlertMessage(message, severity))


def redirect(url: str, query_params: dict = {}):
    execution = get_live_execution_throwable()
    query_params = query_params or get_query_params()
    execution.send(common.RedirectMessage(url, query_params))


def get_query_params() -> dict:
    execution = get_live_execution_throwable()
    return execution.context.get("query_params", {})
