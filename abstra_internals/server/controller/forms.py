import flask

from ...usage import usage
from ...settings import Settings
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_forms", __name__)

    @bp.get("/")
    @usage
    def _get_forms():
        return [f.editor_dto for f in controller.get_forms()]

    @bp.get("/<path:path>")
    @usage
    def _get_form(path: str):
        form = controller.get_form(path)
        if not form:
            flask.abort(404)
        return form.editor_dto

    @bp.delete("/<path:path>")
    @usage
    def _delete_form(path: str):
        controller.delete_form(path)
        return {"success": True}

    @bp.post("/")
    @usage
    def _create_form():
        form = controller.create_form()
        return form.editor_dto

    @bp.put("/<path:path>")
    @usage
    def _update_form(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        form = controller.update_stage(path, data)
        return form.editor_dto if form else None

    return bp
