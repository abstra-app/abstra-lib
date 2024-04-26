import json

import flask
import flask_sock

from ...execution import FormExecution
from ...execution.execution import RequestData
from ...execution.stage_run_manager import (
    AttachedStageRunManager,
    DetachedStageRunManager,
)
from ...logger import AbstraLogger
from ...repositories import stage_run_repository_factory
from ...usage import usage
from ...utils import is_it_true
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_forms", __name__)
    sock = flask_sock.Sock(bp)

    @sock.route("/socket")
    def _websocket(conn: flask_sock.Server):
        request_data = RequestData(
            query_params=flask.request.args,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            method=flask.request.method,
        )

        try:
            id = flask.request.args.get("id")
            if id is None:
                return conn.close(reason=400, message="No path")

            form = controller.get_form(id)
            if not form:
                return conn.close(reason=404, message="Not found")

            if flask.request.args.get("detached", default=False, type=is_it_true):
                stage_run_repository = stage_run_repository_factory()
                data = json.loads(controller.read_test_data())
                stage_run_manager = DetachedStageRunManager(
                    stage_run_repository, data=data
                )
            else:
                stage_run_manager = AttachedStageRunManager(
                    controller.stage_run_repository
                )

            execution = FormExecution(
                is_initial=controller.is_initial(form.id),
                request=request_data,
                connection=conn,
                stage=form,
                execution_logs_repository=controller.execution_logs_repository,
                execution_repository=controller.execution_repository,
                stage_run_manager=stage_run_manager,
            )

            execution.run()
        except Exception as e:
            AbstraLogger.capture_exception(e)
        finally:
            conn.close(message="Done")

    @bp.get("/")
    @usage
    def _get_forms():
        return [f.editor_dto for f in controller.get_forms()]

    @bp.get("/<path:id>")
    @usage
    def _get_form(id: str):
        form = controller.get_form(id)
        if not form:
            flask.abort(404)
        return form.editor_dto

    @bp.delete("/<path:id>")
    @usage
    def _delete_form(id: str):
        remove_file = flask.request.args.get(
            "remove_file", default=False, type=is_it_true
        )
        controller.delete_form(id, remove_file)
        return {"success": True}

    @bp.post("/")
    @usage
    def _create_form():
        data = flask.request.json
        if not data:
            flask.abort(400)
        title = data.get("title")
        file = data.get("file")
        if not title or not file:
            flask.abort(400)
        workflow_position = data.get("position", (0, 0))
        form = controller.create_form(title, file, workflow_position)
        return form.editor_dto

    @bp.put("/<path:id>")
    @usage
    def _update_form(id: str):
        data = flask.request.json
        if not data:
            flask.abort(400)

        form = controller.update_stage(id, data)
        return form.editor_dto if form else None

    return bp
