from pathlib import Path
from unittest import TestCase

from abstra_internals.linter.rules.syntax_errors import SyntaxErrors
from abstra_internals.server.controller.main import MainController
from tests.fixtures import clear_dir, init_dir


class SyntaxErrorsTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

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
