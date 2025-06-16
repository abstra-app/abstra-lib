import abc
from dataclasses import dataclass

from abstra_internals.cloud_api.http_client import HTTPClient


@dataclass
class AccessTokenDTO:
    connectionName: str
    connectorType: str
    projectId: str
    token: str
    expiresAt: str


class ConnectorsRepository(abc.ABC):
    def __init__(self, client: "HTTPClient") -> None:
        self.client = client

    def get_access_token(self, connection_name: str) -> AccessTokenDTO:
        response = self.client.get(
            endpoint=f"connectors/connection/{connection_name}/access-token",
        )
        response.raise_for_status()
        return AccessTokenDTO(**response.json())
