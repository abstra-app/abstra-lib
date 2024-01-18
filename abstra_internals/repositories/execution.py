import requests
from pydantic.dataclasses import dataclass
from typing import Literal, Optional, Dict, Any
from abc import ABC, abstractmethod

from ..utils.environment import (
    SIDECAR_HEADERS,
    SIDECAR_URL,
    SERVER_UUID,
    WORKER_UUID,
)


ExecutionStatus = Literal["running", "lock-failed", "failed", "finished", "abandoned"]


@dataclass
class ExecutionDTO:
    id: str
    status: ExecutionStatus
    created_at: str
    context: Dict[str, Any]
    stage_id: str
    stage_run_id: Optional[str]


class ExecutionRepository(ABC):
    @abstractmethod
    def create(self, execution_dto: ExecutionDTO) -> None:
        raise NotImplementedError()

    @abstractmethod
    def update(self, execution_dto: ExecutionDTO) -> None:
        raise NotImplementedError()


class LocalExecutionRepository(ExecutionRepository):
    def __init__(self):
        self.executions: Dict[str, ExecutionDTO] = {}

    def create(self, execution_dto: ExecutionDTO) -> None:
        self.executions[execution_dto.id] = execution_dto

    def update(self, execution_dto: ExecutionDTO) -> None:
        self.executions[execution_dto.id] = execution_dto


class RemoteExecutionRepository(ExecutionRepository):
    def __init__(
        self,
        url: str,
        headers: Dict[str, str],
    ):
        self.url = url
        self.headers = headers

    def create(self, execution_dto: ExecutionDTO) -> None:
        request_dto = dict(
            id=execution_dto.id,
            status=execution_dto.status,
            createdAt=execution_dto.created_at,
            context=execution_dto.context,
            stageId=execution_dto.stage_id,
            stageRunId=execution_dto.stage_run_id,
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
        request_dto = dict(
            status=execution_dto.status,
            context=execution_dto.context,
            stageRunId=execution_dto.stage_run_id,
        )

        res = requests.patch(
            f"{self.url}/executions/{execution_dto.id}",
            json=request_dto,
            headers=self.headers,
        )

        res.raise_for_status()


def execution_repository_factory() -> ExecutionRepository:
    if SIDECAR_URL:
        return RemoteExecutionRepository(
            url=SIDECAR_URL,
            headers=SIDECAR_HEADERS,
        )
    else:
        return LocalExecutionRepository()
