import json

import flask

from abstra_internals.controllers.execution import (
    STAGE_RUN_ID_PARAM_KEY,
    ExecutionController,
)
from abstra_internals.controllers.execution_client import HookClient
from abstra_internals.controllers.workflow import workflow_engine
from abstra_internals.entities.execution import RequestContext
from abstra_internals.repositories import (
    execution_logs_repository,
    execution_repository,
    stage_run_repository,
)
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import usage
from abstra_internals.utils import is_it_true
from abstra_internals.utils.dict import filter_non_string_values


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

        request_context = RequestContext(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=filter_non_string_values(flask.request.headers),
            query_params=flask.request.args,
        )

        client = HookClient(request_context)

        execution_controller = ExecutionController(
            stage=hook,
            target_stage_run_id=flask.request.args.get(STAGE_RUN_ID_PARAM_KEY),
            stage_run_repository=stage_run_repository,
            execution_repository=execution_repository,
            project_repository=ProjectRepository,
            request=request_context,
            client=client,
        )

        execution_dto = execution_controller.run()

        if not execution_dto:
            return flask.abort(429)

        workflow_engine.handle_pthread_execution_end()

        return {
            "body": client.response["body"],
            "status": client.response["status"],
            "headers": client.response["headers"],
            "output": execution_logs_repository.get_logs_dto(execution_dto["id"]),
        }

    @bp.route("/<path:id>/test", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    @usage
    def _test_hook(id: str):
        hook = controller.get_hook(id)
        if not hook:
            flask.abort(404)

        request_context = RequestContext(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=filter_non_string_values(flask.request.headers),
            query_params=flask.request.args,
        )

        client = HookClient(request_context)

        execution_controller = ExecutionController(
            stage=hook,
            request=request_context,
            target_stage_run_id=None,
            stage_run_repository=controller.stage_run_repository,
            execution_repository=execution_repository,
            project_repository=ProjectRepository,
            client=client,
        )

        thread_data = json.loads(controller.read_test_data())
        execution_dto = execution_controller.run_detached(thread_data=thread_data)

        if not execution_dto:
            return flask.abort(429)

        return {
            "body": client.response["body"],
            "status": client.response["status"],
            "headers": client.response["headers"],
            "output": execution_logs_repository.get_logs_dto(execution_dto["id"]),
        }

    return bp
