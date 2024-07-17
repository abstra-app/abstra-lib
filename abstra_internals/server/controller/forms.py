import flask
import flask_sock

from abstra_internals.controllers.execution import (
    STAGE_RUN_ID_PARAM_KEY,
    DetachedExecutionController,
    ExecutionController,
    LockFailedException,
    UnsetThreadException,
)
from abstra_internals.controllers.execution_client_form import (
    FormClient,
    FormWebsocketReasons,
)
from abstra_internals.controllers.execution_store import (
    ExecutionStore,
    ExecutionStoreException,
)
from abstra_internals.entities.execution import context_from_flask
from abstra_internals.logger import AbstraLogger
from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import usage
from abstra_internals.utils import is_it_true


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_forms", __name__)
    sock = flask_sock.Sock(bp)

    @sock.route("/socket")
    def _websocket(ws: flask_sock.Server):
        try:
            request = context_from_flask(flask.request)

            id = flask.request.args.get("id")
            if id is None:
                return ws.close(reason=FormWebsocketReasons.FormNotFound)

            form = controller.get_form(id)
            if not form:
                return ws.close(reason=FormWebsocketReasons.FormNotFound)

            if execution_id := flask.request.args.get("previous_execution_id"):
                try:
                    client = ExecutionStore.get_form_client_by_execution_id(
                        execution_id
                    )
                except ExecutionStoreException:
                    return ws.close(reason=FormWebsocketReasons.ReconnectFailed)
            else:
                is_detached = flask.request.args.get(
                    "detached", default=False, type=is_it_true
                )

                client = FormClient(request_context=request, production_mode=False)

                Controller = (
                    DetachedExecutionController if is_detached else ExecutionController
                )

                try:
                    Controller(
                        stage=form,
                        client=client,
                        request=request,
                        workflow_engine=controller.workflow_engine,
                        execution_repository=controller.execution_repository,
                        stage_run_repository=controller.stage_run_repository,
                        target_stage_run_id=flask.request.args.get(
                            STAGE_RUN_ID_PARAM_KEY
                        ),
                    ).run()
                except LockFailedException:
                    return ws.close(reason=FormWebsocketReasons.LockFailed)
                except UnsetThreadException:
                    return ws.close(reason=FormWebsocketReasons.UnsetThread)

            client.sync_and_wait(ws)
        except Exception as e:
            AbstraLogger.capture_exception(e)

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
