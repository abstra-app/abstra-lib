import flask, flask_cors

from .api import API
from .overloads import overloads
from .apps.player import get_player_bp
from ..settings import SettingsController


# USED ON CLOUD SERVER
def get_cloud_app(root: str):
    SettingsController.set_root_path(root)
    SettingsController.set_server_port(None)

    overloads()
    api = API()
    app = flask.Flask(__name__)
    flask_cors.CORS(app)

    player = get_player_bp(api)
    app.register_blueprint(player)

    return app
