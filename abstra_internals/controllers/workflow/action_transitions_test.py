from unittest import TestCase

from abstra_internals.controllers.workflow import WorkflowEngine
from abstra_internals.repositories.execution import EditorExecutionRepository
from abstra_internals.repositories.execution_logs import LocalExecutionLogsRepository
from abstra_internals.repositories.notifications import LocalNotificationRepository
from abstra_internals.repositories.project.project import (
    FormStage,
    JobStage,
    NotificationTrigger,
    WorkflowTransition,
)
from abstra_internals.repositories.stage_run import LocalStageRunRepository


class ActionTransitionsTest(TestCase):
    def setUp(self) -> None:
        self.repository = LocalStageRunRepository()
        self.workflow_engine = WorkflowEngine(
            stage_run_repository=self.repository,
            execution_repository=EditorExecutionRepository(),
            notification_repository=LocalNotificationRepository(),
            execution_logs_repository=LocalExecutionLogsRepository(),
        )

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
        result = self.workflow_engine._follow_action_transitions(
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
        result = self.workflow_engine._follow_action_transitions(
            stage, stage_run, "forms:abandoned"
        )
        self.assertEqual(result, [dict(stage="1", data={})])
