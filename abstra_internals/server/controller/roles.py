import flask

from ...usage import usage
from ...repositories import roles_repository


def get_editor_bp():
    bp = flask.Blueprint("roles", __name__)

    @bp.get("/")
    @usage
    def _get_project_roles():
        return roles_repository.get_roles()

    return bp
