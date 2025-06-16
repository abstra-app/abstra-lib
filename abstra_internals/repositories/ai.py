import json
from abc import ABC, abstractmethod
from typing import Any, List

from abstra_internals.cloud_api.http_client import HTTPClient
from abstra_internals.credentials import resolve_headers


class AIRepository(ABC):
    def __init__(self, client: "HTTPClient") -> None:
        self.client = client

    @abstractmethod
    def prompt(self, messages: List[Any], tools: List[Any], temperature: float):
        raise NotImplementedError()

    @abstractmethod
    def parse_document(self, model: str, file_content: bytes, mime_type: str):
        raise NotImplementedError()


class ProductionAIRepository(AIRepository):
    def prompt(self, messages: List[Any], tools: List[Any], temperature: float):
        body = {
            "messages": messages,
            "tools": tools,
            "temperature": temperature,
        }
        response = self.client.post(
            endpoint="/prompt",
            json=body,
        )
        try:
            response = response.json()
            return response
        except json.JSONDecodeError:
            raise Exception(f"Error parsing JSON: {response.text}")

    def parse_document(self, model: str, file_content: bytes, mime_type: str):
        response = self.client.post(
            endpoint=f"/parse-document/{model}",
            headers={"Content-Type": mime_type},
            data=file_content,
        )
        response.raise_for_status()

        return response.json()


class LocalAIRepository(AIRepository):
    def prompt(self, messages: List[Any], tools: List[Any], temperature: float):
        body = {
            "messages": messages,
            "tools": tools,
            "temperature": temperature,
        }

        response = self.client.post("/ai/prompt", json=body)

        response.raise_for_status()

        response = response.json()
        return response

    def parse_document(self, model: str, file_content: bytes, mime_type: str):
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to use AI")
        response = self.client.post(
            f"/ai/parse-document/{model}",
            headers={**headers, "Content-Type": mime_type},
            data=file_content,
        )
        response.raise_for_status()

        return response.json()
