from typing import Type, List, Dict

from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.execution_logs import ExecutionLogsRepository

from ...repositories.stage_run import StageRunRepository
from ...execution.execution import Execution, UnsetStageRun
from ...execution.script_execution import ScriptExecution
from ...execution.job_execution import JobExecution
from ...repositories.stage_run import StageRun
from ...threaded import threaded

from ...repositories import (
    stage_run_repository,
    execution_repository,
    execution_logs_repository,
)

from .strategies import condition_strategy, action_strategy, iterator_strategy
from ...repositories.stage_run import StageRunRepository
from ...execution.execution import Execution, UnsetStageRun
from ...execution.script_execution import ScriptExecution
from ...execution.job_execution import JobExecution
from ...repositories.stage_run import StageRun
from ...threaded import threaded
from ...repositories.project.project import (
    ProjectRepository,
    ConditionStage,
    IteratorStage,
    ControlStage,
    ScriptStage,
    JobStage,
    ActionStage,
)


class WorkflowEngine:
    def __init__(
        self,
        stage_run_repo: StageRunRepository,
        execution_repository: ExecutionRepository,
        execution_logs_repository: ExecutionLogsRepository,
    ):
        self.stage_run_repo = stage_run_repo
        self.execution_repository = execution_repository
        self.execution_logs_repository = execution_logs_repository

    def get_stage(self, id: str):
        # TODO: inject this
        project = ProjectRepository.load()
        return project.get_stage(id)

    def notify_ran(self, execution: Execution):
        if not execution.stage_run:
            raise UnsetStageRun()

        stage = execution.stage
        status = execution.status
        stage_run = execution.stage_run

        transition_type = f"{stage.type_name}s:{status}"
        next_stage_run_dtos = action_strategy(stage, stage_run, transition_type)
        self.pub(stage_run, next_stage_run_dtos)

    def pub(self, parent_stage_run: StageRun, stage_run_dtos: List[Dict]):
        for stage_run in self.stage_run_repo.create_next(
            parent_stage_run, stage_run_dtos
        ):
            self.consume(stage_run)

    @threaded
    def run_job(self, stage: JobStage):
        execution = JobExecution(
            stage,
            stage_run_repository=self.stage_run_repo,
            execution_repository=self.execution_repository,
            execution_logs_repository=self.execution_logs_repository,
        )
        execution.run()
        self.notify_ran(execution)

    @threaded
    def run_script(self, stage: ScriptStage, stage_run: StageRun):
        execution = ScriptExecution(
            stage,
            stage_run_id=stage_run.id,
            stage_run_repository=self.stage_run_repo,
            execution_repository=self.execution_repository,
            execution_logs_repository=self.execution_logs_repository,
        )
        execution.run()
        self.notify_ran(execution)

    @threaded
    def run_control(self, stage: ControlStage, stage_run: StageRun):
        next_stage_run_dtos: List[Dict] = []
        self.stage_run_repo.change_state(stage_run.id, "running")

        if isinstance(stage, ConditionStage):
            next_stage_run_dtos = condition_strategy(stage, stage_run)

        if isinstance(stage, IteratorStage):
            next_stage_run_dtos = iterator_strategy(stage, stage_run)

        self.stage_run_repo.change_state(stage_run.id, "finished")
        self.pub(stage_run, next_stage_run_dtos)

    def consume(self, stage_run: StageRun):
        stage = self.get_stage(stage_run.stage)
        if not stage:
            raise Exception(f"Stage {stage_run.stage} not found")

        if isinstance(stage, ScriptStage):
            return self.run_script(stage, stage_run)

        if isinstance(stage, (ConditionStage, IteratorStage)):
            return self.run_control(stage, stage_run)


def factory():
    return WorkflowEngine(
        stage_run_repository, execution_repository, execution_logs_repository
    )


workflow_engine = factory()
