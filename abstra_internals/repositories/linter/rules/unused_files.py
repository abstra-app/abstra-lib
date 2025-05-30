from pathlib import Path
from typing import List

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.repositories.project.project import (
    LocalProjectRepository,
)
from abstra_internals.settings import Settings
from abstra_internals.utils.file import traverse_code
from abstra_internals.utils.paths import get_relative_path


class DeleteFile(LinterFix):
    label = "Delete file"
    description = "Delete the unused file"
    file: Path

    def __init__(self, file: Path) -> None:
        self.file = file

    def fix(self):
        if self.file.exists():
            self.file.unlink()
        else:
            raise Exception(f"File {self.file} does not exist")


class UnusedFileFound(LinterIssue):
    def __init__(self, relative_path: Path, absolute_path: Path) -> None:
        self.label = f"The file {relative_path} is not used by any stage"
        self.fixes = [DeleteFile(absolute_path)]


class UnusedFiles(LinterRule):
    label = "There are files that are not used by any stage"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        project = LocalProjectRepository().load()
        issues = []

        file_paths = set()
        for form in project.forms:
            file_paths.add(form.file_path)
        for hook in project.hooks:
            file_paths.add(hook.file_path)
        for job in project.jobs:
            file_paths.add(job.file_path)
        for script in project.scripts:
            file_paths.add(script.file_path)

        for file in file_paths:
            for path in traverse_code(file):
                file_paths.add(path)

        all_py_files = set()
        for entrypoint in project.iter_py_files():
            all_py_files.add(entrypoint)

        if not all_py_files.issubset(file_paths):
            for path in all_py_files - file_paths:
                relative_path = get_relative_path(path, Settings.root_path)
                issues.append(UnusedFileFound(relative_path, path))

        return issues
