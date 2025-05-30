import pkg_resources
from pkg_resources import get_distribution as gd

from abstra_internals.repositories.linter.rules.psycopg2 import (
    Psycopg2FoundWithoutBinary,
    Psycopg2MustBeBinary,
)
from tests.fixtures import BaseTest


def mock_get_distribution(name):
    if name == "abstra":
        return pkg_resources.Distribution(project_name="abstra", version="1.0.0")
    else:
        return gd(name)


class MissingAbstraInRequirementsTest(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.old_get_distribution = pkg_resources.get_distribution
        pkg_resources.get_distribution = mock_get_distribution

    def tearDown(self) -> None:
        pkg_resources.get_distribution = self.old_get_distribution
        super().tearDown()

    def test_psycopg2_valid(self):
        rule = Psycopg2MustBeBinary()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("psycopg2-binary")
        self.assertEqual(len(rule.find_issues()), 0)

    def test_psycopg2_invalid(self):
        rule = Psycopg2MustBeBinary()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("psycopg2")
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)
        self.assertIsInstance(issues[0], Psycopg2FoundWithoutBinary)
