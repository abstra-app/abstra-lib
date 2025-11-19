from typing import List

from abstra_internals.repositories.linter.models import LinterIssue, LinterRule
from abstra_internals.utils.code_check import CodeCheckResult, code_check_all


class TypeCheckingIssue(LinterIssue):
    def __init__(self, result: CodeCheckResult) -> None:
        super().__init__()
        self.result = result
        self.fixes = []


class TypeCheckingRule(LinterRule):
    label = "Type checking"
    type = "bug"

    def find_issues(self) -> List[TypeCheckingIssue]:
        result = code_check_all()

        if result.success:
            return []
        else:
            issue = TypeCheckingIssue(result)
            issue.label = result.stderr if result.stderr else result.stdout
            issue.fixes = []
            return [issue]
