from typing import List, Tuple

from abstra_internals.email_templates import task_waiting_template
from abstra_internals.entities.execution import Execution, PreExecution
from abstra_internals.entities.execution_context import ScriptContext
from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.interface.sdk.user_exceptions import (
    TaskNotWaiting,
    TaskWriteAttempt,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.project.project import (
    FormStage,
    Project,
    ProjectRepository,
    ScriptStage,
    Stage,
)
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

    def __getattr__(self, key: str) -> object:
        return self._dto.payload[key]

    def __setitem__(self, key: str, value: str) -> None:
        raise TaskWriteAttempt()

    @property
    def id(self) -> str:
        return self._dto.id

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

    def _get_task_targets(
        self,
        current_stage: Stage,
        type: str,
        task_payload: TaskPayload,
        project: Project,
        show_warning: bool = True,
    ) -> List[Tuple[Stage, dict]]:
        targets = []

        possible_transitions = list(
            filter(
                lambda t: True if not t.task_type else type == t.task_type,
                current_stage.workflow_transitions,
            )
        )

        for transition in possible_transitions:
            target_stage = project.get_stage(transition.target_id)
            if not target_stage:
                continue

            targets.append((target_stage, task_payload))

        if len(targets) == 0 and show_warning:
            AbstraLogger.warning(
                f"Task with payload {task_payload} was deleted, no transitions were satisfied with the type: {type}"
            )

        return targets

    def send_task(self, type: str, payload: TaskPayload, show_warning=True) -> None:
        current_stage = self.project.get_stage(self.execution.stage_id)

        if not current_stage:
            raise Exception(f"Stage {self.execution.stage_id} not found")

        target_stages = self._get_task_targets(
            current_stage, type, payload, self.project, show_warning=show_warning
        )

        for stage, task_payload in target_stages:
            task = self.repositories.tasks.send_task(
                type, task_payload, stage.id, current_stage.id, self.execution.id
            )
            self._send_waiting_thread_notification(task)
            self.execution.context.sent_tasks.append(task.id)

            if isinstance(stage, ScriptStage):
                self.repositories.producer.submit(
                    PreExecution(
                        context=ScriptContext(task_id=task.id),
                        stage_id=stage.id,
                    )
                )

    def get_stage_pending_tasks(self, limit: int) -> List[Task]:
        stage = self.project.get_stage(self.execution.stage_id)
        if not stage:
            raise Exception(f"Stage {self.execution.stage_id} not found")

        dtos = self.repositories.tasks.get_pending_tasks(self.execution.stage_id, limit)
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

        dto = self.repositories.tasks.get_by_id(self.execution.context.task_id)
        return Task(self, dto)

    def _send_waiting_thread_notification(self, task: TaskDTO):
        stage = self.project.get_stage(task.target_stage_id)
        if not stage:
            raise Exception(f"Stage {task.target_stage_id} not found")

        if not (isinstance(stage, FormStage) and stage.notification_trigger.enabled):
            return

        recipient_emails = stage.notification_trigger.get_recipients(task.payload)
        if not recipient_emails:
            return

        self.repositories.email.send(
            task_waiting_template.generate_email(
                recipient_emails=recipient_emails, form=stage
            )
        )
