import flask
import json

from ...execution.execution import RequestData
from ...execution.hook_execution import HookExecution
from ...execution.stage_run_manager import (
    DetachedStageRunManager,
    AttachedStageRunManager,
)
from ...repositories import (
    execution_logs_repository,
    execution_repository,
    stage_run_repository,
)
from ...repositories.stage_run import stage_run_repository_factory
from ...repositories.execution_logs import FormEventLogEntry
from ...repositories.project.project import ProjectRepository
from ...usage import usage
from ..utils import is_it_true
from ..workflow_engine import workflow_engine
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_hooks", __name__)

    @bp.route("/<path:id>", methods=["GET"])
    @usage
    def _get_hook(id: str):
        hook = controller.get_hook(id)
        if not hook:
            flask.abort(404)
        return hook.editor_dto

    @bp.route("/", methods=["GET"])
    @usage
    def _get_hooks():
        return [f.editor_dto for f in controller.get_hooks()]

    @bp.route("/", methods=["POST"])
    @usage
    def _create_hook():
        data = flask.request.json
        if not data:
            flask.abort(400)
        title = data.get("title")
        file = data.get("file")
        if not title or not file:
            flask.abort(400)
        workflow_position = data.get("position", (0, 0))
        hook = controller.create_hook(title, file, workflow_position)
        return hook.editor_dto

    @bp.route("/<path:id>", methods=["PUT"])
    @usage
    def _update_hook(id: str):
        changes = flask.request.json
        if not changes:
            flask.abort(400)

        hook = controller.update_stage(id, changes)
        return hook.editor_dto if hook else None

    @bp.route("/<path:id>", methods=["DELETE"])
    @usage
    def _delete_hook(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_hook(id, remove_file)
        return {"success": True}

    @bp.route("/<path:id>/run", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    @usage
    def _run_hook(id: str):
        hook = controller.get_hook(id)
        if not hook:
            flask.abort(404)

        request_data = RequestData(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            query_params=flask.request.args,
        )

        project = ProjectRepository.load()
        is_initial = project.is_initial(hook)

        stage_run_manager = AttachedStageRunManager(stage_run_repository)

        execution = HookExecution(
            hook,
            is_initial,
            request_data,
            execution_repository=execution_repository,
            execution_logs_repository=execution_logs_repository,
            stage_run_manager=stage_run_manager,
        )

        execution.run()
        body, status, headers = execution.get_response()
        workflow_engine.handle_execution_end(execution)

        stdout: str = ""
        stderr: str = ""

        for entry in execution_logs_repository.get(execution.id):
            if isinstance(entry, FormEventLogEntry):
                continue

            text = entry.payload.get("text")
            if not text:
                continue

            if entry.event == "stdout":
                stdout += text
            elif entry.event == "stderr":
                stderr += text
            elif entry.event == "unhandled-exception":
                stderr += text

        return {
            "body": body,
            "status": status,
            "headers": headers,
            "stdout": stdout,
            "stderr": stderr,
        }

    @bp.route("/<path:id>/test", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    @usage
    def _test_hook(id: str):
        hook = controller.get_hook(id)
        if not hook:
            flask.abort(404)

        request_data = RequestData(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            query_params=flask.request.args,
        )

        data = json.loads(controller.read_test_data())

        tmp_stage_run_repository = stage_run_repository_factory()

        project = ProjectRepository.load()
        is_initial = project.is_initial(hook)

        stage_run_manager = DetachedStageRunManager(tmp_stage_run_repository, data=data)

        execution = HookExecution(
            hook,
            is_initial,
            request_data,
            execution_repository=execution_repository,
            execution_logs_repository=execution_logs_repository,
            stage_run_manager=stage_run_manager,
        )

        execution.run()
        body, status, headers = execution.get_response()

        stdout: str = ""
        stderr: str = ""

        for entry in execution_logs_repository.get(execution.id):
            if isinstance(entry, FormEventLogEntry):
                continue

            text = entry.payload.get("text")
            if not text:
                continue

            if entry.event == "stdout":
                stdout += text
            elif entry.event == "stderr":
                stderr += text
            elif entry.event == "unhandled-exception":
                stderr += text

        return {
            "body": body,
            "status": status,
            "headers": headers,
            "stdout": stdout,
            "stderr": stderr,
        }

    return bp
