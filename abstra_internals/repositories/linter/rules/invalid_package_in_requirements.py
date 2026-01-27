from typing import List, Sequence

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.services.pypi_cache import PyPIVerificationCache
from abstra_internals.services.requirements import RequirementsRepository


class RemoveInvalidPackage(LinterFix):
    def __init__(self, package_name: str):
        self.package_name = package_name
        self.label = f"Remove {package_name} from requirements.txt"

    def fix(self):
        requirements = RequirementsRepository.load()
        requirements.delete(self.package_name)
        RequirementsRepository.save(requirements)


class InvalidPackageFound(LinterIssue):
    def __init__(self, package_name: str) -> None:
        self.label = (
            f"Package '{package_name}' was not found on PyPI. "
            f"This may cause the build to fail. "
            f"Please check if the package name is correct."
        )
        self.fixes = [RemoveInvalidPackage(package_name)]


class InvalidPackageInRequirements(LinterRule):
    label = "All packages in requirements.txt should exist on PyPI"
    type = "bug"

    def find_issues(self) -> Sequence[LinterIssue]:
        requirements = RequirementsRepository.load()
        issues: List[LinterIssue] = []

        for lib in requirements.libraries:
            # Skip packages with URLs (they're not on PyPI)
            if lib.url:
                continue

            package_name = lib.name

            if not lib.name:
                continue

            if not PyPIVerificationCache.verify_package_exists(package_name):
                issues.append(InvalidPackageFound(package_name))

        return issues
