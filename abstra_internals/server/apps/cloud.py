import flask
import flask_cors
import flask_talisman
from flask_talisman import ALLOW_FROM

from ...cloud_init import cloud_setup
from ...logger import AbstraLogger
from ...utils.environment import ENABLE_TALISMAN
from ..blueprints.player import get_player_bp
from ..controller.main import MainController


def get_cloud_app(root: str):
    AbstraLogger.init("cloud")  # TODO: move to run_cloud_server in 2.9.0

    cloud_setup(root)

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
