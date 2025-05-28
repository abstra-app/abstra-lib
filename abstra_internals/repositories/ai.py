import json
from abc import ABC, abstractmethod
from typing import Any, List

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import REQUEST_TIMEOUT, SIDECAR_HEADERS


class AiApiHttpClient(ABC):
    def __init__(self, base_url: str) -> None:
        self.url = f"{base_url}/ai"

    @abstractmethod
    def prompt(self, messages: List[Any], tools: List[Any], temperature: float):
        raise NotImplementedError()

    @abstractmethod
    def parse_document(self, model: str, file_content: bytes, mime_type: str):
        raise NotImplementedError()


class ProductionAiApiHttpClient(AiApiHttpClient):
    def prompt(self, messages: List[Any], tools: List[Any], temperature: float):
        body = {
            "messages": messages,
            "tools": tools,
            "temperature": temperature,
        }
        response = requests.post(
            f"{self.url}/prompt",
            headers=SIDECAR_HEADERS,
            json=body,
            timeout=REQUEST_TIMEOUT,
        )
        try:
            response = response.json()
            return response
        except json.JSONDecodeError:
            raise Exception(f"Error parsing JSON: {response.text}")

    def parse_document(self, model: str, file_content: bytes, mime_type: str):
        response = requests.post(
            f"{self.url}/parse-document/{model}",
            headers={**SIDECAR_HEADERS, "Content-Type": mime_type},
            timeout=REQUEST_TIMEOUT,
            data=file_content,
        )
        response.raise_for_status()

        return response.json()


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
        response = requests.post(
            f"{self.url}/prompt", headers=headers, json=body, timeout=REQUEST_TIMEOUT
        )
        try:
            response = response.json()
            return response
        except json.JSONDecodeError:
            raise Exception(f"Error parsing JSON: {response.text}")

    def parse_document(self, model: str, file_content: bytes, mime_type: str):
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to use AI")
        response = requests.post(
            f"{self.url}/parse-document/{model}",
            headers={**headers, "Content-Type": mime_type},
            timeout=REQUEST_TIMEOUT,
            data=file_content,
        )
        response.raise_for_status()

        return response.json()
