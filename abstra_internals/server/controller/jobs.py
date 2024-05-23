import json

import flask

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.execution_client import BasicClient
from abstra_internals.controllers.workflow import workflow_engine
from abstra_internals.repositories import (
    execution_logs_repository,
    execution_repository,
    stage_run_repository,
)
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import usage
from abstra_internals.utils import is_it_true


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_jobs", __name__)

    @bp.get("/<path:id>")
    @usage
    def _get_job(id: str):
        job = controller.get_job(id)
        if not job:
            flask.abort(404)
        return job.editor_dto

    @bp.get("/")
    @usage
    def _get_jobs():
        return [f.editor_dto for f in controller.get_jobs()]

    @bp.post("/")
    @usage
    def _create_job():
        data = flask.request.json
        if not data:
            flask.abort(400)
        title = data.get("title")
        file = data.get("file")
        if not title or not file:
            flask.abort(400)
        workflow_position = data.get("position", (0, 0))
        job = controller.create_job(title, file, workflow_position)
        return job.editor_dto

    @bp.put("/<path:id>")
    @usage
    def _update_stage(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        job = controller.update_stage(id, data)
        return job.editor_dto if job else None

    @bp.delete("/<path:id>")
    @usage
    def _delete_job(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_job(id, remove_file)
        return {"success": True}

    @bp.post("/<path:id>/run")
    @usage
    def _run_job(id: str):
        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        execution_controller = ExecutionController(
            stage=job,
            stage_run_repository=stage_run_repository,
            target_stage_run_id=None,
            execution_repository=execution_repository,
            project_repository=ProjectRepository,
            request=None,
            client=BasicClient(),
        )

        execution_dto = execution_controller.run()

        if not execution_dto:
            return flask.abort(429)

        workflow_engine.handle_pthread_execution_end()

        return {"output": execution_logs_repository.get_logs_dto(execution_dto["id"])}

    @bp.post("/<path:id>/test")
    @usage
    def _test_job(id: str):
        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        execution_controller = ExecutionController(
            stage=job,
            stage_run_repository=controller.stage_run_repository,
            target_stage_run_id=None,
            execution_repository=execution_repository,
            project_repository=ProjectRepository,
            request=None,
            client=BasicClient(),
        )

        thread_data = json.loads(controller.read_test_data())
        execution_dto = execution_controller.run_detached(thread_data=thread_data)

        if not execution_dto:
            return flask.abort(429)

        return {"output": execution_logs_repository.get_logs_dto(execution_dto["id"])}

    return bp
