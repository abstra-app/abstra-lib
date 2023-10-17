import flask_sock

from ..repositories import StageRunRepository
from .live_execution import LiveExecution
from ..contract import forms_contract
from .execution import RequestData


class FormExecution(LiveExecution):
    def _wait_start(self):
        type = None
        data = None

        type, data = self.recv()

        if type != "start":
            return self._wait_start()

        return data["params"]

    def setup_context(self, request: RequestData):
        self.context["query_params"] = self._wait_start()
        self.send(forms_contract.ExecutionIdMessage(self.id))
        self.init_stage_run(self.context["query_params"].get("abstra-run-id"))

    def handle_success(self) -> str:
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        self.send(forms_contract.CloseMessage(close_dto))
        return super().handle_success()

    def _handle_ws_exception_1001(self, exception: flask_sock.ConnectionClosed) -> str:
        self.log(
            "connection-closed",
            {"message": "Client went away - probably closed the tab."},
        )
        if self.stage_run and not self.is_initial:
            StageRunRepository.create_next(self.stage_run, [self.stage_run.to_dto()])

        return "abandoned"

    def _handle_ws_exception_other(self, exception: flask_sock.ConnectionClosed) -> str:
        self.log(
            "connection-closed",
            {
                "message": f"[ERROR] Connection closed with code {exception.reason}: {exception.message}\n",
                "reason": exception.reason,
            },
        )
        return super().handle_failure(exception)

    def _handle_ws_exception(self, exception: flask_sock.ConnectionClosed) -> str:
        if exception.reason == 1000:
            return super().handle_success()  # missing advanve steps?

        if exception.reason == 1001:
            return self._handle_ws_exception_1001(exception)

        return self._handle_ws_exception_other(exception)

    def handle_failure(self, exception: Exception) -> str:
        if isinstance(exception, flask_sock.ConnectionClosed):
            return self._handle_ws_exception(exception)

        close_dto = forms_contract.CloseDTO(
            exit_status="GENERIC_EXCEPTION",
            exception=exception.__str__(),
        )
        self.send(forms_contract.CloseMessage(close_dto))

        return super().handle_failure(exception)

    def handle_finish(self):
        self.close()
