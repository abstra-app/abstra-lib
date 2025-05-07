import datetime
import json
from abc import ABC, abstractmethod
from typing import Any, Dict, List, Literal, Mapping, Optional, Union
from uuid import uuid4

import requests

from abstra_internals.environment import REQUEST_TIMEOUT, SIDECAR_HEADERS
from abstra_internals.repositories.multiprocessing import MPContext
from abstra_internals.utils.datetime import to_utc_iso_string
from abstra_internals.utils.dot_abstra import TASKS_FOLDER
from abstra_internals.utils.file_manager import FileManager
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
        self.manager = FileManager(mp_context, directory=TASKS_FOLDER, model=TaskDTO)

    def clear(self):
        self.manager.clear()

    def get(self, id: str) -> TaskDTO:
        task = self.manager.load(id)
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
        self.manager.save(id, task)
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

        self.manager.save(task_id, task)

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

        self.manager.save(task_id, task)

    def set_task_to_pending(self, task_id: str) -> None:
        task = self.get(task_id)

        if task.status != "completed":
            raise TaskLockFailed(f"Task {task_id} is not completed")

        task.status = "pending"

        self.manager.save(task_id, task)

    def _where_matches(self, task: TaskDTO, where: Dict) -> bool:
        payload = task.payload
        for key, value in where.items():
            if key not in payload or payload[key] != value:
                return False
        return True

    def get_pending_tasks(
        self, stage_id: str, limit: Union[int, None], offset: int, where: Dict
    ) -> List[TaskDTO]:
        all_tasks = self.manager.load_all()
        pending_tasks = [
            task
            for task in all_tasks
            if task.target_stage_id == stage_id
            and task.status == "pending"
            and self._where_matches(task, where)
        ]
        pending_tasks = sorted(pending_tasks, key=lambda task: task.created.at)

        if limit is None:
            return pending_tasks[offset:]
        return pending_tasks[offset : offset + limit]

    def get_sent_tasks(
        self, stage_id: str, limit: Union[int, None], offset: int, where: Dict
    ) -> List[TaskDTO]:
        all_tasks = self.manager.load_all()
        sent_tasks = [
            task
            for task in all_tasks
            if task.created.by_stage_id == stage_id and self._where_matches(task, where)
        ]
        sent_tasks = sorted(sent_tasks, key=lambda task: task.created.at)

        if limit is None:
            return sent_tasks[offset:]
        return sent_tasks[offset : offset + limit]

    def get_stage_tasks(self, stage_id: str) -> List[TaskDTO]:
        all_tasks = self.manager.load_all()
        return [task for task in all_tasks if task.target_stage_id == stage_id]

    def get_by_id(self, task_id: str) -> TaskDTO:
        return self.get(task_id)

    def get_all_tasks(self) -> List[TaskDTO]:
        return self.manager.load_all()

    def get_execution_sent_tasks(self, execution_id: str) -> List[TaskDTO]:
        all_tasks = self.manager.load_all()
        return [
            task for task in all_tasks if task.created.by_execution_id == execution_id
        ]

    def set_locked_tasks_to_pending(self, execution_id: str) -> None:
        all_tasks = self.manager.load_all()
        for task in all_tasks:
            if (
                task.locked
                and task.locked.by_execution_id == execution_id
                and task.status == "locked"
            ):
                task.status = "pending"
                self.manager.save(task.id, task)


class ProductionTasksRepository(TasksRepository):
    def __init__(self, url: str) -> None:
        self.url = url

    def _request(
        self,
        method: str,
        path: str,
        body: Any = None,
        params: dict = {},
        raise_for_status: bool = True,
    ):
        headers: Mapping[str, str] = SIDECAR_HEADERS
        r = requests.request(
            method=method,
            url=f"{self.url}/tasks{path}",
            headers=headers,
            json=body,
            params=params,
            timeout=REQUEST_TIMEOUT,
        )

        if raise_for_status:
            r.raise_for_status()

        return r

    def send_task(
        self,
        type: str,
        payload: TaskPayload,
        target_stage_id: str,
        source_stage_id: Optional[str],
        execution_id: Optional[str],
    ) -> TaskDTO:
        r = self._request(
            "POST",
            path="/",
            body={
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
        r = self._request(
            "PATCH",
            path=f"/{task_id}",
            body={
                "status": "locked",
                "locked": {
                    "at": to_utc_iso_string(
                        datetime.datetime.now(datetime.timezone.utc)
                    ),
                    "byExecutionId": execution_id,
                    "byStageId": stage_id,
                },
            },
        )

        if r.status_code == 409:
            raise TaskLockFailed(f"Task {task_id} has already been locked")

        r.raise_for_status()

    def complete_task(
        self, task_id: str, execution_id: Optional[str], stage_id: Optional[str]
    ) -> None:
        r = self._request(
            "PATCH",
            path=f"/{task_id}",
            body={
                "status": "completed",
                "completed": {
                    "at": to_utc_iso_string(
                        datetime.datetime.now(datetime.timezone.utc)
                    ),
                    "byExecutionId": execution_id,
                    "byStageId": stage_id,
                },
            },
        )

        if r.status_code == 409:
            raise TaskLockFailed(f"Task {task_id} has already been completed")

        r.raise_for_status()

    def set_task_to_pending(self, task_id: str) -> None:
        r = self._request("PATCH", path=f"/{task_id}", body={"status": "pending"})

        if r.status_code == 409:
            raise TaskLockFailed(f"Task {task_id} is not completed")

        r.raise_for_status()

    def get_pending_tasks(
        self, stage_id: str, limit: Union[int, None], offset: int, where: Dict
    ) -> List[TaskDTO]:
        r = self._request(
            "GET",
            path="/",
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
        r = self._request(
            "GET",
            path="/",
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
        r = self._request("GET", path="/", params={"stageId": stage_id})
        tasks = r.json()["tasks"]
        return [TaskDTO(**task) for task in tasks]

    def get_by_id(self, task_id: str) -> TaskDTO:
        r = self._request("GET", path=f"/{task_id}")
        task = r.json()
        return TaskDTO(**task)

    def get_all_tasks(self) -> List[TaskDTO]:
        raise NotImplementedError()

    def get_execution_sent_tasks(self, execution_id: str) -> List[TaskDTO]:
        raise NotImplementedError()

    def set_locked_tasks_to_pending(self, execution_id: str) -> None:
        r = self._request("PATCH", path="/", body={"executionId": execution_id})
        r.raise_for_status()

    def clear(self):
        raise NotImplementedError()
