import unittest
from abstra_internals.server.api import (
    API,
    SelfTransitionError,
    UnknownNodeTypeError,
    NodeNotFoundError,
    TransitionToJobError,
    DoubleTransitionError,
    _find_transition,
)
from abstra_internals.server.api.classes import AbstraJSON, FormJSON, JobJSON, HookJSON
from .fixtures import init_dir, clear_dir


class TestTransitionsApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()

        abstra_json = AbstraJSON.make_empty()
        for i in range(10):
            form = FormJSON(
                path=f"form{i}",
                file="foo.py",
                workflow_transitions=[],
                workflow_position=(0, 0),
                title=f"Form {i}",
                is_initial=False,
            )
            abstra_json.forms.append(form)
            job = JobJSON(
                file="foo.py",
                workflow_transitions=[],
                identifier=f"job{i}",
                schedule="* * * * *",
                title=f"Job {i}",
                workflow_position=(0, 0),
            )
            abstra_json.jobs.append(job)
            hook = HookJSON(
                file="foo.py",
                enabled=True,
                is_initial=True,
                path=f"hook{i}",
                title=f"Hook {i}",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
            abstra_json.hooks.append(hook)
        self.api = API()
        self.api.persist(abstra_json=abstra_json)

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_adding(self):
        old_json = self.api.load_abstra_json()
        self.api.workflow_add_transition([])
        new_json = self.api.load_abstra_json()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_adding(self):
        self.api.workflow_add_transition(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                }
            ]
        )
        new_json = self.api.load_abstra_json()
        self.assertEqual(new_json.forms[1].workflow_transitions[0].target_path, "form2")

    def test_reject_self_linking(self):
        with self.assertRaises(SelfTransitionError):
            self.api.workflow_add_transition(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "forms", "id": "form1"},
                    }
                ]
            )

    def test_reject_invalid_target_type(self):
        with self.assertRaises(UnknownNodeTypeError):
            self.api.workflow_add_transition(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "invalid", "id": "form1"},
                    }
                ]
            )

    def test_reject_invalid_source_type(self):
        with self.assertRaises(UnknownNodeTypeError):
            self.api.workflow_add_transition(
                [
                    {
                        "source": {"type": "invalid", "id": "form1"},
                        "target": {"type": "forms", "id": "form1"},
                    }
                ]
            )

    def test_reject_invalid_target_id(self):
        with self.assertRaises(NodeNotFoundError):
            self.api.workflow_add_transition(
                [
                    {
                        "source": {"type": "jobs", "id": "job1"},
                        "target": {"type": "forms", "id": "invalid"},
                    }
                ]
            )

    def test_reject_invalid_source_id(self):
        with self.assertRaises(NodeNotFoundError):
            self.api.workflow_add_transition(
                [
                    {
                        "source": {"type": "jobs", "id": "invalid"},
                        "target": {"type": "forms", "id": "form1"},
                    }
                ]
            )

    def test_reject_transition_to_jobs(self):
        with self.assertRaises(TransitionToJobError):
            self.api.workflow_add_transition(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "jobs", "id": "job1"},
                    }
                ]
            )

    def test_find_transition(self):
        self.api.workflow_add_transition(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                }
            ]
        )

        loaded_json = self.api.load_abstra_json()
        loaded_form = loaded_json.forms[1]
        loaded_transition = loaded_form.workflow_transitions[0]

        self.assertEqual(
            _find_transition(loaded_json, "forms", "form1", "forms", "form2"),
            loaded_transition,
        )

    def test_reject_double_transition(self):
        with self.assertRaises(DoubleTransitionError):
            self.api.workflow_add_transition(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "forms", "id": "form2"},
                    }
                ]
            )
            self.api.workflow_add_transition(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "forms", "id": "form2"},
                    }
                ]
            )
