from typing import List, Literal

from abstra_internals.controllers.sdk_context import SDKContextStore
from abstra_internals.entities.agents import ConnectionModel


def get_connections(role: Literal["client", "agent"]) -> List[ConnectionModel]:
    if role == "client":
        return (
            SDKContextStore.get_by_thread().repositories.role_clients.get_connections()
        )
    else:
        return (
            SDKContextStore.get_by_thread().repositories.role_agents.get_connections()
        )


__all__ = ["get_connections"]
