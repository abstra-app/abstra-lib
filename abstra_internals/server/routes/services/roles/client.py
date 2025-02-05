import flask
from flask import Blueprint

from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.service.roles.client import RoleClientController


def get_player_bp(main_controller: MainController) -> Blueprint:
    controller = RoleClientController(main_controller.repositories)

    bp = Blueprint("role_client", __name__)

    @bp.post("/")
    def _create_task():
        if not flask.request.json:
            flask.abort(400)
        auth = flask.request.headers.get("authorization")
        if auth is None:
            raise Exception("Authorization header is required")
        payload = flask.request.json
        connection = next(
            c
            for c in controller.repos.role_clients.get_connections()
            if c.token == auth
        )

        controller.create_foreign_task(
            task_type=payload["type"],
            task_payload=payload["payload"],
            target_stage_id=connection.client_stage_id,
        )
        return {"success": True}

    return bp


def get_editor_bp(main_controller: MainController) -> Blueprint:
    bp = Blueprint("role_client_editor", __name__)
    controller = RoleClientController(main_controller.repositories)

    @bp.get("/entrypoints/<string:project_id>")
    def _entrypoints(project_id):
        return controller.entrypoints(project_id)

    return bp
