import threading
from dataclasses import dataclass
from typing import List

from abstra_internals.controllers.execution_client import ExecutionClient
from abstra_internals.controllers.execution_client_form import FormClient
from abstra_internals.controllers.execution_client_hook import HookClient
from abstra_internals.entities.execution import Execution


class ExecutionStoreException(Exception):
    pass


class ExecutionNotFound(ExecutionStoreException):
    pass


class ClientTypeMismatch(ExecutionStoreException):
    pass


@dataclass
class ExecutionStoreData:
    client: ExecutionClient
    execution: Execution
    thread_id: int


class ExecutionStore:
    rlock = threading.RLock()
    store: List[ExecutionStoreData] = []

    @classmethod
    def clear(cls):
        data = cls.get_by_thread()
        with cls.rlock:
            cls.store.remove(data)

    @classmethod
    def set(cls, execution: Execution, client: ExecutionClient):
        with cls.rlock:
            cls.store.append(
                ExecutionStoreData(
                    thread_id=threading.get_ident(),
                    execution=execution,
                    client=client,
                )
            )

    @classmethod
    def get_by_thread(cls) -> ExecutionStoreData:
        thread_id = threading.get_ident()
        with cls.rlock:
            for data in cls.store:
                if data.thread_id == thread_id:
                    return data
            raise ExecutionNotFound()

    @classmethod
    def get_by_execution_id(cls, execution_id: str) -> ExecutionStoreData:
        with cls.rlock:
            for data in cls.store:
                if data.execution.id == execution_id:
                    return data
            raise ExecutionNotFound()

    @classmethod
    def get_hook_client(cls) -> HookClient:
        client = cls.get_by_thread().client
        if not isinstance(client, HookClient):
            raise ClientTypeMismatch()
        return client

    @classmethod
    def get_form_client(cls) -> FormClient:
        client = cls.get_by_thread().client
        if not isinstance(client, FormClient):
            raise ClientTypeMismatch()
        return client
