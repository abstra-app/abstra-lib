from abc import ABC, abstractmethod
from typing import Dict, List, Optional

import requests

from abstra_internals.entities.execution import (
    ExecutionDTO,
    ExecutionStatus,
)
from abstra_internals.environment import (
    SERVER_UUID,
    SIDECAR_HEADERS,
    SIDECAR_URL,
    WORKER_UUID,
)
from abstra_internals.utils.pthread_store import PThreadStore


class ExecutionRepository(ABC):
    pthread_store: PThreadStore[ExecutionDTO]

    def get_current(self) -> Optional[ExecutionDTO]:
        return self.pthread_store.get()

    def free_current(self) -> None:
        self.pthread_store.clear()

    @abstractmethod
    def create(self, execution_dto: ExecutionDTO) -> None:
        raise NotImplementedError()

    @abstractmethod
    def update(self, execution_dto: ExecutionDTO) -> None:
        raise NotImplementedError()

    @abstractmethod
    def set_failure_by_id(self, execution_id: str) -> None:
        raise NotImplementedError()

    @abstractmethod
    def find_by_worker(
        self, app_id: str, worker_id: str, status: ExecutionStatus
    ) -> List[ExecutionDTO]:
        raise NotImplementedError()


class EditorExecutionRepository(ExecutionRepository):
    def __init__(self):
        self.pthread_store = PThreadStore()

    def create(self, execution_dto: ExecutionDTO) -> None:
        self.pthread_store.set(execution_dto)

    def update(self, execution_dto: ExecutionDTO) -> None:
        self.pthread_store.set(execution_dto)

    def set_failure_by_id(self, execution_id: str) -> None:
        execution = next(
            (
                execution
                for execution in self.pthread_store.items.values()
                if execution["id"] == execution_id
            ),
            None,
        )

        if execution:
            execution["status"] = "failed"

    def find_by_worker(
        self, app_id: str, worker_id: str, status: ExecutionStatus
    ) -> List[ExecutionDTO]:
        raise NotImplementedError()


class CloudExecutionRepository(ExecutionRepository):
    def __init__(
        self,
        url: str,
        headers: Dict[str, str],
    ):
        self.url = url
        self.headers = headers
        self.pthread_store = PThreadStore()

    def create(self, execution_dto: ExecutionDTO) -> None:
        self.pthread_store.set(execution_dto)

        request_dto = dict(
            id=execution_dto["id"],
            status=execution_dto["status"],
            createdAt=execution_dto["created_at"],
            context=execution_dto["context"] if execution_dto["context"] else {},
            stageId=execution_dto["stage_id"],
            stageRunId=execution_dto["stage_run_id"],
            workerId=WORKER_UUID(),
            appId=SERVER_UUID(),
        )

        res = requests.post(
            f"{self.url}/executions",
            json=request_dto,
            headers=self.headers,
        )

        res.raise_for_status()

    def update(self, execution_dto: ExecutionDTO) -> None:
        self.pthread_store.set(execution_dto)

        request_dto = dict(
            status=execution_dto["status"],
            context=execution_dto["context"] if execution_dto["context"] else {},
            stageRunId=execution_dto["stage_run_id"],
        )

        res = requests.patch(
            f"{self.url}/executions/{execution_dto['id']}",
            json=request_dto,
            headers=self.headers,
        )

        res.raise_for_status()

    def set_failure_by_id(self, execution_id: str) -> None:
        res = requests.patch(
            f"{self.url}/executions/{execution_id}",
            json=dict(status="failed"),
            headers=self.headers,
        )

        res.raise_for_status()

    def find_by_worker(
        self, app_id: str, worker_id: str, status: ExecutionStatus
    ) -> List[ExecutionDTO]:
        res = requests.get(
            f"{self.url}/executions",
            params=dict(
                appId=app_id,
                status=status,
                workerId=worker_id,
            ),
            headers=self.headers,
        )

        res.raise_for_status()

        return [
            ExecutionDTO(
                id=cloud_dto["id"],
                status=cloud_dto["status"],
                created_at=cloud_dto["createdAt"],
                stage_id=cloud_dto["stageId"],
                stage_run_id=cloud_dto["stageRunId"],
                context=cloud_dto["context"],
            )
            for cloud_dto in res.json()
        ]


def execution_repository_factory() -> ExecutionRepository:
    if SIDECAR_URL:
        return CloudExecutionRepository(
            url=SIDECAR_URL,
            headers=SIDECAR_HEADERS,
        )
    else:
        return EditorExecutionRepository()
