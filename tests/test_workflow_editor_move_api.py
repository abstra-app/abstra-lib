import unittest
from abstra_internals.server.controller import MainController, UnknownNodeTypeError
from abstra_internals.repositories.project.project import (
    Project,
    FormStage,
    JobStage,
    HookStage,
    ProjectRepository,
    RuntimeNotFoundError,
)
from .fixtures import init_dir, clear_dir


class TestWorkflowEditorMoveApi(unittest.TestCase):
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

    def test_accept_empty_moving(self):
        old_json = ProjectRepository.load()
        self.controller.workflow_move([])
        new_json = ProjectRepository.load()
        self.assertEqual(old_json, new_json)

    def test_accept_simple_moving(self):
        self.controller.workflow_move(
            [{"id": "form1", "type": "forms", "position": [2, 3]}]
        )
        json = ProjectRepository.load()
        self.assertEqual(json.forms[1].workflow_position, (2, 3))

    def test_reject_invalid_id(self):
        with self.assertRaises(RuntimeNotFoundError):
            self.controller.workflow_move(
                [{"id": "invalid", "type": "forms", "position": [2, 3]}]
            )
