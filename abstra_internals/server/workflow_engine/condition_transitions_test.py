from unittest import TestCase

from ...repositories.project.project import ConditionStage, WorkflowTransition
from ...repositories.stage_run import LocalStageRunRepository
from . import workflow_engine


class ConditionTransitionsTest(TestCase):
    def setUp(self) -> None:
        self.repository = LocalStageRunRepository()

    def test_not_match_when_no_transitions(self):
        stage = ConditionStage(
            id="1",
            title="title",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        stage_run = self.repository.create_initial(stage="1", data={"foo": "bar"})
        result = workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [])

    def test_not_match_when_variable_not_found(self):
        stage = ConditionStage(
            id="1",
            title="title",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="conditions:patternMatched",
                    condition_value="foo",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="1", data={})
        result = workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [])

    def test_match_when_equal(self):
        stage = ConditionStage(
            id="1",
            title="title",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="conditions:patternMatched",
                    condition_value="bar",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="1", data={"foo": "bar"})
        result = workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": "bar"})])

    def test_match_str_when_int(self):
        stage = ConditionStage(
            id="1",
            title="title",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="conditions:patternMatched",
                    condition_value="1",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="1", data={"foo": 1})
        result = workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": 1})])

    def test_match_none_when_not_found(self):
        stage = ConditionStage(
            id="1",
            title="title",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="conditions:patternMatched",
                    condition_value=None,
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="1", data={})
        result = workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={})])

    def test_match_none_when_none(self):
        stage = ConditionStage(
            id="1",
            title="title",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="conditions:patternMatched",
                    condition_value=None,
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="1", data={"foo": None})
        result = workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": None})])

    def test_match_empty_when_none(self):
        stage = ConditionStage(
            id="1",
            title="title",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="conditions:patternMatched",
                    condition_value="",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="1", data={"foo": None})
        result = workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": None})])

    def test_match_empty_when_not_found(self):
        stage = ConditionStage(
            id="1",
            title="title",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="conditions:patternMatched",
                    condition_value="",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="1", data={})
        result = workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={})])

    def test_match_empty_when_empty(self):
        stage = ConditionStage(
            id="1",
            title="title",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="conditions:patternMatched",
                    condition_value="",
                )
            ],
        )
        stage_run = self.repository.create_initial(stage="1", data={"foo": ""})
        result = workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": ""})])
