import os, flask, flask_cors, threading, webbrowser, pathlib

from ..fs_watcher import watch_py_files
from ..overloads import overloads
from .editor import get_editor_bp
from .player import get_player_bp
from ..api import API

HOST = os.getenv("ABSTRA_HOST", "localhost")


def create_app(api: API) -> flask.Flask:
    app = flask.Flask(__name__)
    flask_cors.CORS(app)

    editor = get_editor_bp(api)
    app.register_blueprint(editor, url_prefix="/_editor")

    player = get_player_bp(api)
    app.register_blueprint(player)

    return app


def serve_local(
    workspace_root: pathlib.Path, port: int, debug, use_reloader, load_dotenv
):
    os.environ["ABSTRA_SERVER"] = "true"
    overloads()

    api = API(workspace_root)

    credential = api.get_credentials()
    if credential:
        os.environ["ABSTRA_API_TOKEN"] = credential

    # TODO: use flask reloader
    if use_reloader:
        watch_py_files(workspace_root)

    app = create_app(api)
    threading.Timer(1, lambda: webbrowser.open(f"http://{HOST}:{port}/_editor")).start()
    app.run(
        host=HOST,
        port=port,
        debug=debug,
        use_reloader=False,
        load_dotenv=load_dotenv,
    )
