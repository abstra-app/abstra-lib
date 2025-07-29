from abstra_internals.repositories.linter.rules.missing_packages_in_requirements import (
    MissingPackagesInRequirements,
)
from tests.fixtures import BaseTest


class MissingPackagesInRequirementsTest(BaseTest):
    def test_missing_packages_in_requirements_valid_default(self):
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_packages_in_requirements_valid_with_packages(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        requirements_file.write_text("pandas==1.0.0")
        script = self.controller.create_tasklet("New script", "script.py")
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
        script = self.controller.create_tasklet("New script", "script.py")
        code = "from pandas import foo"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_packages_in_requirements_invalid_requirements_file(self):
        script = self.controller.create_tasklet("New script", "script.py")
        code = "import pandas"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_packages_in_requirements_invalid_requirements_file_using_from_syntax(
        self,
    ):
        script = self.controller.create_tasklet("New script", "script.py")
        code = "from pandas import foo"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_packages_in_requirements_invalid_missing_package(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        script = self.controller.create_tasklet("New script", "script.py")
        code = "import pandas"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_packages_with_submodule_import(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        script = self.controller.create_tasklet("New script", "script.py")
        code = "import pandas.plotting"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_missing_package_with_submodule_using_from_syntax(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        script = self.controller.create_tasklet("New script", "script.py")
        code = "from pandas.plotting import foo"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertEqual(len(rule.find_issues()), 1)
