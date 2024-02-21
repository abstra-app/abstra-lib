import flask
import json
from ...usage import usage
from ...settings import Settings
from .main import MainController

from ...templates import (
    new_script_code,
    new_form_code,
    new_hook_code,
    new_job_code,
)

from ...utils.validate import validate_json


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

    @bp.get("/root")
    @usage
    def _get_workspace_root_path():
        return str(Settings.root_path.absolute())

    @bp.post("/open-file")
    @usage
    def _open_file():
        if not flask.request.json:
            flask.abort(400)
        file_path = flask.request.json["path"]
        mode = flask.request.json.get("mode", "file")
        controller.open_file(file_path, create_if_not_exists=True, mode=mode)
        return {"success": True}

    @bp.post("/init-file")
    @usage
    def _init_file():
        if not flask.request.json:
            flask.abort(400)
        file_path = flask.request.json["path"]
        type = flask.request.json["type"]
        mode = flask.request.json.get("mode", "file")
        if type == "scripts":
            controller.init_code_file(file_path, new_script_code)
        elif type == "forms":
            controller.init_code_file(file_path, new_form_code)
        elif type == "hooks":
            controller.init_code_file(file_path, new_hook_code)
        elif type == "jobs":
            controller.init_code_file(file_path, new_job_code)
        else:
            flask.abort(400)
        controller.open_file(file_path, create_if_not_exists=False, mode=mode)
        return {"success": True}

    # 1s pooling in this route
    @bp.get("/read-file")
    def _read_file():
        file = flask.request.args.get("file")
        if not file:
            flask.abort(400)

        content = controller.read_file(file)
        if content is None:
            flask.abort(404)
        return content

    # 1s pooling in this route
    @bp.get("/check-file")
    def _check_file():
        file_path = flask.request.args.get("path")
        if not file_path:
            flask.abort(400)

        return {"exists": controller.check_file(file_path)}

    @bp.get("/read-test-data")
    @usage
    def _read_test_data():
        return controller.read_test_data()

    @bp.get("/files")
    @usage
    def _list_files():
        path = flask.request.args.get("path", ".")
        mode = flask.request.args.get("mode", "file")
        return controller.list_files(path, mode)

    @bp.post("/deploy")
    @usage
    def _deploy():
        controller.deploy()
        return {"success": True}

    return bp
