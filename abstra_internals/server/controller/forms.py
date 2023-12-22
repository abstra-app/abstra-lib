import flask

from ..utils import is_it_true
from ...usage import usage
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_forms", __name__)

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
