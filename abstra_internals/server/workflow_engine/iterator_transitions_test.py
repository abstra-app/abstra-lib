from unittest import TestCase

from abstra_internals.repositories.project.project import (
    IteratorStage,
    WorkflowTransition,
)
from abstra_internals.repositories.stage_run import LocalStageRunRepository
from abstra_internals.server.workflow_engine import workflow_engine


class IteratorTransitionsTest(TestCase):
    def setUp(self) -> None:
        self.repository = LocalStageRunRepository()

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
        result = workflow_engine._follow_iterator_transitions(stage, stage_run)
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
        result = workflow_engine._follow_iterator_transitions(stage, stage_run)
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
        result = workflow_engine._follow_iterator_transitions(stage, stage_run)
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
        result = workflow_engine._follow_iterator_transitions(stage, stage_run)
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
        result = workflow_engine._follow_iterator_transitions(stage, stage_run)
        self.assertEqual(
            result,
            [
                dict(stage="target_id", data=dict(bar=1)),
                dict(stage="target_id", data=dict(bar=2)),
                dict(stage="target_id", data=dict(bar=3)),
            ],
        )
