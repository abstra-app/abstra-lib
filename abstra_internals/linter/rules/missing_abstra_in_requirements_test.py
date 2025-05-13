import pkg_resources
from pkg_resources import get_distribution as gd

from abstra_internals.linter.rules.missing_abstra_in_requirements import (
    AbstraVersionInRequirementsIsBehindInstalled,
    MissingAbstraInRequirements,
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
