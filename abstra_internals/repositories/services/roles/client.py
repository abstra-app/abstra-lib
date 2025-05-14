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
from abstra_internals.environment import PROJECT_ID, REQUEST_TIMEOUT, SIDECAR_HEADERS
from abstra_internals.repositories.project.project import LocalProjectRepository
from abstra_internals.repositories.services.roles.common import RoleCommonRepository
from abstra_internals.settings import Settings


class ConnectionNotFound(Exception):
    pass


class RoleClientRepository(RoleCommonRepository):
    _cached_agents: Optional[Dict[str, AgentModel]] = None
    _cached_connections: Optional[List[ConnectionModel]] = None
    base_url: str

    def sync_connections(self):
        if not Settings.has_public_url() or not self.get_headers():
            return

        if self._cached_connections is None:
            self._cached_connections = []

        # TODO(lucasrrt): this should be injected, but once agents will be removed from the project
        # in a near future, I won't bother with this
        project = LocalProjectRepository().load()
        connections = self.get_connections()

        for connection in connections:
            for agent in project.agents:
                if agent.id == connection.client_stage_id:
                    break
            else:
                self.delete_connection(connection)

        for agent in project.agents:
            if not agent.client_stage_id or not agent.project_id:
                continue

            for connection in connections:
                if (
                    connection.agent_stage_id == agent.client_stage_id
                    and connection.agent_project_id == agent.project_id
                    and connection.client_stage_id == agent.id
                ):
                    self.update_or_create_connection(connection=connection)
                    break

            else:
                self.connect_to_agent(
                    agent_stage_id=agent.client_stage_id,
                    agent_project_id=agent.project_id,
                    client_stage_id=agent.id,
                )

    def get_connections(self) -> List[ConnectionModel]:
        if self._cached_connections is None:
            self.sync_connections()
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
            timeout=REQUEST_TIMEOUT,
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
            timeout=REQUEST_TIMEOUT,
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
            timeout=REQUEST_TIMEOUT,
        )

        if not response.ok:
            if response.status_code == 404:
                raise ConnectionNotFound()
            raise Exception(response.text)

        connection = ConnectionModel.model_validate(response.json())
        self._cached_connections = [
            c for c in self.get_connections() if c.token != connection.token
        ] + [connection]
        return connection

    def update_or_create_connection(
        self, connection: ConnectionModel
    ) -> ConnectionModel:
        public_url = Settings.public_url
        assert (
            public_url is not None
        ), "You should be connected to a tunnel to connect to an agent"

        client_tasks_url = public_url + "/_tasks/client"
        try:
            return self.update_connection(connection, client_tasks_url)
        except ConnectionNotFound:
            self._cached_connections = [
                c for c in self.get_connections() if c.token != connection.token
            ]
            return self.connect_to_agent(
                agent_project_id=connection.agent_project_id,
                client_stage_id=connection.client_stage_id,
                agent_stage_id=connection.agent_stage_id,
            )

    def delete_connection(self, connection: ConnectionModel):
        agent = self.get_agent(connection.agent_project_id)

        url = agent.tasks_url + "/agent/connection"
        response = requests.delete(
            url,
            headers={
                "Authorization": connection.token,
            },
            timeout=REQUEST_TIMEOUT,
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
            response = requests.get(
                url, headers=headers, params={"ids": ids}, timeout=REQUEST_TIMEOUT
            )
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
        res = requests.get(url, timeout=REQUEST_TIMEOUT)
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
