import typing
from typing import Dict, Optional, Union
from .execution import UnsetStageRun, RequestData
from .static_execution import StaticExecution
from ..repositories import StageRunRepository


class HookExecution(StaticExecution):
    def init_stage_run(self, sent_id: typing.Optional[str] = None):
        try:
            super().init_stage_run(sent_id)
        except UnsetStageRun:
            pass

    def handle_success(self):
        self.context["response"] = self.context.get("response", ("", 200, {}))

    def handle_failure(self, exception: Exception):
        self.context["response"] = self.context.get("response", ("", 500, {}))

    def handle_lock_failed(self):
        self.context["response"] = self.context.get("response", ("", 409, {}))

    def get_response(self) -> typing.Tuple[Dict, int, Dict]:
        if "response" not in self.context:
            raise Exception("No response found")

        return self.context["response"]

    def set_stage_run(
        self,
        props: Optional[Dict[str, Union[str, str]]] = None,
        assignee: Optional[str] = None,
    ):
        stage_runs = StageRunRepository.find(
            {"props": props, "assignee": assignee, "stage": self.runtime_json.path}
        )

        if len(stage_runs) == 0:
            raise Exception("No stage_run found")
        if len(stage_runs) > 1:
            raise Exception("More than one stage_run found")

        stage_run = stage_runs[0]
        self.stage_run = stage_run

        return stage_run

    def setup_context(self, request: RequestData):
        self.context["request"] = (
            request.body,
            request.query_params,
            request.headers,
        )
        self.init_stage_run(request.query_params.get("stage_run_id"))
