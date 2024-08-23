from typing import Optional

import flask

from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.repositories.stage_run import (
    GetStageRunByQueryFilter,
    Pagination,
    StageRunRepository,
)
from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import editor_usage


class StageRunsController:
    def __init__(
        self,
        stage_run_repository: StageRunRepository,
    ) -> None:
        self.stage_run_repository = stage_run_repository

    def get_leaf_stage_runs(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ):
        return [
            stage_run.to_dto()
            for stage_run in self.stage_run_repository.find_leaves(
                filter=filter, pagination=pagination
            ).stage_runs
        ]

    def get_past_stage_runs(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ):
        return [
            stage_run.to_dto()
            for stage_run in self.stage_run_repository.find_past(
                filter=filter, pagination=pagination
            ).stage_runs
        ]

    def fork(self, stage_run_id: str, custom_thread_data: Optional[str]):
        stage_run = self.stage_run_repository.get(stage_run_id)
        project = ProjectRepository.load()
        parent_is_iterator = False
        previous_stages = project.get_previous_stages_ids(stage_run.stage)
        some_is_iterator = False
        for previous_stage in previous_stages:
            previous_stage = project.get_stage(previous_stage)
            if previous_stage and previous_stage.type_name == "iterator":
                some_is_iterator = True
        if some_is_iterator and "item" in stage_run.data:
            parent_is_iterator = True
        return self.stage_run_repository.fork(
            stage_run, parent_is_iterator, custom_thread_data
        ).to_dto()

    def retry(self, stage_run_id: str):
        return self.stage_run_repository.retry(stage_run_id).to_dto()


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

    @bp.post("/retry")
    def _retry():
        data = flask.request.json
        if not data:
            flask.abort(400)
        stage_run_id = data.get("stage_run_id")
        if not stage_run_id:
            flask.abort(400)
        return controller.retry(stage_run_id)

    return bp
