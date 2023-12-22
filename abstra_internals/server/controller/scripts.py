import flask

from ...usage import usage
from .main import MainController
from ..workflow_engine import workflow_engine
from ...execution.script_execution import ScriptExecution
from ..utils import is_it_true


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
        stage_run_id = flask.request.args.get("stage_run_id")

        if not script or not stage_run_id:
            flask.abort(404)

        execution = ScriptExecution(script, stage_run_id)
        execution.run()
        workflow_engine.notify_ran(execution)

        return {
            "stdout": "".join(execution.stdout if execution else []),
            "stderr": "".join(execution.stderr if execution else []),
        }

    return bp
