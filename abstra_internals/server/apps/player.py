import flask, flask_sock, os, concurrent.futures as futures
from ...execution.execution import RequestData
from ..api import API
from ...settings import Settings
from .utils import send_from_dist
from ...execution import HookExecution, JobExecution, DashExecution, FormExecution


def get_player_bp(api: API):
    bp = flask.Blueprint("player", __name__)
    sock = flask_sock.Sock(bp)
    SHARED_TOKEN = os.getenv("ABSTRA_SIDECAR_SHARED_TOKEN")
    executor = futures.ThreadPoolExecutor()

    @bp.route("/_pages/<path:id_or_path>", methods=["GET"])
    def get_runner_data(id_or_path):
        runtime = api.get_page_runtime(id_or_path)
        if not runtime:
            print("404", id_or_path)
            flask.abort(404)

        workspace = api.get_workspace()
        res = {}
        res[runtime.runner_type] = {
            **runtime.browser_runner_dto,
            "workspace": workspace.browser_runner_dto,  # TODO: fix this in frontend
        }
        return res

    @bp.route("/_version", methods=["GET"])
    def _get_version():
        return os.getenv("ABSTRA_BUILD_ID") or "dev"

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
                dash = api.get_dash(dash_path)
                if not dash:
                    conn.close(reason=404, message="Not found")
                    return

                return DashExecution(dash, conn, request_data).run_sync()

            form_path = flask.request.args.get("formPath")
            if form_path is not None:
                form = api.get_form(form_path)
                if not form:
                    conn.close(reason=404, message="Not found")
                    return
                return FormExecution(form, conn, request_data).run_sync()

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
            paths.append(api.save_file(file, filename))
        return paths

    @bp.route("/_files/<path:path>", methods=["GET"])
    def _get_file(path):
        return flask.send_file(api.get_file(path))

    @bp.route("/_assets/logo", methods=["GET"])
    def _logo():
        logo_path = api.get_workspace().logo_url
        if not logo_path:
            return flask.abort(404)
        return send_from_dist(logo_path, dist_folder=Settings.root_path)

    @bp.route("/_assets/background", methods=["GET"])
    def _background():
        background_path = api.get_workspace().theme

        if not background_path:
            return flask.abort(404)

        return send_from_dist(background_path, dist_folder=Settings.root_path)

    @bp.route("/_hooks/<path:path>", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def hook_runner(path):
        hook = api.get_hook(path)
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

        execution = HookExecution(hook, request_data)

        execution.run_sync()

        api.run_next_scripts(execution.stage_run)

        body, status, headers = execution.get_response()

        return flask.Response(status=status, headers=headers, response=body)

    @bp.route("/_jobs/<path:path>", methods=["POST"])
    def job_runner(path):
        if flask.request.headers.get("Shared-Token") != SHARED_TOKEN:
            flask.abort(401)

        job = api.get_job(path)
        if not job:
            flask.abort(404)

        if not job.file:
            flask.abort(500)

        def run_job(job):
            request_data = RequestData(
                method=flask.request.method,
                body=flask.request.get_data(as_text=True),
                headers=flask.request.headers,
                query_params=flask.request.args,
            )

            execution = JobExecution(job, request_data)

            execution.run_sync()
            api.run_next_scripts(execution.stage_run)

        executor.submit(run_job, job)

        return {"status": "running"}

    @bp.route("/<path:filename>", methods=["GET"])
    def spa(filename: str):
        res = send_from_dist(filename, "player.html")
        return res

    return bp
