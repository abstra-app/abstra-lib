import datetime
import json
from abc import ABC, abstractmethod
from typing import Dict, List, Literal, Optional, Union
from uuid import uuid4

from abstra_internals.cloud_api.http_client import HTTPClient
from abstra_internals.consts.filepaths import TASKS_DIR_PATH
from abstra_internals.contracts_generated import (
    CloudApiCliTasksUpdateTaskRequest,
    CloudApiConsoleWorkflowUpdateTaskRequestCompleted,
    CloudApiConsoleWorkflowUpdateTaskRequestLocked,
)
from abstra_internals.repositories.multiprocessing import MPContext
from abstra_internals.services.sql_storage import SqlStorage
from abstra_internals.utils.datetime import to_utc_iso_string
from abstra_internals.utils.serializable import Serializable

TaskStatus = Literal["pending", "locked", "completed"]
TaskPayload = Dict[str, Union[str, object, Dict[str, object], List, Dict]]


class TaskLockFailed(Exception):
    pass


class TaskEventDetails(Serializable):
    at: str
    by_execution_id: Optional[str]
    by_stage_id: Optional[str]


class TaskDTO(Serializable):
    id: str
    type: str
    payload: dict
    status: TaskStatus
    target_stage_id: str
    created: TaskEventDetails
    locked: Optional[TaskEventDetails]
    completed: Optional[TaskEventDetails]


class ExecutionTasksResponse(Serializable):
    trigger_task: Optional[TaskDTO]
    sent_tasks: List[TaskDTO]


class TasksRepository(ABC):
    @abstractmethod
    def send_task(
        self,
        type: str,
        payload: TaskPayload,
        target_stage_id: str,
        source_stage_id: Optional[str],
        execution_id: Optional[str],
    ) -> TaskDTO:
        raise NotImplementedError()

    @abstractmethod
    def get_by_id(self, task_id: str) -> TaskDTO:
        raise NotImplementedError()

    @abstractmethod
    def lock_task(
        self, task_id: str, execution_id: Optional[str], stage_id: Optional[str]
    ) -> None:
        raise NotImplementedError()

    @abstractmethod
    def complete_task(
        self, task_id: str, execution_id: Optional[str], stage_id: Optional[str]
    ) -> None:
        raise NotImplementedError()

    @abstractmethod
    def set_task_to_pending(self, task_id: str) -> None:
        raise NotImplementedError()

    @abstractmethod
    def get_pending_tasks(
        self, stage_id: str, limit: Union[int, None], offset: int, where: Dict
    ) -> List[TaskDTO]:
        raise NotImplementedError()

    @abstractmethod
    def get_sent_tasks(
        self, stage_id: str, limit: Union[int, None], offset: int, where: Dict
    ) -> List[TaskDTO]:
        raise NotImplementedError()

    @abstractmethod
    def get_stage_tasks(self, stage_id: str) -> List[TaskDTO]:
        raise NotImplementedError()

    @abstractmethod
    def get_all_tasks(self) -> List[TaskDTO]:
        raise NotImplementedError()

    @abstractmethod
    def get_execution_sent_tasks(self, execution_id: str) -> List[TaskDTO]:
        raise NotImplementedError()

    @abstractmethod
    def set_locked_tasks_to_pending(self, execution_id: str) -> None:
        raise NotImplementedError()

    @abstractmethod
    def clear(self):
        raise NotImplementedError()


class LocalTasksRepository(TasksRepository):
    def __init__(self, mp_context: MPContext):
        self.fs_storage = SqlStorage(
            mp_context, directory=TASKS_DIR_PATH, model=TaskDTO
        )

    def clear(self):
        self.fs_storage.clear()

    def get(self, id: str) -> TaskDTO:
        task = self.fs_storage.load(id)
        if task is None:
            raise Exception(f"Task with id {id} not found")

        return task

    def send_task(
        self,
        type: str,
        payload: TaskPayload,
        target_stage_id: str,
        source_stage_id: Optional[str],
        execution_id: Optional[str],
    ) -> TaskDTO:
        id = str(uuid4())
        task = TaskDTO(
            id=id,
            type=type,
            payload=payload,
            status="pending",
            target_stage_id=target_stage_id,
            created=TaskEventDetails(
                at=to_utc_iso_string(datetime.datetime.now(datetime.timezone.utc)),
                by_execution_id=execution_id,
                by_stage_id=source_stage_id,
            ),
            locked=None,
            completed=None,
        )
        self.fs_storage.save(id, task)
        return task

    def lock_task(
        self, task_id: str, execution_id: Optional[str], stage_id: Optional[str]
    ) -> None:
        task = self.get(task_id)

        if task.status != "pending":
            raise TaskLockFailed(f"Task {task_id} has already {task.status}")

        task.status = "locked"
        task.locked = TaskEventDetails(
            at=to_utc_iso_string(datetime.datetime.now(datetime.timezone.utc)),
            by_execution_id=execution_id,
            by_stage_id=stage_id,
        )

        self.fs_storage.save(task_id, task)

    def complete_task(
        self, task_id: str, execution_id: Optional[str], stage_id: Optional[str]
    ) -> None:
        task = self.get(task_id)

        if task.status != "pending" and task.status != "locked":
            raise TaskLockFailed(f"Task {task_id} has not been pending nor locked")

        task.status = "completed"
        task.completed = TaskEventDetails(
            at=to_utc_iso_string(datetime.datetime.now(datetime.timezone.utc)),
            by_execution_id=execution_id,
            by_stage_id=stage_id,
        )

        self.fs_storage.save(task_id, task)

    def set_task_to_pending(self, task_id: str) -> None:
        task = self.get(task_id)

        if task.status != "completed":
            raise TaskLockFailed(f"Task {task_id} is not completed")

        task.status = "pending"

        self.fs_storage.save(task_id, task)

    def _where_matches(self, task: TaskDTO, where: Dict) -> bool:
        payload = task.payload
        for key, value in where.items():
            if key not in payload or payload[key] != value:
                return False
        return True

    def get_pending_tasks(
        self, stage_id: str, limit: Union[int, None], offset: int, where: Dict
    ) -> List[TaskDTO]:
        all_tasks = self.fs_storage.load_all()
        pending_tasks = [
            task
            for task in all_tasks
            if task.target_stage_id == stage_id
            and task.status == "pending"
            and self._where_matches(task, where)
        ]
        pending_tasks = sorted(
            pending_tasks, key=lambda task: task.created.at, reverse=True
        )

        if limit is None:
            return pending_tasks[offset:]
        return pending_tasks[offset : offset + limit]

    def get_sent_tasks(
        self, stage_id: str, limit: Union[int, None], offset: int, where: Dict
    ) -> List[TaskDTO]:
        all_tasks = self.fs_storage.load_all()
        sent_tasks = [
            task
            for task in all_tasks
            if task.created.by_stage_id == stage_id and self._where_matches(task, where)
        ]
        sent_tasks = sorted(sent_tasks, key=lambda task: task.created.at, reverse=True)

        if limit is None:
            return sent_tasks[offset:]
        return sent_tasks[offset : offset + limit]

    def get_stage_tasks(self, stage_id: str) -> List[TaskDTO]:
        all_tasks = self.fs_storage.load_all()
        stage_tasks = [task for task in all_tasks if task.target_stage_id == stage_id]
        return sorted(stage_tasks, key=lambda task: task.created.at, reverse=True)

    def get_by_id(self, task_id: str) -> TaskDTO:
        return self.get(task_id)

    def get_all_tasks(self) -> List[TaskDTO]:
        all_tasks = self.fs_storage.load_all()
        return sorted(all_tasks, key=lambda task: task.created.at, reverse=True)

    def get_execution_sent_tasks(self, execution_id: str) -> List[TaskDTO]:
        all_tasks = self.fs_storage.load_all()
        return [
            task for task in all_tasks if task.created.by_execution_id == execution_id
        ]

    def set_locked_tasks_to_pending(self, execution_id: str) -> None:
        all_tasks = self.fs_storage.load_all()
        for task in all_tasks:
            if (
                task.locked
                and task.locked.by_execution_id == execution_id
                and task.status == "locked"
            ):
                task.status = "pending"
                self.fs_storage.save(task.id, task)


class ProductionTasksRepository(TasksRepository):
    def __init__(self, client: "HTTPClient") -> None:
        self.client = client

    def send_task(
        self,
        type: str,
        payload: TaskPayload,
        target_stage_id: str,
        source_stage_id: Optional[str],
        execution_id: Optional[str],
    ) -> TaskDTO:
        r = self.client.post(
            endpoint="/tasks",
            json={
                "type": type,
                "payload": payload,
                "targetStageId": target_stage_id,
                "sourceStageId": source_stage_id,
                "createdBy": execution_id,
            },
        )

        r.raise_for_status()

        task = r.json()
        return TaskDTO(**task["dto"])

    def lock_task(
        self, task_id: str, execution_id: Optional[str], stage_id: Optional[str]
    ) -> None:
        r = self.client.patch(
            endpoint=f"/tasks/{task_id}",
            json=CloudApiCliTasksUpdateTaskRequest(
                status="locked",
                locked=CloudApiConsoleWorkflowUpdateTaskRequestLocked(
                    at=datetime.datetime.now(datetime.timezone.utc),
                    by_execution_id=execution_id,
                    by_stage_id=stage_id,
                ),
            ).to_dict(),
        )

        if r.status_code == 409:
            raise TaskLockFailed(f"Task {task_id} has already been locked")

        r.raise_for_status()

    def complete_task(
        self, task_id: str, execution_id: Optional[str], stage_id: Optional[str]
    ) -> None:
        r = self.client.patch(
            endpoint=f"/tasks/{task_id}",
            json=CloudApiCliTasksUpdateTaskRequest(
                status="completed",
                completed=CloudApiConsoleWorkflowUpdateTaskRequestCompleted(
                    at=datetime.datetime.now(datetime.timezone.utc),
                    by_execution_id=execution_id,
                    by_stage_id=stage_id,
                ),
            ).to_dict(),
        )

        if r.status_code == 409:
            raise TaskLockFailed(f"Task {task_id} has already been completed")

        r.raise_for_status()

    def set_task_to_pending(self, task_id: str) -> None:
        r = self.client.patch(
            endpoint=f"/tasks/{task_id}",
            json=CloudApiCliTasksUpdateTaskRequest(status="pending").to_dict(),
        )

        if r.status_code == 409:
            raise TaskLockFailed(f"Task {task_id} is not completed")

        r.raise_for_status()

    def get_pending_tasks(
        self, stage_id: str, limit: Union[int, None], offset: int, where: Dict
    ) -> List[TaskDTO]:
        r = self.client.get(
            endpoint="/tasks",
            params={
                "stageId": stage_id,
                "status": ["pending"],
                "sentBy": None,
                "limit": limit,
                "offset": offset,
                "where": json.dumps(where),
            },
        )
        tasks = r.json()["tasks"]
        return [TaskDTO(**task) for task in tasks]

    def get_sent_tasks(
        self, stage_id: str, limit: Union[int, None], offset: int, where: Dict
    ) -> List[TaskDTO]:
        r = self.client.get(
            endpoint="/tasks",
            params={
                "stageId": None,
                "status": [],
                "sentBy": stage_id,
                "limit": limit,
                "offset": offset,
                "where": json.dumps(where),
            },
        )
        tasks = r.json()["tasks"]
        return [TaskDTO(**task) for task in tasks]

    def get_stage_tasks(self, stage_id: str) -> List[TaskDTO]:
        r = self.client.get(
            endpoint="/tasks",
            params={"stageId": stage_id},
        )
        tasks = r.json()["tasks"]
        return [TaskDTO(**task) for task in tasks]

    def get_by_id(self, task_id: str) -> TaskDTO:
        r = self.client.get(
            endpoint=f"/tasks/{task_id}",
        )
        task = r.json()
        return TaskDTO(**task)

    def get_all_tasks(self) -> List[TaskDTO]:
        raise NotImplementedError()

    def get_execution_sent_tasks(self, execution_id: str) -> List[TaskDTO]:
        raise NotImplementedError()

    def set_locked_tasks_to_pending(self, execution_id: str) -> None:
        r = self.client.patch(
            endpoint="/tasks",
            json={"executionId": execution_id},
        )

        r.raise_for_status()

    def clear(self):
        raise NotImplementedError()
