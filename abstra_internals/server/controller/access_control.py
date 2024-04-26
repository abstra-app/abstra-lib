import flask

from ...repositories import users_repository
from ...usage import usage
from ..guards.role_guard import Guard
from .main import MainController


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("access_control", __name__)

    @bp.get("/")
    @usage
    def _get_project_level_access_control():
        return controller.list_access_controls()

    @bp.put("/")
    @usage
    def _update_access_controls():
        changes = flask.request.json
        if not changes:
            flask.abort(400)

        access_control = controller.update_access_controls(changes)
        return access_control if access_control else None

    return bp


def get_player_bp():
    guard = Guard(users_repository)

    bp = flask.Blueprint("player_access_control", __name__)

    @bp.get("/allow/<string:path>")
    def _get_allow_status_by_path(path: str):
        authHeader = flask.request.headers.get("Authorization")
        return guard.allow(path, authHeader).to_dict()

    return bp
