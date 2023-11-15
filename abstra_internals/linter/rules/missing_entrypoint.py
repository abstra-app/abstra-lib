from ..linter import LinterRule, LinterFix, LinterIssue
from ...repositories.json.classes import (
    AbstraJSONRepository,
    FormJSON,
    HookJSON,
    JobJSON,
    ScriptJSON,
    WorkflowRuntimeJSON,
)
from typing import Union, List
from ...templates import new_hook_code, new_job_code, new_script_code, new_form_code


class AddEntrypoint(LinterFix):
    runtime: Union[FormJSON, HookJSON, JobJSON, ScriptJSON]

    def __init__(self, runtime: Union[FormJSON, HookJSON, JobJSON, ScriptJSON]) -> None:
        self.runtime = runtime

    def make_label(self):
        return f"Create {self.runtime.file}"

    def fix(self):
        if isinstance(self.runtime, FormJSON):
            self.runtime.file_path.write_text(new_form_code)
        elif isinstance(self.runtime, HookJSON):
            self.runtime.file_path.write_text(new_hook_code)
        elif isinstance(self.runtime, JobJSON):
            self.runtime.file_path.write_text(new_job_code)
        elif isinstance(self.runtime, ScriptJSON):
            self.runtime.file_path.write_text(new_script_code)
        else:
            raise Exception(f"Unknown runtime: {self.runtime}")

    @property
    def name(self):
        return f"{self.__class__.__name__}:{self.runtime.__class__.__name__}:{self.runtime.path}"


class NoEntrypointFound(LinterIssue):
    def __init__(self, runtime: WorkflowRuntimeJSON) -> None:
        self.label = f"The {runtime.runner_type} entitled {runtime.title} points to a non-existent file: {runtime.file}"
        self.fixes = [AddEntrypoint(runtime)]


class MissingEntrypoint(LinterRule):
    label = "Pointed files should exist"
    type = "bug"

    def find_issues(self) -> List[LinterIssue]:
        abstra_json = AbstraJSONRepository.load()
        issues = []
        for form in abstra_json.forms:
            if not form.file_path.exists():
                issues.append(NoEntrypointFound(form))

        for hook in abstra_json.hooks:
            if not hook.file_path.exists():
                issues.append(NoEntrypointFound(hook))

        for job in abstra_json.jobs:
            if not job.file_path.exists():
                issues.append(NoEntrypointFound(job))

        for script in abstra_json.scripts:
            if not script.file_path.exists():
                issues.append(NoEntrypointFound(script))

        return issues
