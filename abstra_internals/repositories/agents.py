import abc
from typing import TypedDict, Union

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import SIDECAR_HEADERS


class TokenValidationResult(TypedDict):
    is_valid: bool
    client_project_id: Union[str, None]
    error: Union[str, None]


class AgentsRepository(abc.ABC):
    url: str

    def __init__(self, base_url: str) -> None:
        self.url = f"{base_url}/agents"

    def validate_token(self, token: str) -> TokenValidationResult:
        if not token:
            raise ValueError("Token is required")

        response = requests.post(
            f"{self.url}/validate_token",
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

        response = requests.post(
            f"{self.url}/accept_connection",
            headers=self.get_headers(),
            json={
                "token": token,
            },
        )
        response.raise_for_status()

        return response.json()

    def get_headers(self) -> dict:
        raise NotImplementedError()


class LocalAgentsRepository(AgentsRepository):
    def get_headers(self) -> dict:
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to work with agents")
        return headers


class ProductionAgentsRepository(AgentsRepository):
    def get_headers(self) -> dict:
        return SIDECAR_HEADERS
