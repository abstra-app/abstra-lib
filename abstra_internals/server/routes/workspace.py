import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.settings import Settings
from abstra_internals.templates import (
    new_form_code,
    new_hook_code,
    new_job_code,
    new_script_code,
)
from abstra_internals.usage import editor_usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_workspace", __name__)

    @bp.get("/")
    @editor_usage
    def _get_workspace():
        return controller.get_workspace().as_dict

    @bp.put("/")
    @editor_usage
    def _update_workspace():
        if not flask.request.json:
            flask.abort(400)
        controller.update_workspace(flask.request.json)
        return controller.get_workspace().as_dict

    @bp.get("/root")
    @editor_usage
    def _get_workspace_root_path():
        return str(Settings.root_path.absolute())

    @bp.post("/open-file")
    @editor_usage
    def _open_file():
        if not flask.request.json:
            flask.abort(400)
        file_path = flask.request.json["path"]
        mode = flask.request.json.get("mode", "file")
        controller.open_file(file_path, create_if_not_exists=True, mode=mode)
        return {"success": True}

    @bp.post("/init-file")
    @editor_usage
    def _init_file():
        if not flask.request.json:
            flask.abort(400)
        file_path = flask.request.json["path"]
        type = flask.request.json["type"]
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
    @editor_usage
    def _read_test_data():
        return controller.read_test_data()

    @bp.post("/write-test-data")
    @editor_usage
    def _write_test_data():
        if not flask.request.json:
            flask.abort(400)
        test_data = flask.request.json.get("test_data", "{}")
        controller.write_test_data(test_data)
        return {"success": True}

    @bp.get("/files")
    @editor_usage
    def _list_files():
        path = flask.request.args.get("path", ".")
        mode = flask.request.args.get("mode", "file")
        return controller.list_files(path, mode)

    @bp.post("/deploy")
    @editor_usage
    def _deploy():
        controller.deploy()
        return {"success": True}

    return bp
