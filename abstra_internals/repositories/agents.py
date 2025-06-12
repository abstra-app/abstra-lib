import abc
from typing import TypedDict, Union

from abstra_internals.cloud_api.http_client import HTTPClient


class TokenValidationResult(TypedDict):
    is_valid: bool
    client_project_id: Union[str, None]
    error: Union[str, None]


class AgentsRepository(abc.ABC):
    def __init__(self, client: HTTPClient):
        self.client = client

    def validate_token(self, token: str) -> TokenValidationResult:
        if not token:
            raise ValueError("Token is required")

        response = self.client.post(
            "agents/validate_token",
            headers=self.get_headers(),
            json={
                "token": token,
            },
        )

        if not response.ok:
            return {
                "is_valid": False,
                "client_project_id": None,
                "error": response.text,
            }

        returned_data = response.json()

        return {
            "is_valid": returned_data.get("isValid"),
            "client_project_id": returned_data.get("clientProjectId"),
            "error": returned_data.get("error"),
        }

    def accept_connection(self, token: str):
        if not token:
            raise ValueError("Token is required")

        response = self.client.post(
            endpoint="agents/accept_connection",
            json={
                "token": token,
            },
        )
        response.raise_for_status()

        return response.json()

    def get_agent_connections(self):
        response = self.client.get(
            endpoint="agents/connections",
        )
        response.raise_for_status()
        return response.json()

    def get_is_usage_mode(self):
        try:
            response = self.client.get(
                endpoint="agents/is_usage_mode",
            )
            response.raise_for_status()
            return {"is_usage_mode": response.json()}
        except Exception:
            return {"is_usage_mode": False}

    def get_headers(self) -> dict:
        raise NotImplementedError()
