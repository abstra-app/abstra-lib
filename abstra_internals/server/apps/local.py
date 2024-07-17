import threading

import flask
import flask_cors

from abstra_internals.logger import AbstraLogger
from abstra_internals.server.blueprints.editor import get_editor_bp
from abstra_internals.server.blueprints.player import get_player_bp
from abstra_internals.server.controller.main import MainController


def get_local_app(controller: MainController) -> flask.Flask:
    AbstraLogger.init("local")

    app = flask.Flask(__name__)
    app.config["SOCK_SERVER_OPTIONS"] = {"subprotocols": ["default"]}
    app.url_map.strict_slashes = False
    flask_cors.CORS(app)

    editor = get_editor_bp(controller)
    app.register_blueprint(editor, url_prefix="/_editor")

    player = get_player_bp(controller)
    app.register_blueprint(player)

    @app.before_request
    def rename_thread():
        curr = threading.current_thread()
        curr.name = flask.request.path

    return app
