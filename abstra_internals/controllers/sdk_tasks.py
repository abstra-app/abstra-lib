from typing import Dict, List, Union

from abstra_internals.controllers.common.task_executors import TaskExecutor
from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import ScriptContext
from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.interface.sdk.user_exceptions import (
    TaskNotWaiting,
    TaskWriteAttempt,
)
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.repositories.tasks import TaskDTO, TaskLockFailed, TaskPayload


class Task:
    def __init__(self, task_controller: "TasksSDKController", dto: TaskDTO) -> None:
        self._dto = dto
        self._controller = task_controller

    def __str__(self) -> str:
        return str(self._dto)

    def __repr__(self) -> str:
        return self._dto.__repr__()

    def __getitem__(self, key: str) -> object:
        return self._dto.payload[key]

    def __setitem__(self, key: str, value: str) -> None:
        raise TaskWriteAttempt()

    @property
    def id(self) -> str:
        return self._dto.id

    @property
    def type(self) -> str:
        return self._dto.type

    @property
    def payload(self) -> TaskPayload:
        return self._dto.payload

    def get_payload(self) -> TaskPayload:
        return self._dto.payload

    def get_dto(self) -> TaskDTO:
        return self._dto

    def lock(self) -> None:
        try:
            self._controller.lock_task(self._dto.id)
        except TaskLockFailed:
            raise TaskNotWaiting()

    def complete(self) -> None:
        try:
            self._controller.complete_task(self._dto.id)
        except TaskLockFailed:
            raise TaskNotWaiting()

    def __enter__(self):
        self.lock()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type is None:
            self.complete()
        else:
            self._controller.set_task_to_pending(self._dto.id)
            return False


class TasksSDKController:
    def __init__(self, repositories: Repositories, execution: Execution) -> None:
        self.execution = execution
        self.repositories = repositories
        self.project = ProjectRepository().load()
        self.executor = TaskExecutor(repositories)

    def send_task(self, type: str, payload: TaskPayload) -> None:
        stage = self.project.get_stage_raises(self.execution.stage_id)
        self.executor.send_task(
            type=type, current_stage=stage, payload=payload, execution=self.execution
        )

    def get_stage_pending_tasks(
        self, limit: Union[int, None], offset: int, where: Dict
    ) -> List[Task]:
        if self.execution.context.mock_execution.test_pending_tasks:
            return [
                Task(self, task)
                for task in self.execution.context.mock_execution.test_pending_tasks
            ]

        stage = self.project.get_stage(self.execution.stage_id)
        if not stage:
            raise Exception(f"Stage {self.execution.stage_id} not found")

        dtos = self.repositories.tasks.get_pending_tasks(
            self.execution.stage_id, limit, offset, where
        )
        return [Task(self, dto) for dto in dtos]

    def get_stage_sent_tasks(
        self, limit: Union[int, None], offset: int, where: Dict
    ) -> List[Task]:
        stage = self.project.get_stage(self.execution.stage_id)
        if not stage:
            raise Exception(f"Stage {self.execution.stage_id} not found")

        dtos = self.repositories.tasks.get_sent_tasks(
            self.execution.stage_id, limit, offset, where
        )
        return [Task(self, dto) for dto in dtos]

    def lock_task(self, task_id: str) -> None:
        self.repositories.tasks.lock_task(
            task_id, self.execution.id, self.execution.stage_id
        )

    def complete_task(self, task_id: str) -> None:
        self.repositories.tasks.complete_task(
            task_id, self.execution.id, self.execution.stage_id
        )

    def set_task_to_pending(self, task_id: str) -> None:
        self.repositories.tasks.set_task_to_pending(task_id)

    def get_all_tasks(self) -> List[Task]:
        dtos = self.repositories.tasks.get_all_tasks()
        return [Task(self, dto) for dto in dtos]

    def get_trigger_task(self) -> Task:
        if not isinstance(self.execution.context, ScriptContext):
            raise user_exceptions.IncompatibleScriptSDK()

        if self.execution.context.mock_execution.test_trigger_task:
            return Task(self, self.execution.context.mock_execution.test_trigger_task)

        dto = self.repositories.tasks.get_by_id(self.execution.context.task_id)
        return Task(self, dto)
