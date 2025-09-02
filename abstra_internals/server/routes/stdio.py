import flask
import flask_sock

from abstra_internals.controllers.execution.execution_stdio import BroadcastController
from abstra_internals.logger import AbstraLogger


def get_editor_bp(_):
    bp = flask.Blueprint("editor_stdio", __name__)
    sock = flask_sock.Sock(bp)

    @sock.route("/listen")
    def _websocket(ws: flask_sock.Server):
        try:
            ws.thread.name = "StdioWebSocket"
            BroadcastController.register(ws)
            ws.event.wait()
        except Exception as e:
            AbstraLogger.capture_exception(e)
        finally:
            BroadcastController.unregister(ws)

    return bp
