import flask

from abstra_internals.controllers.execution import (
    DetachedExecutionController,
    ExecutionController,
)
from abstra_internals.controllers.execution_client import BasicClient
from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import editor_usage
from abstra_internals.utils import is_it_true


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_jobs", __name__)

    @bp.get("/<path:id>")
    @editor_usage
    def _get_job(id: str):
        job = controller.get_job(id)
        if not job:
            flask.abort(404)
        return job.editor_dto

    @bp.get("/")
    @editor_usage
    def _get_jobs():
        return [f.editor_dto for f in controller.get_jobs()]

    @bp.post("/")
    @editor_usage
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
    @editor_usage
    def _update_stage(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        job = controller.update_stage(id, data)
        return job.editor_dto if job else None

    @bp.delete("/<path:id>")
    @editor_usage
    def _delete_job(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_job(id, remove_file)
        return {"success": True}

    @bp.post("/<path:id>/run")
    @editor_usage
    def _run_job(id: str):
        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        ExecutionController(
            request=None,
            stage=job,
            client=BasicClient(),
            target_stage_run_id=None,
            workflow_engine=controller.workflow_engine,
            stage_run_repository=controller.stage_run_repository,
            execution_repository=controller.execution_repository,
        ).run().wait()

        return {"ok": True}

    @bp.post("/<path:id>/test")
    @editor_usage
    def _test_job(id: str):
        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        DetachedExecutionController(
            request=None,
            stage=job,
            client=BasicClient(),
            target_stage_run_id=None,
            workflow_engine=controller.workflow_engine,
            execution_repository=controller.execution_repository,
            stage_run_repository=controller.stage_run_repository,
        ).run().wait()

        return {"ok": True}

    return bp
