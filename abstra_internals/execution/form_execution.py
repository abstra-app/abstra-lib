from __future__ import annotations  # required for type check

import datetime, inspect, flask_sock
from simple_websocket.ws import ConnectionClosed
from typing import TYPE_CHECKING, Dict, Literal, Optional, Tuple

from ..jwt_auth import UserClaims
from ..debug import make_debug_data
from ..contract import forms_contract
from ..utils import deserialize, serialize
from ..compatibility import compat_traceback
from ..utils.environment import IS_PRODUCTION
from .stage_run_manager import StageRunManager
from ..repositories.execution import ExecutionRepository
from .execution import ABSTRA_RUN_KEY, Execution, NoExecutionFound, RequestData
from ..repositories.execution_logs import ExecutionLogsRepository, FormEventLogEntry

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
        stage_run_manager: StageRunManager,
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
            stage_run_manager=stage_run_manager,
            execution_repository=execution_repository,
            execution_logs_repository=execution_logs_repository,
            execution_id=execution_id,
        )

    @property
    def connected(self) -> bool:
        return self._connection.connected

    def log_form_message(self, type: str, payload: dict):
        blocklist = ["auth:saved-jwt", "execution:heartbeat"]

        if type in blocklist:
            return

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

        skip_sending = (
            isinstance(msg, forms_contract.ExecutionStdioMessage) and IS_PRODUCTION
        )
        if skip_sending:
            return

        if self.debug_enabled:
            if (
                isinstance(msg, forms_contract.ExecutionEndedMessage)
                and msg.close_dto.exception
            ):
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
        self.send(forms_contract.ExecutionStdioMessage(event, text))
        return super().stdio(event, text)

    def handle_lock_failed(self) -> None:
        status = self.stage_run.status if self.stage_run else None
        self.send(forms_contract.ExecutionLockFailedMessage(status))

    @property
    def query_params(self) -> Dict:
        return self.context.request.query_params

    def receive(self):
        while True:
            type, data = self.recv()
            if type in ["execution:heartbeat", "debug:close-attempt"]:
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

    def redirect(self, url: str, query_params: Optional[dict] = None):
        query_params = query_params if query_params is not None else self.query_params
        self.send(forms_contract.RedirectRequestMessage(url, query_params))

    def _recv_start(self):
        type = None
        data = None

        type, data = self.recv()
        if type != "execution:start":
            return self._recv_start()

        return data["params"]

    def received_stage_run_id(self) -> Optional[str]:
        return self.context.request.query_params.get(ABSTRA_RUN_KEY)

    def handle_start(self) -> None:
        self.context.request.query_params = self._recv_start()
        self.send(forms_contract.ExecutionStartedMessage(self.id))

    def handle_success(self) -> None:
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        self.send(forms_contract.ExecutionEndedMessage(close_dto))
        self.close()

    def handle_failure(self, e: Exception) -> None:
        self.send(
            forms_contract.ExecutionStdioMessage(
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
        self.send(forms_contract.ExecutionEndedMessage(close_dto))

    def attempt_handle_exception(self, e: Exception) -> bool:
        NORMAL_CLOSURE = 1000
        GOING_AWAY = 1001
        NO_STATUS = 1005

        if not isinstance(e, flask_sock.ConnectionClosed):
            return False

        if e.reason == NORMAL_CLOSURE:
            return True

        if e.reason == GOING_AWAY or e.reason == NO_STATUS:
            self.status = "abandoned"
            if self.stage_run:
                parent_data = (
                    self.stage_run_manager.get(self.stage_run.parent_id).data
                    if self.stage_run.parent_id
                    else {}
                )
                self.stage_run_manager.update_data(self.stage_run.id, parent_data)
            return True

        self.log_form_message(
            "connection-closed",
            {
                "message": f"[ERROR] Unhandled connection closed with code {e.reason}: {e.message}\n",
                "reason": e.reason,
            },
        )

        return False


def get_form_execution_throwable() -> FormExecution:
    execution = FormExecution.get_current_execution()
    if not execution:
        raise NoExecutionFound()
    return execution
