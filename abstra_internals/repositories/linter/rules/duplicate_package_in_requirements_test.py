from abstra_internals.repositories.linter.rules.duplicate_package_in_requirements import (
    DuplicatePackagesInRequirements,
)
from abstra_internals.services.requirements import RequirementsRepository
from tests.fixtures import BaseTest


class TestDuplicatePackagesInRequirements(BaseTest):
    def test_default_valid(self):
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

    def test_valid_with_no_requirements_file(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.unlink()
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

    def test_valid_with_no_duplicates(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("abstra==1.0.0\nflask==1.0.0")
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

    def test_invalid_with_equal_duplicates(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("abstra==1.0.0\nabstra==1.0.0")
        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 1)
        self.assertEqual(len(issues[0].fixes), 1)

        issues[0].fixes[0].fix()

        issues = DuplicatePackagesInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

    def test_invalid_with_distinct_versions_choose_first(self):
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
