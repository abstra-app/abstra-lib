import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.usage import editor_usage


def get_editor_bp(main_controller: MainController):
    bp = flask.Blueprint("roles", __name__)

    @bp.get("/")
    @editor_usage
    def _get_project_roles():
        return main_controller.roles_repository.get_roles()

    return bp
