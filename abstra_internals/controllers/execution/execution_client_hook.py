from multiprocessing.connection import Connection
from typing import Dict

from abstra_internals.controllers.execution.execution_client import ExecutionClient
from abstra_internals.entities.execution_context import HookContext, Request, Response


class HookClient(ExecutionClient):
    context: HookContext
    conn: Connection
    response: Response

    def __init__(self, context: HookContext, conn: Connection) -> None:
        self.context = context
        self.conn = conn
        self.response = Response(headers={}, status=200, body="")

    def handle_failure(self, e: Exception) -> None:
        self.set_response(500, "An exception occurred during execution.", {})
        self.conn.send(self.response)

    def handle_success(self) -> None:
        self.conn.send(self.response)

    def set_response(self, status: int, body: str, headers: Dict[str, str]) -> None:
        self.response = Response(
            status=status,
            body=body,
            headers=headers,
        )

    def get_request(self) -> Request:
        return self.context.request

    def handle_start(self, execution_id: str):
        pass
