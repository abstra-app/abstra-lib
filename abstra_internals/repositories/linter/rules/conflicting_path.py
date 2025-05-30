from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.repositories.project.project import (
    FormStage,
    LocalProjectRepository,
    Project,
)
from abstra_internals.utils.file import generate_conflictless_path, is_path_in_conflict


class ConflictingPathFix(LinterFix):
    label = "Fix conflicting path"
    description = "Change the path of the form to avoid conflicts"

    def __init__(
        self,
        form: FormStage,
        project: Project,
        project_repository: LocalProjectRepository,
    ):
        self.form = form
        self.project = project
        self.project_repository = project_repository

    def fix(self):
        self.project.update_stage(
            self.form, {"path": generate_conflictless_path(self.form.path)}
        )
        self.project_repository.save(self.project)


class ConflictingPathFound(LinterIssue):
    type = "bug"
    fixes = []

    def __init__(
        self,
        form: FormStage,
        project: Project,
        project_repository: LocalProjectRepository,
    ):
        self.label = f"The path of the form {form.title} is in conflict with an internal reserved path. This can cause unexpected behavior. You can either change it manually in the Editor or use the 'Fix conflicting path' button."
        self.fixes = [ConflictingPathFix(form, project, project_repository)]


class ConflictingPath(LinterRule):
    label = "Conflicting path"
    type = "bug"

    def find_issues(self):
        project_repository = LocalProjectRepository()
        project = project_repository.load()

        issues = []
        for form in project.forms:
            if is_path_in_conflict(form.path):
                issues.append(ConflictingPathFound(form, project, project_repository))

        return issues
