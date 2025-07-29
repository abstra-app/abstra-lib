import json
from abc import ABC, abstractmethod

from abstra_internals.cloud_api import get_session_path, get_tunnel_secret_key
from abstra_internals.cloud_api.http_client import HTTPClient
from abstra_internals.contracts_generated import (
    CloudApiCliAiV2AbortRequest,
    CloudApiCliAiV2ConversationPostRequest,
    CloudApiCliAiV2ConversationPostResponse,
    CloudApiCliAiV2PromptPostRequest,
    CloudApiCliAiV2StreamRequest,
)
from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import REQUEST_TIMEOUT


class AIRepository(ABC):
    def __init__(self, client: "HTTPClient") -> None:
        self.client = client

    @abstractmethod
    def prompt(self, prompt_request_body: CloudApiCliAiV2PromptPostRequest):
        raise NotImplementedError()

    @abstractmethod
    def parse_document(self, model: str, file_content: bytes, mime_type: str):
        raise NotImplementedError()

    @abstractmethod
    def get_ai_messages(
        self,
        req: CloudApiCliAiV2StreamRequest,
    ):
        raise NotImplementedError()

    @abstractmethod
    def get_history(self, headers: dict, limit: int, offset: int):
        raise NotImplementedError()

    @abstractmethod
    def create_thread(self, headers: dict) -> CloudApiCliAiV2ConversationPostResponse:
        raise NotImplementedError()

    @abstractmethod
    def delete_thread(self, headers: dict, thread_id: str):
        raise NotImplementedError()

    @abstractmethod
    def abort_thread(self, headers: dict, thread_id: str):
        raise NotImplementedError()

    @abstractmethod
    def start_conversation(self, secret_key: str, tunnel_session_path: str):
        raise NotImplementedError()


class ProductionAIRepository(AIRepository):
    def prompt(self, prompt_request_body: CloudApiCliAiV2PromptPostRequest):
        response = self.client.post(
            endpoint="/ai-v2/prompt",
            json=prompt_request_body.to_dict(),
        )

        try:
            response = response.json()
            return response
        except json.JSONDecodeError:
            raise Exception(f"Error parsing JSON: {response.text}")

    def parse_document(self, model: str, file_content: bytes, mime_type: str):
        response = self.client.post(
            endpoint=f"/ai-v2/parse-document/{model}",
            headers={"Content-Type": mime_type},
            data=file_content,
        )
        response.raise_for_status()

        return response.json()

    def get_ai_messages(
        self,
        req: CloudApiCliAiV2StreamRequest,
    ):
        raise NotImplementedError()

    def get_history(self, headers: dict, limit: int, offset: int):
        raise NotImplementedError()

    def create_thread(self, headers: dict):
        raise NotImplementedError()

    def abort_thread(self, headers: dict, thread_id: str):
        raise NotImplementedError()

    def start_conversation(self, secret_key: str, tunnel_session_path: str):
        raise NotImplementedError(
            "This method is not implemented in ProductionAIRepository."
        )

    def delete_thread(self, headers: dict, thread_id: str):
        raise NotImplementedError(
            "This method is not implemented in ProductionAIRepository."
        )


class LocalAIRepository(AIRepository):
    def prompt(self, prompt_request_body: CloudApiCliAiV2PromptPostRequest):
        response = self.client.post("/ai-v2/prompt", json=prompt_request_body.to_dict())

        response.raise_for_status()

        response = response.json()
        return response

    def parse_document(self, model: str, file_content: bytes, mime_type: str):
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to use AI")
        response = self.client.post(
            f"/ai-v2/parse-document/{model}",
            headers={**headers, "Content-Type": mime_type},
            data=file_content,
        )
        response.raise_for_status()

        return response.json()

    def get_ai_messages(
        self,
        req: CloudApiCliAiV2StreamRequest,
    ):
        url = "/ai-v2/stream"
        body = req.to_dict()
        headers = resolve_headers()
        return self.client.post(
            url, headers=headers, json=body, stream=True
        ).iter_content(chunk_size=None)

    def get_history(self, headers: dict, limit: int, offset: int):
        url = "/ai-v2/history"
        r = self.client.get(
            url,
            headers=headers,
            params={"limit": limit, "offset": offset},
            timeout=REQUEST_TIMEOUT,
        )
        r.raise_for_status()
        return r.json()

    def create_thread(self, headers: dict):
        url = "/ai-v2/conversation"
        r = self.client.post(
            url,
            headers=headers,
            timeout=REQUEST_TIMEOUT,
            json=CloudApiCliAiV2ConversationPostRequest(
                tunnel_session_path=get_session_path(),
                secret_key=get_tunnel_secret_key(),
            ).to_dict(),
        )
        r.raise_for_status()
        return CloudApiCliAiV2ConversationPostResponse.from_dict(r.json())

    def abort_thread(self, headers: dict, thread_id: str):
        response = self.client.post(
            endpoint="/ai-v2/abort",
            headers=headers,
            json=CloudApiCliAiV2AbortRequest(conversation_id=thread_id).to_dict(),
        )
        response.raise_for_status()

    def start_conversation(self, secret_key: str, tunnel_session_path: str):
        """
        Start a new conversation with the AI.

        This method initializes a new conversation thread with the AI service.

        Args:
            secret_key (str): The secret key for authentication.
            tunnel_session_path (str): The session path for the tunnel.

        Returns:
            dict: The response containing the conversation details.
        """
        url = "/ai-v2/conversation"
        body = CloudApiCliAiV2ConversationPostRequest(
            tunnel_session_path=tunnel_session_path,
            secret_key=secret_key,
        ).to_dict()
        response = self.client.post(url, json=body)
        response.raise_for_status()
        return response.json()

    def delete_thread(self, headers: dict, thread_id: str):
        """
        Delete a conversation thread.

        Args:
            headers (dict): The headers for the request, including authentication.
            thread_id (str): The ID of the thread to delete.

        Returns:
            None: The method does not return any value.
        """
        print(f"Deleting thread with ID: {thread_id}")
        url = f"/ai-v2/conversation/{thread_id}"
        response = self.client.delete(url, headers=headers)
        response.raise_for_status()
