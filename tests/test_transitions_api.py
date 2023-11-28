import unittest

from .fixtures import init_dir, clear_dir

from abstra_internals.server.controller import (
    MainController,
    SelfTransitionError,
    TransitionToJobError,
    DoubleTransitionError,
)

from abstra_internals.repositories.project.project import (
    ProjectRepository,
    StageNotFoundError,
)


class TestTransitionsApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        self.controller = MainController()
        for i in range(10):
            self.controller.bulk_create_stages(
                [
                    {
                        "type": "forms",
                        "id": f"form{i}",
                        "position": [i, i],
                        "title": f"Form {i}",
                    },
                    {
                        "type": "jobs",
                        "id": f"job{i}",
                        "position": [i, i],
                        "title": f"Job {i}",
                    },
                    {
                        "type": "hooks",
                        "id": f"hook{i}",
                        "position": [i, i],
                        "title": f"Hook {i}",
                    },
                    {
                        "type": "scripts",
                        "id": f"script{i}",
                        "position": [i, i],
                        "title": f"Script {i}",
                    },
                ]
            )

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_adding(self):
        old_json = ProjectRepository.load()
        self.controller.bulk_create_transitions([])
        new_json = ProjectRepository.load()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_adding(self):
        self.controller.bulk_create_transitions(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                    "label": "success",
                    "id": "foo",
                }
            ]
        )
        new_json = ProjectRepository.load()
        self.assertEqual(new_json.forms[1].workflow_transitions[0].target_id, "form2")

    def test_reject_self_linking(self):
        with self.assertRaises(SelfTransitionError):
            self.controller.bulk_create_transitions(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "forms", "id": "form1"},
                        "label": "success",
                        "id": "foo",
                    }
                ]
            )

    def test_reject_invalid_target_id(self):
        with self.assertRaises(Exception):
            self.controller.bulk_create_transitions(
                [
                    {
                        "source": {"type": "jobs", "id": "job1"},
                        "target": {"type": "forms", "id": "invalid"},
                        "label": "success",
                        "id": "foo",
                    }
                ]
            )

    def test_reject_invalid_source_id(self):
        with self.assertRaises(StageNotFoundError):
            self.controller.bulk_create_transitions(
                [
                    {
                        "source": {"type": "jobs", "id": "invalid"},
                        "target": {"type": "forms", "id": "form1"},
                        "label": "success",
                        "id": "foo",
                    }
                ]
            )

    def test_reject_transition_to_jobs(self):
        with self.assertRaises(TransitionToJobError):
            self.controller.bulk_create_transitions(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "jobs", "id": "job1"},
                        "label": "success",
                        "id": "foo",
                    }
                ]
            )

    def test_find_transition(self):
        self.controller.bulk_create_transitions(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                    "label": "success",
                    "id": "foo",
                }
            ]
        )

        project = ProjectRepository.load()
        loaded_form = project.forms[1]
        loaded_transition = loaded_form.workflow_transitions[0]

        self.assertEqual(
            project.find_transition("form1", "form2"),
            loaded_transition,
        )

    def test_reject_double_transition(self):
        with self.assertRaises(DoubleTransitionError):
            self.controller.bulk_create_transitions(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "forms", "id": "form2"},
                        "label": "success",
                        "id": "foo",
                    }
                ]
            )
            self.controller.bulk_create_transitions(
                [
                    {
                        "source": {"type": "forms", "id": "form1"},
                        "target": {"type": "forms", "id": "form2"},
                        "label": "success",
                        "id": "bar",
                    }
                ]
            )

    def test_save_with_given_id(self):
        self.controller.bulk_create_transitions(
            [
                {
                    "source": {"type": "forms", "id": "form1"},
                    "target": {"type": "forms", "id": "form2"},
                    "label": "success",
                    "id": "foo",
                }
            ],
        )
        project = ProjectRepository.load()
        self.assertEqual(project.forms[1].workflow_transitions[0].id, "foo")
