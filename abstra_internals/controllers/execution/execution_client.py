import abc
from multiprocessing.connection import Connection

from abstra_internals.entities.execution_context import ClientContext


class ExecutionClient(abc.ABC):
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

    def __init__(self, context: ClientContext, conn: Connection):
        self.context = context
        self._conn = conn

    def handle_failure(self, e: Exception) -> None:
        self._conn.close()

    def handle_success(self) -> None:
        self._conn.close()

    def handle_start(self, execution_id: str):
        pass
