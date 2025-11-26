import base64
import io
from dataclasses import dataclass
from typing import Any, Dict, List

import pypdfium2 as pdfium

from abstra_internals.cloud_api import get_session_path, get_tunnel_secret_key
from abstra_internals.contracts_generated import (
    AbstraLibApiAiStreamRequest,
    CloudApiCliAiV2StreamRequest,
    CloudApiCliAiV2StreamRequestContentItem,
    CloudApiCliAiV2StreamRequestContentItemAssistantFileInput,
    CloudApiCliAiV2StreamRequestContentItemAssistantTextInput,
)
from abstra_internals.controllers.main import MainController
from abstra_internals.credentials import resolve_headers
from abstra_internals.repositories.project.project import StageWithFile
from abstra_internals.settings import Settings
from abstra_internals.utils.file import silent_traverse_code
from abstra_internals.utils.packages import get_local_package_version
from abstra_internals.utils.paths import get_relative_path

RETRY_FLAG = "abstra__trigger__retry"


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

    def _extract_pdf_images(self, pdf_bytes: bytes) -> List[bytes]:
        images = []
        pdf_io = io.BytesIO(pdf_bytes)
        for page in pdfium.PdfDocument(pdf_io):
            bitmap = page.render(
                scale=4,  # 288 dpi
                rotation=0,
            )
            pil_image = bitmap.to_pil()
            image_io = io.BytesIO()
            pil_image.save(image_io, format="png")
            image_io.seek(0)
            images.append(image_io.read())
        return images

    def _process_pdf_content(
        self, pdf_file: CloudApiCliAiV2StreamRequestContentItemAssistantFileInput
    ) -> List[CloudApiCliAiV2StreamRequestContentItem]:
        processed_items = []
        try:
            pdf_bytes = base64.b64decode(pdf_file.file_content)
            images = self._extract_pdf_images(pdf_bytes)

            processed_items.append(
                CloudApiCliAiV2StreamRequestContentItemAssistantTextInput(
                    type="text",
                    text=f"[PDF Document: {pdf_file.file_name} - {len(images)} page(s)]",
                )
            )

            for idx, image_bytes in enumerate(images, 1):
                image_base64 = base64.b64encode(image_bytes).decode("utf-8")
                processed_items.append(
                    CloudApiCliAiV2StreamRequestContentItemAssistantFileInput(
                        type="file",
                        file_name=f"{pdf_file.file_name}_page_{idx}.png",
                        file_content=image_base64,
                    )
                )
        except Exception as e:
            print(f"Error extracting PDF images: {e}")
            processed_items.append(
                CloudApiCliAiV2StreamRequestContentItemAssistantTextInput(
                    type="text",
                    text=f"[PDF Document: {pdf_file.file_name}]\nNote: Could not extract images from this PDF.",
                )
            )
        return processed_items

    def _process_content(
        self, content: List[CloudApiCliAiV2StreamRequestContentItem]
    ) -> List[CloudApiCliAiV2StreamRequestContentItem]:
        processed_content = []

        for item in content:
            if isinstance(
                item, CloudApiCliAiV2StreamRequestContentItemAssistantTextInput
            ):
                processed_content.append(item)
                continue

            if not item.file_name.lower().endswith(".pdf"):
                processed_content.append(item)
                continue

            try:
                processed_pdf_items = self._process_pdf_content(item)
                processed_content.extend(processed_pdf_items)
            except Exception as e:
                print(f"Error extracting PDF images: {e}")
                processed_content.append(
                    CloudApiCliAiV2StreamRequestContentItemAssistantTextInput(
                        type="text",
                        text=f"[PDF Document: {item.file_name}]\nNote: Could not extract images from this PDF.",
                    )
                )

        return processed_content

    def send_ai_message(
        self,
        body: AbstraLibApiAiStreamRequest,
    ):
        try:
            processed_content = self._process_content(body.content)

            yield from self.repos.ai.get_ai_messages(
                CloudApiCliAiV2StreamRequest(
                    conversation_id=body.conversation_id,
                    content=processed_content,
                    context={
                        **body.context,
                        "libVersion": str(get_local_package_version()),
                        "knownIssues": [
                            i.to_dict()
                            for i in self.repos.linter.find_issues_in_codebase()
                        ],
                    },
                    secret_key=get_tunnel_secret_key(),
                    tunnel_session_path=get_session_path(),
                    human_approval=body.human_approval,
                    tool_calls_approval=body.tool_calls_approval,
                )
            )
        except Exception as e:
            print(f"Error in send_ai_message: {e}")
            yield RETRY_FLAG
            return

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
