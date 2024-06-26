from unittest import TestCase

from abstra_internals.controllers.workflow import WorkflowEngine
from abstra_internals.repositories.execution import EditorExecutionRepository
from abstra_internals.repositories.execution_logs import LocalExecutionLogsRepository
from abstra_internals.repositories.notifications import LocalNotificationRepository
from abstra_internals.repositories.project.project import (
    IteratorStage,
    WorkflowTransition,
)
from abstra_internals.repositories.stage_run import LocalStageRunRepository


class IteratorTransitionsTest(TestCase):
    def setUp(self) -> None:
        self.repository = LocalStageRunRepository()
        self.workflow_engine = WorkflowEngine(
            stage_run_repository=self.repository,
            execution_repository=EditorExecutionRepository(),
            notification_repository=LocalNotificationRepository(),
            execution_logs_repository=LocalExecutionLogsRepository(),
        )

    def test_simple_foreach(self):
        stage = IteratorStage(
            id="s1",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="t1",
                    condition_value=None,
                    target_id="target_id",
                    target_type="target_type",
                    type="iterators:each",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="s1", data={"foo": [1, 2, 3]})
        result = self.workflow_engine._follow_iterator_transitions(stage, stage_run)
        self.assertEqual(
            result,
            [
                dict(stage="target_id", data=dict(item=1)),
                dict(stage="target_id", data=dict(item=2)),
                dict(stage="target_id", data=dict(item=3)),
            ],
        )

    def test_nested_value(self):
        stage = IteratorStage(
            id="s1",
            variable_name="foo.bar",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="t1",
                    condition_value=None,
                    target_id="target_id",
                    target_type="target_type",
                    type="iterators:each",
                )
            ],
        )
        stage_run = self.repository.create_initial(
            stage="s1", data={"foo": {"bar": [1, 2, 3]}}
        )
        result = self.workflow_engine._follow_iterator_transitions(stage, stage_run)
        self.assertEqual(
            result,
            [
                dict(stage="target_id", data=dict(item=1)),
                dict(stage="target_id", data=dict(item=2)),
                dict(stage="target_id", data=dict(item=3)),
            ],
        )

    def test_empty_when_not_list(self):
        stage = IteratorStage(
            id="s1",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="t1",
                    condition_value=None,
                    target_id="target_id",
                    target_type="target_type",
                    type="iterators:each",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="s1", data={"foo": 1})
        result = self.workflow_engine._follow_iterator_transitions(stage, stage_run)
        self.assertEqual(result, [])

    def test_empty_when_not_found(self):
        stage = IteratorStage(
            id="s1",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="t1",
                    condition_value=None,
                    target_id="target_id",
                    target_type="target_type",
                    type="iterators:each",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="s1", data={})
        result = self.workflow_engine._follow_iterator_transitions(stage, stage_run)
        self.assertEqual(result, [])

    def test_custom_item_name(self):
        stage = IteratorStage(
            id="s1",
            variable_name="foo",
            item_name="bar",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="t1",
                    condition_value=None,
                    target_id="target_id",
                    target_type="target_type",
                    type="iterators:each",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="s1", data={"foo": [1, 2, 3]})
        result = self.workflow_engine._follow_iterator_transitions(stage, stage_run)
        self.assertEqual(
            result,
            [
                dict(stage="target_id", data=dict(bar=1)),
                dict(stage="target_id", data=dict(bar=2)),
                dict(stage="target_id", data=dict(bar=3)),
            ],
        )
