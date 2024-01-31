from unittest import TestCase

from ...repositories.project.project import IteratorStage, WorkflowTransition
from ...repositories.stage_run import LocalStageRunRepository
from . import workflow_engine


class IteratorTransitionsTest(TestCase):
    def setUp(self) -> None:
        self.repository = LocalStageRunRepository()

    def test_simple_foreach(self):
        stage = IteratorStage(
            id="s1",
            title="title",
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

    def test_empty_when_not_list(self):
        stage = IteratorStage(
            id="s1",
            title="title",
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
            title="title",
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
