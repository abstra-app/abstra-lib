import flask

from abstra_internals.contracts_generated import AbstraLibApiAiStreamRequest
from abstra_internals.controllers.ai import AiController
from abstra_internals.controllers.main import MainController
from abstra_internals.usage import editor_usage


def get_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("editor_ai", __name__)
    controller = AiController(main_controller)

    @bp.post("/stream")
    @editor_usage
    def _get_next_message():
        body = flask.request.json
        if not body:
            flask.abort(400)

        body = AbstraLibApiAiStreamRequest.from_dict(body)

        streamer = controller.send_ai_message(body)

        if streamer is None:
            flask.abort(403)

        return flask.Response(streamer, mimetype="text/event-stream")

    @bp.post("/abort")
    @editor_usage
    def _abort():
        body = flask.request.json
        if not body:
            flask.abort(400)
        thread_id = body.get("langGraphThreadId")
        if not thread_id:
            flask.abort(400)
        controller.abort_thread(thread_id)
        return {"success": True}

    @bp.get("/history")
    @editor_usage
    def _get_history():
        limit = flask.request.args.get("limit")
        limit = int(limit) if limit else 10
        offset = flask.request.args.get("offset")
        offset = int(offset) if offset else 0
        threads = controller.get_history(limit, offset)
        if threads is None:
            flask.abort(403)
        return threads

    @bp.post("/thread")
    @editor_usage
    def _create_thread():
        thread = controller.create_thread()
        if not thread:
            flask.abort(403)
        return thread.to_dict()

    @bp.delete("/thread/<thread_id>")
    @editor_usage
    def _delete_thread(thread_id: str):
        """
        Delete a conversation thread.
        """
        controller.delete_thread(thread_id)
        return {"success": True}

    @bp.post("/start-conversation")
    def _start_conversation():
        """
        Start a new conversation with the AI.
        """
        conversation = controller.start_conversation()
        if not conversation:
            flask.abort(403)
        return conversation

    return bp
