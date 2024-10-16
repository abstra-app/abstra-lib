import flask

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.main import MainController
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
        script = controller.create_script(title, file, workflow_position)
        return script.editor_dto

    @bp.put("/<path:id>")
    @editor_usage
    def _update_script(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        script = controller.update_stage(id, data)
        return script.editor_dto if script else None

    @bp.delete("/<path:id>")
    @editor_usage
    def _delete_script(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_script(id, remove_file)
        return {"success": True}

    @bp.post("/<path:id>/test")
    @editor_usage
    def _test_script(id: str):
        script = controller.get_script(id)
        if not script:
            flask.abort(400)

        ExecutionController(
            workflow_engine=controller.detached_workflow_engine,
            execution_repository=controller.execution_repository,
            stage_run_repository=controller.stage_run_repository,
        ).test(
            stage=script,
        )

        return {"ok": True}

    @bp.post("/<path:id>/run")
    @editor_usage
    def _run_script(id: str):
        script = controller.get_script(id)
        if not script:
            flask.abort(404)

        data = flask.request.json
        if not data:
            flask.abort(400)

        stage_run_id = data.get("stage_run_id")
        if not stage_run_id:
            flask.abort(400)

        ExecutionController(
            workflow_engine=controller.workflow_engine,
            stage_run_repository=controller.stage_run_repository,
            execution_repository=controller.execution_repository,
        ).run(
            stage=script,
            target_stage_run_id=stage_run_id,
        )

        return {"ok": True}

    return bp
