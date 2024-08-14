import abc
from dataclasses import dataclass

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import CLOUD_API_CLI_URL, SIDECAR_HEADERS, SIDECAR_URL


@dataclass
class AccessTokenDTO:
    connectionName: str
    connectorType: str
    projectId: str
    token: str
    expiresAt: str


class ConnectorsRepository(abc.ABC):
    url: str

    def __init__(self, base_url: str) -> None:
        self.url = f"{base_url}/connectors"

    def get_access_token_url(self, connection_name: str) -> str:
        return f"{self.url}/connection/{connection_name}/access-token"

    def get_headers(self) -> dict:
        raise NotImplementedError()

    def get_access_token(self, connection_name: str) -> AccessTokenDTO:
        response = requests.get(
            self.get_access_token_url(connection_name), headers=self.get_headers()
        )
        response.raise_for_status()
        return AccessTokenDTO(**response.json())


class ProductionConnectorsRepository(ConnectorsRepository):
    def get_headers(self) -> dict:
        return SIDECAR_HEADERS


class LocalConnectorsRepository(ConnectorsRepository):
    def get_headers(self) -> dict:
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to execute a table query")
        return headers


def connectors_repository_factory() -> ConnectorsRepository:
    if SIDECAR_URL is None:
        return LocalConnectorsRepository(CLOUD_API_CLI_URL)
    else:
        return ProductionConnectorsRepository(SIDECAR_URL)
