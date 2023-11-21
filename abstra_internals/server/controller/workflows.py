import flask

from ...usage import usage
from ...settings import Settings
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_workflows", __name__)

    @bp.get("/initial-data")
    @usage
    def _get_workflow_editor_data():
        try:
            return controller.workflow_initial_data()
        except Exception as e:
            return str(e), 500

    @bp.post("/move")
    @usage
    def _workflow_move():
        try:
            payload = flask.request.json
            controller.workflow_move(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.post("/add-nodes")
    @usage
    def _bulk_create_stages():
        try:
            payload = flask.request.json
            controller.workflow_add_nodes(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.post("/duplicate-nodes")
    @usage
    def _bulk_duplicate_stages():
        try:
            payload = flask.request.json
            controller.workflow_duplicate_nodes(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.post("/delete")
    @usage
    def _bulk_delete():
        try:
            payload = flask.request.json
            controller.workflow_delete(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    @bp.post("/add-transition")
    @usage
    def _bulk_create_transitions():
        try:
            payload = flask.request.json
            controller.workflow_add_transition(payload)
            return flask.Response(status=204)
        except Exception as e:
            return str(e), 500

    return bp
