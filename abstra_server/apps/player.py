import flask, flask_sock, os, sys
from ..api import API
from .utils import send_from_dist
from ..session import LiveSession, StaticSession
from ..runtimes import run_dash, run_form, run_hook


def __form_ws(conn: flask_sock.Server, api: API, path: str):
    form = api.get_form(path)
    if not form:
        conn.close(reason=404, message="Not found")
        return

    code = api.read_text_file(form.file) if form.file else ""
    session = LiveSession(conn, "forms", path)
    run_form(session, form, code)


def __dash_ws(conn: flask_sock.Server, api: API, path: str):
    dash = api.get_dash(path)
    if not dash:
        conn.close(reason=404, message="Not found")
        return

    code = api.read_text_file(dash.file) if dash.file else ""
    session = LiveSession(conn, "dashes", path)
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
                __dash_ws(conn, api, dash_path)
                return

            form_path = flask.request.args.get("formPath")
            if form_path is not None:
                __form_ws(conn, api, form_path)
                return

        finally:
            conn.close(message="Done")

    @bp.route("/_hooks/<path:path>", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def hook(path):
        hook_rt = api.get_hook(path)
        if not hook_rt:
            flask.abort(404)

        if not hook_rt.file:
            flask.abort(500)

        code = api.read_text_file(hook_rt.file)  # TODO: handle 404
        session = StaticSession("hooks", path)
        session.context["request"] = (
            flask.request.get_data(as_text=True),
            flask.request.args,
            flask.request.headers,
        )

        run_hook(code, session)

        body, status, headers = session.context.get("response", ({}, 200, {}))
        return flask.Response(status=status, headers=headers, response=body)

    @bp.route("/<path:filename>", methods=["GET"])
    def spa(filename: str):
        return send_from_dist(filename, "player.html")

    return bp
