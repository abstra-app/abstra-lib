import flask
import flask_sock

from abstra_internals.controllers.execution import (
    STAGE_RUN_ID_PARAM_KEY,
    DetachedExecutionController,
    ExecutionController,
    LockFailedException,
    UnsetThreadException,
)
from abstra_internals.controllers.execution_client_form import FormClient
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
            request_context = context_from_flask(flask.request)

            id = flask.request.args.get("id")
            if id is None:
                return

            form = controller.get_form(id)
            if not form:
                return

            is_detached = flask.request.args.get(
                "detached", default=False, type=is_it_true
            )

            client = FormClient(
                ws=ws, request_context=request_context, production_mode=False
            )

            Controller = (
                DetachedExecutionController if is_detached else ExecutionController
            )

            Controller(
                stage=form,
                client=client,
                request=request_context,
                workflow_engine=controller.workflow_engine,
                execution_repository=controller.execution_repository,
                stage_run_repository=controller.stage_run_repository,
                target_stage_run_id=flask.request.args.get(STAGE_RUN_ID_PARAM_KEY),
            ).run().wait()
        except LockFailedException:
            pass
        except UnsetThreadException:
            pass
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
