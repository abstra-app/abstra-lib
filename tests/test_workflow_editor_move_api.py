import unittest, uuid

from .fixtures import init_dir, clear_dir

from abstra_internals.server.controller import MainController

from abstra_internals.repositories.project.project import (
    ProjectRepository,
    StageNotFoundError,
)


class TestWorkflowEditorMoveApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        self.controller = MainController()

        self.form_ids = []
        self.job_ids = []
        self.hook_ids = []
        self.script_ids = []

        for i in range(10):
            self.form_ids.append(str(uuid.uuid4()))
            self.job_ids.append(str(uuid.uuid4()))
            self.hook_ids.append(str(uuid.uuid4()))
            self.script_ids.append(str(uuid.uuid4()))

            self.controller.bulk_create_stages(
                [
                    {
                        "type": "forms",
                        "id": self.form_ids[i],
                        "position": [i, i],
                        "title": f"Form {i}",
                    },
                    {
                        "type": "jobs",
                        "id": self.job_ids[i],
                        "position": [i, i],
                        "title": f"Job {i}",
                    },
                    {
                        "type": "hooks",
                        "id": self.hook_ids[i],
                        "position": [i, i],
                        "title": f"Hook {i}",
                    },
                    {
                        "type": "scripts",
                        "id": self.script_ids[i],
                        "position": [i, i],
                        "title": f"Script {i}",
                    },
                ]
            )

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_moving(self):
        old_project = ProjectRepository.load()
        self.controller.workflow_move([])
        new_project = ProjectRepository.load()
        self.assertEqual(old_project, new_project)

    def test_accept_simple_moving(self):
        self.controller.workflow_move(
            [{"id": self.form_ids[0], "type": "forms", "position": [2, 3]}]
        )
        project = ProjectRepository.load()
        form = self.controller.get_form(self.form_ids[0])

        if form is None:
            raise Exception("Form not found")

        self.assertEqual(form.workflow_position, (2, 3))

    def test_reject_invalid_id(self):
        with self.assertRaises(StageNotFoundError):
            self.controller.workflow_move(
                [{"id": "invalid", "type": "forms", "position": [2, 3]}]
            )
