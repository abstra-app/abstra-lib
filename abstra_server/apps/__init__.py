import os, flask, flask_cors, eventlet, eventlet.wsgi as wsgi

from ..api import API
from ..overloads import overloads
from .editor import get_editor_bp
from .player import get_player_bp


def create_app(api: API):
    app = flask.Flask(__name__)
    flask_cors.CORS(app)

    editor = get_editor_bp(api)
    app.register_blueprint(editor, url_prefix="/_editor")

    player = get_player_bp(api)
    app.register_blueprint(player)

    return app


def serve(workspace_root: str, port: int):
    os.environ["ABSTRA_SERVER"] = "true"
    overloads()

    api = API(workspace_root)
    app = create_app(api)
    eventlet.monkey_patch()
    wsgi.server(eventlet.listen(("localhost", port)), app, debug=True)
