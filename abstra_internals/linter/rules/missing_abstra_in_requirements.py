from typing import List
from ...repositories.requirements import RequirementsRepository
from pkg_resources import get_distribution
from ..linter import LinterRule, LinterFix, LinterIssue


class AddAbstraToRequirements(LinterFix):
    label = "Add abstra to requirements.txt"

    def fix(self):
        requirements = RequirementsRepository.load()
        requirements.add("abstra", get_distribution("abstra").version)
        RequirementsRepository.save(requirements)


class AbstraNotInRequirementsFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "Abstra is not in your requirements.txt file."
        self.fixes = [AddAbstraToRequirements()]


class MissingAbstraInRequirements(LinterRule):
    label = "Abstra should be in your requirements.txt"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        requirements = RequirementsRepository.load()
        if not requirements.has("abstra", get_distribution("abstra").version):
            return [AbstraNotInRequirementsFound()]
        else:
            return []
