from pathlib import Path
from unittest import TestCase
from pkg_resources import get_distribution

from .fixtures import init_dir, clear_dir

from abstra_internals.server.controller import MainController
from abstra_internals.linter.rules.env_in_bundle import EnvInBundle
from abstra_internals.linter.rules.syntax_errors import SyntaxErrors

from abstra_internals.linter.rules.missing_packages_in_requirements import (
    MissingPackagesInRequirements,
)

from abstra_internals.linter.rules.missing_abstra_in_requirements import (
    MissingAbstraInRequirements,
)

from abstra_internals.linter.rules.missing_entrypoint import (
    MissingEntrypoint,
    AddEntrypoint,
)


class TestLinters(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_env_on_bundle_valid_default(self):
        rule = EnvInBundle()
        env_file = self.root / ".env"
        self.assertFalse(env_file.exists())
        self.assertEqual(len(rule.find_issues()), 0)

    def test_env_on_bundle_valid_with_env(self):
        rule = EnvInBundle()
        env_file = self.root / ".env"
        abstraignore_file = self.root / ".abstraignore"
        abstraignore_file.write_text(".env")
        env_file.touch()
        self.assertEqual(len(rule.find_issues()), 0)

    def tet_env_on_bundle_invalid_without_abstraignore_file(self):
        env_file = self.root / ".env"
        env_file.touch()
        rule = EnvInBundle()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_env_on_bundle_invalid_with_abstraignore_file(self):
        env_file = self.root / ".env"
        env_file.touch()
        abstraignore_file = self.root / ".abstraignore"
        abstraignore_file.touch()
        rule = EnvInBundle()
        self.assertEqual(len(rule.find_issues()), 1)

    def test_env_on_bundle_fix(self):
        env_file = self.root / ".env"
        env_file.touch()
        rule = EnvInBundle()
        self.assertEqual(len(rule.find_issues()), 1)
        rule.find_issues()[0].fixes[0].fix()
        self.assertEqual(len(rule.find_issues()), 0)
        abstraignore_file = self.root / ".abstraignore"
        self.assertTrue(abstraignore_file.exists())
        with abstraignore_file.open("r") as file:
            content = file.read()
            self.assertTrue(".env" in content)

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

    def test_missing_packages_in_requirements_invalid_requirements_file(self):
        constroller = MainController()
        script = constroller.create_script("New script", "script.py")
        code = "import pandas"
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

    def test_syntax_errors_valid_default(self):
        rule = SyntaxErrors()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_syntax_errors_valid_empty_file(self):
        script = MainController().create_script("New script", "script.py")
        script.file_path.touch()
        rule = SyntaxErrors()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_syntax_errors_valid_with_content(self):
        script = MainController().create_script("New script", "script.py")
        script.file_path.write_text("print('hello world')")
        rule = SyntaxErrors()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_syntax_errors_invalid_with_syntax_error(self):
        script = MainController().create_script("New script", "script.py")
        script.file_path.write_text("print('hello world'")
        rule = SyntaxErrors()
        self.assertEqual(len(rule.find_issues()), 1)
        assert rule.error is not None
        assert rule.error.filename is not None
        self.assertEqual(Path(script.file).name, Path(rule.error.filename).name)

    def test_missing_entrypoint_valid_default(self):
        rule = MissingEntrypoint()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_entrypoint_valid_with_entrypoint(self):
        controller = MainController()
        controller.create_script("New script", "script.py")
        controller.create_form("New form", "form.py")
        controller.create_hook("New hook", "hook.py")
        controller.create_job("New job", "job.py")
        rule = MissingEntrypoint()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_entrypoint_invalid_without_entrypoint(self):
        controller = MainController()
        script = controller.create_script("New script", "script.py")
        script.file_path.unlink()
        rule = MissingEntrypoint()
        self.assertEqual(len(rule.find_issues()), 1)

        self.assertEqual(rule.find_issues()[0].fixes[0], AddEntrypoint(script))

        rule.find_issues()[0].fixes[0].fix()

        self.assertEqual(len(rule.find_issues()), 0)

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
