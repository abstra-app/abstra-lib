import flask
import json

from ...execution.script_execution import ScriptExecution
from ...execution.stage_run_manager import (
    DetachedStageRunManager,
    AttachedStageRunManager,
)
from ...repositories import (
    execution_logs_repository,
    execution_repository,
    stage_run_repository,
)
from ...repositories.stage_run import stage_run_repository_factory
from ...repositories.execution_logs import FormEventLogEntry
from ...usage import usage
from ..utils import is_it_true
from ..workflow_engine import workflow_engine
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_scripts", __name__)

    @bp.get("/<path:id>")
    @usage
    def _get_script(id: str):
        script = controller.get_script(id)
        if not script:
            flask.abort(404)
        return script.editor_dto

    @bp.get("/")
    @usage
    def _get_scripts():
        return [f.editor_dto for f in controller.get_scripts()]

    @bp.post("/")
    @usage
    def _create_script():
        data = flask.request.json
        if not data:
            flask.abort(400)
        title = data.get("title")
        file = data.get("file")
        if not title or not file:
            flask.abort(400)
        workflow_position = data.get("position", (0, 0))
        script = controller.create_script(title, file, workflow_position)
        return script.editor_dto

    @bp.put("/<path:id>")
    @usage
    def _update_script(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        script = controller.update_stage(id, data)
        return script.editor_dto if script else None

    @bp.delete("/<path:id>")
    @usage
    def _delete_script(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_script(id, remove_file)
        return {"success": True}

    @bp.post("/<path:id>/test")
    @usage
    def _test_script(id: str):
        script = controller.get_script(id)
        if not script:
            flask.abort(400)

        data = json.loads(controller.read_test_data())

        tmp_stage_run_repository = stage_run_repository_factory()
        stage_run_manager = DetachedStageRunManager(tmp_stage_run_repository, data=data)
        execution = ScriptExecution(
            stage=script,
            stage_run_id="",
            stage_run_manager=stage_run_manager,
            execution_repository=execution_repository,
            execution_logs_repository=execution_logs_repository,
        )

        execution.run()

        stdout: str = ""
        stderr: str = ""
        for entry in execution_logs_repository.get(execution.id):
            if isinstance(entry, FormEventLogEntry):
                continue

            text = entry.payload.get("text")
            if not text:
                continue

            if entry.event == "stdout":
                stdout += text
            elif entry.event == "stderr":
                stderr += text
            elif entry.event == "unhandled-exception":
                stderr += text

        return {"stdout": stdout, "stderr": stderr}

    @bp.post("/<path:id>/run")
    @usage
    def _run_script(id: str):
        script = controller.get_script(id)
        data = flask.request.json
        if not data:
            flask.abort(400)
        stage_run_id = data.get("stage_run_id")

        if not script or not stage_run_id:
            flask.abort(400)

        stage_run_manager = AttachedStageRunManager(stage_run_repository)

        execution = ScriptExecution(
            stage=script,
            stage_run_id=stage_run_id,
            stage_run_manager=stage_run_manager,
            execution_repository=execution_repository,
            execution_logs_repository=execution_logs_repository,
        )

        execution.run()
        workflow_engine.handle_execution_end(execution)

        stdout: str = ""
        stderr: str = ""
        for entry in execution_logs_repository.get(execution.id):
            if isinstance(entry, FormEventLogEntry):
                continue

            text = entry.payload.get("text")
            if not text:
                continue

            if entry.event == "stdout":
                stdout += text
            elif entry.event == "stderr":
                stderr += text
            elif entry.event == "unhandled-exception":
                stderr += text

        return {"stdout": stdout, "stderr": stderr}

    return bp
