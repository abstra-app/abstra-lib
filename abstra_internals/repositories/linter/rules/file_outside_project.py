import shutil
from pathlib import Path
from typing import List

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.repositories.project.project import (
    LocalProjectRepository,
    Project,
    StageWithFile,
)
from abstra_internals.settings import Settings


class MoveFileToProjectRoot(LinterFix):
    label = "Move file to project root"

    def __init__(
        self,
        stage: StageWithFile,
        project: Project,
        project_repository: LocalProjectRepository,
    ):
        self.stage = stage
        self.project = project
        self.project_repository = project_repository

    def make_label(self):
        file_name = Path(self.stage.file).name
        return f"Move {file_name} to project root"

    def fix(self):
        old_path = self.stage.file_path
        file_name = Path(self.stage.file).name
        new_path = Settings.root_path / file_name

        if old_path.exists() and not new_path.exists():
            shutil.move(str(old_path), str(new_path))

        self.stage.file = file_name
        self.project_repository.save(self.project)


class FileOutsideProject(LinterIssue):
    def __init__(
        self,
        stage: StageWithFile,
        project: Project,
        project_repository: LocalProjectRepository,
    ) -> None:
        self.label = f"The {stage.type_name} '{stage.title}' references a file outside the project directory: {stage.file_path}"
        self.fixes = [MoveFileToProjectRoot(stage, project, project_repository)]


def is_path_inside_root(file_path: Path, root_path: Path) -> bool:
    try:
        resolved_file = file_path.resolve()
        resolved_root = root_path.resolve()
        resolved_file.relative_to(resolved_root)
        return True
    except ValueError:
        return False


class FileOutsideProjectRoot(LinterRule):
    label = "Stage files must be inside the project directory"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        project_repository = LocalProjectRepository()
        project = project_repository.load()
        root_path = Settings.root_path
        issues: List[LinterIssue] = []

        for form in project.forms:
            if not is_path_inside_root(form.file_path, root_path):
                issues.append(FileOutsideProject(form, project, project_repository))

        for hook in project.hooks:
            if not is_path_inside_root(hook.file_path, root_path):
                issues.append(FileOutsideProject(hook, project, project_repository))

        for job in project.jobs:
            if not is_path_inside_root(job.file_path, root_path):
                issues.append(FileOutsideProject(job, project, project_repository))

        for script in project.scripts:
            if not is_path_inside_root(script.file_path, root_path):
                issues.append(FileOutsideProject(script, project, project_repository))

        return issues
