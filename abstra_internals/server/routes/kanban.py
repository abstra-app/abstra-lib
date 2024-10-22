from typing import List

import flask

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.kanban import DataRequest, KanbanController
from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.workflows import get_path, make_stage_dto
from abstra_internals.environment import IS_PRODUCTION
from abstra_internals.repositories.execution_logs import (
    LogEntry,
)
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.repositories.stage_run import StageRun
from abstra_internals.server.guards.role_guard import Guard, StageIdSelector
from abstra_internals.usage import player_usage


def get_editor_bp(main_controller: MainController):
    project_repository = ProjectRepository

    controller = KanbanController(
        main_controller.stage_run_repository, main_controller.execution_logs_repository
    )
    bp = flask.Blueprint("kanban", __name__)

    @bp.get("/stages")
    def _get_stages():
        stages = controller._get_stages()
        return [stage.to_dict() for stage in stages]

    # 1s pooling in this route
    @bp.post("/")
    def _get_kanban():
        if flask.request.json is None:
            flask.abort(400)
        req = DataRequest.from_dict(flask.request.json)
        return controller.get_data(req).to_dict()

    @bp.post("/count")
    def _count_by_status():
        return controller.count_by_status()

    @bp.get("/path")
    def _get_path():
        n = int(flask.request.args.get("n", 3))
        return get_path(n)

    # 1s pooling in this route
    @bp.get("/logs/<stage_run_id>")
    def _get_ancestor_logs(stage_run_id: str):
        project = project_repository.load()

        def kanban_log_filter(log: LogEntry):
            return (isinstance(log, LogEntry)) and log.payload["text"].strip() != ""

        def entry_from_run(stage_run: StageRun, logs: List[LogEntry]):
            stage = project.get_stage(stage_run.stage)

            return {
                "stage_run": stage_run.to_dto(),
                "stage": make_stage_dto(stage) if stage else None,
                "logs": [log.to_dto() for log in logs if kanban_log_filter(log)],
            }

        return [
            entry_from_run(stage_run, logs)
            for stage_run, logs in controller.get_ancestor_logs(stage_run_id)
        ]

    @bp.post("/jobs/<path:id>/start")
    def _start_job(id: str):
        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        ExecutionController(
            workflow_engine=main_controller.workflow_engine,
            stage_run_repository=main_controller.stage_run_repository,
            execution_repository=main_controller.execution_repository,
        ).run(
            wait=False,
            stage=job,
        )

        return {"status": "running"}

    @bp.post("/scripts/<path:id>/continue")
    def _continue_script(id: str):
        script = controller.get_script(id)
        if not script:
            flask.abort(404)

        if flask.request.json is None:
            flask.abort(400)

        stage_run_id = flask.request.json.get("stage_run_id")
        if not stage_run_id:
            flask.abort(400)

        ExecutionController(
            workflow_engine=main_controller.workflow_engine,
            stage_run_repository=main_controller.stage_run_repository,
            execution_repository=main_controller.execution_repository,
        ).run(
            wait=False,
            stage=script,
            target_stage_run_id=stage_run_id,
        )

        return {"status": "running"}

    return bp


def get_player_bp(main_controller: MainController):
    project_repository = ProjectRepository

    guard = Guard(main_controller.users_repository, enabled=IS_PRODUCTION)

    controller = KanbanController(
        main_controller.stage_run_repository,
        main_controller.execution_logs_repository,
        read_only=True,
    )
    bp = flask.Blueprint("kanban", __name__)

    # 1s pooling in this route
    @bp.get("/stages")
    @guard.by(StageIdSelector("kanban"))
    def _get_stages():
        stages = controller._get_stages()
        return [stage.to_dict() for stage in stages]

    @bp.get("/path")
    @guard.by(StageIdSelector("kanban"))
    def _get_path():
        n = int(flask.request.args.get("n", 3))
        return get_path(n)

    # 1s pooling in this route
    @bp.post("/")
    @guard.by(StageIdSelector("kanban"))
    def _get_kanban():
        if flask.request.json is None:
            flask.abort(400)
        req = DataRequest.from_dict(flask.request.json)
        return controller.get_data(req).to_dict()

    # 1s pooling in this route
    @bp.post("/count")
    @guard.by(StageIdSelector("kanban"))
    def _count_by_status():
        return controller.count_by_status()

    @bp.get("/logs/<stage_run_id>")
    @guard.by(StageIdSelector("kanban"))
    @player_usage
    def _get_ancestor_logs(stage_run_id: str):
        project = project_repository.load()

        def entry_from_run(stage_run: StageRun, logs: List[LogEntry]):
            stage = project.get_stage(stage_run.stage)

            return {
                "stage_run": stage_run.to_dto(),
                "stage": make_stage_dto(stage) if stage else None,
                "logs": [log.to_dto() for log in logs],
            }

        return [
            entry_from_run(stage_run, logs)
            for stage_run, logs in controller.get_ancestor_logs(stage_run_id)
        ]

    @bp.post("/jobs/<path:id>/start")
    @guard.by(StageIdSelector("kanban"))
    @player_usage
    def _start_job(id: str):
        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        ExecutionController(
            workflow_engine=main_controller.workflow_engine,
            stage_run_repository=main_controller.stage_run_repository,
            execution_repository=main_controller.execution_repository,
        ).run(
            wait=False,
            stage=job,
        )

        return {"status": "running"}

    @bp.post("/scripts/<path:id>/continue")
    @guard.by(StageIdSelector("kanban"))
    @player_usage
    def _continue_script(id: str):
        script = controller.get_script(id)
        if not script:
            flask.abort(404)

        if flask.request.json is None:
            flask.abort(400)

        stage_run_id = flask.request.json.get("stage_run_id")
        if not stage_run_id:
            flask.abort(400)

        ExecutionController(
            workflow_engine=main_controller.workflow_engine,
            stage_run_repository=main_controller.stage_run_repository,
            execution_repository=main_controller.execution_repository,
        ).run(
            wait=False,
            stage=script,
            target_stage_run_id=stage_run_id,
        )

        return {"status": "running"}

    return bp
