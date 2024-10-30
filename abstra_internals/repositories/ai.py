import json
from abc import ABC, abstractmethod
from typing import Any, List

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import SIDECAR_HEADERS


class AiApiHttpClient(ABC):
    def __init__(self, base_url: str) -> None:
        self.url = f"{base_url}/ai"

    @abstractmethod
    def prompt(self, messages: List[Any], tools: List[Any], temperature: float):
        raise NotImplementedError()


class ProductionAiApiHttpClient(AiApiHttpClient):
    def prompt(self, messages: List[Any], tools: List[Any], temperature: float):
        body = {
            "messages": messages,
            "tools": tools,
            "temperature": temperature,
        }
        response = requests.post(
            f"{self.url}/prompt", headers=SIDECAR_HEADERS, json=body
        )
        try:
            response = response.json()
            return response
        except json.JSONDecodeError:
            raise Exception(f"Error parsing JSON: {response.text}")


class LocalAiApiHttpClient(AiApiHttpClient):
    def prompt(self, messages: List[Any], tools: List[Any], temperature: float):
        body = {
            "messages": messages,
            "tools": tools,
            "temperature": temperature,
        }
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to use AI")
        response = requests.post(f"{self.url}/prompt", headers=headers, json=body)
        try:
            response = response.json()
            return response
        except json.JSONDecodeError:
            raise Exception(f"Error parsing JSON: {response.text}")
