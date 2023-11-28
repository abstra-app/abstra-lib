from typing import Union, List

from ..linter import LinterRule, LinterFix, LinterIssue
from ...templates import new_hook_code, new_job_code, new_script_code, new_form_code
from ...repositories.project.project import (
    ProjectRepository,
    ScriptStage,
    FormStage,
    HookStage,
    JobStage,
    WorkflowStage,
)


class AddEntrypoint(LinterFix):
    label = "Add entrypoint"
    description = "Creates the .py file for the entrypoint"
    runtime: Union[FormStage, HookStage, JobStage, ScriptStage]

    def __init__(
        self, runtime: Union[FormStage, HookStage, JobStage, ScriptStage]
    ) -> None:
        self.runtime = runtime

    def make_label(self):
        return f"Create {self.runtime.file}"

    def fix(self):
        if isinstance(self.runtime, FormStage):
            self.runtime.file_path.write_text(new_form_code)
        elif isinstance(self.runtime, HookStage):
            self.runtime.file_path.write_text(new_hook_code)
        elif isinstance(self.runtime, JobStage):
            self.runtime.file_path.write_text(new_job_code)
        elif isinstance(self.runtime, ScriptStage):
            self.runtime.file_path.write_text(new_script_code)
        else:
            raise Exception(f"Unknown runtime: {self.runtime}")

    @property
    def name(self):
        return f"{self.__class__.__name__}:{self.runtime.__class__.__name__}:{self.runtime.id}"


class NoEntrypointFound(LinterIssue):
    def __init__(self, runtime: WorkflowStage) -> None:
        self.label = f"The {runtime.runner_type} entitled {runtime.title} points to a non-existent file: {runtime.file}"
        self.fixes = [AddEntrypoint(runtime)]


class MissingEntrypoint(LinterRule):
    label = "Pointed files should exist"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        project = ProjectRepository.load()
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
