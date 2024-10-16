import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.workflows import get_workflow, update_workflow
from abstra_internals.environment import IS_PRODUCTION
from abstra_internals.logger import AbstraLogger
from abstra_internals.server.guards.role_guard import Guard, StageIdSelector
from abstra_internals.usage import editor_usage


def get_editor_bp(_: MainController):
    bp = flask.Blueprint("editor_workflows", __name__)

    # 1s pooling in this route
    @bp.get("/")
    def _load_workflow():
        try:
            return get_workflow()
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return str(e), 500

    @bp.put("/")
    @editor_usage
    def _update_workflow():
        try:
            payload = flask.request.json
            if payload is None:
                raise Exception("No payload found")
            new_state = update_workflow(payload)
            return new_state
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return str(e), 500

    return bp


def get_player_bp(main_controller: MainController):
    guard = Guard(main_controller.users_repository, enabled=IS_PRODUCTION)

    bp = flask.Blueprint("player_workflow", __name__)

    # 1s pooling in this route
    @bp.get("/")
    @guard.by(StageIdSelector("kanban"))
    def _load_workflow():
        try:
            return get_workflow()
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return str(e), 500

    return bp
