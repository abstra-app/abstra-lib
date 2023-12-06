from ..linter import LinterRule, LinterFix, LinterIssue
from ...repositories.requirements import (
    RequirementsRepository,
    RequirementRecommendation,
)
from typing import List, Sequence


class AddMissingPackagesToRequirements(LinterFix):
    def __init__(self, requirement_recommendation: RequirementRecommendation):
        self.requirement_recommendation = requirement_recommendation

    def make_label(self):
        return f"Add {self.requirement_recommendation.requirement.name} to requirements.txt"

    def fix(self):
        requirements = RequirementsRepository.load()
        requirement_name = self.requirement_recommendation.requirement.name
        requirement_version = self.requirement_recommendation.requirement.version
        requirements.add(requirement_name, requirement_version)
        RequirementsRepository.save(requirements)


class PackageNotInRequirementsFound(LinterIssue):
    def __init__(self, recommendation: RequirementRecommendation) -> None:
        self.label = "\n".join(
            [
                f"You're importing the {recommendation.requirement.name}.",
                f"It is being used in {recommendation.reason_file}:{recommendation.reason_line}:",
                f"{recommendation.reason_code}",
                f"But it's not in your requirements.txt file.",
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
