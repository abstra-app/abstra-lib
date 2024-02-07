from typing import Dict, List, Optional

from ...execution.execution import Execution
from ...execution.stage_run_manager import UnsetStageRun
from ...execution.job_execution import JobExecution
from ...execution.script_execution import ScriptExecution
from ...repositories import (
    execution_logs_repository,
    execution_repository,
    notification_repository,
    stage_run_repository,
)
from ...execution.stage_run_manager import AttachedStageRunManager
from ...repositories.execution import ExecutionRepository
from ...repositories.execution_logs import ExecutionLogsRepository
from ...repositories.notifications import NotificationRepository
from ...repositories.project.project import (
    ActionStage,
    ConditionStage,
    ControlStage,
    FormStage,
    IteratorStage,
    JobStage,
    ProjectRepository,
    ScriptStage,
    WorkflowStage,
)
from ...repositories.stage_run import StageRun, StageRunRepository
from ...threaded import threaded


class WorkflowEngine:
    def __init__(
        self,
        stage_run_repo: StageRunRepository,
        execution_repository: ExecutionRepository,
        execution_logs_repository: ExecutionLogsRepository,
        notification_repository: NotificationRepository,
    ):
        self.stage_run_repo = stage_run_repo
        self.execution_repository = execution_repository
        self.execution_logs_repository = execution_logs_repository
        self.notification_repository = notification_repository
        self.stage_run_manager = AttachedStageRunManager(stage_run_repo)

    def handle_execution_end(self, execution: Execution):
        if not execution.stage_run:
            raise UnsetStageRun()

        stage = execution.stage
        status = execution.status
        stage_run = execution.stage_run

        transition_type = f"{stage.type_name}s:{status}"
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
        variable_value = stage_run.data.get(stage.variable_name)

        next_stage_ids = [
            t.target_id for t in stage.workflow_transitions if t.matches(variable_value)
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
        variable_value = stage_run.data.get(stage.variable_name)

        if not isinstance(variable_value, list):
            return []

        next_stage_ids = [
            t.target_id for t in stage.workflow_transitions if t.type == transition_type
        ]

        return [
            dict(stage=stage_id, data={"item": item})
            for item in variable_value
            for stage_id in next_stage_ids
        ]

    def _send_waiting_thread_notification(self, stage_run: StageRun):
        stage = self._get_stage(stage_run.stage)
        if not stage:
            raise Exception(f"Stage {stage_run.stage} not found")

        if not isinstance(stage, FormStage):
            return

        if (
            not stage.notification_trigger.variable_name
            or not stage.notification_trigger.enabled
        ):
            return

        self.notification_repository.notify_waiting_thread(
            recipient_emails=stage.notification_trigger.get_validated_recipients(
                stage_run.data
            ),
            stage_run_id=stage_run.id,
            stage_path=stage.path,
            stage_name=stage.title,
        )

    def _pub(self, parent_stage_run: StageRun, stage_run_dtos: List[Dict]):
        # As we don't have a queue yet, we just create the next stage runs
        # and consume them immediatelly

        for stage_run in self.stage_run_repo.create_next(
            parent_stage_run, stage_run_dtos
        ):
            self._send_waiting_thread_notification(stage_run)
            self._consume(stage_run)

    def _consume(self, stage_run: StageRun):
        stage = self._get_stage(stage_run.stage)
        if not stage:
            raise Exception(f"Stage {stage_run.stage} not found")

        if isinstance(stage, ScriptStage):
            return self.run_script(stage, stage_run)

        if isinstance(stage, (ConditionStage, IteratorStage)):
            return self.run_control(stage, stage_run)

    @threaded
    def run_job(self, stage: JobStage):
        execution = JobExecution(
            stage,
            stage_run_manager=self.stage_run_manager,
            execution_repository=self.execution_repository,
            execution_logs_repository=self.execution_logs_repository,
        )
        execution.run()
        self.handle_execution_end(execution)

    @threaded
    def run_script(self, stage: ScriptStage, stage_run: StageRun):
        execution = ScriptExecution(
            stage,
            stage_run_id=stage_run.id,
            stage_run_manager=self.stage_run_manager,
            execution_repository=self.execution_repository,
            execution_logs_repository=self.execution_logs_repository,
        )
        execution.run()
        self.handle_execution_end(execution)

    @threaded
    def run_control(self, stage: ControlStage, stage_run: StageRun):
        next_stage_run_dtos: List[Dict] = []
        self.stage_run_repo.change_state(stage_run.id, "running")

        if isinstance(stage, ConditionStage):
            next_stage_run_dtos = self._follow_condition_transitions(stage, stage_run)

        if isinstance(stage, IteratorStage):
            next_stage_run_dtos = self._follow_iterator_transitions(stage, stage_run)

        self.stage_run_repo.change_state(stage_run.id, "finished")
        self._pub(stage_run, next_stage_run_dtos)


def factory():
    return WorkflowEngine(
        stage_run_repository,
        execution_repository,
        execution_logs_repository,
        notification_repository,
    )


workflow_engine = factory()
