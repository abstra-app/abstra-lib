import threading

import flask
import flask_cors

from abstra_internals.controllers.main import MainController
from abstra_internals.environment import EDITOR_MODE, PROJECT_ID
from abstra_internals.server.blueprints.editor import get_editor_auth_bp, get_editor_bp
from abstra_internals.server.blueprints.player import get_player_bp
from abstra_internals.services.jwt import decode_jwt


def _guard():
    if EDITOR_MODE == "local":
        return None  # No guard for local development

    token = flask.request.cookies.get("editor_auth")

    if not token:
        return flask.make_response({"ok": False, "error": "No token provided"}, 401)

    if not decode_jwt(token, aud=f"web-editor-{PROJECT_ID}"):
        return flask.make_response({"ok": False, "error": "Invalid token"}, 403)

    return None


def get_local_app(controller: MainController) -> flask.Flask:
    app = flask.Flask(__name__)
    app.config["SOCK_SERVER_OPTIONS"] = {"subprotocols": ["default"]}
    app.url_map.strict_slashes = False
    flask_cors.CORS(app, supports_credentials=True)

    @app.route("/_healthcheck")
    def _healthcheck():
        return "ok"

    # Must be public
    editor_auth = get_editor_auth_bp()
    app.register_blueprint(editor_auth, url_prefix="/_editor/auth")

    editor = get_editor_bp(controller)
    editor.before_request(lambda: _guard())
    app.register_blueprint(editor, url_prefix="/_editor")

    player = get_player_bp(controller)
    player.before_request(lambda: _guard())
    app.register_blueprint(player)

    @app.before_request
    def rename_thread():
        curr = threading.current_thread()
        curr.name = f"FlaskThread[{flask.request.path}]"

    return app
