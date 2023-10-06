from ..contract import forms_contract
from .live_execution import LiveExecution
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

    def handle_failure(self, exception: Exception):
        close_dto = forms_contract.CloseDTO(
            exit_status="GENERIC_EXCEPTION",
            exception=exception.__str__(),
        )
        self.send(forms_contract.CloseMessage(close_dto))

    def handle_finish(self):
        self.close()
