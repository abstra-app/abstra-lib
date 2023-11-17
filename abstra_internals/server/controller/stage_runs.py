import flask
from typing import Optional

from ...usage import usage
from ...repositories import StageRunRepository


class StageRunsController:
    def get_stage_runs(self, stage_id: Optional[str] = None):
        return [
            stage_run.to_dto()
            for stage_run in StageRunRepository.find(dict(stage=stage_id))
        ]


def get_editor_bp():
    controller = StageRunsController()
    bp = flask.Blueprint("editor_stage_runs", __name__)

    @bp.get("/")
    @usage
    def _get_stage_runs():
        return controller.get_stage_runs()

    return bp


def get_player_bp():
    controller = StageRunsController()
    bp = flask.Blueprint("player_stage_runs", __name__)

    return bp
