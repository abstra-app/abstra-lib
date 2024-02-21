from unittest import TestCase
from tests.fixtures import init_dir, clear_dir
from ...server.controller import MainController
from .duplicate_package_in_requirements import DuplicatePackagesInRequirements
from ...repositories.requirements import RequirementsRepository


class TestDuplicatePackagesInRequirements(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_default_valid(self):
        MainController()
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

    def test_valid_with_no_requirements_file(self):
        MainController()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.unlink()
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

    def test_valid_with_no_duplicates(self):
        MainController()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("abstra==1.0.0\nflask==1.0.0")
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

    def test_invalid_with_equal_duplicates(self):
        MainController()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("abstra==1.0.0\nabstra==1.0.0")
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 1)
        self.assertEqual(len(issues[0].fixes), 1)

        issues[0].fixes[0].fix()

        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

    def test_invalid_with_distinct_versions_choose_first(self):
        MainController()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("abstra==1.0.0\nabstra==2.0.0")
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 1)
        self.assertEqual(len(issues[0].fixes), 2)

        issues[0].fixes[1].fix()

        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

        requirements = RequirementsRepository.load()
        self.assertEqual(len(requirements.libraries), 1)
        self.assertEqual(requirements.libraries[0].name, "abstra")
        self.assertEqual(requirements.libraries[0].version, "1.0.0")

    def test_invalid_with_distinct_versions_choose_second(self):
        MainController()
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("abstra==1.0.0\nabstra==2.0.0")
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 1)
        self.assertEqual(len(issues[0].fixes), 2)

        issues[0].fixes[0].fix()

        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

        requirements = RequirementsRepository.load()
        self.assertEqual(len(requirements.libraries), 1)
        self.assertEqual(requirements.libraries[0].name, "abstra")
        self.assertEqual(requirements.libraries[0].version, "2.0.0")
