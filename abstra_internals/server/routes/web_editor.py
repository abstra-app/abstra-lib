import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.web_editor import WebEditorController


def get_web_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("webEditor", __name__)
    editorAuthController = WebEditorController()

    @bp.get("/")
    def _inspect():
        return editorAuthController.inspect().to_dict()

    return bp
