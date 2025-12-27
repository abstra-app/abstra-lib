import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.repositories.project.project import ScriptStage
from abstra_internals.usage import editor_usage
from abstra_internals.utils import is_it_true


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_scripts", __name__)

    @bp.get("/<path:id>")
    @editor_usage
    def _get_script(id: str):
        script = controller.get_script(id)
        if not script:
            flask.abort(404)
        return script.editor_dto

    @bp.get("/")
    @editor_usage
    def _get_scripts():
        return [f.editor_dto for f in controller.get_scripts()]

    @bp.post("/")
    @editor_usage
    def _create_script():
        data = flask.request.json
        if not data:
            flask.abort(400)
        title = data.get("title")
        file = data.get("file")
        if not title or not file:
            flask.abort(400)
        workflow_position = data.get("position", (0, 0))
        id = data.get("id", None)
        script = controller.create_tasklet(title, file, workflow_position, id)
        return script.editor_dto

    @bp.put("/<path:id>")
    @editor_usage
    def _update_script(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        script = controller.update_stage(id, data)
        if isinstance(script, ScriptStage):
            return script.editor_dto
        else:
            return None

    @bp.delete("/<path:id>")
    @editor_usage
    def _delete_script(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_stage(id, remove_file)
        return {"success": True}

    @bp.post("/<path:id>/run")
    @editor_usage
    def _run_tasklet(id: str):
        script = controller.get_script(id)

        if script is None:
            flask.abort(404)

        if flask.request.json is None or "task_id" not in flask.request.json:
            flask.abort(400)

        task_id = flask.request.json["task_id"]

        return controller.run_tasklet(id, task_id)

    return bp
