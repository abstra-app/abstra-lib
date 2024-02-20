import flask, flask_sock
import json

from ...settings import Settings
from ..utils import send_from_dist
from ..controller.main import MainController
from ..workflow_engine import workflow_engine
from ...execution.execution import RequestData
from ..controller import auth as auth_controller
from ..controller import users as user_controller
from ..controller import kanban as kanban_controller
from ..controller import visualizations as visualizations_controller
from ...execution import HookExecution, FormExecution
from ...utils.environment import BUILD_ID, SIDECAR_SHARED_TOKEN, SHOW_WATERMARK
from ...execution.stage_run_manager import (
    AttachedStageRunManager,
    DetachedStageRunManager,
)
from ...repositories import stage_run_repository_factory


def get_player_bp(controller: MainController):
    bp = flask.Blueprint("player", __name__)
    sock = flask_sock.Sock(bp)

    auth_bp = auth_controller.get_player_bp()
    bp.register_blueprint(auth_bp, url_prefix="/_auth")

    user_bp = user_controller.get_player_bp()
    bp.register_blueprint(user_bp, url_prefix="/_user")

    kanban_bp = kanban_controller.get_player_bp()
    bp.register_blueprint(kanban_bp, url_prefix="/_kanban")

    visuvisualizations_bp = visualizations_controller.get_player_bp()
    bp.register_blueprint(visuvisualizations_bp, url_prefix="/_visualizations")

    @bp.get("/_workspace")
    def _get_workspace():
        workspace = controller.get_workspace()
        return workspace.browser_runner_dto

    @bp.get("/_pages/<string:path>")
    def _get_page(path):
        form = controller.get_form_by_path(path)
        if not form:
            flask.abort(404)

        return {
            form.type_name: {
                **form.browser_runner_dto,
                "workspace": controller.get_workspace().browser_runner_dto,
            }
        }

    @bp.get("/_version")
    def _get_version():
        return BUILD_ID

    @bp.get("/_settings")
    def _get_settings():
        return flask.jsonify({"show_watermark": SHOW_WATERMARK})

    @sock.route("/_socket")
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

            stage_run_manager = AttachedStageRunManager(controller.stage_run_repository)
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
            workflow_engine.handle_execution_end(execution)
        finally:
            conn.close(message="Done")

    @sock.route("/_socket/detached")
    def _websocket_detached(conn: flask_sock.Server):
        request_data = RequestData(
            query_params=flask.request.args,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            method=flask.request.method,
        )

        data = json.loads(controller.read_test_data())

        try:
            id = flask.request.args.get("id")
            if id is None:
                return conn.close(reason=400, message="No path")

            form = controller.get_form(id)
            if not form:
                return conn.close(reason=404, message="Not found")

            stage_run_repository = stage_run_repository_factory()
            stage_run_manager = DetachedStageRunManager(stage_run_repository, data=data)
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
        finally:
            conn.close(message="Done")

    @bp.put("/_files")
    def _upload_file():
        files = flask.request.files
        filename = flask.request.form.get("filename")
        if filename is None:
            flask.abort(400)

        if len(files) == 0:
            flask.abort(400)

        paths = []
        for file in files.values():
            paths.append(controller.save_file(file, filename))
        return paths

    @bp.get("/_files/<path:path>")
    def _get_file(path):
        return flask.send_file(controller.get_file(path))

    @bp.get("/_assets/logo")
    def _logo():
        logo_path = controller.get_workspace().logo_url
        if not logo_path:
            return flask.abort(404)
        return send_from_dist(logo_path, dist_folder=Settings.root_path)

    @bp.get("/favicon.ico")
    def _favicon():
        return _logo()

    @bp.get("/_assets/background")
    def _background():
        background_path = controller.get_workspace().theme

        if not background_path:
            return flask.abort(404)

        return send_from_dist(background_path, dist_folder=Settings.root_path)

    @bp.route("/_hooks/<path:path>", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def hook_runner(path):
        hook = controller.get_hook_by_path(path)

        if not hook:
            flask.abort(404)

        if not hook.file:
            flask.abort(500)

        request_data = RequestData(
            query_params=flask.request.args,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            method=flask.request.method,
        )

        stage_run_manager = AttachedStageRunManager(controller.stage_run_repository)
        execution = HookExecution(
            is_initial=controller.is_initial(hook.id),
            request=request_data,
            stage=hook,
            execution_logs_repository=controller.execution_logs_repository,
            execution_repository=controller.execution_repository,
            stage_run_manager=stage_run_manager,
        )

        execution.run()
        workflow_engine.handle_execution_end(execution)

        body, status, headers = execution.get_response()
        return flask.Response(status=status, headers=headers, response=body)

    @bp.get("/_jobs")
    def list_jobs():
        if flask.request.headers.get("Shared-Token") != SIDECAR_SHARED_TOKEN:
            flask.abort(401)

        jobs = controller.get_jobs()

        # used by sidecar - DO NOT CHANGE CONTRACT
        return [{"id": job.id, "schedule": job.schedule} for job in jobs]

    @bp.post("/_jobs/<path:id>")
    def job_runner(id):
        if flask.request.headers.get("Shared-Token") != SIDECAR_SHARED_TOKEN:
            flask.abort(401)

        job = controller.get_job(id)
        if not job:
            flask.abort(404)

        if not job.file:
            flask.abort(500)

        workflow_engine.run_job(job)
        return {"status": "running"}

    @bp.delete("/_executions/<string:execution_id>")
    def abort_execution(execution_id):
        if flask.request.headers.get("Shared-Token") != SIDECAR_SHARED_TOKEN:
            flask.abort(401)
        controller.abort_execution(execution_id)
        return {"status": "deleted"}

    @bp.get("/")
    def index():
        res = send_from_dist("player.html", "player.html")
        return res

    @bp.get("/<path:filename>")
    def spa(filename: str):
        res = send_from_dist(filename, "player.html")
        return res

    return bp
