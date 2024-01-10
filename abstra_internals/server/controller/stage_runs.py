import flask
from typing import Optional, Type

from ...usage import usage
from ...repositories.stage_run import (
    get_stage_run_repository,
    StageRunRepository,
)


class StageRunsController:
    def __init__(
        self,
        stage_run_repository: Type[StageRunRepository],
    ) -> None:
        self.stage_run_repository = stage_run_repository

    def get_stage_runs(self, stage: Optional[str] = None):
        return [
            stage_run.to_dto()
            for stage_run in StageRunRepository.find_leaves(dict(stage=stage))
        ]

    def fork(self, stage_run_id: str):
        stage_run = self.stage_run_repository.get(stage_run_id)
        return self.stage_run_repository.fork(stage_run).to_dto()


def get_editor_bp():
    bp = flask.Blueprint("editor_stage_runs", __name__)
    stage_run_repository = get_stage_run_repository()
    controller = StageRunsController(stage_run_repository)

    @bp.get("/")
    @usage
    def _get_stage_runs():
        stage = flask.request.args.get("stage")
        return controller.get_stage_runs(stage)

    @bp.post("/fork")
    def _fork():
        data = flask.request.json
        if not data:
            flask.abort(400)
        stage_run_id = data.get("stage_run_id")
        if not stage_run_id:
            flask.abort(400)
        return controller.fork(stage_run_id)

    return bp
