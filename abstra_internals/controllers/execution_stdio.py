from typing import Literal

from abstra_internals.controllers.execution_client import (
    ClientNotFound,
    ExecutionClientStore,
)
from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.execution_logs import ExecutionLogsRepository


class UnboundPthread(Exception):
    pass


class ExecutionStdioController:
    def __init__(
        self,
        execution_repository: ExecutionRepository,
        execution_logs_repository: ExecutionLogsRepository,
    ):
        self.execution_logs_repository = execution_logs_repository
        self.execution_repository = execution_repository

    def write_stdio(self, event: Literal["stderr", "stdout"], text: str) -> str:
        execution_dto = self.execution_repository.get_current()

        if not execution_dto:
            raise UnboundPthread()

        try:
            client = ExecutionClientStore.get()
        except ClientNotFound:
            raise UnboundPthread()

        client.handle_stdio(event, text)
        self.execution_logs_repository.insert_stdio(execution_dto["id"], event, text)

        return execution_dto["id"]
