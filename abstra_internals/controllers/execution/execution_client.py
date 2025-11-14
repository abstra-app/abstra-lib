import abc
from queue import Queue
from threading import Thread

import abstra_internals.interface.contract as contract
from abstra_internals.controllers.execution.connection_protocol import (
    ConnectionProtocol,
)
from abstra_internals.entities.execution_context import ClientContext
from abstra_internals.utils import deserialize, serialize


class ClientAbandoned(Exception):
    pass


def kill_trap_listener(conn: ConnectionProtocol) -> Queue:
    new_queue = Queue()

    def _listen():
        try:
            while True:
                str_data = conn.recv()
                deserialized = deserialize(str_data)
                if not isinstance(deserialized, dict):
                    continue
                if "type" not in deserialized or not deserialized["type"] == "kill":
                    raise ClientAbandoned()
                else:
                    new_queue.put(True)
        except (BrokenPipeError, EOFError):
            raise ClientAbandoned()

    thread = Thread(target=_listen, daemon=True)
    thread.start()
    return new_queue


def listen_for_kill_message_on_another_thread(conn: ConnectionProtocol):
    try:
        while True:
            str_data = conn.recv()
            deserialized = deserialize(str_data)
            if not isinstance(deserialized, dict):
                continue
            if "type" in deserialized and deserialized["type"] == "kill":
                raise ClientAbandoned()
    except (BrokenPipeError, EOFError):
        raise ClientAbandoned()


class ExecutionClient(abc.ABC):
    conn: ConnectionProtocol

    @abc.abstractmethod
    def handle_failure(self, e: Exception) -> None:
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_success(self) -> None:
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_start(self, execution_id: str):
        raise NotImplementedError()


class HeadlessClient(ExecutionClient):
    context: ClientContext
    conn: ConnectionProtocol
    _production_mode: bool

    def __init__(
        self, context: ClientContext, conn: ConnectionProtocol, production_mode: bool
    ):
        self.context = context
        self.conn = conn
        self._production_mode = production_mode

    def handle_failure(self, e: Exception):
        close_dto = contract.CloseDTO(exit_status="EXCEPTION", exception=e)
        self._send(contract.ExecutionEndedMessage(close_dto, self._production_mode))
        self.conn.close()

    def handle_success(self):
        close_dto = contract.CloseDTO(exit_status="SUCCESS")
        self._send(contract.ExecutionEndedMessage(close_dto, self._production_mode))
        self.conn.close()

    def handle_start(self, execution_id: str):
        self._send(contract.ExecutionStartedMessage(execution_id))

    def _send(self, msg: contract.Message) -> None:
        str_data = serialize(msg.to_json())
        try:
            self.conn.send(str_data)
        except (EOFError, BrokenPipeError):
            pass
