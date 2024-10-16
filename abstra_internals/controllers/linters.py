from abstra_internals.contracts_generated import (
    AbstraLibApiEditorLintersCheckResponse,
    AbstraLibApiEditorLintersRule,
)
from abstra_internals.linter.rules import rules


def check_linters() -> AbstraLibApiEditorLintersCheckResponse:
    checks = []

    for rule in rules:
        try:
            checks.append(AbstraLibApiEditorLintersRule.from_dict(rule.to_dict()))
        except Exception:
            pass

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
