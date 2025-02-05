from abc import abstractmethod
from typing import Dict, List, Optional

import requests

from abstra_internals.cloud_api import get_project_info
from abstra_internals.credentials import resolve_headers
from abstra_internals.entities.agents import (
    AgentEntrypoint,
    AgentModel,
    ConnectionModel,
    SignProofResponse,
)
from abstra_internals.environment import PROJECT_ID, SIDECAR_HEADERS
from abstra_internals.repositories.services.roles.common import RoleCommonRepository
from abstra_internals.settings import Settings


class RoleClientRepository(RoleCommonRepository):
    _cached_agents: Optional[Dict[str, AgentModel]] = None
    _cached_connections: Optional[List[ConnectionModel]] = None
    base_url: str

    def get_connections(self) -> List[ConnectionModel]:
        return self._cached_connections or []

    @property
    def role(self):
        return "client"

    @abstractmethod
    def get_headers(self):
        raise NotImplementedError

    @abstractmethod
    def get_current_project_id(self):
        raise NotImplementedError

    def sign_proof(self, agent_project_id: str):
        client_project_id = self.get_current_project_id()
        headers = self.get_headers()
        assert headers is not None, "You should be logged in to sign a proof"
        url = f"{self.base_url}/sign-proof"
        response = requests.post(
            url,
            headers=headers,
            json=dict(
                clientProjectId=client_project_id,
                agentProjectId=agent_project_id,
            ),
        )
        if not response.ok:
            raise Exception(response.text)
        return SignProofResponse.model_validate_json(response.text)

    def get_or_create_connection_to_agent(
        self, agent_project_id: str, client_stage_id: str, agent_stage_id: str
    ):
        for connection in self.get_connections():
            if connection.agent_project_id != agent_project_id:
                continue
            if connection.client_stage_id != client_stage_id:
                continue
            if connection.agent_stage_id != agent_stage_id:
                continue
            return connection
        return self.connect_to_agent(agent_project_id, client_stage_id, agent_stage_id)

    def connect_to_agent(
        self, agent_project_id: str, client_stage_id: str, agent_stage_id: str
    ) -> ConnectionModel:
        """
        First step of the protocol. It connects to another abstra project known as an agent.
        """
        url = self.get_agents([agent_project_id])[0].tasks_url + "/agent/connection"
        public_url = Settings.public_url
        assert (
            public_url is not None
        ), "You should be connected to a tunnel to connect to an agent"
        proof = self.sign_proof(agent_project_id=agent_project_id).signedProof
        response = requests.post(
            url,
            headers={
                "Authorization": f"Bearer {proof}",
            },
            json=dict(
                client_tasks_url=public_url + "/_tasks/client",
                agent_project_id=agent_project_id,
                client_proof=proof,
                agent_stage_id=agent_stage_id,
                client_stage_id=client_stage_id,
            ),
        )

        response.raise_for_status()
        connection = ConnectionModel.model_validate(response.json())
        self._cached_connections = self.get_connections() + [connection]
        return connection

    def update_connection(
        self, connection: ConnectionModel, client_tasks_url: str
    ) -> ConnectionModel:
        agent = self.get_agent(connection.agent_project_id)

        url = agent.tasks_url + "/agent/connection"
        response = requests.patch(
            url,
            headers={
                "Authorization": connection.token,
            },
            json=dict(
                client_tasks_url=client_tasks_url,
            ),
        )
        response.raise_for_status()
        connection = ConnectionModel.model_validate(response.json())
        self._cached_connections = self.get_connections() + [connection]
        return connection

    def delete_connection(self, connection: ConnectionModel):
        agent = self.get_agent(connection.agent_project_id)

        url = agent.tasks_url + "/agent/connection"
        response = requests.delete(
            url,
            headers={
                "Authorization": connection.token,
            },
        )
        response.raise_for_status()
        self._cached_connections = [
            c for c in self.get_connections() if c.token != connection.token
        ]

    def get_agents(self, ids: List[str]) -> List[AgentModel]:
        if self._cached_agents is not None and all(
            id in self._cached_agents for id in ids
        ):
            return [self._cached_agents[id] for id in ids]
        else:
            headers = self.get_headers()
            assert headers is not None, "You should be logged in to get agents"
            url = f"{self.base_url}/agents"
            response = requests.get(url, headers=headers, params={"ids": ids})
            if not response.ok:
                raise Exception(response.text)
            agents = [AgentModel.model_validate(agent) for agent in response.json()]
            self._cached_agents = {agent.project_id: agent for agent in agents}
            return agents

    def get_agent(self, id: str):
        return self.get_agents([id])[0]

    def get_entrypoints(self, project_id: str) -> List[AgentEntrypoint]:
        agent = self.get_agent(project_id)
        url = agent.tasks_url + "/agent/entrypoints"
        res = requests.get(url)
        res.raise_for_status()
        return [AgentEntrypoint.model_validate(e) for e in res.json()]


class ProductionRoleClientRepository(RoleClientRepository):
    def get_headers(self):
        return SIDECAR_HEADERS

    def get_current_project_id(self):
        return PROJECT_ID


class LocalRoleClientRepository(RoleClientRepository):
    def get_headers(self):
        return resolve_headers()

    def get_current_project_id(self):
        headers = resolve_headers()
        assert headers is not None, "You should be logged in to get the project id"
        return get_project_info(headers)["id"]
