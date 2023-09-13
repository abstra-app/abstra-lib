import flask, flask_cors, pathlib

from .api import API
from .overloads import overloads
from .apps.player import get_player_bp
from ..settings import SettingsController


# USED ON CLOUD SERVER
def get_cloud_app(root: str):
    overloads()
    SettingsController.set_root_path(root)

    api = API()
    app = flask.Flask(__name__)
    flask_cors.CORS(app)

    player = get_player_bp(api)
    app.register_blueprint(player)

    return app
