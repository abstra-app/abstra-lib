from importlib.metadata import distribution
from unittest.mock import patch

from abstra_internals.repositories.linter.rules.psycopg2 import (
    Psycopg2FoundWithoutBinary,
    Psycopg2MustBeBinary,
)
from tests.fixtures import BaseTest


class MockDistribution:
    def __init__(self, name, version):
        self.name = name
        self.version = version


def mock_distribution(name):
    if name == "abstra":
        return MockDistribution("abstra", "1.0.0")
    else:
        return distribution(name)


class Psycopg2Test(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.patcher = patch(
            "abstra_internals.utils.packages.distribution",
            side_effect=mock_distribution,
        )
        self.patcher.start()

    def tearDown(self) -> None:
        self.patcher.stop()
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
