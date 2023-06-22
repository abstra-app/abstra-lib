import flask, flask_sock

from ..api import API
from ..session import LiveSession, StaticSession
from ..runtimes import runners, run_hook
from .utils import send_from_dist


def get_player_bp(api: API):
    bp = flask.Blueprint("player", __name__)
    sock = flask_sock.Sock(bp)

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

    @sock.route("/_socket")
    def websocket(conn: flask_sock.Server):
        is_preview = flask.request.args.get("isPreview")
        dash_path = flask.request.args.get("dashPath")
        form_path = flask.request.args.get("formPath")
        path = dash_path if dash_path is not None else form_path
        runtime = api.get_page_runtime(path)

        if not runtime:
            conn.close(message="Not found")
            return

        run = runners[runtime.runner_type]
        if runtime.file:
            code = api.read_text_file(runtime.file)  # TODO: handle 404
        else:
            code = ""
        session = LiveSession(conn, is_preview)

        try:
            run(session, runtime, code)
        finally:
            session.end()

    @bp.route("/_hooks/<path:path>", methods=["POST", "GET", "PUT", "DELETE", "PATCH"])
    def hook(path):
        runtime = api.get_page_runtime(path)
        if not runtime:
            flask.abort(404)

        if not runtime.file:
            flask.abort(500)

        code = api.read_text_file(runtime.file)  # TODO: handle 404
        session = StaticSession()
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
