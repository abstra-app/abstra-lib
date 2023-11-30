import flask

from ...usage import usage
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_debugger", __name__)

    @bp.get("/")
    def _get_debugger_status():
        return controller.get_debugger_status()

    @bp.post("/vscode-launch")
    @usage
    def _create_vscode_launch():
        return controller.create_vscode_launch()

    return bp
