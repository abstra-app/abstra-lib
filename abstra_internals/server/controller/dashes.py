import flask

from ...usage import usage
from ...settings import Settings
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_dashes", __name__)

    @bp.get("/<path:path>")
    @usage
    def _get_dash(path: str):
        dash = controller.get_dash(path)
        if not dash:
            flask.abort(404)
        return dash.editor_dto

    @bp.get("/")
    @usage
    def _get_dashes():
        return [f.editor_dto for f in controller.get_dashes()]

    @bp.post("/")
    @usage
    def _create_dash():
        dash = controller.create_dash()
        return dash.editor_dto

    @bp.put("/<path:path>")
    @usage
    def _update_dash(path: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        dash = controller.update_runtime(path, data)
        return dash.editor_dto if dash else None

    @bp.delete("/<path:path>")
    @usage
    def _delete_dash(path: str):
        controller.delete_dash(path)
        return {"success": True}

    return bp
