from __future__ import annotations
import traceback
from typing import Optional, TYPE_CHECKING, Tuple, Dict, Union
import flask_sock
from ..contract import Message, StdioMessage, should_send
from ..utils import deserialize, serialize
from .execution import Execution, RequestData, NoExecutionFound
from simple_websocket.ws import ConnectionClosed

if TYPE_CHECKING:
    from ..repositories.json.classes import DashJSON, FormJSON


class LiveExecution(Execution):
    type = "execution"
    _connection: flask_sock.Server

    @staticmethod
    def get_execution() -> Optional["LiveExecution"]:
        execution = Execution.get_execution()
        if isinstance(execution, LiveExecution):
            return execution

        return None

    @staticmethod
    def broadcast(msg: Message):
        for e in list(Execution.executions.values()):
            if isinstance(e, LiveExecution) and e.connected and e.closed == False:
                e.send(msg)

    def __init__(
        self,
        runtime_json: Union["FormJSON", "DashJSON"],
        is_initial: bool,
        connection: flask_sock.Server,
        request: RequestData,
        execution_id=None,
    ):
        self._connection = connection
        if execution_id is not None:
            self.id = execution_id

        super().__init__(runtime_json, is_initial, request, execution_id=execution_id)

    def send(self, msg: Message):
        self.log(msg.type, msg.data)

        if not should_send(msg, self.is_preview):
            return

        str_data = serialize(msg.to_json(self.is_preview))
        self._connection.send(str_data)

    def recv(self) -> Tuple[str, Dict]:
        try:
            str_data = self._connection.receive()
        except ConnectionClosed:
            self.close()
            return "close", {}

        data = deserialize(str_data)
        self.log(data["type"], data)
        return data["type"], data

    def close(self, reason: Optional[str] = ""):
        self._connection.close(message=reason)
        self.closed = True

    def stdio(self, type: str, text: str):
        self.send(StdioMessage(type, text))
        return super().stdio(type, text)

    @property
    def connected(self) -> bool:
        return self._connection.connected

    def end(self):
        if self.connected:
            self.close(reason=traceback.format_exc() or None)


def get_live_execution_throwable() -> LiveExecution:
    execution = LiveExecution.get_execution()
    if not execution:
        raise NoExecutionFound
    return execution
