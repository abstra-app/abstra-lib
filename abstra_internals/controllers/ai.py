from dataclasses import dataclass
from typing import Any, Dict, List

from abstra_internals.cloud_api import get_session_path, get_tunnel_secret_key
from abstra_internals.contracts_generated import (
    AbstraLibApiAiStreamRequest,
    CloudApiCliAiV2StreamRequest,
)
from abstra_internals.controllers.main import MainController
from abstra_internals.credentials import resolve_headers
from abstra_internals.repositories.project.project import StageWithFile
from abstra_internals.settings import Settings
from abstra_internals.utils.file import silent_traverse_code
from abstra_internals.utils.packages import get_local_package_version
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
        self.repos = controller.repositories

    def send_ai_message(
        self,
        body: AbstraLibApiAiStreamRequest,
    ):
        yield from self.repos.ai.get_ai_messages(
            CloudApiCliAiV2StreamRequest(
                conversation_id=body.conversation_id,
                content=body.content,
                context={
                    **body.context,
                    "libVersion": str(get_local_package_version()),
                    "knownIssues": [
                        i.to_dict() for i in self.repos.linter.find_issues_in_codebase()
                    ],
                },
                secret_key=get_tunnel_secret_key(),
                tunnel_session_path=get_session_path(),
                human_approval=body.human_approval,
            )
        )

    def get_history(self, limit: int, offset: int):
        headers = resolve_headers()
        if headers is None:
            return None
        return self.repos.ai.get_history(headers, limit, offset)

    def create_thread(self):
        headers = resolve_headers()
        if headers is None:
            return None
        return self.repos.ai.create_thread(headers)

    def delete_thread(self, thread_id: str):
        if headers := resolve_headers():
            return self.repos.ai.delete_thread(headers, thread_id)

    def abort_thread(self, thread_id: str):
        if headers := resolve_headers():
            return self.repos.ai.abort_thread(headers, thread_id)

    def init_stages(self, python_files: List[PythonFile]):
        for file in python_files:
            if file.stage == "form":
                script = self.controller.create_form(file.filename[:-3], file.filename)
            elif file.stage == "hook":
                script = self.controller.create_hook(file.filename[:-3], file.filename)
            elif file.stage == "script":
                script = self.controller.create_tasklet(
                    file.filename[:-3], file.filename
                )
            elif file.stage == "job":
                script = self.controller.create_job(file.filename[:-3], file.filename)
            else:
                raise Exception(f"Invalid stage {file.stage}")
            script.file_path.write_text(file.content, encoding="utf-8")
            script.file_path.write_text(file.content, encoding="utf-8")
            script.file_path.write_text(file.content, encoding="utf-8")
            script.file_path.write_text(file.content, encoding="utf-8")
            script.file_path.write_text(file.content, encoding="utf-8")
            script.file_path.write_text(file.content, encoding="utf-8")

    def start_conversation(self):
        return self.repos.ai.start_conversation(
            secret_key=get_tunnel_secret_key(), tunnel_session_path=get_session_path()
        )
