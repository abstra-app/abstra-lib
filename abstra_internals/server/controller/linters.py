import flask
from ...contracts_generated import (
    AbstraLibApiEditorLintersFixResponse,
    AbstraLibApiEditorLintersCheckResponse,
    AbstraLibApiEditorLintersRule,
)
from ...linter.rules import rules
from ...usage import usage


def check_linters() -> AbstraLibApiEditorLintersCheckResponse:
    return [AbstraLibApiEditorLintersRule.from_dict(rule.to_dict()) for rule in rules]


def fix_linter(rule_name: str, fix_name: str):
    for rule in rules:
        if rule.name == rule_name:
            for issue in rule.find_issues():
                for fix in issue.fixes:
                    if fix.name == fix_name:
                        fix.fix()
                        return True
    raise Exception(f"Could not find fix {fix_name} for rule {rule_name}")


def get_editor_bp():
    bp = flask.Blueprint("editor_linters", __name__)

    # 1s pooling in this route
    @bp.get("/check")
    def _check_linters():
        return check_linters()

    @bp.post("/fix/<rule_name>/<fix_name>")
    @usage
    def _fix_linter(rule_name: str, fix_name: str):
        fix_linter(rule_name, fix_name)
        return AbstraLibApiEditorLintersFixResponse(success=True).to_dict()

    return bp
