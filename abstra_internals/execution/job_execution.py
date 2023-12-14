from ..repositories.project.project import JobStage
from .static_execution import StaticExecution
from .execution import RequestData


class JobExecution(StaticExecution):
    def __init__(self, stage: JobStage):
        request = RequestData(
            headers={},
            body="",
            method="GET",
            query_params={},
        )

        super().__init__(stage=stage, is_initial=True, request=request)

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
