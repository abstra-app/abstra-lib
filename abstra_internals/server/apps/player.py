import flask, flask_sock, concurrent.futures as futures

from ..controller import MainController
from .auth import get_auth_bp
from ...settings import Settings
from .utils import send_from_dist
from ...execution.execution import RequestData
from ...utils.environment import BUILD_ID, SIDECAR_SHARED_TOKEN
from ...execution import HookExecution, JobExecution, DashExecution, FormExecution
from ...repositories.json.classes import AbstraJSONRepository


def get_player_bp(controller: MainController):
    executor = futures.ThreadPoolExecutor()

    bp = flask.Blueprint("player", __name__)
    sock = flask_sock.Sock(bp)

    auth_bp = get_auth_bp(controller)
    bp.register_blueprint(auth_bp, url_prefix="/_auth")

    @bp.route("/_pages/<path:id_or_path>", methods=["GET"])
    def get_runner_data(id_or_path):
        runtime = controller.get_page_runtime(id_or_path)
        if not runtime:
            print("404", id_or_path)
            flask.abort(404)

        workspace = controller.get_workspace()
        res = {}
        res[runtime.runner_type] = {
            **runtime.browser_runner_dto,
            "workspace": workspace.browser_runner_dto,  # TODO: fix this in frontend
        }
        return res

    @bp.route("/_version", methods=["GET"])
    def _get_version():
        return BUILD_ID

    @bp.route("/_healthcheck")
    def _healthcheck():
        return {"ok": True}

    @sock.route("/_socket")
    def websocket(conn: flask_sock.Server):
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

                abstra_json = AbstraJSONRepository.load()
                is_initial = abstra_json.is_initial(dash_path)

                if not dash:
                    conn.close(reason=404, message="Not found")
                    return

                return DashExecution(dash, is_initial, conn, request_data).run_sync()

            form_path = flask.request.args.get("formPath")
            if form_path is not None:
                form = controller.get_form(form_path)

                abstra_json = AbstraJSONRepository.load()
                is_initial = abstra_json.is_initial(form_path)

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

        abstra_json = AbstraJSONRepository.load()
        is_initial = abstra_json.is_initial(path)

        execution = HookExecution(hook, is_initial, request_data)

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
            abstra_json = AbstraJSONRepository.load()
            is_initial = abstra_json.is_initial(path)

            execution = JobExecution(job, is_initial, request_data)

            execution.run_sync()
            controller.run_waiting_scripts(execution.stage_run)

        executor.submit(run_job, job)

        return {"status": "running"}

    @bp.route("/<path:filename>", methods=["GET"])
    def spa(filename: str):
        res = send_from_dist(filename, "player.html")
        return res

    return bp
