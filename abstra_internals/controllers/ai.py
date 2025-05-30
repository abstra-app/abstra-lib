import json
from dataclasses import dataclass
from typing import Any, Dict, List

from abstra_internals.cloud_api import (
    abort_thread,
    cancel_all,
    create_thread,
    generate_project,
    get_ai_messages,
    get_history,
)
from abstra_internals.controllers.main import MainController
from abstra_internals.credentials import resolve_headers
from abstra_internals.repositories.project.json_migrations import get_latest_version
from abstra_internals.repositories.project.project import (
    Project,
    StageWithFile,
)
from abstra_internals.services.env_vars import EnvVarsRepository
from abstra_internals.settings import Settings
from abstra_internals.utils.file import silent_traverse_code
from abstra_internals.utils.paths import get_relative_path


@dataclass
class PythonFile:
    filename: str
    content: str
    stage: str

    @staticmethod
    def from_dict(data: Dict[str, Any]) -> "PythonFile":
        return PythonFile(data["filename"], data["content"], data["stage"])


def runtime_from_stage(stage: StageWithFile):
    if stage.type_name == "form":
        return "forms"
    elif stage.type_name == "hook":
        return "hooks"
    elif stage.type_name == "script":
        return "scripts"
    elif stage.type_name == "job":
        return "jobs"
    else:
        raise ValueError(f"Unknown stage type: {stage.type_name}")


def find_imported_code(stage: StageWithFile) -> Dict[str, str]:
    seen_files = set()
    conflict_counter = 0
    files = {}
    for path in silent_traverse_code(stage.file_path):
        if path in seen_files:
            conflict_counter += 1
            if conflict_counter > 10:  # Circular imports?
                break
            continue
        seen_files.add(path)
        if stage.file_path.absolute() == path.absolute():
            continue
        relative_path = str(get_relative_path(path, Settings.root_path))
        files[relative_path] = "\n".join(
            [
                f"# {relative_path}",
                "```python",
                path.read_text(encoding="utf-8"),
                "````",
            ]
        )
    return files


class AiController:
    def __init__(self, controller: MainController):
        self.controller = controller

    def send_ai_message(
        self,
        messages,
        stage_id,
        langgraph_thread_id,
        code,
        execution_error,
        allowed_actions_schema,
    ):
        headers = resolve_headers() or {}
        env_vars_keys = EnvVarsRepository.list_keys()
        current_abstra_json = self.controller.repositories.project.load(
            include_disabled_stages=True
        ).as_dict
        runtime = None
        imported_code = {}
        if stage_id:
            stage = self.controller.get_stage(stage_id)
            assert isinstance(stage, StageWithFile), "Stage is not a StageWithFile"
            imported_code = find_imported_code(stage)
            code = "\n".join([f"# {stage.file_path}", "```python", code, "````"])
            runtime = runtime_from_stage(stage)
        yield from get_ai_messages(
            messages,
            runtime,
            langgraph_thread_id,
            code,
            imported_code,
            execution_error,
            headers,
            env_vars_keys,
            current_abstra_json,
            allowed_actions_schema,
        )

    def get_history(self, limit: int, offset: int):
        headers = resolve_headers()
        if headers is None:
            return None
        return get_history(headers, limit, offset)

    def create_thread(self):
        headers = resolve_headers()
        if headers is None:
            return None
        return create_thread(headers)

    def cancel_all(self, thread_id: str):
        if headers := resolve_headers():
            cancel_all(headers, thread_id)

    def abort_thread(self, thread_id: str):
        if headers := resolve_headers():
            return abort_thread(headers, thread_id)

    def generate_project(self, prompt: str, tries: int = 0):
        headers = resolve_headers() or {}
        abstra_json_version = get_latest_version()
        try:
            res = generate_project(prompt, abstra_json_version, headers)
            is_abstra_json_valid = Project.validate(res["abstra_json"])
            if not is_abstra_json_valid:
                raise Exception("Generated abstra.json is not valid")

            generated_abstra_json = json.dumps(res["abstra_json"], indent=4)
            python_files = [PythonFile.from_dict(file) for file in res["python_files"]]

            self.init_stages(python_files)
            Settings.root_path.joinpath("abstra.json").write_text(
                generated_abstra_json, encoding="utf-8"
            )

            self.controller.repositories.project.initialize_or_migrate(verbose=False)
            self.controller.linter_repository.fix_all_linters()
        except Exception as e:
            if tries >= 3:
                raise e
            return self.generate_project(prompt, tries + 1)

    def init_stages(self, python_files: List[PythonFile]):
        for file in python_files:
            if file.stage == "form":
                script = self.controller.create_form(file.filename[:-3], file.filename)
            elif file.stage == "hook":
                script = self.controller.create_hook(file.filename[:-3], file.filename)
            elif file.stage == "script":
                script = self.controller.create_script(
                    file.filename[:-3], file.filename
                )
            elif file.stage == "job":
                script = self.controller.create_job(file.filename[:-3], file.filename)
            else:
                raise Exception(f"Invalid stage {file.stage}")
            script.file_path.write_text(file.content, encoding="utf-8")
