from typing import Sequence

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.services.requirements import (
    RequirementRecommendation,
    RequirementsRepository,
    requirement_to_dict,
)


class AddMissingPackagesToRequirements(LinterFix):
    def __init__(self, requirement_recommendation: RequirementRecommendation):
        self.requirement_recommendation = requirement_recommendation

    def make_label(self):
        return f"Add {self.requirement_recommendation.requirement.name} to requirements.txt"

    def fix(self):
        requirements = RequirementsRepository.load()
        requirement_name = self.requirement_recommendation.requirement.name
        requirement_dict = requirement_to_dict(
            self.requirement_recommendation.requirement
        )

        # Extract exact version from specifiers if available
        requirement_version = None
        for spec in requirement_dict.get("specifiers", []):
            if spec["operator"] == "==":
                requirement_version = spec["version"]
                break

        requirements.add(requirement_name, requirement_version)
        RequirementsRepository.save(requirements)


class PackageNotInRequirementsFound(LinterIssue):
    def __init__(self, recommendation: RequirementRecommendation) -> None:
        self.label = "\n".join(
            [
                f"You're importing the {recommendation.requirement.name}.",
                f"It is being used in {recommendation.reason_file}:{recommendation.reason_line}:",
                f"{recommendation.reason_code}",
                "But it's not in your requirements.txt file.",
            ]
        )
        self.fixes = [AddMissingPackagesToRequirements(recommendation)]


class MissingPackagesInRequirements(LinterRule):
    label = "All imported packages should be in requirements.txt"
    type = "bug"

    def find_issues(self) -> Sequence[LinterIssue]:
        recommendations = RequirementsRepository.get_recommendation()
        issues = [
            PackageNotInRequirementsFound(recommendation)
            for recommendation in recommendations
        ]
        return issues
