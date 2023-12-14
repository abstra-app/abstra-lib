from ..repositories.project.project import ActionStage
from .static_execution import StaticExecution
from .execution import RequestData


class ScriptExecution(StaticExecution):
    stage_run_id: str

    def __init__(self, stage: ActionStage, stage_run_id: str):
        self.stage_run_id = stage_run_id

        request = RequestData(
            headers={},
            body="",
            method="GET",
            query_params={},
        )

        super().__init__(stage=stage, is_initial=False, request=request)

    def setup_context(self, request: RequestData):
        self.init_stage_run(self.stage_run_id)
