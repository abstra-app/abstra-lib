import os, flask, flask_cors, threading, webbrowser

from ..fs_watcher import watch_py_root_files
from ...utils.environment import HOST
from ..overloads import overloads
from .editor import get_editor_bp
from .player import get_player_bp
from ...settings import Settings
from ..controller import MainController


def create_app(controller: MainController) -> flask.Flask:
    app = flask.Flask(__name__)
    flask_cors.CORS(app)

    editor = get_editor_bp(controller)
    app.register_blueprint(editor, url_prefix="/_editor")

    player = get_player_bp(controller)
    app.register_blueprint(player)

    return app


def serve_local(debug, use_reloader, load_dotenv):
    # used to block hackerforms lib from opening
    os.environ["ABSTRA_SERVER"] = "true"

    overloads()
    controller = MainController()

    # TODO: use flask reloader
    if use_reloader:
        watch_py_root_files()

    port = Settings.server_port
    app = create_app(controller)
    threading.Timer(1, lambda: webbrowser.open(f"http://{HOST}:{port}/_editor")).start()
    app.run(
        host=HOST,
        port=port,
        debug=debug,
        use_reloader=False,
        load_dotenv=load_dotenv,
    )
