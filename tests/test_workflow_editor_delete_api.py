import uuid
import unittest, pathlib

from .fixtures import init_dir, clear_dir

from abstra_internals.server.controller import MainController

from abstra_internals.repositories.project.project import (
    Project,
    ProjectRepository,
    StageNotFoundError,
)


class TestWorkflowEditorDeleteApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        self.controller = MainController()
        self.project = Project.create()

        self.form_ids = []
        self.job_ids = []
        self.hook_ids = []
        self.script_ids = []

        for i in range(3):
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

    def test_accept_empty_deleting(self):
        old_project = ProjectRepository.load()
        self.controller.bulk_delete([])
        new_project = ProjectRepository.load()
        self.assertEqual(old_project, new_project)

    def test_accept_simple_deleting(self):
        self.controller.bulk_delete([{"id": self.form_ids[0], "type": "forms"}])
        project = ProjectRepository.load()
        form_ids = [form.id for form in project.forms]
        self.assertFalse(self.form_ids[0] in form_ids)

    def test_accept_transition_deleting(self):
        id = str(uuid.uuid4())
        self.controller.bulk_create_transitions(
            [
                {
                    "id": id,
                    "source": {"type": "forms", "id": self.form_ids[0]},
                    "target": {"type": "forms", "id": self.form_ids[1]},
                    "label": "success",
                }
            ]
        )
        self.controller.bulk_delete([{"id": id, "type": "transitions"}])
        workflow_data = self.controller.get_workflow_editor_data()
        form = self.controller.get_form(self.form_ids[0])

        if not form:
            self.fail("Form not found")

        self.assertEqual(len(form.workflow_transitions), 0)

    def test_reject_invalid_id(self):
        with self.assertRaises(StageNotFoundError):
            self.controller.bulk_delete(
                [
                    {
                        "id": "invalid",
                        "type": "forms",
                    }
                ]
            )

    def test_delete_transitions_pointing_to_deleted_node(self):
        self.controller.bulk_create_transitions(
            [
                {
                    "source": {"type": "forms", "id": self.form_ids[0]},
                    "target": {"type": "forms", "id": self.form_ids[1]},
                    "label": "success",
                    "id": "foo",
                }
            ]
        )
        self.controller.bulk_delete([{"id": self.form_ids[1], "type": "forms"}])
        project = ProjectRepository.load()
        self.assertEqual(len(project.forms[1].workflow_transitions), 0)

    def test_delete_also_delete_file(self):
        form = self.controller.get_form(self.form_ids[0])

        if not form:
            self.fail("Form not found")

        file_name = form.file

        self.assertTrue(pathlib.Path(file_name).exists())
        self.controller.bulk_delete([{"id": self.form_ids[0], "type": "forms"}])
        self.assertFalse(pathlib.Path(file_name).exists())

    def test_delete_not_break_when_file_not_found(self):
        form = self.controller.get_form(self.form_ids[0])

        if not form:
            self.fail("Form not found")

        file_name = form.file

        pathlib.Path(file_name).unlink()
        self.controller.bulk_delete([{"id": self.form_ids[0], "type": "forms"}])
        self.assertFalse(pathlib.Path(file_name).exists())
