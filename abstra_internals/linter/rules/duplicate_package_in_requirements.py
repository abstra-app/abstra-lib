from typing import List, Optional, Set
from ...repositories.requirements import RequirementsRepository
import pkg_resources
from ..linter import LinterRule, LinterFix, LinterIssue


class MergeDuplicatePackages(LinterFix):
    pkg_version: Optional[str]
    pkg_name: str

    def __init__(self, pkg_name: str, pkg_version: Optional[str]) -> None:
        super().__init__()
        self.pkg_version = pkg_version
        self.pkg_name = pkg_name
        version_name = pkg_version if pkg_version is not None else "latest"
        self.label = f"Choose {version_name}"

    def fix(self):
        requirements = RequirementsRepository.load()
        requirements.ensure(self.pkg_name, self.pkg_version)
        requirements.delete_duplicates(self.pkg_name, self.pkg_version)
        RequirementsRepository.save(requirements)

    def __hash__(self) -> int:
        return hash((self.pkg_name, self.pkg_version))


class DuplicatePackagesInRequirementsFound(LinterIssue):
    type = "bug"

    def __init__(self, name: str, versions: List[Optional[str]]) -> None:
        self.label = f"Duplicate {name} found in requirements.txt"
        fixes = [
            MergeDuplicatePackages(pkg_name=name, pkg_version=version)
            for version in versions
        ]
        self.fixes = list(
            dict.fromkeys(fixes).keys()
        )  # remove duplicates keeping order


class DuplicatePackagesInRequirements(LinterRule):
    label = "Duplicate package in requirements.txt"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        requirements = RequirementsRepository.load()
        duplicates = requirements.get_duplicates()
        issues = []
        for name, versions in duplicates.items():
            issues.append(
                DuplicatePackagesInRequirementsFound(
                    name=name, versions=[r.version for r in versions]
                )
            )
        return issues
