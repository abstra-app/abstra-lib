import flask, flask_sock, os, sys

from ..api import API
from .utils import send_from_dist
from ..session import LiveSession, StaticSession
from ..runtimes import run_dash, run_form, run_hook, normalize_run
from ..runtimes import run_dash, run_form, run_hook


def __form_ws(conn: flask_sock.Server, api: API, path: str):
    form = api.get_form(path)
    if not form:
        conn.close(reason=404, message="Not found")
        return

    code = api.read_text_file(form.file) if form.file else ""
    session = LiveSession(conn, "forms", path)
    normalize_run(api.root_path)
    run_form(session, form, code)


def __dash_ws(conn: flask_sock.Server, api: API, path: str):
    dash = api.get_dash(path)
    if not dash:
        conn.close(reason=404, message="Not found")
        return

    code = api.read_text_file(dash.file) if dash.file else ""
    session = LiveSession(conn, "dashes", path)
    normalize_run(api.root_path)
    run_dash(session, dash, code)


def get_player_bp(api: API):
    bp = flask.Blueprint("player", __name__)
    sock = flask_sock.Sock(bp)
    if api.root_path not in sys.path:
        sys.path.append(api.root_path)

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

    @sock.route("/_socket")
    def websocket(conn: flask_sock.Server):
        try:
            dash_path = flask.request.args.get("dashPath")
            if dash_path is not None:
                dash = api.get_dash(dash_path)
                if not dash:
                    conn.close(reason=404, message="Not found")
                    return

                code = api.read_text_file(dash.file) if dash.file else ""
                return run_dash(conn, dash, code)

            form_path = flask.request.args.get("formPath")
            if form_path is not None:
                form = api.get_form(form_path)
                if not form:
                    conn.close(reason=404, message="Not found")
                    return

                code = api.read_text_file(form.file) if form.file else ""
                return run_form(conn, form, code)

        finally:
            conn.close(message="Done")

    @bp.route("/_files", methods=["PUT"])
    def _upload_file():
        files = flask.request.files
        if len(files) == 0:
            flask.abort(400)

        paths = []
        for file in files.values():
            paths.append(api.save_file(file))
        return paths

    @bp.route("/_files/<path:path>", methods=["GET"])
    def _get_file(path):
        return flask.send_file(api.get_file(path))

    @bp.route("/_assets/logo", methods=["GET"])
    def _logo():
        logo_path = api.get_workspace().logo_url
        return flask.send_from_directory(directory=api.root_path, path=logo_path)

    @bp.route("/_assets/background", methods=["GET"])
    def _background():
        background_path = api.get_workspace().theme
        return flask.send_from_directory(directory=api.root_path, path=background_path)

    @bp.route("/_hooks/<path:path>", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def hook_runner(path):
        hook = api.get_hook(path)
        if not hook:
            flask.abort(404)

        if not hook.file:
            flask.abort(500)

        code = api.read_text_file(hook.file)  # TODO: handle 404
        normalize_run(api.root_path)
        body, status, headers = run_hook(flask.request, hook, code)
        return flask.Response(status=status, headers=headers, response=body)

    @bp.route("/<path:filename>", methods=["GET"])
    def spa(filename: str):
        return send_from_dist(filename, "player.html")

    return bp
