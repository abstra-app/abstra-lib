import json

import flask
import flask_sock

from abstra_internals.controllers.execution import (
    STAGE_RUN_ID_PARAM_KEY,
    ExecutionController,
)
from abstra_internals.controllers.execution_client import FormClient
from abstra_internals.controllers.workflow import workflow_engine
from abstra_internals.entities.execution import RequestContext
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import usage
from abstra_internals.utils import is_it_true
from abstra_internals.utils.dict import filter_non_string_values


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_forms", __name__)
    sock = flask_sock.Sock(bp)

    @sock.route("/socket")
    def _websocket(ws: flask_sock.Server):
        try:
            request_context = RequestContext(
                query_params=flask.request.args,
                body=flask.request.get_data(as_text=True),
                headers=filter_non_string_values(flask.request.headers),
                method=flask.request.method,
            )

            id = flask.request.args.get("id")
            if id is None:
                return

            form = controller.get_form(id)
            if not form:
                return

            form_client = FormClient(
                ws=ws, request_context=request_context, production_mode=False
            )

            execution_controller = ExecutionController(
                stage=form,
                client=form_client,
                request=request_context,
                target_stage_run_id=flask.request.args.get(STAGE_RUN_ID_PARAM_KEY),
                execution_repository=controller.execution_repository,
                project_repository=ProjectRepository,
                stage_run_repository=controller.stage_run_repository,
            )

            is_detached = flask.request.args.get(
                "detached", default=False, type=is_it_true
            )

            if is_detached:
                thread_data = json.loads(controller.read_test_data())
                execution_dto = execution_controller.run_detached(thread_data)
            else:
                execution_dto = execution_controller.run()

            if not execution_dto:
                return

            if not is_detached:
                workflow_engine.handle_pthread_execution_end()
        except Exception as e:
            AbstraLogger.capture_exception(e)
        finally:
            ws.close(message="Done")

    @bp.get("/")
    @usage
    def _get_forms():
        return [f.editor_dto for f in controller.get_forms()]

    @bp.get("/<path:id>")
    @usage
    def _get_form(id: str):
        form = controller.get_form(id)
        if not form:
            flask.abort(404)
        return form.editor_dto

    @bp.delete("/<path:id>")
    @usage
    def _delete_form(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_form(id, remove_file)
        return {"success": True}

    @bp.post("/")
    @usage
    def _create_form():
        data = flask.request.json
        if not data:
            flask.abort(400)
        title = data.get("title")
        file = data.get("file")
        if not title or not file:
            flask.abort(400)
        workflow_position = data.get("position", (0, 0))
        form = controller.create_form(title, file, workflow_position)
        return form.editor_dto

    @bp.put("/<path:id>")
    @usage
    def _update_form(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        form = controller.update_stage(id, data)
        return form.editor_dto if form else None

    return bp
