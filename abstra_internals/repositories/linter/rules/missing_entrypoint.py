from typing import List

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.repositories.project.project import (
    FormStage,
    HookStage,
    JobStage,
    LocalProjectRepository,
    ScriptStage,
    StageWithFile,
)
from abstra_internals.templates import (
    new_form_code,
    new_hook_code,
    new_job_code,
    new_script_code,
)


class AddEntrypoint(LinterFix):
    label = "Add entrypoint"
    description = "Creates the .py file for the entrypoint"
    stage: StageWithFile

    def __init__(self, stage: StageWithFile) -> None:
        self.stage = stage

    def make_label(self):
        return f"Create {self.stage.file}"

    def fix(self):
        if isinstance(self.stage, FormStage):
            self.stage.file_path.write_text(new_form_code, "utf-8")
        elif isinstance(self.stage, HookStage):
            self.stage.file_path.write_text(new_hook_code, "utf-8")
        elif isinstance(self.stage, JobStage):
            self.stage.file_path.write_text(new_job_code, "utf-8")
        elif isinstance(self.stage, ScriptStage):
            self.stage.file_path.write_text(new_script_code, "utf-8")
        else:
            raise Exception(f"Unknown stage: {self.stage}")

    @property
    def name(self):
        return (
            f"{self.__class__.__name__}:{self.stage.__class__.__name__}:{self.stage.id}"
        )


class NoEntrypointFound(LinterIssue):
    def __init__(self, stage: StageWithFile) -> None:
        self.label = f"The {stage.type_name} entitled {stage.title} points to a non-existent file: {stage.file}"
        self.fixes = [AddEntrypoint(stage)]


class MissingEntrypoint(LinterRule):
    label = "Pointed files should exist"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        project = LocalProjectRepository().load()
        issues = []
        for form in project.forms:
            if not form.file_path.exists():
                issues.append(NoEntrypointFound(form))

        for hook in project.hooks:
            if not hook.file_path.exists():
                issues.append(NoEntrypointFound(hook))

        for job in project.jobs:
            if not job.file_path.exists():
                issues.append(NoEntrypointFound(job))

        for script in project.scripts:
            if not script.file_path.exists():
                issues.append(NoEntrypointFound(script))

        return issues
