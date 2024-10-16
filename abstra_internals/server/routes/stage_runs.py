import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.stage_runs import StageRunsController
from abstra_internals.environment import IS_PRODUCTION
from abstra_internals.repositories.stage_run import (
    GetStageRunByQueryFilter,
    Pagination,
)
from abstra_internals.server.guards.role_guard import Guard, StageIdSelector
from abstra_internals.usage import editor_usage, player_usage


def get_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("editor_stage_runs", __name__)
    controller = StageRunsController(main_controller.stage_run_repository)

    @bp.get("/")
    @editor_usage
    def _get_leaf_stage_runs():
        filter = GetStageRunByQueryFilter.from_dict(flask.request.args)
        pagination = Pagination.from_dict(flask.request.args)
        return controller.get_leaf_stage_runs(filter, pagination)

    @bp.get("/past")
    @editor_usage
    def _get_past_stage_runs():
        filter = GetStageRunByQueryFilter.from_dict(flask.request.args)
        pagination = Pagination.from_dict(flask.request.args)
        return controller.get_past_stage_runs(filter, pagination)

    @bp.post("/fork")
    @editor_usage
    def _fork():
        data = flask.request.json
        if not data:
            flask.abort(400)
        stage_run_id = data.get("stage_run_id")
        custom_thread_data = data.get("custom_thread_data")
        if not stage_run_id:
            flask.abort(400)
        return controller.fork(stage_run_id, custom_thread_data)

    @bp.post("/retry")
    @editor_usage
    def _retry():
        data = flask.request.json
        if not data:
            flask.abort(400)
        stage_run_id = data.get("stage_run_id")
        if not stage_run_id:
            flask.abort(400)
        return controller.retry(stage_run_id)

    return bp


def get_player_bp(main_controller: MainController):
    bp = flask.Blueprint("player_stage_runs", __name__)
    controller = StageRunsController(main_controller.stage_run_repository)

    guard = Guard(main_controller.users_repository, enabled=IS_PRODUCTION)

    @bp.post("/retry")
    @guard.by(StageIdSelector("kanban"))
    @player_usage
    def _retry():
        data = flask.request.json
        if not data:
            flask.abort(400)
        stage_run_id = data.get("stage_run_id")
        if not stage_run_id:
            flask.abort(400)
        return controller.retry(stage_run_id)

    return bp
