from typing import List, Literal

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.entities.agents import ConnectionModel


def get_connections(role: Literal["client", "agent"]) -> List[ConnectionModel]:
    """
    Get a list of available connections based on the specified role.

    Args:
        role (Literal["client", "agent"]): The role to get connections for, either "client" or "agent".

    Returns:
        List[ConnectionModel]: A list of connection models for the specified role.
    """
    if role == "client":
        return (
            SDKContextStore.get_by_thread().repositories.role_clients.get_connections()
        )
    else:
        return (
            SDKContextStore.get_by_thread().repositories.role_agents.get_connections()
        )


def validate_token(token: str):
    return SDKContextStore.get_by_thread().repositories.agents.validate_token(token)


def accept_connection(token: str):
    return SDKContextStore.get_by_thread().repositories.agents.accept_connection(token)


__all__ = ["get_connections"]
