from __future__ import annotations  # required for type check
import datetime

from simple_websocket.ws import ConnectionClosed
import flask_sock, traceback, inspect
from typing import Literal, Optional, Dict, TYPE_CHECKING, Tuple
import traceback

from abstra_internals.compatibility import compat_traceback


from .execution import ABSTRA_RUN_KEY, Execution, RequestData, NoExecutionFound
from ..contract import forms_contract
from ..utils import deserialize, serialize
from ..utils.debug import make_debug_data
from ..contract import forms_contract
from ..jwt_auth import UserClaims
from ..repositories.execution_logs import FormEventLogEntry
from ..repositories.execution import ExecutionRepository
from ..repositories.execution_logs import ExecutionLogsRepository
from ..repositories.stage_run import StageRunRepository
from ..utils.environment import IS_PRODUCTION


if TYPE_CHECKING:
    from ..repositories.project.project import FormStage


class FormExecution(Execution):
    _connection: flask_sock.Server
    debug_enabled = True

    @classmethod
    def get_current_execution(cls) -> Optional["FormExecution"]:
        execution = Execution.get_current_execution()
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
        stage: "FormStage",
        is_initial: bool,
        connection: flask_sock.Server,
        request: RequestData,
        stage_run_repository: StageRunRepository,
        execution_repository: ExecutionRepository,
        execution_logs_repository: ExecutionLogsRepository,
        execution_id=None,
    ):
        self._connection = connection
        if execution_id is not None:
            self.id = execution_id

        super().__init__(
            stage,
            is_initial,
            request,
            stage_run_repository=stage_run_repository,
            execution_repository=execution_repository,
            execution_logs_repository=execution_logs_repository,
            execution_id=execution_id,
        )

    @property
    def connected(self) -> bool:
        return self._connection.connected

    def log_form_message(self, type: str, payload: dict):
        self.execution_logs_repository.save(
            FormEventLogEntry(
                execution_id=self.id,
                created_at=datetime.datetime.now(),
                event="form-message",
                payload={
                    "messageType": type,
                    "messagePayload": payload,
                },
                sequence=self.log_count,
            )
        )

    def send(self, msg: forms_contract.Message):
        self.log_form_message(msg.type, msg.data)

        skip_sending = isinstance(msg, forms_contract.StdioMessage) and IS_PRODUCTION
        if skip_sending:
            return

        if self.debug_enabled:
            if isinstance(msg, forms_contract.CloseMessage) and msg.close_dto.exception:
                debug = make_debug_data(msg.close_dto.exception)
            else:
                debug = make_debug_data(inspect.stack())
            msg.data = {**msg.data, **debug}

        str_data = serialize(msg.to_json())
        self._connection.send(str_data)

    def recv(self) -> Tuple[str, Dict]:
        try:
            str_data = self._connection.receive()
        except ConnectionClosed:
            self.close()
            return "close", {}

        data = deserialize(str_data)

        self.log_form_message(data["type"], data)
        return data["type"], data

    def close(self, reason: Optional[str] = ""):
        self._connection.close(message=reason)
        self.closed = True

    def stdio(self, event: Literal["stderr", "stdout"], text: str) -> None:
        self.send(forms_contract.StdioMessage(event, text))
        return super().stdio(event, text)

    def end(self):
        if self.connected:
            self.close(reason=traceback.format_exc() or None)

    def handle_lock_failed(self) -> None:
        status = self.stage_run.status if self.stage_run else None
        self.send(forms_contract.LockFailedMessage(status))

    # flows

    @property
    def query_params(self) -> Dict:
        return self.context.request.query_params

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

    def _recv_start(self):
        type = None
        data = None

        type, data = self.recv()
        if type != "start":
            return self._recv_start()

        return data["params"]

    def received_stage_run_id(self) -> Optional[str]:
        return self.context.request.query_params.get(ABSTRA_RUN_KEY)

    def handle_start(self) -> None:
        self.context.request.query_params = self._recv_start()
        self.send(forms_contract.ExecutionIdMessage(self.id))

    def handle_success(self) -> None:
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        self.send(forms_contract.CloseMessage(close_dto))
        self.close()

    def handle_failure(self, e: Exception) -> None:
        self.send(
            forms_contract.StdioMessage(
                "stderr",
                "".join(
                    compat_traceback.format_exception(e),
                ),
            )
        )

        close_dto = forms_contract.CloseDTO(
            exit_status="EXCEPTION",
            exception=e,
        )
        self.send(forms_contract.CloseMessage(close_dto))

    def attempt_handle_exception(self, e: Exception) -> bool:
        NORMAL_CLOSURE = 1000
        GOING_AWAY = 1001

        if not isinstance(e, flask_sock.ConnectionClosed):
            return False

        if e.reason == NORMAL_CLOSURE:
            return True

        if e.reason == GOING_AWAY:
            self.status = "abandoned"
            return True

        self.log_form_message(
            "connection-closed",
            {
                "message": f"[ERROR] Connection closed with code {e.reason}: {e.message}\n",
                "reason": e.reason,
            },
        )

        return False


def get_form_execution_throwable() -> FormExecution:
    execution = FormExecution.get_current_execution()
    if not execution:
        raise NoExecutionFound()
    return execution
