import flask

from ...usage import usage
from .main import MainController
from ...execution.execution import RequestData
from ...execution.job_execution import JobExecution
from ...repositories.project.project import ProjectRepository
from ..utils import is_it_true


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
        job = controller.create_job()
        return job.editor_dto

    @bp.put("/<path:id>")
    @usage
    def _update_runtime(id: str):
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

    @bp.post("/<path:id>/test")
    @usage
    def _test_job(id: str):
        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        request_data = RequestData(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            query_params=flask.request.args,
        )

        project = ProjectRepository.load()
        is_initial = project.is_initial(job)
        execution = JobExecution(job, is_initial, request_data)

        execution.run_sync()

        return {
            "stdout": "".join(execution.stdout if execution else []),
            "stderr": "".join(execution.stderr if execution else []),
        }

    return bp
