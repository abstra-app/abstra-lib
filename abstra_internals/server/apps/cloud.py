import flask, flask_cors, flask_talisman
from flask_talisman import ALLOW_FROM

from ...stdio_monkey_patch import override_stdio
from ..controller import MainController
from ...settings import SettingsController
from ..blueprints.player import get_player_bp
from ...utils.environment import ENABLE_TALISMAN


def get_cloud_app(root: str):
    SettingsController.set_root_path(root)
    SettingsController.set_server_port(None)

    override_stdio(print_exceptions=True)
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
