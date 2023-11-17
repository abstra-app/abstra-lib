from abstra_internals.execution.dashes.dash_execution import DashExecution
from ...repositories.project.project import ProjectRepository
import flask, flask_sock

from ...settings import Settings
from ..utils import send_from_dist
from ...execution.execution import RequestData
from ...execution import HookExecution, JobExecution, FormExecution
from ...utils.environment import BUILD_ID, SIDECAR_SHARED_TOKEN, SHOW_WATERMARK

from ..controller.main import MainController
from ..controller import auth as auth_controller
from ..controller import stage_runs as stage_runs_controller


def get_player_bp(controller: MainController):
    bp = flask.Blueprint("player", __name__)
    sock = flask_sock.Sock(bp)

    auth_bp = auth_controller.get_player_bp()
    bp.register_blueprint(auth_bp, url_prefix="/_auth")

    stage_run_bp = stage_runs_controller.get_player_bp()
    bp.register_blueprint(stage_run_bp, url_prefix="/_api/stage_runs")

    @bp.route("/_api/workspace", methods=["GET"])
    def _get_workspace():
        workspace = controller.get_workspace()
        return workspace.browser_runner_dto

    @bp.route("/_pages/<string:path>", methods=["GET"])
    def _get_page(path):
        page_runtime = controller.get_form(path)
        if not page_runtime:
            flask.abort(404)

        return {
            page_runtime.runner_type: {
                **page_runtime.browser_runner_dto,
                "workspace": controller.get_workspace().browser_runner_dto,
            }
        }

    @bp.route("/_version", methods=["GET"])
    def _get_version():
        return BUILD_ID

    @bp.route("/_settings", methods=["GET"])
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
            dash_path = flask.request.args.get("dashPath")
            if dash_path is not None:
                dash = controller.get_dash(dash_path)

                project = ProjectRepository.load()
                is_initial = project.is_initial(dash_path)

                if not dash:
                    conn.close(reason=404, message="Not found")
                    return

                return DashExecution(dash, is_initial, conn, request_data).run_sync()

            form_path = flask.request.args.get("formPath")
            if form_path is not None:
                form = controller.get_form(form_path)

                project = ProjectRepository.load()
                is_initial = project.is_initial(form_path)

                if not form:
                    conn.close(reason=404, message="Not found")
                    return

                execution = FormExecution(form, is_initial, conn, request_data)

                execution.run_sync()

                controller.run_waiting_scripts(execution.stage_run)

        finally:
            conn.close(message="Done")

    @bp.route("/_files", methods=["PUT"])
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

    @bp.route("/_files/<path:path>", methods=["GET"])
    def _get_file(path):
        return flask.send_file(controller.get_file(path))

    @bp.route("/_assets/logo", methods=["GET"])
    def _logo():
        logo_path = controller.get_workspace().logo_url
        if not logo_path:
            return flask.abort(404)
        return send_from_dist(logo_path, dist_folder=Settings.root_path)

    @bp.route("/favicon.ico", methods=["GET"])
    def _favicon():
        return _logo()

    @bp.route("/_assets/background", methods=["GET"])
    def _background():
        background_path = controller.get_workspace().theme

        if not background_path:
            return flask.abort(404)

        return send_from_dist(background_path, dist_folder=Settings.root_path)

    @bp.route("/_hooks/<path:path>", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def hook_runner(path):
        hook = controller.get_hook(path)

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

        project = ProjectRepository.load()

        execution = HookExecution(
            is_initial=project.is_initial(hook.path),
            request=request_data,
            runtime_json=hook,
        )

        execution.run_sync()
        controller.run_waiting_scripts(execution.stage_run)

        body, status, headers = execution.get_response()
        return flask.Response(status=status, headers=headers, response=body)

    @bp.route("/_jobs/<path:path>", methods=["POST"])
    def job_runner(path):
        if flask.request.headers.get("Shared-Token") != SIDECAR_SHARED_TOKEN:
            flask.abort(401)

        job = controller.get_job(path)
        if not job:
            flask.abort(404)

        if not job.file:
            flask.abort(500)

        request_data = RequestData(
            method=flask.request.method,
            body=flask.request.get_data(as_text=True),
            headers=flask.request.headers,
            query_params=flask.request.args,
        )

        def run_job(job):
            project = ProjectRepository.load()

            execution = JobExecution(
                is_initial=project.is_initial(job.id),
                request=request_data,
                runtime_json=job,
            )

            execution.run_sync()
            controller.run_waiting_scripts(execution.stage_run)

        controller.executor.submit(run_job, job)

        return {"status": "running"}

    @bp.route("/", methods=["GET"])
    def index():
        res = send_from_dist("player.html", "player.html")
        return res

    @bp.route("/<path:filename>", methods=["GET"])
    def spa(filename: str):
        res = send_from_dist(filename, "player.html")
        return res

    return bp
