import unittest
from abstra_internals.server.controller import (
    MainController,
    SelfTransitionError,
    UnknownNodeTypeError,
    TransitionToJobError,
    DoubleTransitionError,
)
from abstra_internals.repositories.json.classes import (
    AbstraJSON,
    FormJSON,
    JobJSON,
    HookJSON,
    AbstraJSONRepository,
    RuntimeNotFoundError,
)
from .fixtures import init_dir, clear_dir


class TestTransitionsApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()

        abstra_json = AbstraJSON.create()
        for i in range(10):
            form = FormJSON(
                path=f"form{i}",
                file="foo.py",
                workflow_transitions=[],
                workflow_position=(0, 0),
                title=f"Form {i}",
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
                path=f"hook{i}",
                title=f"Hook {i}",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
            abstra_json.hooks.append(hook)
        self.controller = MainController()
        AbstraJSONRepository.save(abstra_json=abstra_json)

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_adding(self):
        old_json = AbstraJSONRepository.load()
        self.controller.workflow_add_transition([])
        new_json = AbstraJSONRepository.load()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_adding(self):
        self.controller.workflow_add_transition(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                    "id": "foo",
                }
            ]
        )
        new_json = AbstraJSONRepository.load()
        self.assertEqual(new_json.forms[1].workflow_transitions[0].target_path, "form2")

    def test_reject_self_linking(self):
        with self.assertRaises(SelfTransitionError):
            self.controller.workflow_add_transition(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "forms", "id": "form1"},
                        "id": "foo",
                    }
                ]
            )

    def test_reject_invalid_target_id(self):
        with self.assertRaises(RuntimeNotFoundError):
            self.controller.workflow_add_transition(
                [
                    {
                        "source": {"type": "jobs", "id": "job1"},
                        "target": {"type": "forms", "id": "invalid"},
                        "id": "foo",
                    }
                ]
            )

    def test_reject_invalid_source_id(self):
        with self.assertRaises(RuntimeNotFoundError):
            self.controller.workflow_add_transition(
                [
                    {
                        "source": {"type": "jobs", "id": "invalid"},
                        "target": {"type": "forms", "id": "form1"},
                        "id": "foo",
                    }
                ]
            )

    def test_reject_transition_to_jobs(self):
        with self.assertRaises(TransitionToJobError):
            self.controller.workflow_add_transition(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "jobs", "id": "job1"},
                        "id": "foo",
                    }
                ]
            )

    def test_find_transition(self):
        self.controller.workflow_add_transition(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                    "id": "foo",
                }
            ]
        )

        abstra_json = AbstraJSONRepository.load()
        loaded_form = abstra_json.forms[1]
        loaded_transition = loaded_form.workflow_transitions[0]

        self.assertEqual(
            abstra_json.find_transition("form1", "form2"),
            loaded_transition,
        )

    def test_reject_double_transition(self):
        with self.assertRaises(DoubleTransitionError):
            self.controller.workflow_add_transition(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "forms", "id": "form2"},
                        "id": "foo",
                    }
                ]
            )
            self.controller.workflow_add_transition(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "forms", "id": "form2"},
                        "id": "bar",
                    }
                ]
            )

    def test_save_with_given_id(self):
        self.controller.workflow_add_transition(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                    "id": "foo",
                }
            ],
        )
        abstra_json = AbstraJSONRepository.load()
        self.assertEqual(abstra_json.forms[1].workflow_transitions[0].id, "foo")
