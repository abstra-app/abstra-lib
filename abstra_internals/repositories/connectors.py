import abc
from dataclasses import dataclass

from abstra_internals.cloud_api.http_client import HTTPClient
from abstra_internals.contracts_generated import (
    CloudApiCliConnectorsExecuteRequest,
    CloudApiCliConnectorsExecuteResponse0,
)


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

    def run_connection_action(
        self, connection_name: str, action: str, payload: dict = {}
    ) -> dict:
        response = self.client.post(
            endpoint=f"connectors/connection/{connection_name}/execute",
            json=CloudApiCliConnectorsExecuteRequest(
                connection_name=connection_name, action_name=action, parameters=payload
            ).to_dict(),
        )
        result = response.raise_for_status()
        result = response.json()
        if result["status"] == "error":
            raise Exception(result["message"])
        result = CloudApiCliConnectorsExecuteResponse0.from_dict(result)
        return result.data
