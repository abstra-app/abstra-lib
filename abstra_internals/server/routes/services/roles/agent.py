import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.service.roles.agent import RoleAgentController
from abstra_internals.entities.agents import ConnectionModel


def get_player_bp(main_controller: MainController) -> flask.Blueprint:
    controller = RoleAgentController(repos=main_controller.repositories)

    bp = flask.Blueprint("role_agent", __name__)

    @bp.post("/")
    def _create_task():
        if not flask.request.json:
            flask.abort(400)
        auth = flask.request.headers.get("authorization")
        if auth is None:
            raise Exception("Authorization header is required")
        payload = flask.request.json
        task_data = payload["task_data"]
        target_stage_id = payload["target_stage_id"]
        controller.create_foreign_task(
            task_type=task_data["type"],
            task_payload=task_data["payload"],
            target_stage_id=target_stage_id,
        )
        return {"success": True}

    @bp.get("/entrypoints")
    def _get_agent_entrypoints():
        project = main_controller.repositories.project.load(
            include_disabled_stages=False
        )
        return [ae.model_dump() for ae in project.get_agent_entrypoints()]

    @bp.post("/connection")
    def _create_connection():
        if not flask.request.json:
            flask.abort(400)
        auth = flask.request.headers.get("authorization")
        if auth is None:
            flask.abort(401)
        proof = auth.replace("Bearer ", "")
        connection = controller.repos.role_agents.create_connection_on_cloud(
            client_proof=proof,
            client_tasks_url=flask.request.json["client_tasks_url"],
            client_stage_id=flask.request.json["client_stage_id"],
            agent_stage_id=flask.request.json["agent_stage_id"],
            project=main_controller.repositories.project.load(
                include_disabled_stages=False
            ),
        )
        return connection.model_dump()

    @bp.patch("/connection")
    def _update_connection():
        if not flask.request.json:
            flask.abort(400)

        auth = flask.request.headers.get("authorization")
        assert auth is not None, "Authorization header is required"

        client_tasks_url = flask.request.json["client_tasks_url"]
        assert client_tasks_url is not None, "client_tasks_url is required"

        response = controller.repos.role_agents.update_connection_on_cloud(
            connection_token=auth,
            client_tasks_url=client_tasks_url,
        )

        if isinstance(response, ConnectionModel):
            return response.model_dump()
        else:
            return response["error"], response["status_code"]

    @bp.delete("/connection")
    def _delete_connection():
        connection_token = flask.request.headers.get("authorization")
        assert connection_token is not None, "Authorization header is required"

        controller.repos.role_agents.delete_connection_on_cloud(
            connection_token=connection_token
        )
        return {"success": True}

    return bp
