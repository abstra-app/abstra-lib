import json

import flask

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.execution_client import BasicClient
from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import usage
from abstra_internals.utils import is_it_true


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

        execution_controller = ExecutionController(
            stage=script,
            request=None,
            client=BasicClient(),
            target_stage_run_id=None,
            workflow_engine=controller.workflow_engine,
            execution_repository=controller.execution_repository,
            stage_run_repository=controller.stage_run_repository,
        )

        thread_data = json.loads(controller.read_test_data())
        execution_dto = execution_controller.run_without_workflow(
            thread_data=thread_data
        )

        if not execution_dto:
            return flask.abort(429)

        return {
            "output": controller.execution_logs_repository.get_logs_dto(
                execution_dto["id"]
            ),
        }

    @bp.post("/<path:id>/run")
    @usage
    def _run_script(id: str):
        script = controller.get_script(id)
        if not script:
            flask.abort(404)

        data = flask.request.json
        if not data:
            flask.abort(400)
        stage_run_id = data.get("stage_run_id")

        if not script or not stage_run_id:
            flask.abort(400)

        execution_controller = ExecutionController(
            stage=script,
            request=None,
            client=BasicClient(),
            target_stage_run_id=stage_run_id,
            workflow_engine=controller.workflow_engine,
            stage_run_repository=controller.stage_run_repository,
            execution_repository=controller.execution_repository,
        )

        execution_dto = execution_controller.run_with_workflow()

        if not execution_dto:
            return flask.abort(429)

        return {
            "output": controller.execution_logs_repository.get_logs_dto(
                execution_dto["id"]
            )
        }

    return bp
