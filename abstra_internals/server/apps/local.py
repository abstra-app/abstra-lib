import threading

import flask
import flask_cors

from abstra_internals.controllers.main import MainController
from abstra_internals.server.blueprints.editor import get_editor_bp
from abstra_internals.server.blueprints.player import get_player_bp
from abstra_internals.server.routes.web_editor import get_editor_api_guard


def get_local_app(controller: MainController) -> flask.Flask:
    app = flask.Flask(__name__)
    app.config["SOCK_SERVER_OPTIONS"] = {"subprotocols": ["default"]}
    app.url_map.strict_slashes = False
    flask_cors.CORS(app)

    editor = get_editor_bp(controller)
    app.register_blueprint(editor, url_prefix="/_editor")

    player = get_player_bp(controller)
    guard = get_editor_api_guard(controller)
    player.before_app_request(guard)
    app.register_blueprint(player)

    @app.before_request
    def rename_thread():
        curr = threading.current_thread()
        curr.name = f"FlaskThread[{flask.request.path}]"

    return app
