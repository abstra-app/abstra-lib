import flask

from abstra_internals.environment import IS_PRODUCTION
from abstra_internals.jwt_auth import USER_AUTH_HEADER_KEY
from abstra_internals.server.controller.main import MainController
from abstra_internals.server.guards.role_guard import Guard
from abstra_internals.usage import editor_usage


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("access_control", __name__)

    @bp.get("/")
    @editor_usage
    def _get_project_level_access_control():
        return controller.list_access_controls()

    @bp.put("/")
    @editor_usage
    def _update_access_controls():
        changes = flask.request.json
        if not changes:
            flask.abort(400)

        access_control = controller.update_access_controls(changes)
        return access_control if access_control else None

    return bp


def get_player_bp(main_controller: MainController):
    guard = Guard(main_controller.users_repository, enabled=IS_PRODUCTION)

    bp = flask.Blueprint("player_access_control", __name__)

    @bp.get("/allow/")
    @bp.get("/allow/<path:path>")
    def _get_allow_status_by_path(path: str = ""):
        authHeader = flask.request.headers.get(USER_AUTH_HEADER_KEY)
        return guard.should_allow(path, authHeader).to_dict()

    return bp
