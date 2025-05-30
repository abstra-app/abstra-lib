import flask

from abstra_internals.contracts_generated import (
    AbstraLibApiEditorLintersFixResponse,
)
from abstra_internals.controllers.main import MainController
from abstra_internals.usage import editor_usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_linters", __name__)

    # 1s pooling in this route
    @bp.get("/check")
    def _check_linters():
        checks = controller.linter_repository.get_checks()
        return [check.to_dict() for check in checks]

    @bp.post("/fix/<rule_name>/<fix_name>")
    @editor_usage
    def _fix_linter(rule_name: str, fix_name: str):
        controller.linter_repository.fix_linter(rule_name, fix_name)
        return AbstraLibApiEditorLintersFixResponse(success=True).to_dict()

    @bp.post("/fix-all")
    @editor_usage
    def _fix_all_linters():
        controller.linter_repository.fix_all_linters()
        return AbstraLibApiEditorLintersFixResponse(success=True).to_dict()

    return bp
