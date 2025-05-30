from typing import List

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.services.requirements import RequirementsRepository


class ReplacePsycopg2WithBinary(LinterFix):
    def __init__(self):
        self.label = "Replace psycopg2 with psycopg2-binary"

    def fix(self):
        requirements = RequirementsRepository.load()
        requirements.delete("psycopg2")
        requirements.ensure("psycopg2-binary")
        RequirementsRepository.save(requirements)


class Psycopg2FoundWithoutBinary(LinterIssue):
    def __init__(self):
        self.label = "The dependency psycopg2 must be replaced with psycopg2-binary"
        self.fixes = [ReplacePsycopg2WithBinary()]


class Psycopg2MustBeBinary(LinterRule):
    label: str = "The dependency psycopg2 must be in its binary form"
    type: str = "error"

    def find_issues(self) -> List[LinterIssue]:
        requirements = RequirementsRepository.load()
        if requirements.has("psycopg2"):
            return [Psycopg2FoundWithoutBinary()]
        return []
