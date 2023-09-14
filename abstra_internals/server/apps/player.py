import flask, flask_sock, os, threading

from ..api import API
from ...settings import Settings
from .utils import send_from_dist
from ..runtimes import run_dash, run_form, run_hook, run_job


def get_player_bp(api: API):
    bp = flask.Blueprint("player", __name__)
    sock = flask_sock.Sock(bp)
    SHARED_TOKEN = os.getenv("ABSTRA_SIDECAR_SHARED_TOKEN")

    @bp.route("/_api/<path:id_or_path>", methods=["GET"])
    def get_runner_data(id_or_path):
        runtime = api.get_page_runtime(id_or_path)
        if not runtime:
            print("404", id_or_path)
            flask.abort(404)

        workspace = api.get_workspace()
        res = {}
        res[runtime.runner_type] = {
            **runtime.runner_dto,
            "workspace": workspace.runner_dto,  # TODO: fix this in frontend
        }
        return res

    @bp.route("/_version", methods=["GET"])
    def get_version():
        return os.getenv("ABSTRA_BUILD_ID")

    @bp.route("/_healthcheck")
    def _healthcheck():
        return {"ok": True}

    @sock.route("/_socket")
    def websocket(conn: flask_sock.Server):
        try:
            dash_path = flask.request.args.get("dashPath")
            if dash_path is not None:
                dash = api.get_dash(dash_path)
                if not dash:
                    conn.close(reason=404, message="Not found")
                    return

                return run_dash(conn, dash)

            form_path = flask.request.args.get("formPath")
            if form_path is not None:
                form = api.get_form(form_path)
                if not form:
                    conn.close(reason=404, message="Not found")
                    return

                return run_form(conn, form)

        finally:
            conn.close(message="Done")

    @bp.route("/_files", methods=["PUT"])
    def _upload_file():
        files = flask.request.files
        filename = flask.request.form.get("filename")
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
        return flask.send_from_directory(directory=Settings.root_path, path=logo_path)

    @bp.route("/_assets/background", methods=["GET"])
    def _background():
        background_path = api.get_workspace().theme
        return flask.send_from_directory(
            directory=Settings.root_path, path=background_path
        )

    @bp.route("/_hooks/<path:path>", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def hook_runner(path):
        hook = api.get_hook(path)
        if not hook:
            flask.abort(404)

        if not hook.file:
            flask.abort(500)

        body, status, headers = run_hook(flask.request, hook)
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

        threading.Thread(target=run_job, args=(job,)).start()
        return {"status": "running"}

    @bp.route("/<path:filename>", methods=["GET"])
    def spa(filename: str):
        return send_from_dist(filename, "player.html")

    return bp
