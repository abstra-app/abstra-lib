import flask

from abstra_internals.contracts_generated import (
    AbstraLibApiEditorLintersFixResponse,
)
from abstra_internals.controllers.linters import check_linters, fix_linter
from abstra_internals.usage import editor_usage


def get_editor_bp():
    bp = flask.Blueprint("editor_linters", __name__)

    # 1s pooling in this route
    @bp.get("/check")
    def _check_linters():
        return check_linters()

    @bp.post("/fix/<rule_name>/<fix_name>")
    @editor_usage
    def _fix_linter(rule_name: str, fix_name: str):
        fix_linter(rule_name, fix_name)
        return AbstraLibApiEditorLintersFixResponse(success=True).to_dict()

    return bp
