from typing import Dict, List, Optional, Union

from abstra_internals.controllers.common.task_executors import TaskExecutor
from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import ScriptContext
from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.interface.sdk.user_exceptions import (
    TaskNotWaiting,
    TaskWriteAttempt,
)
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.tasks import TaskDTO, TaskLockFailed, TaskPayload


class Task:
    """
    A task is a unit of work that can be sent to the execution engine.
    """

    def __init__(
        self, task_controller: "TasksSDKController", dto: TaskDTO, mock: bool = False
    ) -> None:
        """
        Initialize a Task object.

        Args:
            task_controller (TasksSDKController): The controller for managing tasks.
            dto (TaskDTO): The data transfer object representing the task.
            mock (bool): Whether the task is a mock task. Defaults to False.
        """
        self._dto = dto
        self._controller = task_controller
        self._mock = mock

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
        """
        Get the ID of the task.
        """
        return self._dto.id

    @property
    def type(self) -> str:
        """
        Get the type of the task.
        """
        return self._dto.type

    @property
    def payload(self) -> TaskPayload:
        """
        Get the data of the task.
        """
        return self._dto.payload

    def get_payload(self) -> TaskPayload:
        """
        Get the data of the task.
        """
        return self._dto.payload

    def get_dto(self) -> TaskDTO:
        """
        Get the data of the task.
        """
        return self._dto

    def get(self, key: str, default: Optional[object] = None) -> object:
        """
        Get the value of a key in the task payload.
        """
        return self._dto.payload.get(key, default)

    def lock(self) -> None:
        """
        Lock the task so it cannot be started by another execution.
        """
        try:
            self._controller.lock_task(self._dto.id)
        except TaskLockFailed:
            raise TaskNotWaiting()

    def complete(self) -> None:
        """
        Mark the task as completed.
        """
        try:
            self._controller.complete_task(self._dto.id, mock=self._mock)
        except TaskLockFailed:
            raise TaskNotWaiting()

    def __enter__(self):
        self.lock()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type is None:
            self.complete()
        else:
            self._controller.set_execution_locked_tasks_to_pending()
            return False


class TasksSDKController:
    def __init__(self, repositories: Repositories, execution: Execution) -> None:
        self.execution = execution
        self.repositories = repositories
        self.project = self.repositories.project.load(include_disabled_stages=False)
        self.executor = TaskExecutor(repositories)

    def send_task(self, type: str, payload: TaskPayload, show_warning: bool) -> None:
        stage = self.project.get_stage_raises(self.execution.stage_id)
        self.executor.send_task(
            type=type,
            current_stage=stage,
            payload=payload,
            execution=self.execution,
            show_warning=show_warning,
        )

    def get_stage_pending_tasks(
        self, limit: Union[int, None], offset: int, where: Dict
    ) -> List[Task]:
        if self.execution.context.mock_execution.test_pending_tasks:
            all_tasks = [
                Task(self, task, mock=True)
                for task in self.execution.context.mock_execution.test_pending_tasks
            ]
            limit = limit or len(all_tasks)
            offset = offset or 0
            return all_tasks[offset : limit + offset]

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

    def complete_task(self, task_id: str, mock: bool = False) -> None:
        if mock:
            if (
                current_mocked_pending_tasks
                := self.execution.context.mock_execution.test_pending_tasks
            ):
                self.execution.context.mock_execution.test_pending_tasks = [
                    task for task in current_mocked_pending_tasks if task.id != task_id
                ]
            return

        self.repositories.tasks.complete_task(
            task_id, self.execution.id, self.execution.stage_id
        )

    def set_execution_locked_tasks_to_pending(self) -> None:
        self.repositories.tasks.set_locked_tasks_to_pending(self.execution.id)

    def get_all_tasks(self) -> List[Task]:
        dtos = self.repositories.tasks.get_all_tasks()
        return [Task(self, dto) for dto in dtos]

    def get_trigger_task(self) -> Task:
        if not isinstance(self.execution.context, ScriptContext):
            raise user_exceptions.IncompatibleScriptSDK()

        if self.execution.context.mock_execution.test_trigger_task:
            return Task(
                self, self.execution.context.mock_execution.test_trigger_task, mock=True
            )

        dto = self.repositories.tasks.get_by_id(self.execution.context.task_id)
        return Task(self, dto)
