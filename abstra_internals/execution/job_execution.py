from .static_execution import StaticExecution
from .execution import RequestData


class JobExecution(StaticExecution):
    def setup_context(self, request: RequestData) -> None:
        pass

    def handle_started(self):
        self.log("started", {})

    def handle_success(self) -> None:
        self.log("success", {})

    def handle_failure(self, e: Exception) -> None:
        self.log("failed", {"error": str(e)})
        return super().handle_failure(e)
