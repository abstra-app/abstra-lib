from typing import Optional

import requests

from abstra_internals.email_templates import task_waiting_template
from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import ScriptContext
from abstra_internals.environment import IS_PRODUCTION, REQUEST_TIMEOUT
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.project.project import (
    AgentStage,
    ClientStage,
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
            elif (
                isinstance(stage, AgentStage)
                and stage.project_id is not None
                and stage.client_stage_id is not None
            ):
                agent = self.repos.role_clients.get_agent(stage.project_id)

                conn = next(
                    (
                        c
                        for c in self.repos.role_clients.get_connections()
                        if c.agent_project_id == agent.project_id
                        and c.client_stage_id == stage.id
                    ),
                    None,
                )

                assert conn is not None, "Connection for agent not found"

                requests.post(
                    agent.tasks_url + "/agent",
                    json={
                        "task_data": {
                            "type": type,
                            "payload": {
                                **payload,
                                "connection_token": conn.token,
                            },
                        },
                        "target_stage_id": (stage.client_stage_id),
                        "execution_id": (
                            execution.id if IS_PRODUCTION and execution else None
                        ),
                    },
                    headers={"authorization": conn.token},
                    timeout=REQUEST_TIMEOUT,
                ).raise_for_status()

            elif isinstance(stage, ClientStage):
                assert isinstance(payload["connection_token"], str)
                conn = self.repos.role_agents.get_connection_by_token(
                    payload["connection_token"]
                )

                requests.post(
                    conn.client_task_url,
                    json=task.model_dump(),
                    headers={"Authorization": conn.token},
                    timeout=REQUEST_TIMEOUT,
                ).raise_for_status()

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
