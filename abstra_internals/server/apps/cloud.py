import flask, flask_cors, flask_talisman
from flask_talisman import ALLOW_FROM

from ...cloud_init import cloud_setup
from ..controller import MainController
from ..blueprints.player import get_player_bp
from ...utils.environment import ENABLE_TALISMAN


def get_cloud_app(root: str):
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
