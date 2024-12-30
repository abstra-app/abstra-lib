from pathlib import Path
from pkgutil import iter_modules

from abstra_internals.linter.linter import LinterFix, LinterIssue, LinterRule
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.settings import Settings


class AddPreffix(LinterFix):
    label = "Fix conflicting name"
    preffix = "util_"

    def __init__(self, file: Path):
        self.file = file

    def fix(self):
        new_file = self.file.parent / f"{self.preffix}{self.file.name}"

        self.file.rename(new_file)

        project = ProjectRepository.load()

        for stage in project.workflow_stages:
            if stage.file_path == self.file:
                project.update_stage(stage, dict(file=str(new_file.name)))

        ProjectRepository.save(project)


class ConflictingNameIssue(LinterIssue):
    type = "bug"
    fixes = []

    def __init__(self, file: Path):
        self.label = f"The name of the file {file.name} is in conflict with an internal reserved name. This can cause unexpected behavior. You can either change it manually in the Editor or use the 'Fix conflicting name' button."
        self.fixes = [AddPreffix(file)]


def reserved_names():
    return [
        m.name
        for m in iter_modules()
        if m not in list(iter_modules([str(Settings.root_path)]))
    ]


class ConflictingName(LinterRule):
    label = "Conflicting path"
    type = "bug"

    def find_issues(self):
        root = Settings.root_path
        project_py_files = set(root.glob("*.py"))
        _reserved_names = set(root / (n + ".py") for n in reserved_names())

        issues = [
            ConflictingNameIssue(file)
            for file in _reserved_names.intersection(project_py_files)
        ]

        return issues
