import flask

from abstra_internals.contracts_generated import (
    AbstraLibApiEditorLintersCheckResponse,
    AbstraLibApiEditorLintersFixResponse,
    AbstraLibApiEditorLintersRule,
)
from abstra_internals.linter.rules import rules
from abstra_internals.logger import AbstraLogger
from abstra_internals.usage import usage


def check_linters() -> AbstraLibApiEditorLintersCheckResponse:
    checks = []

    for rule in rules:
        try:
            checks.append(AbstraLibApiEditorLintersRule.from_dict(rule.to_dict()))
        except Exception as e:
            AbstraLogger.capture_exception(e)

    return checks


def fix_linter(rule_name: str, fix_name: str):
    for rule in rules:
        if rule.name == rule_name:
            for issue in rule.find_issues():
                for fix in issue.fixes:
                    if fix.name == fix_name:
                        fix.fix()
                        return True
    raise Exception(f"Could not find fix {fix_name} for rule {rule_name}")


def fix_all_linters():
    for rule in rules:
        if rule.type != "info":
            for issue in rule.find_issues():
                for fix in issue.fixes:
                    fix.fix()


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
