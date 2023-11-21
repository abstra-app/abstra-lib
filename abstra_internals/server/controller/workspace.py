import flask

from ...usage import usage
from ...settings import Settings
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_workspace", __name__)

    @bp.get("/")
    @usage
    def _get_workspace():
        return controller.get_workspace().editor_dto

    @bp.put("/")
    @usage
    def _update_workspace():
        if not flask.request.json:
            flask.abort(400)
        workspace = controller.update_workspace(flask.request.json)
        return workspace.editor_dto

    @bp.get("/root-path")
    @usage
    def _get_workspace_root_path():
        return str(Settings.root_path.absolute())

    @bp.post("/open-file")
    @usage
    def _open_file():
        if not flask.request.json:
            flask.abort(400)
        file_path = flask.request.json["path"]
        controller.open_file(file_path, create_if_not_exists=True)
        return {"success": True}

    @bp.get("/check-file")
    @usage
    def _check_file():
        file_path = flask.request.args["path"]
        return {"exists": controller.check_file(file_path)}

    @bp.post("/deploy")
    @usage
    def _deploy():
        controller.deploy()
        return {"success": True}

    return bp
