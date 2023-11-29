from __future__ import annotations

from simple_websocket.ws import ConnectionClosed
import flask_sock, typing, traceback

from .execution import Execution, RequestData, NoExecutionFound
from ..contract import should_send, forms_contract
from ..utils import deserialize, serialize
from ..contract import forms_contract
from ..jwt_auth import UserClaims


if typing.TYPE_CHECKING:
    from ..repositories.project.project import FormStage


class FormExecution(Execution):
    type = "execution"
    _connection: flask_sock.Server

    @staticmethod
    def get_execution() -> typing.Optional["FormExecution"]:
        execution = Execution.get_execution()
        if isinstance(execution, FormExecution):
            return execution

        return None

    @staticmethod
    def broadcast(msg: forms_contract.Message):
        for e in list(Execution.executions.values()):
            if isinstance(e, FormExecution) and e.connected and e.closed == False:
                e.send(msg)

    def __init__(
        self,
        runtime_json: "FormStage",
        is_initial: bool,
        connection: flask_sock.Server,
        request: RequestData,
        execution_id=None,
    ):
        self._connection = connection
        if execution_id is not None:
            self.id = execution_id

        super().__init__(runtime_json, is_initial, request, execution_id=execution_id)

    def send(self, msg: forms_contract.Message):
        self.log(msg.type, msg.data)

        if not should_send(msg, self.is_preview):
            return

        str_data = serialize(msg.to_json(self.is_preview))
        self._connection.send(str_data)

    def recv(self) -> typing.Tuple[str, typing.Dict]:
        try:
            str_data = self._connection.receive()
        except ConnectionClosed:
            self.close()
            return "close", {}

        data = deserialize(str_data)
        self.log(data["type"], data)
        return data["type"], data

    def close(self, reason: typing.Optional[str] = ""):
        self._connection.close(message=reason)
        self.closed = True

    def stdio(self, type: str, text: str):
        self.send(forms_contract.StdioMessage(type, text))
        return super().stdio(type, text)

    @property
    def connected(self) -> bool:
        return self._connection.connected

    def end(self):
        if self.connected:
            self.close(reason=traceback.format_exc() or None)

    @property
    def query_params(self) -> typing.Dict:
        return self.context.get("query_params", {})

    @query_params.setter
    def query_params(self, value: typing.Dict) -> None:
        self.context["query_params"] = value

    def receive(self):
        while True:
            type, data = self.recv()
            if type in ["heartbeat", "browser:try-disconnect"]:
                continue

            return data

    def get_user(self, refresh: bool = False):
        # TODO: store/cache this
        self.send(forms_contract.AuthRequireInfoMessage(refresh=refresh))

        while True:
            type, data = self.recv()
            if type != "auth:saved-jwt":
                continue

            claims = UserClaims.from_jwt(data["jwt"])
            if not claims:
                self.send(forms_contract.AuthInvalidJWTMessage())
                continue

            self.send(forms_contract.AuthValidJWTMessage())
            return claims

    def execute_js(self, code: str, context: dict = {}):
        self.send(forms_contract.ExecuteJSRequestMessage(code, context))

        while True:
            type, data = self.recv()
            if type != "execute-js:response":
                continue

            return data.get("value")

    def alert(self, message: str, severity: str):
        severity = (
            severity if severity in ["info", "warn", "error", "success"] else "info"
        )
        self.send(forms_contract.AlertMessage(message, severity))

    def redirect(self, url: str, query_params: dict):
        query_params = query_params or self.query_params
        self.send(forms_contract.RedirectMessage(url, query_params))

    # forms

    def _wait_start(self):
        type = None
        data = None

        type, data = self.recv()

        if type != "start":
            return self._wait_start()

        return data["params"]

    def setup_context(self, request: RequestData) -> None:
        self.query_params = self._wait_start()
        self.send(forms_contract.ExecutionIdMessage(self.id))

    def handle_success(self) -> None:
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        self.send(forms_contract.CloseMessage(close_dto))

    def _handle_ws_exception_1001(self, exception: flask_sock.ConnectionClosed) -> None:
        self.log(
            "connection-closed",
            {"message": "Client went away - probably closed the tab."},
        )

    def _handle_ws_exception_other(
        self, exception: flask_sock.ConnectionClosed
    ) -> None:
        self.log(
            "connection-closed",
            {
                "message": f"[ERROR] Connection closed with code {exception.reason}: {exception.message}\n",
                "reason": exception.reason,
            },
        )

    def _handle_ws_exception(self, exception: flask_sock.ConnectionClosed) -> None:
        if exception.reason == 1000:
            return super().handle_success()  # missing advanve steps?

        if exception.reason == 1001:
            return self._handle_ws_exception_1001(exception)

        return self._handle_ws_exception_other(exception)

    def handle_failure(self, exception: Exception) -> None:
        if isinstance(exception, flask_sock.ConnectionClosed):
            self._handle_ws_exception(exception)

        close_dto = forms_contract.CloseDTO(
            exit_status="GENERIC_EXCEPTION",
            exception=exception.__str__(),
        )
        self.send(forms_contract.CloseMessage(close_dto))

        return super().handle_failure(exception)

    def handle_finish(self):
        self.close()


def get_form_execution_throwable() -> FormExecution:
    execution = FormExecution.get_execution()
    if not execution:
        raise NoExecutionFound()
    return execution
