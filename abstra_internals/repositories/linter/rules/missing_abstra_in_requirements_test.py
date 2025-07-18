from importlib.metadata import distribution
from unittest.mock import patch

from abstra_internals.repositories.linter.rules.missing_abstra_in_requirements import (
    AbstraVersionInRequirementsIsBehindInstalled,
    MissingAbstraInRequirements,
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


class MissingAbstraInRequirementsTest(BaseTest):
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

    def test_missing_abstra_in_requirements_valid_with_requirements(self):
        rule = MissingAbstraInRequirements()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("abstra==1.0.0")
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_abstra_in_requirements_invalid_with_different_version(self):
        rule = MissingAbstraInRequirements()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("abstra==0.0.1")
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)
        self.assertIsInstance(issues[0], AbstraVersionInRequirementsIsBehindInstalled)

    def test_missing_abstra_in_requirements_invalid_without_requirements(self):
        rule = MissingAbstraInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_abstra_in_requirements_fix(self):
        rule = MissingAbstraInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)
        rule.find_issues()[0].fixes[0].fix()
        self.assertEqual(len(rule.find_issues()), 0)
        requirements_txt = self.root / "requirements.txt"
        self.assertTrue(requirements_txt.exists())
        with requirements_txt.open("r") as file:
            content = file.read()
            self.assertTrue("abstra==1.0.0" in content)
