import flask

from abstra_internals.server.controller.main import MainController
from abstra_internals.usage import usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_ai", __name__)

    @bp.post("/message")
    @usage
    def _get_next_message():
        body = flask.request.json
        if not body:
            flask.abort(400)

        streamer = controller.send_ai_message(
            body["messages"], body["runtime"], body["threadId"]
        )

        if streamer is None:
            flask.abort(403)

        return flask.Response(streamer, mimetype="text/event-stream")

    @bp.post("/thread")
    @usage
    def _create_thread():
        thread = controller.create_thread()
        if not thread:
            flask.abort(403)
        return thread

    return bp
