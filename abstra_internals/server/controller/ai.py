import json
from dataclasses import dataclass
from typing import Any, Dict, List

import flask

from abstra_internals.cloud_api import (
    cancel_all,
    create_thread,
    generate_project,
    get_ai_messages,
)
from abstra_internals.credentials import resolve_headers
from abstra_internals.repositories.project.json_migrations import get_latest_version
from abstra_internals.repositories.project.project import Project, ProjectRepository
from abstra_internals.server.controller.linters import fix_all_linters
from abstra_internals.server.controller.main import MainController
from abstra_internals.settings import Settings
from abstra_internals.usage import editor_manual_usage, editor_usage


@dataclass
class PythonFile:
    filename: str
    content: str
    stage: str

    @staticmethod
    def from_dict(data: Dict[str, Any]) -> "PythonFile":
        return PythonFile(data["filename"], data["content"], data["stage"])


class AiController:
    def __init__(self, controller: MainController):
        self.controller = controller

    def send_ai_message(self, messages, stage, thread_id):
        headers = resolve_headers() or {}
        yield from get_ai_messages(messages, stage, thread_id, headers)

    def create_thread(self):
        headers = resolve_headers()
        if headers is None:
            return None
        return create_thread(headers)

    def cancel_all(self, thread_id: str):
        headers = resolve_headers()
        if headers is None:
            return None
        return cancel_all(headers, thread_id)

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

            ProjectRepository.initialize_or_migrate(verbose=False)
            fix_all_linters()
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


def get_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("editor_ai", __name__)
    controller = AiController(main_controller)

    @bp.post("/message")
    @editor_usage
    def _get_next_message():
        body = flask.request.json
        if not body:
            flask.abort(400)

        streamer = controller.send_ai_message(
            body["messages"], body["runtime"], body["threadId"]
        )

        if streamer is None:
            flask.abort(403)

        return flask.Response(streamer, mimetype="text/event-stream")

    @bp.post("/thread")
    @editor_usage
    def _create_thread():
        thread = controller.create_thread()
        if not thread:
            flask.abort(403)
        return thread

    @bp.post("/cancel-all")
    @editor_usage
    def _cancel_all():
        body = flask.request.json
        if not body:
            flask.abort(400)
        thread_id = body.get("threadId")
        if not thread_id:
            flask.abort(400)
        thread = controller.cancel_all(thread_id)
        if not thread:
            flask.abort(403)
        return thread

    @bp.post("/generate")
    @editor_usage
    def _generate():
        body = flask.request.json
        if not body:
            flask.abort(400)

        prompt = body.get("prompt")
        if not prompt:
            flask.abort(400)

        controller.generate_project(prompt)
        return {"success": True}

    @bp.post("/vote")
    def _vote():
        body = flask.request.json
        if not body:
            flask.abort(400)
        vote = body.get("vote")
        question = body.get("question")
        answer = body.get("answer")
        context = body.get("context")

        editor_manual_usage(
            event="ai_vote",
            payload=dict(vote=vote, question=question, answer=answer, context=context),
        )

        return {"success": True}

    return bp
