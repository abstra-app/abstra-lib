from .static_execution import StaticExecution
from .execution import RequestData


class JobExecution(StaticExecution):
    def setup_context(self, request: RequestData):
        self.init_stage_run()

    def handle_started(self):
        self.log("started", {})
        return super().handle_started()

    def handle_success(self) -> str:
        self.log("success", {})
        return super().handle_success()

    def handle_failure(self, e: Exception) -> str:
        self.log("failed", {"error": str(e)})
        return super().handle_failure(e)
