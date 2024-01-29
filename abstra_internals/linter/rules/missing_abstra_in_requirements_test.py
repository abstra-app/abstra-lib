from unittest import TestCase

from pkg_resources import get_distribution
from tests.fixtures import clear_dir, init_dir

from ...server.controller import MainController
from .missing_abstra_in_requirements import MissingAbstraInRequirements


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
        requirements_txt.write_text(f"abstra=={get_distribution('abstra').version}")
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_abstra_in_requirements_invalid_with_different_version(self):
        rule = MissingAbstraInRequirements()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text(f"abstra==0.0.1")
        self.assertEqual(len(rule.find_issues()), 1)

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
            self.assertTrue(f"abstra=={get_distribution('abstra').version}" in content)
