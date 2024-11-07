import flask

from abstra_internals.constants import STAGE_RUN_ID_PARAM_KEY
from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.execution_client_hook import HookClient
from abstra_internals.controllers.main import MainController
from abstra_internals.entities.execution import context_from_flask
from abstra_internals.usage import editor_usage
from abstra_internals.utils import is_it_true


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_hooks", __name__)

    @bp.route("/<path:id>", methods=["GET"])
    @editor_usage
    def _get_hook(id: str):
        hook = controller.get_hook(id)
        if not hook:
            flask.abort(404)
        return hook.editor_dto

    @bp.route("/", methods=["GET"])
    @editor_usage
    def _get_hooks():
        return [f.editor_dto for f in controller.get_hooks()]

    @bp.route("/", methods=["POST"])
    @editor_usage
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
    @editor_usage
    def _update_hook(id: str):
        changes = flask.request.json
        if not changes:
            flask.abort(400)

        hook = controller.update_stage(id, changes)
        return hook.editor_dto if hook else None

    @bp.route("/<path:id>", methods=["DELETE"])
    @editor_usage
    def _delete_hook(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_hook(id, remove_file)
        return {"success": True}

    @bp.route("/<path:id>/run", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    @editor_usage
    def _run_hook(id: str):
        hook = controller.get_hook(id)
        if not hook:
            flask.abort(404)

        request_context = context_from_flask(flask.request)

        client = HookClient(request_context)

        ExecutionController(
            repositories=controller.repositories,
            workflow_engine=controller.workflow_engine,
        ).run(
            stage=hook,
            client=client,
            request=request_context,
            target_stage_run_id=flask.request.args.get(STAGE_RUN_ID_PARAM_KEY),
        )

        return {
            "body": client.response["body"],
            "status": client.response["status"],
            "headers": client.response["headers"],
        }

    @bp.route("/<path:id>/test", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    @editor_usage
    def _test_hook(id: str):
        hook = controller.get_hook(id)
        if not hook:
            flask.abort(404)

        request_context = context_from_flask(flask.request)

        client = HookClient(request_context)

        ExecutionController(
            repositories=controller.repositories,
            workflow_engine=controller.detached_workflow_engine,
        ).test(stage=hook, client=client, request=request_context)

        return {
            "body": client.response["body"],
            "status": client.response["status"],
            "headers": client.response["headers"],
        }

    return bp
