from unittest import TestCase
from .iterator import iterator_strategy
from unittest import TestCase
from abstra_internals.repositories.stage_run import LocalStageRunRepository
from abstra_internals.repositories.project.project import (
    IteratorStage,
    WorkflowTransition,
)


class IteratorStrategyTest(TestCase):
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
        stage_run = LocalStageRunRepository.create_initial(
            stage="s1", data={"foo": [1, 2, 3]}
        )
        result = iterator_strategy(stage, stage_run)
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
        stage_run = LocalStageRunRepository.create_initial(stage="s1", data={"foo": 1})
        result = iterator_strategy(stage, stage_run)
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
        stage_run = LocalStageRunRepository.create_initial(stage="s1", data={})
        result = iterator_strategy(stage, stage_run)
        self.assertEqual(result, [])
