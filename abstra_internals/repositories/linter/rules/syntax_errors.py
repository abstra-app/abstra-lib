import webbrowser
from pathlib import Path
from typing import List

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.repositories.project.project import LocalProjectRepository
from abstra_internals.utils.file import silent_traverse_code


class OpenBrokenFile(LinterFix):
    file: Path

    def __init__(self, file: Path) -> None:
        self.label = f"Open {file}"
        self.file = file

    def fix(self):
        webbrowser.open(self.file.absolute().as_uri())


class SyntaxErrorFound(LinterIssue):
    def __init__(self, error: SyntaxError) -> None:
        self.label = str(error)
        if error.filename is not None:
            self.fixes = [OpenBrokenFile(Path(error.filename))]


class SyntaxErrors(LinterRule):
    label = "Syntax errors"
    type = "bug"
    error = None

    def find_issues(self) -> List[LinterIssue]:
        project = LocalProjectRepository().load()
        for entrypoint in project.iter_entrypoints():
            try:
                for _ in silent_traverse_code(entrypoint, raise_on_syntax_errors=True):
                    pass
            except SyntaxError as e:
                self.error = e
                self.error.filename = str(entrypoint)
                return [SyntaxErrorFound(e)]
        return []
