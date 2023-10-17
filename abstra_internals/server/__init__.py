import flask, flask_cors, flask_talisman
from flask_talisman import ALLOW_FROM
from ..overloads import overloads
from .controller import MainController
from .apps.player import get_player_bp
from ..settings import SettingsController
from ..utils.environment import ENABLE_TALISMAN


# USED ON CLOUD SERVER
def get_cloud_app(root: str):
    SettingsController.set_root_path(root)
    SettingsController.set_server_port(None)

    overloads()
    controller = MainController()
    app = flask.Flask(__name__)
    flask_cors.CORS(app)

    if ENABLE_TALISMAN:
        talisman = flask_talisman.Talisman(
            app,
            content_security_policy={"frame-ancestors": ["*"]},
            frame_options=ALLOW_FROM,
            frame_options_allow_from="*",
        )

        @app.route("/_healthcheck")
        @talisman(force_https=False)
        def _healthcheck():
            return "ok"

    else:

        @app.route("/_healthcheck")
        def _healthcheck():
            return "ok"

    player = get_player_bp(controller)
    app.register_blueprint(player)

    return app
