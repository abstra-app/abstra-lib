import os

import flask
import flask_cors

from abstra_internals.controllers.main import MainController
from abstra_internals.server.blueprints.player import get_player_bp


def get_cloud_app(controller: MainController):
    app = flask.Flask(__name__)
    app.config["SOCK_SERVER_OPTIONS"] = {"subprotocols": ["default"]}
    app.url_map.strict_slashes = False
    flask_cors.CORS(app, supports_credentials=True)

    @app.after_request
    def add_security_headers(response):
        if os.getenv("ABSTRA_SECURITY_HEADERS", "false").lower() == "true":
            response.headers["Strict-Transport-Security"] = (
                "max-age=31536000; includeSubDomains; preload"
            )
            response.headers["X-Frame-Options"] = "SAMEORIGIN"
            response.headers["X-Content-Type-Options"] = "nosniff"
            response.headers["X-XSS-Protection"] = "1; mode=block"
            response.headers["X-Permitted-Cross-Domain-Policies"] = "none"
            response.headers["Cross-Origin-Opener-Policy"] = "same-origin"
            response.headers["Cross-Origin-Embedder-Policy"] = "require-corp"
            response.headers["Cross-Origin-Resource-Policy"] = "cross-origin"
            response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
            response.headers["Content-Security-Policy"] = (
                "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; "
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
                "font-src 'self' data: https://fonts.gstatic.com; "
                "img-src 'self' data: https:; connect-src 'self' https://*.abstra.app; "
                "frame-ancestors 'self'"
            )
            response.headers["Permissions-Policy"] = (
                "geolocation=(), microphone=(), camera=(), fullscreen=(self), payment=(), "
                "usb=(), magnetometer=(), gyroscope=(), accelerometer=(), ambient-light-sensor=(), "
                "autoplay=(self), encrypted-media=()"
            )
        return response

    player = get_player_bp(controller)
    app.register_blueprint(player)

    return app
