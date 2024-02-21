from typing import List

from ...utils import packages as pkg_utils
from ..linter import LinterRule, LinterFix, LinterIssue
from ...repositories.requirements import RequirementsRepository


class AddAbstraToRequirements(LinterFix):
    label = "Add abstra to requirements.txt"

    def fix(self):
        requirements = RequirementsRepository.load()
        local_version = pkg_utils.get_local_package_version()

        requirements.ensure("abstra", str(local_version))
        RequirementsRepository.save(requirements)


class SetAbstraVersionInRequirements(LinterFix):
    label = "Set abstra version in requirements.txt"

    def fix(self):
        requirements = RequirementsRepository.load()
        local_version = pkg_utils.get_local_package_version()

        requirements.ensure("abstra", str(local_version))
        RequirementsRepository.save(requirements)


class AbstraNotInRequirementsFound(LinterIssue):
    def __init__(self) -> None:
        self.label = "Abstra is not in your requirements.txt file."
        self.fixes = [AddAbstraToRequirements()]


class AbstraVersionNotDefined(LinterIssue):
    def __init__(self) -> None:
        self.label = (
            "You have abstra in requirements.txt, but the version is not defined."
        )
        self.fixes = [SetAbstraVersionInRequirements()]


class AbstraVersionInRequirementsIsAheadOfInstalled(LinterIssue):
    def __init__(self) -> None:
        self.label = "The version of abstra in your requirements.txt is ahead of the installed version. Close this server and run 'pip install -r requirements.txt' to fix this."
        self.fixes = []


class AbstraVersionInRequirementsIsBehindInstalled(LinterIssue):
    def __init__(self) -> None:
        self.label = "The version of abstra in your requirements.txt is behind the installed version. Update your requirements.txt to fix this."
        self.fixes = [SetAbstraVersionInRequirements()]


class MissingAbstraInRequirements(LinterRule):
    label = "Abstra should be in your requirements.txt"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        requirements = RequirementsRepository.load()
        local_version = pkg_utils.get_local_package_version()

        if not requirements.has("abstra"):
            return [AbstraNotInRequirementsFound()]

        if requirements.has("abstra", str(local_version)):
            return []

        requirements_version = requirements.get("abstra")
        if requirements_version is None:
            return [AbstraVersionNotDefined()]

        if pkg_utils.parse_version(requirements_version) > local_version:
            return [AbstraVersionInRequirementsIsAheadOfInstalled()]
        else:
            return [AbstraVersionInRequirementsIsBehindInstalled()]
