import flask

from ...usage import usage
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_linters", __name__)

    @bp.get("/check")
    def _check_linters():
        return controller.check_linters()

    @bp.post("/fix/<rule_name>/<fix_name>")
    @usage
    def _fix_linter(rule_name: str, fix_name: str):
        controller.fix_linter(rule_name, fix_name)
        return {"success": True}

    return bp
