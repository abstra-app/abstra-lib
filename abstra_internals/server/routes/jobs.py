import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.repositories.project.project import JobStage
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
        id = data.get("id", None)
        job = controller.create_job(title, file, workflow_position, id)
        return job.editor_dto

    @bp.put("/<path:id>")
    @editor_usage
    def _update_stage(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        job = controller.update_stage(id, data)
        if isinstance(job, JobStage):
            return job.editor_dto
        else:
            return None

    @bp.delete("/<path:id>")
    @editor_usage
    def _delete_job(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_stage(id, remove_file)
        return {"success": True}

    @bp.post("/<path:id>/run")
    @editor_usage
    def _run_job(id: str):
        status = controller.get_job_status(id)
        if status == "not_found":
            flask.abort(404)

        if status == "disabled":
            return {"status": "disabled"}

        return controller.run_job(id)

    return bp
