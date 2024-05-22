from unittest import TestCase

from abstra_internals.linter.rules.missing_packages_in_requirements import (
    MissingPackagesInRequirements,
)
from abstra_internals.server.controller.main import MainController
from tests.fixtures import clear_dir, init_dir


class MissingPackagesInRequirementsTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_missing_packages_in_requirements_valid_default(self):
        requirements_file = self.root / "requirements.txt"
        self.assertFalse(requirements_file.exists())
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_packages_in_requirements_valid_with_packages(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        requirements_file.write_text("pandas==1.0.0")
        constroller = MainController()
        script = constroller.create_script("New script", "script.py")
        code = "import pandas"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_packages_in_requirements_valid_with_packages_using_from_syntax(
        self,
    ):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        requirements_file.write_text("pandas==1.0.0")
        constroller = MainController()
        script = constroller.create_script("New script", "script.py")
        code = "from pandas import foo"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_packages_in_requirements_invalid_requirements_file(self):
        constroller = MainController()
        script = constroller.create_script("New script", "script.py")
        code = "import pandas"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_packages_in_requirements_invalid_requirements_file_using_from_syntax(
        self,
    ):
        constroller = MainController()
        script = constroller.create_script("New script", "script.py")
        code = "from pandas import foo"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_packages_in_requirements_invalid_missing_package(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        constroller = MainController()
        script = constroller.create_script("New script", "script.py")
        code = "import pandas"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_packages_with_submodule_import(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        constroller = MainController()
        script = constroller.create_script("New script", "script.py")
        code = "import pandas.plotting"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_package_with_submodule_using_from_syntax(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        constroller = MainController()
        script = constroller.create_script("New script", "script.py")
        code = "from pandas.plotting import foo"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)
