from abc import ABC, abstractmethod
from typing import Dict, List, Literal, Optional

from abstra_internals.entities.agents import AgentModel, ConnectionModel


class RoleCommonRepository(ABC):
    _cached_agents: Optional[Dict[str, AgentModel]] = None
    _cached_connections: Optional[List[ConnectionModel]] = None
    base_url: str

    @abstractmethod
    def get_connections(self) -> List[ConnectionModel]:
        raise NotImplementedError

    @property
    @abstractmethod
    def role(self) -> Literal["client", "agent"]:
        raise NotImplementedError

    def __init__(self, base_url: str) -> None:
        self.base_url = base_url + "/services/roles/" + self.role

    @abstractmethod
    def get_headers(self):
        raise NotImplementedError

    @abstractmethod
    def get_current_project_id(self):
        raise NotImplementedError
