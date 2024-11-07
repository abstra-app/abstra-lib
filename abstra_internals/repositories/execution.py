from abc import ABC, abstractmethod
from typing import List

import requests

from abstra_internals.entities.execution import Execution, ExecutionStatus
from abstra_internals.environment import SERVER_UUID, SIDECAR_HEADERS, WORKER_UUID
from abstra_internals.repositories.multiprocessing import MPContext
from abstra_internals.utils.dot_abstra import EXECUTIONS_FOLDER
from abstra_internals.utils.file_manager import FileManager


class ExecutionRepository(ABC):
    @abstractmethod
    def create(self, execution: Execution) -> None:
        raise NotImplementedError()

    @abstractmethod
    def update(self, execution: Execution) -> None:
        raise NotImplementedError()

    @abstractmethod
    def set_failure_by_id(self, execution_id: str) -> None:
        raise NotImplementedError()

    @abstractmethod
    def find_by_worker(
        self, app_id: str, worker_id: str, status: ExecutionStatus
    ) -> List[Execution]:
        raise NotImplementedError()

    @abstractmethod
    def find_by_app(self, status: ExecutionStatus, app_id: str) -> List[Execution]:
        raise NotImplementedError()

    @abstractmethod
    def clear(self):
        raise NotImplementedError()


class LocalExecutionRepository(ExecutionRepository):
    def __init__(self, mp_context: MPContext):
        self.manager = FileManager(
            mp_context, directory=EXECUTIONS_FOLDER, model=Execution
        )

    def create(self, execution: Execution) -> None:
        self.manager.save(execution.id, execution)

    def update(self, execution: Execution) -> None:
        self.manager.save(execution.id, execution)

    def set_failure_by_id(self, execution_id: str) -> None:
        raise NotImplementedError()

    def find_by_worker(
        self, app_id: str, worker_id: str, status: ExecutionStatus
    ) -> List[Execution]:
        return []

    def find_by_app(self, status: ExecutionStatus, app_id: str) -> List[Execution]:
        return []

    def clear(self):
        self.manager.clear()


class ProductionExecutionRepository(ExecutionRepository):
    def __init__(self, url: str):
        self.url = url

    def create(self, execution: Execution) -> None:
        request_dto = dict(
            **execution.to_dto(),
            workerId=WORKER_UUID(),
            appId=SERVER_UUID(),
        )

        res = requests.post(
            f"{self.url}/executions",
            json=request_dto,
            headers=SIDECAR_HEADERS,
        )

        res.raise_for_status()

    def update(self, execution: Execution) -> None:
        request_dto = dict(
            status=execution.status,
            stageRunId=execution.stage_run_id,
            context=execution.request_context or {},
        )

        res = requests.patch(
            f"{self.url}/executions/{execution.id}",
            json=request_dto,
            headers=SIDECAR_HEADERS,
        )

        res.raise_for_status()

    def set_failure_by_id(self, execution_id: str) -> None:
        res = requests.patch(
            f"{self.url}/executions/{execution_id}",
            json=dict(status="failed"),
            headers=SIDECAR_HEADERS,
        )

        res.raise_for_status()

    def find_by_worker(
        self, app_id: str, worker_id: str, status: ExecutionStatus
    ) -> List[Execution]:
        res = requests.get(
            f"{self.url}/executions",
            params=dict(
                appId=app_id,
                status=status,
                workerId=worker_id,
            ),
            headers=SIDECAR_HEADERS,
        )

        res.raise_for_status()

        return [Execution.from_dto(dto) for dto in res.json()]

    def find_by_app(self, status: ExecutionStatus, app_id: str) -> List[Execution]:
        res = requests.get(
            f"{self.url}/executions",
            params=dict(
                appId=app_id,
                status=status,
            ),
            headers=SIDECAR_HEADERS,
        )

        res.raise_for_status()

        return [Execution.from_dto(dto) for dto in res.json()]

    def clear(self):
        raise NotImplementedError()
