import flask_sock

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

    def handle_success(self):
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        self.send(forms_contract.CloseMessage(close_dto))

    def _handle_ws_exception(self, exception: flask_sock.ConnectionClosed):
        if exception.reason == 1000:
            return  # should we log this?

        if exception.reason == 1001:
            return self.log(
                "connection-closed",
                {"message": "Client went away - probably closed the tab."},
            )

        return self.log(
            "connection-closed",
            {
                "message": f"[ERROR] Connection closed with code {exception.reason}: {exception.message}\n",
                "reason": exception.reason,
            },
        )

    def handle_failure(self, exception: Exception):
        if isinstance(exception, flask_sock.ConnectionClosed):
            return self._handle_ws_exception(exception)

        close_dto = forms_contract.CloseDTO(
            exit_status="GENERIC_EXCEPTION",
            exception=exception.__str__(),
        )
        self.send(forms_contract.CloseMessage(close_dto))

        super().handle_failure(exception)

    def handle_finish(self):
        self.close()
