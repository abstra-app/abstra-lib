from ..repositories.project.project import WorkflowStage
from .static_execution import StaticExecution
from .execution import RequestData


class ScriptExecution(StaticExecution):
    @staticmethod
    def create_with_stage_run(runtime_json: WorkflowStage, stage_run_id: str):
        execution = ScriptExecution(runtime_json, is_initial=False)
        return execution

    def __init__(self, runtime_json: WorkflowStage, is_initial: bool):
        request = RequestData(
            headers={},
            body="",
            method="GET",
            query_params={},
        )

        super().__init__(runtime_json, is_initial, request)

    def setup_context(self, request: RequestData):
        pass
