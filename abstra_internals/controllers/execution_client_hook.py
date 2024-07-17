from typing import Dict, TypedDict

from abstra_internals.controllers.execution_client import ExecutionClient
from abstra_internals.entities.execution import RequestContext


class Response(TypedDict):
    headers: Dict[str, str]
    status: int
    body: str


class HookClient(ExecutionClient):
    def __init__(self, request_context: RequestContext) -> None:
        self.response = Response(status=200, body="", headers={})
        self.request_context = request_context

    def handle_failure(self, e: Exception) -> None:
        self.response["status"] = 500
        self.response["body"] = "An exception occurred during execution."

    def handle_success(self) -> None:
        pass

    def set_response(self, status: int, body: str, headers: Dict[str, str]) -> None:
        self.response["headers"] = headers
        self.response["status"] = status
        self.response["body"] = body

    def get_request(self) -> RequestContext:
        return self.request_context

    def handle_start(self, execution_id: str):
        pass
