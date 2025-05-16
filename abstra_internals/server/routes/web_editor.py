import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.web_editor import WebEditorController


def get_web_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("webEditor", __name__)
    editorAuthController = WebEditorController(main_controller.web_editor_repository)

    @bp.get("/")
    def _inspect():
        return editorAuthController.inspect().to_dict()

    return bp


def get_web_editor_auth_bp(main_controller: MainController):
    bp = flask.Blueprint("editorAuth", __name__)
    editorAuthController = WebEditorController(main_controller.web_editor_repository)

    @bp.post("/set-cookie")
    def _set_cookie():
        data = flask.request.json
        if not data or not data.get("token"):
            flask.abort(400)

        return editorAuthController.set_cookie(data["token"])

    return bp


def get_editor_api_guard(main_controller: MainController):
    return WebEditorController(main_controller.web_editor_repository).guard
