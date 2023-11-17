import unittest
from abstra_internals.server.controller import (
    MainController,
    SelfTransitionError,
    UnknownNodeTypeError,
    TransitionToJobError,
    DoubleTransitionError,
)
from abstra_internals.repositories.project.project import (
    Project,
    FormStage,
    JobStage,
    HookStage,
    ProjectRepository,
    RuntimeNotFoundError,
)
from .fixtures import init_dir, clear_dir


class TestTransitionsApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()

        project = Project.create()
        for i in range(10):
            form = FormStage(
                path=f"form{i}",
                file="foo.py",
                workflow_transitions=[],
                workflow_position=(0, 0),
                title=f"Form {i}",
            )
            project.forms.append(form)
            job = JobStage(
                file="foo.py",
                workflow_transitions=[],
                identifier=f"job{i}",
                schedule="* * * * *",
                title=f"Job {i}",
                workflow_position=(0, 0),
            )
            project.jobs.append(job)
            hook = HookStage(
                file="foo.py",
                enabled=True,
                path=f"hook{i}",
                title=f"Hook {i}",
                workflow_position=(0, 0),
                workflow_transitions=[],
            )
            project.hooks.append(hook)
        self.controller = MainController()
        ProjectRepository.save(project=project)

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_adding(self):
        old_json = ProjectRepository.load()
        self.controller.workflow_add_transition([])
        new_json = ProjectRepository.load()
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
        new_json = ProjectRepository.load()
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

        project = ProjectRepository.load()
        loaded_form = project.forms[1]
        loaded_transition = loaded_form.workflow_transitions[0]

        self.assertEqual(
            project.find_transition("form1", "form2"),
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
        project = ProjectRepository.load()
        self.assertEqual(project.forms[1].workflow_transitions[0].id, "foo")
