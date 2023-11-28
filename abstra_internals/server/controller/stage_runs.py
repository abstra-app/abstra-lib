import flask
from typing import Optional

from ...usage import usage
from ...repositories import StageRunRepository


class StageRunsController:
    def get_stage_runs(self, stage: Optional[str] = None):
        return [
            stage_run.to_dto()
            for stage_run in StageRunRepository.find_leaves(dict(stage=stage))
        ]


def get_editor_bp():
    controller = StageRunsController()
    bp = flask.Blueprint("editor_stage_runs", __name__)

    @bp.get("/")
    @usage
    def _get_stage_runs():
        stage = flask.request.args.get("stage")
        return controller.get_stage_runs(stage)

    return bp
