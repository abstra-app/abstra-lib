from unittest import TestCase
from .fixtures import init_dir, clear_dir
from abstra_internals.server.controller import MainController
from abstra_internals.linter.rules.env_in_bundle import EnvInBundle
from abstra_internals.linter.rules.syntax_errors import SyntaxErrors
from abstra_internals.linter.rules.missing_packages_in_requirements import (
    MissingPackagesInRequirements,
)
from abstra_internals.linter.rules.missing_entrypoint import (
    MissingEntrypoint,
    AddEntrypoint,
)
from pathlib import Path


class TestLinters(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_env_on_bundle_valid_default(self):
        rule = EnvInBundle()
        env_file = self.root / ".env"
        self.assertFalse(env_file.exists())
        self.assertTrue(rule.is_valid())

    def test_env_on_bundle_valid_with_env(self):
        rule = EnvInBundle()
        env_file = self.root / ".env"
        abstraignore_file = self.root / ".abstraignore"
        abstraignore_file.write_text(".env")
        env_file.touch()
        self.assertTrue(rule.is_valid())

    def tet_env_on_bundle_invalid_without_abstraignore_file(self):
        env_file = self.root / ".env"
        env_file.touch()
        rule = EnvInBundle()
        self.assertFalse(rule.is_valid())

    def tet_env_on_bundle_invalid_with_abstraignore_file(self):
        env_file = self.root / ".env"
        env_file.touch()
        abstraignore_file = self.root / ".abstraignore"
        abstraignore_file.write_text(".env")
        rule = EnvInBundle()
        self.assertFalse(rule.is_valid())

    def test_env_on_bundle_fix(self):
        env_file = self.root / ".env"
        env_file.touch()
        rule = EnvInBundle()
        self.assertFalse(rule.is_valid())
        rule.fixes[0].fix()
        self.assertTrue(rule.is_valid())
        abstraignore_file = self.root / ".abstraignore"
        self.assertTrue(abstraignore_file.exists())
        with abstraignore_file.open("r") as file:
            content = file.read()
            self.assertTrue(".env" in content)

    def test_missing_packages_in_requirements_valid_default(self):
        requirements_file = self.root / "requirements.txt"
        self.assertFalse(requirements_file.exists())
        rule = MissingPackagesInRequirements()
        self.assertTrue(rule.is_valid())

    def test_missing_packages_in_requirements_valid_with_packages(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        requirements_file.write_text("pandas==1.0.0")
        constroller = MainController()
        script = constroller.create_script()
        code = "import pandas"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertTrue(rule.is_valid())

    def test_missing_packages_in_requirements_invalid_requirements_file(self):
        constroller = MainController()
        script = constroller.create_script()
        code = "import pandas"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertFalse(rule.is_valid())

    def test_missing_packages_in_requirements_invalid_missing_package(self):
        requirements_file = self.root / "requirements.txt"
        requirements_file.touch()
        constroller = MainController()
        script = constroller.create_script()
        code = "import pandas"
        script.file_path.write_text(code)
        rule = MissingPackagesInRequirements()
        self.assertFalse(rule.is_valid())

    def test_syntax_errors_valid_default(self):
        rule = SyntaxErrors()
        self.assertTrue(rule.is_valid())

    def test_syntax_errors_valid_empty_file(self):
        script = MainController().create_script()
        script.file_path.touch()
        rule = SyntaxErrors()
        self.assertTrue(rule.is_valid())

    def test_syntax_errors_valid_with_content(self):
        script = MainController().create_script()
        script.file_path.write_text("print('hello world')")
        rule = SyntaxErrors()
        self.assertTrue(rule.is_valid())

    def test_syntax_errors_invalid_with_syntax_error(self):
        script = MainController().create_script()
        script.file_path.write_text("print('hello world'")
        rule = SyntaxErrors()
        self.assertFalse(rule.is_valid())
        assert rule.error is not None
        assert rule.error.filename is not None
        self.assertEqual(Path(script.file).name, Path(rule.error.filename).name)

    def test_missing_entrypoint_valid_default(self):
        rule = MissingEntrypoint()
        self.assertTrue(rule.is_valid())

    def test_missing_entrypoint_valid_with_entrypoint(self):
        controller = MainController()
        controller.create_script()
        controller.create_form()
        controller.create_hook()
        controller.create_job()
        rule = MissingEntrypoint()
        self.assertTrue(rule.is_valid())

    def test_missing_entrypoint_invalid_without_entrypoint(self):
        controller = MainController()
        script = controller.create_script()
        script.file_path.unlink()
        rule = MissingEntrypoint()
        self.assertFalse(rule.is_valid())

        self.assertEqual(rule.fixes, [AddEntrypoint(script)])

        rule.fixes[0].fix()

        self.assertTrue(rule.is_valid())
