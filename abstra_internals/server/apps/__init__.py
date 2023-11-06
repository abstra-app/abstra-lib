import os, flask, flask_cors, threading, webbrowser

from ..controller import MainController
from ...utils.environment import HOST
from ...overloads import overloads
from .editor import get_editor_bp
from .player import get_player_bp
from ...settings import Settings


def create_app(controller: MainController) -> flask.Flask:
    app = flask.Flask(__name__)
    flask_cors.CORS(app)

    editor = get_editor_bp(controller)
    app.register_blueprint(editor, url_prefix="/_editor")

    player = get_player_bp(controller)
    app.register_blueprint(player)

    return app


def serve_local(debug, load_dotenv):
    # used to block hackerforms lib from opening
    os.environ["ABSTRA_SERVER"] = "true"

    overloads()
    controller = MainController()

    port = Settings.server_port
    app = create_app(controller)
    threading.Timer(1, lambda: webbrowser.open(f"http://{HOST}:{port}/_editor")).start()
    app.run(
        host=HOST,
        port=port,
        debug=debug,
        load_dotenv=load_dotenv,
    )
