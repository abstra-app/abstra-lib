from abstra_internals.repositories.linter.rules.big_py_files import (
    MAX_LINES_THRESHOLD,
    BigPyFiles,
)
from tests.fixtures import BaseTest


class BigPyFilesTest(BaseTest):
    def test_big_py_files_valid_small_file(self):
        """Tests that small files don't generate issues"""
        # Create a small file
        script = self.controller.create_tasklet("Small script", "small_script.py")
        script.file_path.write_text("print('hello world')\n" * 10)  # 10 lines

        rule = BigPyFiles()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)

    def test_big_py_files_valid_threshold_file(self):
        """Tests that files exactly at the limit don't generate issues"""
        script = self.controller.create_tasklet(
            "Threshold script", "threshold_script.py"
        )
        script.file_path.write_text(
            "print('line')\n" * MAX_LINES_THRESHOLD
        )  # Exactly at the limit

        rule = BigPyFiles()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)

    def test_big_py_files_invalid_large_file(self):
        """Tests that large files generate issues"""
        script = self.controller.create_tasklet("Large script", "large_script.py")
        # Create a file with more lines than the limit
        script.file_path.write_text("print('line')\n" * (MAX_LINES_THRESHOLD + 50))

        rule = BigPyFiles()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)

        issue = issues[0]
        self.assertIn("large_script.py", issue.label)
        self.assertIn(str(MAX_LINES_THRESHOLD + 50), issue.label)
        self.assertIn("lines", issue.label)
        self.assertIn("responsibilities", issue.label)

    def test_big_py_files_multiple_files(self):
        """Tests behavior with multiple files"""
        # Small file
        small_script = self.controller.create_tasklet("Small script", "small.py")
        small_script.file_path.write_text("print('small')\n" * 10)

        # Large file
        large_script = self.controller.create_tasklet("Large script", "large.py")
        large_script.file_path.write_text(
            "print('large')\n" * (MAX_LINES_THRESHOLD + 100)
        )

        # Another large file
        another_large_script = self.controller.create_tasklet(
            "Another large", "another_large.py"
        )
        another_large_script.file_path.write_text(
            "print('another')\n" * (MAX_LINES_THRESHOLD + 200)
        )

        rule = BigPyFiles()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 2)  # Only the 2 large files

        # Check if the file names are in the issues
        issue_labels = [issue.label for issue in issues]
        self.assertTrue(any("large.py" in label for label in issue_labels))
        self.assertTrue(any("another_large.py" in label for label in issue_labels))

    def test_big_py_files_empty_file(self):
        """Tests behavior with empty file"""
        script = self.controller.create_tasklet("Empty script", "empty.py")
        script.file_path.touch()  # Create empty file

        rule = BigPyFiles()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)

    def test_big_py_files_nonexistent_file(self):
        """Tests behavior when file doesn't exist"""
        script = self.controller.create_tasklet("Nonexistent script", "nonexistent.py")
        script.file_path.unlink()  # Remove the file

        rule = BigPyFiles()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)  # Should not generate error or issue
