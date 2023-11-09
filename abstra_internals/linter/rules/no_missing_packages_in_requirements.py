from ..linter import LinterRule, LinterFix
from ...repositories.requirements import RequirementsRepository


class AddMissingPackagesToRequirements(LinterFix):
    label = "Add missing packages to requirements.txt"
    description = "\n".join(
        [
            "Add the missing packages to the requirements.txt file.",
            "If the requirements.txt file does not exist, it will be created.",
        ]
    )

    def fix(self):
        requirements = RequirementsRepository.load()
        for package in RequirementsRepository.get_recommendation():
            requirements.add(package.name, package.version)
        RequirementsRepository.save(requirements)


class NoMissingPackagesInRequirements(LinterRule):
    label = "Missing packages in requirements.txt"
    type = "bug"
    description = "\n".join(
        [
            "The requirements.txt file should not contain packages that are being used in the project.",
        ]
    )
    fixes = [AddMissingPackagesToRequirements()]

    def is_valid(self) -> bool:
        return len(RequirementsRepository.get_recommendation()) == 0
