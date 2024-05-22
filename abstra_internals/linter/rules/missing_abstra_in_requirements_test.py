from unittest import TestCase

import pkg_resources
from pkg_resources import get_distribution as gd

from abstra_internals.linter.rules.missing_abstra_in_requirements import (
    AbstraVersionInRequirementsIsBehindInstalled,
    MissingAbstraInRequirements,
)
from abstra_internals.server.controller.main import MainController
from tests.fixtures import clear_dir, init_dir


def mock_get_distribution(name):
    if name == "abstra":
        return pkg_resources.Distribution(project_name="abstra", version="1.0.0")
    else:
        return gd(name)


pkg_resources.get_distribution = mock_get_distribution


class MissingAbstraInRequirementsTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_missing_abstra_in_requirements_valid_default(self):
        MainController()
        rule = MissingAbstraInRequirements()
        self.assertEqual(len(rule.find_issues()), 0)

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
