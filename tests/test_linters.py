from unittest import TestCase
from .fixtures import init_dir, clear_dir
from abstra_internals.server.controller import MainController
from abstra_internals.linter.rules.no_env_in_bundle import NoEnvInBundle
from abstra_internals.linter.rules.no_syntax_errors import NoSyntaxErrors
from abstra_internals.linter.rules.no_missing_packages_in_requirements import (
    NoMissingPackagesInRequirements,
)
from pathlib import Path


class TestLinters(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_no_env_on_bundle_valid_default(self):
        rule = NoEnvInBundle()
        env_file = self.root / ".env"
        self.assertFalse(env_file.exists())
        self.assertTrue(rule.is_valid())

    def test_no_env_on_bundle_valid_with_env(self):
        rule = NoEnvInBundle()
        env_file = self.root / ".env"
        abstraignore_file = self.root / ".abstraignore"
        abstraignore_file.write_text(".env")
        env_file.touch()
        self.assertTrue(rule.is_valid())

    def tet_no_env_on_bundle_invalid_without_abstraignore_file(self):
        env_file = self.root / ".env"
        env_file.touch()
        rule = NoEnvInBundle()
        self.assertFalse(rule.is_valid())

    def tet_no_env_on_bundle_invalid_with_abstraignore_file(self):
        env_file = self.root / ".env"
        env_file.touch()
        abstraignore_file = self.root / ".abstraignore"
        abstraignore_file.write_text(".env")
        rule = NoEnvInBundle()
        self.assertFalse(rule.is_valid())

    def test_no_env_on_bundle_fix(self):
        env_file = self.root / ".env"
        env_file.touch()
        rule = NoEnvInBundle()
        self.assertFalse(rule.is_valid())
        rule.fixes[0].fix()
        self.assertTrue(rule.is_valid())
        abstraignore_file = self.root / ".abstraignore"
        self.assertTrue(abstraignore_file.exists())
        with abstraignore_file.open("r") as file:
            content = file.read()
            self.assertTrue(".env" in content)

    def test_no_missing_packages_in_requirements_valid_default(self):
        requirements_file = self.root / "requirements.txt"
        self.assertFalse(requirements_file.exists())
        rule = NoMissingPackagesInRequirements()
        self.assertTrue(rule.is_valid())

    def test_no_missing_packages_in_requirements_valid_with_packages(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        requirements_file.write_text("pandas==1.0.0")
        constroller = MainController()
        script = constroller.create_script()
        code = "import pandas"
        script.file_path.write_text(code)
        rule = NoMissingPackagesInRequirements()
        self.assertTrue(rule.is_valid())

    def test_no_missing_packages_in_requirements_invalid_no_requirements_file(self):
        constroller = MainController()
        script = constroller.create_script()
        code = "import pandas"
        script.file_path.write_text(code)
        rule = NoMissingPackagesInRequirements()
        self.assertFalse(rule.is_valid())

    def test_no_missing_packages_in_requirements_invalid_missing_package(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        constroller = MainController()
        script = constroller.create_script()
        code = "import pandas"
        script.file_path.write_text(code)
        rule = NoMissingPackagesInRequirements()
        self.assertFalse(rule.is_valid())

    def test_no_syntax_errors_valid_default(self):
        rule = NoSyntaxErrors()
        self.assertTrue(rule.is_valid())

    def test_no_syntax_errors_valid_empty_file(self):
        script = MainController().create_script()
        script.file_path.touch()
        rule = NoSyntaxErrors()
        self.assertTrue(rule.is_valid())

    def test_no_syntax_errors_valid_with_content(self):
        script = MainController().create_script()
        script.file_path.write_text("print('hello world')")
        rule = NoSyntaxErrors()
        self.assertTrue(rule.is_valid())

    def test_no_syntax_errors_invalid_with_syntax_error(self):
        script = MainController().create_script()
        script.file_path.write_text("print('hello world'")
        rule = NoSyntaxErrors()
        self.assertFalse(rule.is_valid())
        assert rule.error is not None
        assert rule.error.filename is not None
        self.assertEqual(Path(script.file).name, Path(rule.error.filename).name)
