import flask

from abstra_internals.controllers.agents import AgentsController
from abstra_internals.controllers.main import MainController


def get_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("editor_agent", __name__)
    controller = AgentsController(main_controller)

    @bp.get("/connections")
    def _get_agents():
        return controller.get_agent_connections()

    @bp.get("/is-usage-mode")
    def _get_is_usage_mode():
        return controller.get_is_usage_mode()

    return bp
