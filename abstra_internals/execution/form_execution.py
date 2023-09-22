from ..contract import forms_contract
from .live_execution import LiveExecution
from .execution import RequestData


class FormExecution(LiveExecution):
    def _wait_start(self):
        type = None
        while type != "start":
            type, data = self.recv()
        return data["params"]

    def setup_context(self, request: RequestData):
        self.context["query_params"] = self._wait_start()
        self.send(forms_contract.ExecutionIdMessage(self.id))
        self.init_stage_run(self.context["query_params"].get("abstra_stage_run_id"))

    def handle_success(self):
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        self.send(forms_contract.CloseMessage(close_dto))

    def handle_failure(self, exception: Exception):
        close_dto = forms_contract.CloseDTO(
            exit_status=forms_contract.exit_status["generic_exception"],
            exception=exception.__str__(),
        )
        self.send(forms_contract.CloseMessage(close_dto))

    def handle_finish(self):
        self.close()
