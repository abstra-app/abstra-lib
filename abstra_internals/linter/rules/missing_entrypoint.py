from ..linter import LinterRule, LinterFix
from ...repositories.json.classes import (
    AbstraJSONRepository,
    FormJSON,
    HookJSON,
    JobJSON,
    ScriptJSON,
)
from typing import Union, List
from ...templates import new_hook_code, new_job_code, new_script_code, new_form_code


class AddEntrypoint(LinterFix):
    label = "Add entrypoint"
    description = "Creates the .py file for the entrypoint"
    runtime: Union[FormJSON, HookJSON, JobJSON, ScriptJSON]

    def __init__(self, runtime: Union[FormJSON, HookJSON, JobJSON, ScriptJSON]) -> None:
        self.runtime = runtime

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


class MissingEntrypoint(LinterRule):
    label = "Missing entrypoint"
    type = "bug"
    fixes: List[AddEntrypoint] = []

    def make_description(self):
        return "\n".join(
            f"{fix.runtime.title} ({fix.runtime.path}): {fix.runtime.file}"
            for fix in self.fixes
        )

    def is_valid(self) -> bool:
        abstra_json = AbstraJSONRepository.load()
        self.fixes = []
        for form in abstra_json.forms:
            if not form.file_path.exists():
                self.fixes.append(AddEntrypoint(form))

        for hook in abstra_json.hooks:
            if not hook.file_path.exists():
                self.fixes.append(AddEntrypoint(hook))

        for job in abstra_json.jobs:
            if not job.file_path.exists():
                self.fixes.append(AddEntrypoint(job))

        for script in abstra_json.scripts:
            if not script.file_path.exists():
                self.fixes.append(AddEntrypoint(script))

        return len(self.fixes) == 0
