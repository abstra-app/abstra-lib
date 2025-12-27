from typing import Dict

import abstra_internals.interface.contract as contract
from abstra_internals.controllers.execution.connection_protocol import (
    ConnectionProtocol,
)
from abstra_internals.controllers.execution.execution_client import ExecutionClient
from abstra_internals.entities.execution_context import HookContext, Request, Response
from abstra_internals.utils import serialize


class HookClient(ExecutionClient):
    context: HookContext
    conn: ConnectionProtocol
    response: Response
    production_mode: bool

    def __init__(
        self, context: HookContext, conn: ConnectionProtocol, production_mode: bool
    ) -> None:
        self.context = context
        self.conn = conn
        self.response = Response(headers={}, status=200, body="")
        self.production_mode = production_mode

    def handle_failure(self, e: Exception) -> None:
        self.set_response(500, "An exception occurred during execution.", {})
        try:
            self.conn.send(self.response)
            close_dto = contract.CloseDTO(exit_status="EXCEPTION", exception=e)
            self._send(contract.ExecutionEndedMessage(close_dto, self.production_mode))
        except (BrokenPipeError, EOFError):
            pass

    def handle_success(self) -> None:
        try:
            self.conn.send(self.response)
            close_dto = contract.CloseDTO(exit_status="SUCCESS")
            self._send(contract.ExecutionEndedMessage(close_dto, self.production_mode))
        except (BrokenPipeError, EOFError):
            pass

    def set_response(self, status: int, body: str, headers: Dict[str, str]) -> None:
        self.response = Response(
            status=status,
            body=body,
            headers=headers,
        )

    def get_request(self) -> Request:
        return self.context.request

    def handle_start(self, execution_id: str):
        self._send(contract.ExecutionStartedMessage(execution_id))

    def _send(self, msg: contract.Message) -> None:
        str_data = serialize(msg.to_json())
        try:
            self.conn.send(str_data)
        except (EOFError, BrokenPipeError):
            pass
