from __future__ import annotations
import traceback
import typing
import flask_sock
from ..contract import Message, StdioMessage, should_send
from ..utils import deserialize, serialize
from .execution import Execution

if typing.TYPE_CHECKING:
    from abstra_internals.server.api.classes import DashJSON, FormJSON


class LiveExecution(Execution):
    type = "execution"
    _connection: flask_sock.Server = None

    @staticmethod
    def get_execution() -> typing.Optional["LiveExecution"]:
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
        runtime_json: typing.Union[FormJSON, DashJSON],
        connection: flask_sock.Server,
        execution_id=None,
    ):
        self._connection = connection
        if execution_id is not None:
            self.id = execution_id
        super().__init__(runtime_json, execution_id=execution_id)

    def send(self, msg: Message):
        self.log(msg.type, msg.data)

        if not should_send(msg, self.is_preview):
            return

        str_data = serialize(msg.to_json(self.is_preview))
        self._connection.send(str_data)

    def recv(self) -> typing.Tuple[str, typing.Dict]:
        str_data = self._connection.receive()
        data = deserialize(str_data)
        self.log(data["type"], data)
        return data["type"], data

    def close(self, reason: str = ""):
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
        self.delete()


def get_live_execution_throwable() -> LiveExecution:
    execution = LiveExecution.get_execution()
    if not execution:
        raise Exception("No execution found")
    return execution
