import flask

from abstra_internals.controllers.ai import AiController
from abstra_internals.controllers.main import MainController
from abstra_internals.usage import editor_manual_usage, editor_usage


def get_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("editor_ai", __name__)
    controller = AiController(main_controller)

    @bp.post("/message")
    @editor_usage
    def _get_next_message():
        body = flask.request.json
        if not body:
            flask.abort(400)

        streamer = controller.send_ai_message(
            body["messages"],
            body["stageId"],
            body["langGraphThreadId"],
            body["code"],
            body["executionError"],
            body["allowedActionsSchema"],
        )

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
        return thread

    @bp.post("/cancel-all")
    @editor_usage
    def _cancel_all():
        body = flask.request.json
        if not body:
            flask.abort(400)
        thread_id = body.get("threadId")
        if not thread_id:
            flask.abort(400)
        controller.cancel_all(thread_id)
        return {"success": True}

    @bp.post("/generate")
    @editor_usage
    def _generate():
        body = flask.request.json
        if not body:
            flask.abort(400)

        prompt = body.get("prompt")
        if not prompt:
            flask.abort(400)

        controller.generate_project(prompt)
        return {"success": True}

    @bp.post("/vote")
    def _vote():
        body = flask.request.json
        if not body:
            flask.abort(400)
        vote = body.get("vote")
        question = body.get("question")
        answer = body.get("answer")
        context = body.get("context")

        editor_manual_usage(
            event="ai_vote",
            payload=dict(vote=vote, question=question, answer=answer, context=context),
        )

        return {"success": True}

    @bp.get("/actions-version")
    def _get_actions_version():
        return {"version": "v1"}

    return bp
