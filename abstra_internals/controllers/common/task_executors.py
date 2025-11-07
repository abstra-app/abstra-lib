from typing import Optional

from abstra_internals.email_templates import task_waiting_template
from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import ScriptContext
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.project.project import (
    ComponentStage,
    FormStage,
    ScriptStage,
    Stage,
)
from abstra_internals.repositories.tasks import TaskDTO, TaskPayload


class TaskExecutor:
    def __init__(self, repos: Repositories) -> None:
        self.repos = repos
        self.project = self.repos.project.load(include_disabled_stages=False)

    def send_task(
        self,
        type: str,
        current_stage: Stage,
        payload: TaskPayload,
        execution: Optional[Execution] = None,
        show_warning: bool = True,
    ) -> None:
        project = self.repos.project.load(include_disabled_stages=False)

        next_stages = []
        module_name = project.find_module_containing_stage(current_stage.id)
        if module_name is not None:
            if project.is_stage_module_output(current_stage.id):
                parent_component_stage = project.get_component_by_module_name(
                    module_name
                )
                if parent_component_stage is not None:
                    next_stages = [
                        project.get_stage_raises(t.target_id)
                        for t in parent_component_stage.workflow_transitions
                        if t.matches(type)
                    ]
            else:
                next_stages = [
                    project.get_stage_raises(t.target_id)
                    for t in current_stage.workflow_transitions
                    if t.matches(type)
                ]
        else:
            next_stages = [
                project.get_stage_raises(t.target_id)
                for t in current_stage.workflow_transitions
                if t.matches(type)
            ]

        if len(next_stages) == 0 and show_warning:
            print(
                f"[WARNING] No transitions found for task type {type} in stage {current_stage.id}"
            )
            return

        for stage in next_stages:
            if isinstance(stage, ComponentStage):
                module = stage.package_name
                if module is not None:
                    input_stages = self.project.get_inputs_for_module(module)
                    next_stages.remove(stage)
                    next_stages.extend(input_stages)

        for stage in next_stages:
            task = self.repos.tasks.send_task(
                type=type,
                payload=payload,
                source_stage_id=current_stage.id,
                target_stage_id=stage.id,
                execution_id=execution.id if execution else None,
            )
            self._send_waiting_thread_notification(task)
            if execution:
                execution.context.sent_tasks.append(task.id)
            if isinstance(stage, ScriptStage):
                self.repos.producer.enqueue(
                    context=ScriptContext(task_id=task.id),
                    stage_id=stage.id,
                )

    def _send_waiting_thread_notification(self, task: TaskDTO):
        stage = self.project.get_stage(task.target_stage_id)
        if not stage:
            raise Exception(f"Stage {task.target_stage_id} not found")

        if not (isinstance(stage, FormStage) and stage.notification_trigger.enabled):
            return

        recipient_emails = stage.notification_trigger.get_recipients(task.payload)
        if not recipient_emails:
            return

        self.repos.email.send(
            task_waiting_template.generate_email(
                recipient_emails=recipient_emails, form=stage
            )
        )
