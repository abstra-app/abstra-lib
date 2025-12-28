import datetime
import os
import signal
import time
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import List, Optional

from abstra_internals.cloud_api.http_client import HTTPClient
from abstra_internals.consts.filepaths import EXECUTIONS_DIR_PATH
from abstra_internals.entities.execution import Execution, ExecutionStatus
from abstra_internals.environment import SERVER_UUID, WORKER_UUID
from abstra_internals.repositories.multiprocessing import MPContext
from abstra_internals.repositories.producer import (
    WebEditorControlProducerRepository,
)
from abstra_internals.services.sql_storage import SqlStorage


@dataclass
class ExecutionFilter:
    build_id: Optional[str] = None
    stage_id: Optional[str] = None
    status: Optional[str] = None
    project_id: Optional[str] = None
    offset: Optional[int] = None
    limit: Optional[int] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    search: Optional[str] = None

    @staticmethod
    def from_dict(data: dict) -> "ExecutionFilter":
        return ExecutionFilter(
            build_id=data.get("buildId"),
            stage_id=data.get("stageId"),
            status=data.get("status"),
            project_id=data.get("projectId"),
            offset=int(data.get("offset", 0)),
            limit=int(data.get("limit", 10)),
            start_date=data.get("startDate"),
            end_date=data.get("endDate"),
            search=data.get("search"),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


class ExecutionResponse:
    def __init__(self, executions: List[Execution], total_count: int):
        self.executions = executions
        self.total_count = total_count

    @staticmethod
    def from_dict(data: dict) -> "ExecutionResponse":
        return ExecutionResponse(
            executions=[Execution.create(**dto) for dto in data.get("executions", [])],
            total_count=data.get("totalCount", 0),
        )

    def to_dict(self) -> dict:
        return dict(
            executions=[execution.dump() for execution in self.executions],
            totalCount=self.total_count,
        )


class ExecutionRepository(ABC):
    @abstractmethod
    def create(self, execution: Execution) -> None:
        raise NotImplementedError()

    @abstractmethod
    def get(self, execution_id: str) -> Execution:
        raise NotImplementedError

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

    @abstractmethod
    def list(self, filter) -> ExecutionResponse:
        raise NotImplementedError()

    @abstractmethod
    def stop_execution(self, execution_id: str) -> None:
        raise NotImplementedError()


class LocalExecutionRepository(ExecutionRepository):
    def __init__(self, mp_context: MPContext):
        self.fs_storage = SqlStorage(
            mp_context, directory=EXECUTIONS_DIR_PATH, model=Execution
        )

    def create(self, execution: Execution) -> None:
        self.fs_storage.save(execution.id, execution)

    def update(self, execution: Execution) -> None:
        self.fs_storage.save(execution.id, execution)

    def set_failure_by_id(self, execution_id: str) -> None:
        try:
            execution = self.get(execution_id)
            execution.set_status("failed")
            self.update(execution)
        except Exception:
            pass

    def find_by_worker(
        self, app_id: str, worker_id: str, status: ExecutionStatus
    ) -> List[Execution]:
        return []

    def find_by_app(self, status: ExecutionStatus, app_id: str) -> List[Execution]:
        return []

    def clear(self):
        self.fs_storage.clear()

    def get(self, execution_id: str) -> Execution:
        execution = self.fs_storage.load(execution_id)
        if execution is None:
            raise Exception(f"Execution with id {execution_id} not found")

        return execution

    def list(self, filter: ExecutionFilter) -> ExecutionResponse:
        executions = self.fs_storage.load_all()
        filtered_executions = [
            execution
            for execution in executions
            if (
                (not filter.build_id or execution.stage_id == filter.build_id)
                and (not filter.stage_id or execution.stage_id == filter.stage_id)
                and (not filter.status or execution.status == filter.status)
                and (not filter.project_id or execution.stage_id == filter.project_id)
                and (
                    not filter.start_date
                    or execution.created_at
                    >= datetime.datetime.fromisoformat(filter.start_date)
                )
                and (
                    not filter.end_date
                    or execution.created_at
                    <= datetime.datetime.fromisoformat(filter.end_date)
                )
            )
        ]
        sorted_executions = sorted(
            filtered_executions,
            key=lambda execution: execution.created_at,
            reverse=True,
        )
        total_count = len(sorted_executions)
        start_index = filter.offset if filter.offset else 0
        end_index = start_index + (
            filter.limit if filter.limit else len(sorted_executions)
        )

        return ExecutionResponse(
            executions=sorted_executions[start_index:end_index],
            total_count=total_count,
        )

    def stop_execution(self, execution_id: str) -> None:
        try:
            execution = self.get(execution_id)
            pid = execution.pid

            os.kill(pid, signal.SIGTERM)

            for _ in range(20):
                try:
                    os.kill(pid, 0)
                    time.sleep(0.1)
                except OSError:
                    return

            # Force kill if still alive
            os.kill(pid, signal.SIGKILL)

        except Exception:
            pass


class WebEditorExecutionRepository(LocalExecutionRepository):
    def __init__(self, mp_context: MPContext, rabbitmq_uri: str):
        super().__init__(mp_context)
        self.control_producer = WebEditorControlProducerRepository(rabbitmq_uri)

    def stop_execution(self, execution_id: str) -> None:
        try:
            self.control_producer.stop_execution(execution_id)
        except Exception:
            # Fallback to local kill if message fails? Unlikely to work but maybe safe to try?
            # No, if we are in web editor, local kill is useless.
            pass


class ProductionExecutionRepository(ExecutionRepository):
    def __init__(self, client: "HTTPClient"):
        self.client = client

    def _adapt_legacy_execution_dtos(self, dtos: List[dict]) -> List[dict]:
        for dto in dtos:
            if dto.get("stage_run_id"):
                del dto["stage_run_id"]
            if dto.get("request_context"):
                dto["context"] = dto["request_context"]
                del dto["request_context"]

        return dtos

    def create(self, execution: Execution) -> None:
        request_dto = dict(
            **execution.dump(),
            workerId=WORKER_UUID(),
            appId=SERVER_UUID(),
        )

        res = self.client.post(
            endpoint="/executions",
            json=request_dto,
        )

        res.raise_for_status()

    def update(self, execution: Execution) -> None:
        request_dto = dict(
            status=execution.status,
            context=execution.context.dump() or {},
        )

        res = self.client.patch(
            f"/executions/{execution.id}",
            json=request_dto,
        )

        res.raise_for_status()

    def set_failure_by_id(self, execution_id: str) -> None:
        res = self.client.patch(
            f"/executions/{execution_id}",
            json=dict(status="failed"),
        )

        res.raise_for_status()

    def find_by_worker(
        self, app_id: str, worker_id: str, status: ExecutionStatus
    ) -> List[Execution]:
        res = self.client.get(
            "/executions",
            params=dict(
                appId=app_id,
                status=status,
                workerId=worker_id,
            ),
        )

        res.raise_for_status()

        dtos = self._adapt_legacy_execution_dtos(res.json())

        return [Execution(**dto) for dto in dtos]

    def find_by_app(self, status: ExecutionStatus, app_id: str) -> List[Execution]:
        res = self.client.get(
            "/executions",
            params=dict(
                appId=app_id,
                status=status,
            ),
        )

        res.raise_for_status()

        dtos = self._adapt_legacy_execution_dtos(res.json())

        return [Execution(**dto) for dto in dtos]

    def get(self, execution_id: str) -> Execution:
        raise NotImplementedError

    def clear(self):
        raise NotImplementedError()

    def list(self, filter: ExecutionFilter) -> ExecutionResponse:
        raise NotImplementedError()

    def stop_execution(self, execution_id: str) -> None:
        raise NotImplementedError()
