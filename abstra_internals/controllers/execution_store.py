import threading
from typing import List

from abstra_internals.controllers.execution_client import ExecutionClient
from abstra_internals.controllers.sdk import ExecutionSDKContext
from abstra_internals.entities.execution import Execution
from abstra_internals.interface.sdk.user_exceptions import ExecutionNotFound
from abstra_internals.repositories.factory import Repositories


# TODO: add context manager
class ExecutionStore:
    rlock = threading.RLock()
    store: List[ExecutionSDKContext] = []

    @classmethod
    def clear(cls):
        data = cls.get_by_thread()
        with cls.rlock:
            cls.store.remove(data)

    @classmethod
    def set(
        cls, execution: Execution, client: ExecutionClient, repositories: Repositories
    ):
        with cls.rlock:
            cls.store.append(
                ExecutionSDKContext(
                    thread_id=threading.get_ident(),
                    repositories=repositories,
                    execution=execution,
                    client=client,
                )
            )

    @classmethod
    def get_by_thread(cls) -> ExecutionSDKContext:
        thread_id = threading.get_ident()
        with cls.rlock:
            for data in cls.store:
                if data.thread_id == thread_id:
                    return data
            raise ExecutionNotFound()

    @classmethod
    def get_by_execution_id(cls, execution_id: str) -> ExecutionSDKContext:
        with cls.rlock:
            for data in cls.store:
                if data.execution.id == execution_id:
                    return data
            raise ExecutionNotFound()
