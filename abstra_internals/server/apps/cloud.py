import flask
import flask_cors

from abstra_internals.server.blueprints.player import get_player_bp
from abstra_internals.server.controller.main import MainController


def get_cloud_app(controller: MainController):
    app = flask.Flask(__name__)
    app.config["SOCK_SERVER_OPTIONS"] = {"subprotocols": ["default"]}
    app.url_map.strict_slashes = False
    flask_cors.CORS(app)

    player = get_player_bp(controller)
    app.register_blueprint(player)

    return app
