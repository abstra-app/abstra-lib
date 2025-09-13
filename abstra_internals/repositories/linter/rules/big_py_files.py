from pathlib import Path
from typing import List

from abstra_internals.repositories.linter.models import LinterIssue, LinterRule
from abstra_internals.repositories.project.project import LocalProjectRepository

# Constant to make it easy to change the line limit
MAX_LINES_THRESHOLD = 500


class BigPyFileFound(LinterIssue):
    def __init__(self, file_path: Path, line_count: int):
        self.label = f"File {file_path.name} has {line_count} lines (limit: {MAX_LINES_THRESHOLD}). Consider splitting this file into multiple smaller files organized by responsibilities to improve code maintainability."
        self.fixes = []  # No automatic fix available for this type of issue


class BigPyFiles(LinterRule):
    label = "Large Python files"
    type = "info"

    def find_issues(self) -> List[LinterIssue]:
        project = LocalProjectRepository().load()
        issues = []

        # Check all Python files in the project
        for py_file in project.iter_py_files():
            try:
                if py_file.exists() and py_file.is_file():
                    # Count the number of lines in the file
                    with open(py_file, "r", encoding="utf-8") as f:
                        line_count = sum(1 for _ in f)

                    # If it exceeds the limit, add an issue
                    if line_count > MAX_LINES_THRESHOLD:
                        issues.append(BigPyFileFound(py_file, line_count))
            except (UnicodeDecodeError, OSError):
                # Ignore files that cannot be read as text
                continue

        return issues
