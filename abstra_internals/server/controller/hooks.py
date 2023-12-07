import flask

from ...usage import usage
from ..utils import is_it_true
from .main import MainController
from ...execution.execution import RequestData
from ...execution.hook_execution import HookExecution
from ...repositories.project.project import ProjectRepository


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
        hook = controller.create_hook()
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

        project = ProjectRepository.load()
        is_initial = project.is_initial(hook)
        execution = HookExecution(hook, is_initial, request_data)

        execution.run_sync()

        body, status, headers = execution.get_response()

        return {
            "body": body,
            "status": status,
            "headers": headers,
            "stdout": "".join(execution.stdout if execution else []),
            "stderr": "".join(execution.stderr if execution else []),
        }

    return bp
