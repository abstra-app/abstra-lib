from unittest import TestCase

from ...repositories.project.project import (
    FormStage,
    JobStage,
    NotificationTrigger,
    WorkflowTransition,
)
from ...repositories.stage_run import LocalStageRunRepository
from . import workflow_engine


class ActionTransitionsTest(TestCase):
    def setUp(self) -> None:
        self.repository = LocalStageRunRepository()

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
        stage_run = self.repository.create_initial(stage="1", data={})
        result = workflow_engine._follow_action_transitions(
            stage, stage_run, "jobs:finished"
        )
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
            notification_trigger=NotificationTrigger(
                variable_name="foo",
                enabled=False,
            ),
        )
        stage_run = self.repository.create_initial(stage="1", data={})
        result = workflow_engine._follow_action_transitions(
            stage, stage_run, "forms:abandoned"
        )
        self.assertEqual(result, [dict(stage="1", data={})])
