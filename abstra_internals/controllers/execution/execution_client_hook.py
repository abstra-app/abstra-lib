from typing import Dict

from abstra_internals.controllers.execution.execution_client import ExecutionClient
from abstra_internals.entities.execution_context import HookContext, Request, Response


class HookClient(ExecutionClient):
    context: HookContext

    def __init__(self, context: HookContext) -> None:
        self.context = context

    def handle_failure(self, e: Exception) -> None:
        self.set_response(500, "An exception occurred during execution.", {})

    def handle_success(self) -> None:
        pass

    def set_response(self, status: int, body: str, headers: Dict[str, str]) -> None:
        self.context.response = Response(
            status=status,
            body=body,
            headers=headers,
        )

    def get_request(self) -> Request:
        return self.context.request

    def handle_start(self, execution_id: str):
        pass
