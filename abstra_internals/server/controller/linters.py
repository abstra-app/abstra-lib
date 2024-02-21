import flask
from ...contracts_generated import (
    AbstraLibApiEditorLintersFixResponse,
    AbstraLibApiEditorLintersCheckResponse,
)
from ...usage import usage
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_linters", __name__)

    # 1s pooling in this route
    @bp.get("/check")
    def _check_linters():
        return controller.check_linters()

    @bp.post("/fix/<rule_name>/<fix_name>")
    @usage
    def _fix_linter(rule_name: str, fix_name: str):
        controller.fix_linter(rule_name, fix_name)
        return AbstraLibApiEditorLintersFixResponse(success=True).to_dict()

    return bp
