from abc import ABC, abstractmethod
from typing import Any, List

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import CLOUD_API_CLI_URL, SIDECAR_HEADERS, SIDECAR_URL


class AiApiHttpClient(ABC):
    def __init__(self, base_url: str) -> None:
        self.url = f"{base_url}/ai"

    @abstractmethod
    def prompt(self, messages: List[Any], tools: List[Any]) -> requests.Response:
        raise NotImplementedError()


class ProductionAiApiHttpClient(AiApiHttpClient):
    def prompt(self, messages: List[Any], tools: List[Any]) -> requests.Response:
        body = {
            "messages": messages,
            "tools": tools,
        }
        return requests.post(f"{self.url}/prompt", headers=SIDECAR_HEADERS, json=body)


class LocalAiApiHttpClient(AiApiHttpClient):
    def prompt(self, messages: List[Any], tools: List[Any]) -> requests.Response:
        body = {
            "messages": messages,
            "tools": tools,
        }
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to use AI")
        return requests.post(f"{self.url}/prompt", headers=headers, json=body)


def ai_api_http_client_factory() -> AiApiHttpClient:
    if SIDECAR_URL is None:
        return LocalAiApiHttpClient(CLOUD_API_CLI_URL)
    else:
        return ProductionAiApiHttpClient(SIDECAR_URL)
