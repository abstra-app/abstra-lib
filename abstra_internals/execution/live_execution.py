from __future__ import annotations
from typing import Optional, TYPE_CHECKING, Tuple, Dict, Union
import traceback, flask_sock
from simple_websocket.ws import ConnectionClosed

from ..contract import should_send, common
from ..utils import deserialize, serialize, decode_jwt
from .execution import Execution, RequestData, NoExecutionFound

if TYPE_CHECKING:
    from ..repositories.json.classes import DashJSON, FormJSON


def get_live_execution_throwable() -> LiveExecution:
    execution = LiveExecution.get_execution()
    if not execution:
        raise NoExecutionFound
    return execution


class AuthResponse:
    """The response from the authentication process

    Attributes:
      email (str): The email address of the user
    """

    def __init__(self, email: str):
        self.email = email


class LiveExecution(Execution):
    type = "execution"
    _connection: flask_sock.Server

    @staticmethod
    def get_execution() -> Optional["LiveExecution"]:
        execution = Execution.get_execution()
        if isinstance(execution, LiveExecution):
            return execution

        return None

    @staticmethod
    def broadcast(msg: common.Message):
        for e in list(Execution.executions.values()):
            if isinstance(e, LiveExecution) and e.connected and e.closed == False:
                e.send(msg)

    def __init__(
        self,
        runtime_json: Union["FormJSON", "DashJSON"],
        is_initial: bool,
        connection: flask_sock.Server,
        request: RequestData,
        execution_id=None,
    ):
        self._connection = connection
        if execution_id is not None:
            self.id = execution_id

        super().__init__(runtime_json, is_initial, request, execution_id=execution_id)

    def send(self, msg: common.Message):
        self.log(msg.type, msg.data)

        if not should_send(msg, self.is_preview):
            return

        str_data = serialize(msg.to_json(self.is_preview))
        self._connection.send(str_data)

    def recv(self) -> Tuple[str, Dict]:
        try:
            str_data = self._connection.receive()
        except ConnectionClosed:
            self.close()
            return "close", {}

        data = deserialize(str_data)
        self.log(data["type"], data)
        return data["type"], data

    def close(self, reason: Optional[str] = ""):
        self._connection.close(message=reason)
        self.closed = True

    def stdio(self, type: str, text: str):
        self.send(common.StdioMessage(type, text))
        return super().stdio(type, text)

    @property
    def connected(self) -> bool:
        return self._connection.connected

    def end(self):
        if self.connected:
            self.close(reason=traceback.format_exc() or None)

    def handle_lock_failed(self):
        status = self.stage_run.status if self.stage_run else None
        self.send(common.LockFailedMessage(status))
        return super().handle_lock_failed()

    # flows

    @property
    def query_params(self) -> Dict:
        return self.context.get("query_params", {})

    @query_params.setter
    def query_params(self, value: Dict) -> None:
        self.context["query_params"] = value

    def receive(self):
        while True:
            type, data = self.recv()
            if type in ["heartbeat", "browser:try-disconnect"]:
                continue

            return data

    def get_user(self, refresh: bool = False):
        self.send(common.AuthRequireInfoMessage(refresh=refresh))

        while True:
            type, data = self.recv()
            if type != "auth:saved-jwt":
                continue

            jwt_claims = decode_jwt(data["jwt"])
            if not jwt_claims:
                self.send(common.AuthInvalidJWTMessage())
                continue

            self.send(common.AuthValidJWTMessage())
            return AuthResponse(jwt_claims["email"])

    def execute_js(self, code: str, context: dict = {}):
        self.send(common.ExecuteJSRequestMessage(code, context))

        while True:
            type, data = self.recv()
            if type != "execute-js:response":
                continue

            return data.get("value")

    def alert(self, message: str, severity: str):
        severity = (
            severity if severity in ["info", "warn", "error", "success"] else "info"
        )
        self.send(common.AlertMessage(message, severity))

    def redirect(self, url: str, query_params: dict):
        query_params = query_params or self.query_params
        self.send(common.RedirectMessage(url, query_params))
