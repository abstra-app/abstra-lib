from unittest import TestCase

from abstra_internals.controllers.workflow_engine import WorkflowEngine
from abstra_internals.repositories.email import TestEmailRepository
from abstra_internals.repositories.execution import EditorExecutionRepository
from abstra_internals.repositories.execution_logs import LocalExecutionLogsRepository
from abstra_internals.repositories.project.project import (
    ConditionStage,
    FormStage,
    IteratorStage,
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
            email_repository=TestEmailRepository(),
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


class ConditionTransitionsTest(TestCase):
    def setUp(self) -> None:
        self.repository = LocalStageRunRepository()
        self.workflow_engine = WorkflowEngine(
            stage_run_repository=self.repository,
            execution_repository=EditorExecutionRepository(),
            email_repository=TestEmailRepository(),
            execution_logs_repository=LocalExecutionLogsRepository(),
        )

    def test_not_match_when_no_transitions(self):
        stage = ConditionStage(
            id="1",
            variable_name="foo",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        stage_run = self.repository.create_initial(stage="1", data={"foo": "bar"})
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [])

    def test_not_match_when_variable_not_found(self):
        stage = ConditionStage(
            id="1",
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
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [])

    def test_match_when_equal(self):
        stage = ConditionStage(
            id="1",
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
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": "bar"})])

    def test_nested_value(self):
        stage = ConditionStage(
            id="1",
            variable_name="foo.bar",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="1",
                    target_type="target_type",
                    target_id="target_id",
                    type="conditions:patternMatched",
                    condition_value="afulepa",
                )
            ],
        )
        stage_run = self.repository.create_initial(
            stage="1", data={"foo": {"bar": "afulepa"}}
        )
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(
            result, [dict(stage="target_id", data={"foo": {"bar": "afulepa"}})]
        )

    def test_match_str_when_int(self):
        stage = ConditionStage(
            id="1",
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
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": 1})])

    def test_match_none_when_not_found(self):
        stage = ConditionStage(
            id="1",
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
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={})])

    def test_match_none_when_none(self):
        stage = ConditionStage(
            id="1",
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
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": None})])

    def test_match_empty_when_none(self):
        stage = ConditionStage(
            id="1",
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
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": None})])

    def test_match_empty_when_not_found(self):
        stage = ConditionStage(
            id="1",
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
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={})])

    def test_match_empty_when_empty(self):
        stage = ConditionStage(
            id="1",
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
        result = self.workflow_engine._follow_condition_transitions(stage, stage_run)
        self.assertEqual(result, [dict(stage="target_id", data={"foo": ""})])


class IteratorTransitionsTest(TestCase):
    def setUp(self) -> None:
        self.repository = LocalStageRunRepository()
        self.workflow_engine = WorkflowEngine(
            stage_run_repository=self.repository,
            execution_repository=EditorExecutionRepository(),
            email_repository=TestEmailRepository(),
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
