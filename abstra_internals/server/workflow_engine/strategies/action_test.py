from unittest import TestCase
from .action import action_strategy
from abstra_internals.repositories.stage_run import LocalStageRunRepository
from abstra_internals.repositories.project.project import (
    FormStage,
    WorkflowTransition,
    JobStage,
)


class ActionStrategyTest(TestCase):
    def test_advances_when_finished(self):
        stage = JobStage(
            id="1",
            title="title",
            file="job.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="jobs:finished",
                )
            ],
        )
        stage_run = LocalStageRunRepository.create_initial(stage="1", data={})
        result = action_strategy(stage, stage_run, "jobs:finished")
        self.assertEqual(result, [dict(stage="target_id", data={})])

    def test_stays_when_abandoned(self):
        stage = FormStage(
            id="1",
            title="title",
            file="job.py",
            path="path",
            is_initial=False,
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="jobs:finished",
                )
            ],
        )
        stage_run = LocalStageRunRepository.create_initial(stage="1", data={})
        result = action_strategy(stage, stage_run, "forms:abandoned")
        self.assertEqual(result, [dict(stage="1", data={})])
