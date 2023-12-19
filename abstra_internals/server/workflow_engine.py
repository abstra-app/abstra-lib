from typing import Type, List, Dict

from ..repositories.stage_run import get_stage_run_repository, StageRunRepository
from ..execution.execution import Execution, UnsetStageRun
from ..execution.script_execution import ScriptExecution
from ..execution.job_execution import JobExecution
from ..repositories.stage_run import StageRun
from ..threaded import threaded

from ..repositories.project.project import (
    ActionStage,
    ProjectRepository,
    ConditionStage,
    IteratorStage,
    ControlStage,
    ScriptStage,
    JobStage,
)


class WorkflowEngine:
    def __init__(self, stage_run_repo: Type[StageRunRepository]):
        self.stage_run_repo = stage_run_repo

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
        execution = JobExecution(stage)
        execution.run()
        self.notify_ran(execution)

    @threaded
    def run_script(self, stage: ScriptStage, stage_run: StageRun):
        execution = ScriptExecution(stage, stage_run.id)
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


def condition_strategy(
    stage: ConditionStage,
    stage_run: StageRun,
    transition_type="conditions:patterMatched",
):
    variable_value = stage_run.data.get(stage.variable_name)

    next_stage_ids = [
        t.target_id
        for t in stage.workflow_transitions
        if t.type == transition_type and t.condition_value == variable_value
    ]

    return [dict(stage=stage_id, data=stage_run.data) for stage_id in next_stage_ids]


def iterator_strategy(
    stage: IteratorStage, stage_run: StageRun, transition_type="iterators:each"
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


def action_strategy(stage: ActionStage, stage_run: StageRun, transition_type: str):
    if transition_type == "forms:abandoned" and not stage.is_initial:
        return [dict(stage=stage_run.stage, data=stage_run.data)]

    next_stage_ids = [
        t.target_id for t in stage.workflow_transitions if t.type == transition_type
    ]

    return [dict(stage=stage_id, data=stage_run.data) for stage_id in next_stage_ids]


def factory():
    return WorkflowEngine(get_stage_run_repository())


workflow_engine = factory()
