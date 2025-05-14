from typing import TypedDict, Union

import requests

from abstra_internals.entities.agents import ConnectionModel
from abstra_internals.environment import PROJECT_ID, REQUEST_TIMEOUT, SIDECAR_HEADERS
from abstra_internals.repositories.project.project import Project
from abstra_internals.repositories.services.roles.common import RoleCommonRepository


class FailedResponse(TypedDict):
    error: str
    status_code: int


class RoleAgentRepository(RoleCommonRepository):
    def fetch_connections(self):
        headers = self.get_headers()
        assert headers is not None, "You should be logged in to get connections"
        url = f"{self.base_url}/connections"
        response = requests.get(url, headers=headers, timeout=REQUEST_TIMEOUT)
        if not response.ok:
            raise Exception(response.text)
        self._cached_connections = [
            ConnectionModel.from_camel(connection) for connection in response.json()
        ]
        return self._cached_connections

    def get_connections(self):
        return self.fetch_connections()

    def get_connection_by_stage_id(self, stage_id: str):
        connections = self.get_connections()
        for connection in connections:
            if connection.client_stage_id == stage_id:
                return connection
        raise Exception(f"Connection not found for stage {stage_id}")

    def get_connection_by_token(self, token: str):
        connections = self.get_connections()
        for connection in connections:
            if connection.token == token:
                return connection
        raise Exception(f"Connection not found for token {token}")

    @property
    def role(self):
        return "agent"

    def create_connection_on_cloud(
        self,
        client_proof: str,
        client_stage_id: str,
        agent_stage_id: str,
        client_tasks_url: str,
        project: Project,
    ) -> ConnectionModel:
        """
        Second step of the protocol. As the server, it asks the cloud to build the connection.
        """
        agent_project_id = self.get_current_project_id()
        headers = self.get_headers()
        assert headers is not None, "You should be logged in to connect an agent"
        url = f"{self.base_url}/connections"
        body = {
            "clientStageId": client_stage_id,
            "agentProjectId": agent_project_id,
            "agentStageId": agent_stage_id,
            "clientProof": client_proof,
            "clientTaskUrl": client_tasks_url,
            "agentEntrypoints": [
                ae.to_camel() for ae in project.get_agent_entrypoints()
            ],
        }
        response = requests.post(
            url, headers=headers, json=body, timeout=REQUEST_TIMEOUT
        )
        if not response.ok:
            raise Exception(response.text)
        self.fetch_connections()  # Refresh the cache
        return ConnectionModel.from_camel(response.json())

    def update_connection_on_cloud(
        self, connection_token: str, client_tasks_url: str
    ) -> Union[ConnectionModel, FailedResponse]:
        """
        Used to update the callback url
        """
        headers = self.get_headers()
        assert headers is not None, "You should be logged in to connect an agent"
        url = f"{self.base_url}/connections"
        body = {
            "token": connection_token,
            "clientTaskUrl": client_tasks_url,
        }
        response = requests.patch(
            url, headers=headers, json=body, timeout=REQUEST_TIMEOUT
        )

        if not response.ok:
            error_message = (
                response.json().get("error")
                if "error" in response.json()
                else response.text
            )

            return {
                "status_code": response.status_code,
                "error": error_message,
            }

        self.fetch_connections()  # Refresh the cache
        return ConnectionModel.from_camel(response.json())

    def delete_connection_on_cloud(self, connection_token: str):
        headers = self.get_headers()
        assert headers is not None, "You should be logged in to connect an agent"
        url = f"{self.base_url}/connections"
        body = {
            "tokens": [connection_token],
        }
        response = requests.delete(
            url, headers=headers, json=body, timeout=REQUEST_TIMEOUT
        )
        response.raise_for_status()
        self.fetch_connections()


class ProductionRoleAgentRepository(RoleAgentRepository):
    def get_headers(self):
        return SIDECAR_HEADERS

    def get_current_project_id(self):
        return PROJECT_ID


class LocalRoleAgentRepository(RoleAgentRepository):
    def get_headers(self):
        # TODO: Implement local headers
        raise NotImplementedError

    def get_current_project_id(self):
        # TODO: Implement local project id
        raise NotImplementedError
