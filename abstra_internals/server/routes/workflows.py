import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.workflows import WorkflowController
from abstra_internals.environment import IS_PRODUCTION
from abstra_internals.logger import AbstraLogger
from abstra_internals.server.guards.role_guard import Guard, StageIdSelector
from abstra_internals.usage import editor_usage


def get_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("editor_workflows", __name__)
    controller = WorkflowController(main_controller.repositories)

    # 1s pooling in this route
    @bp.get("/")
    def _load_workflow():
        try:
            return controller.get_workflow_settings()
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

            new_state = controller.update_workflow(
                payload["state"], payload.get("module")
            )

            return new_state
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return str(e), 500

    return bp


def get_player_bp(main_controller: MainController):
    controller = WorkflowController(main_controller.repositories)
    guard = Guard(
        main_controller.users_repository,
        project_repository=main_controller.repositories.project,
        enabled=IS_PRODUCTION,
    )

    bp = flask.Blueprint("player_workflow", __name__)

    # 1s pooling in this route
    @bp.get("/")
    @guard.by(StageIdSelector("kanban"))
    def _load_workflow():
        try:
            return controller.get_workflow_settings()
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return str(e), 500

    return bp
