from ..repositories.json.classes import RuntimeJSON
from .static_execution import StaticExecution
from .execution import RequestData


class ScriptExecution(StaticExecution):
    @staticmethod
    def create_with_stage_run(runtime_json: RuntimeJSON, stage_run_id: str):
        execution = ScriptExecution(runtime_json, is_initial=False)
        execution.init_stage_run(stage_run_id)
        return execution

    def __init__(self, runtime_json: RuntimeJSON, is_initial: bool):
        request = RequestData(
            headers={},
            body="",
            method="GET",
            query_params={},
        )

        super().__init__(runtime_json, is_initial, request)

    def setup_context(self, request: RequestData):
        # TODO: This was added to allow script to run without a stage run on tests
        if self.stage_run is None:
            super().init_stage_run()
