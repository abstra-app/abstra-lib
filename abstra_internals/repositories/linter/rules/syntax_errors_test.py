from pathlib import Path

from abstra_internals.repositories.linter.rules.syntax_errors import SyntaxErrors
from tests.fixtures import BaseTest


class SyntaxErrorsTest(BaseTest):
    def test_syntax_errors_valid_default(self):
        rule = SyntaxErrors()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_syntax_errors_valid_empty_file(self):
        script = self.controller.create_script("New script", "script.py")
        script.file_path.touch()
        rule = SyntaxErrors()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_syntax_errors_valid_with_content(self):
        script = self.controller.create_script("New script", "script.py")
        script.file_path.write_text("print('hello world')")
        rule = SyntaxErrors()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_syntax_errors_invalid_with_syntax_error(self):
        script = self.controller.create_script("New script", "script.py")
        script.file_path.write_text("print('hello world'")
        rule = SyntaxErrors()
        self.assertEqual(len(rule.find_issues()), 1)
        assert rule.error is not None
        assert rule.error.filename is not None
        self.assertEqual(Path(script.file).name, Path(rule.error.filename).name)
