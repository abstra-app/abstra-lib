import flask
import flask_sock

from abstra_internals.controllers.execution.execution import ExecutionController
from abstra_internals.controllers.execution.execution_client_form import FormClient
from abstra_internals.controllers.main import MainController
from abstra_internals.entities.execution_context import (
    FormContext,
    extract_flask_request,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.project.project import FormStage
from abstra_internals.usage import editor_usage
from abstra_internals.utils import is_it_true


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_forms", __name__)
    sock = flask_sock.Sock(bp)

    @sock.route("/socket")
    def _websocket(ws: flask_sock.Server):
        try:
            context = FormContext(
                request=extract_flask_request(flask.request),
            )

            id = flask.request.args.get("id")
            if id is None:
                return

            form = controller.get_form(id)
            if not form:
                return

            client = FormClient(ws=ws, context=context, production_mode=False)

            ExecutionController(
                repositories=controller.repositories,
                stage=form,
                client=client,
                context=context,
            ).run()

        except Exception as e:
            AbstraLogger.capture_exception(e)
        finally:
            ws.close(message="Done")

    @bp.get("/")
    @editor_usage
    def _get_forms():
        return [f.editor_dto for f in controller.get_forms()]

    @bp.get("/<path:id>")
    @editor_usage
    def _get_form(id: str):
        form = controller.get_form(id)
        if not form:
            flask.abort(404)
        return form.editor_dto

    @bp.delete("/<path:id>")
    @editor_usage
    def _delete_form(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_form(id, remove_file)
        return {"success": True}

    @bp.post("/")
    @editor_usage
    def _create_form():
        data = flask.request.json
        if not data:
            flask.abort(400)
        title = data.get("title")
        file = data.get("file")
        if not title or not file:
            flask.abort(400)
        workflow_position = data.get("position", (0, 0))
        id = data.get("id", None)
        form = controller.create_form(title, file, workflow_position, id)
        return form.editor_dto

    @bp.put("/<path:id>")
    @editor_usage
    def _update_form(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        form = controller.update_stage(id, data)
        if isinstance(form, FormStage):
            return form.editor_dto
        else:
            return None

    return bp
