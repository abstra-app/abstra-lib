from typing import Dict, List, Optional

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.execution_client import BasicClient
from abstra_internals.controllers.workflow_interface import IWorkflowEngine
from abstra_internals.email_templates import thread_waiting_template
from abstra_internals.entities.execution import Execution
from abstra_internals.repositories.email import EmailRepository
from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.execution_logs import ExecutionLogsRepository
from abstra_internals.repositories.project.project import (
    ActionStage,
    ConditionStage,
    ControlStage,
    FormStage,
    IteratorStage,
    ProjectRepository,
    ScriptStage,
    WorkflowStage,
)
from abstra_internals.repositories.stage_run import StageRun, StageRunRepository
from abstra_internals.threaded import threaded


class WorkflowEngine(IWorkflowEngine):
    def __init__(
        self,
        stage_run_repository: StageRunRepository,
        execution_repository: ExecutionRepository,
        email_repository: EmailRepository,
        execution_logs_repository: ExecutionLogsRepository,
    ):
        self.stage_run_repository = stage_run_repository
        self.execution_repository = execution_repository
        self.email_repository = email_repository
        self.execution_logs_repository = execution_logs_repository

    @threaded
    def handle_execution_end(self, execution: Execution):
        project = ProjectRepository.load()

        stage = project.get_action(execution.stage_id)
        if not stage:
            raise Exception(f"Stage {execution.stage_id} not found")

        stage_run = self.stage_run_repository.get(execution.stage_run_id)

        transition_type = f"{stage.type_name}s:{execution.status}"
        next_stage_run_dtos = self._follow_action_transitions(
            stage, stage_run, transition_type
        )

        self._pub(stage_run, next_stage_run_dtos)

    def _get_stage(self, id: str) -> Optional[WorkflowStage]:
        project = ProjectRepository.load()
        return project.get_stage(id)

    @staticmethod
    def _follow_condition_transitions(
        stage: ConditionStage,
        stage_run: StageRun,
        transition_type="conditions:patternMatched",
    ):
        condition = stage.get_condition(stage_run.data)

        next_stage_ids = [
            t.target_id for t in stage.workflow_transitions if t.matches(condition)
        ]

        return [
            dict(stage=stage_id, data=stage_run.data) for stage_id in next_stage_ids
        ]

    @staticmethod
    def _follow_action_transitions(
        stage: ActionStage, stage_run: StageRun, transition_type: str
    ):
        if transition_type == "forms:abandoned" and not stage.is_initial:
            return [dict(stage=stage_run.stage, data=stage_run.data)]

        next_stage_ids = [
            t.target_id for t in stage.workflow_transitions if t.type == transition_type
        ]

        return [
            dict(stage=stage_id, data=stage_run.data) for stage_id in next_stage_ids
        ]

    @staticmethod
    def _follow_iterator_transitions(
        stage: IteratorStage,
        stage_run: StageRun,
        transition_type="iterators:each",
    ):
        items = stage.get_items(stage_run.data)

        next_stage_ids = [
            t.target_id for t in stage.workflow_transitions if t.type == transition_type
        ]

        return [
            dict(stage=stage_id, data={stage.item_name: item})
            for item in items
            for stage_id in next_stage_ids
        ]

    def _send_waiting_thread_notification(self, stage_run: StageRun):
        stage = self._get_stage(stage_run.stage)
        if not stage:
            raise Exception(f"Stage {stage_run.stage} not found")

        if not isinstance(stage, FormStage) or not stage.notification_trigger.enabled:
            return

        recipient_emails = stage.notification_trigger.get_recipients(stage_run.data)
        if not recipient_emails:
            return

        self.email_repository.send(
            thread_waiting_template.generate_email(
                recipient_emails=recipient_emails, stage_run=stage_run, form=stage
            )
        )

    def _pub(self, parent_stage_run: StageRun, stage_run_dtos: List[Dict]):
        # As we don't have a queue yet, we just create the next stage runs
        # and consume them immediatelly

        for stage_run in self.stage_run_repository.create_next(
            parent_stage_run, stage_run_dtos
        ):
            self._consume(stage_run)
            if not parent_stage_run.is_abandoned:
                self._send_waiting_thread_notification(stage_run)

    def _consume(self, stage_run: StageRun):
        stage = self._get_stage(stage_run.stage)
        if not stage:
            raise Exception(f"Stage {stage_run.stage} not found")

        if isinstance(stage, ScriptStage):
            return self.run_script(stage, stage_run)

        if isinstance(stage, (ConditionStage, IteratorStage)):
            return self.run_control(stage, stage_run)

    def run_script(self, stage: ScriptStage, stage_run: StageRun):
        ExecutionController(
            stage=stage,
            request=None,
            client=BasicClient(),
            workflow_engine=self,
            target_stage_run_id=stage_run.id,
            stage_run_repository=self.stage_run_repository,
            execution_repository=self.execution_repository,
        ).run()

    def run_control(self, stage: ControlStage, stage_run: StageRun):
        next_stage_run_dtos: List[Dict] = []
        self.stage_run_repository.change_status(stage_run.id, "running")

        if isinstance(stage, ConditionStage):
            next_stage_run_dtos = self._follow_condition_transitions(stage, stage_run)

        if isinstance(stage, IteratorStage):
            next_stage_run_dtos = self._follow_iterator_transitions(stage, stage_run)

        self.stage_run_repository.change_status(stage_run.id, "finished")
        self._pub(stage_run, next_stage_run_dtos)
