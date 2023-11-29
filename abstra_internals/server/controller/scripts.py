import flask

from ...usage import usage
from ...settings import Settings
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_scripts", __name__)

    @bp.get("/<path:id>")
    @usage
    def _get_script(id: str):
        script = controller.get_script(id)
        if not script:
            flask.abort(404)
        return script.editor_dto

    @bp.get("/")
    @usage
    def _get_scripts():
        return [f.editor_dto for f in controller.get_scripts()]

    @bp.post("/")
    @usage
    def _create_script():
        script = controller.create_script()
        return script.editor_dto

    @bp.put("/<path:id>")
    @usage
    def _update_script(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        script = controller.update_stage(id, data)
        return script.editor_dto if script else None

    @bp.delete("/<path:id>")
    @usage
    def _delete_script(id: str):
        controller.delete_script(id)
        return {"success": True}

    @bp.post("/<path:id>/test")
    @usage
    def _test_script(id: str):
        script = controller.get_script(id)

        if not script:
            flask.abort(404)

        return controller.run_script(script)

    return bp
