from typing import List, Optional

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.services.requirements import (
    RequirementsRepository,
    requirement_to_dict,
)


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
            # Extract exact versions from specifiers
            version_list = []
            for r in versions:
                req_dict = requirement_to_dict(r)
                exact_version = None
                for spec in req_dict.get("specifiers", []):
                    if spec["operator"] == "==":
                        exact_version = spec["version"]
                        break
                version_list.append(exact_version)

            issues.append(
                DuplicatePackagesInRequirementsFound(name=name, versions=version_list)
            )
        return issues
