import unittest, pathlib

from .fixtures import init_dir, clear_dir

from abstra_internals.server.controller import MainController

from abstra_internals.repositories.project.project import (
    Project,
    ProjectRepository,
    StageNotFoundError,
)


class TestWorkflowEditorDuplicateNodesApi(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        self.controller = MainController()
        self.project = Project.create()
        self.form = self.controller.create_form()
        self.job = self.controller.create_job()
        self.hook = self.controller.create_hook()
        self.script = self.controller.create_script()

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_accept_empty_duplicate_nodes(self):
        old_project = ProjectRepository.load()
        self.controller.bulk_duplicate_stages([])
        new_project = ProjectRepository.load()
        self.assertEqual(old_project, new_project)

    def test_accept_simple_duplicating(self):
        self.controller.bulk_duplicate_stages(
            [
                {
                    "original_id": self.form.id,
                    "new_id": "duplicated",
                    "type": "forms",
                    "position": [2, 2],
                    "title": "Duplicated",
                }
            ]
        )
        project = ProjectRepository.load()
        self.assertEqual(len(project.forms), 2)
        self.assertEqual(project.forms[0].workflow_position, (0, 0))
        self.assertEqual(project.forms[1].id, "duplicated")
        self.assertEqual(project.forms[1].workflow_position, (2, 2))

        file_name = self.form.file.replace(".py", "")

        self.assertTrue(pathlib.Path(f"{file_name}-copy.py").exists())

    def test_reject_invalid_node_id(self):
        with self.assertRaises(StageNotFoundError):
            self.controller.bulk_duplicate_stages(
                [
                    {
                        "original_id": "invalid",
                        "new_id": "duplicated",
                        "type": "forms",
                        "position": [0, 0],
                        "title": "Duplicated",
                    }
                ]
            )

    def test_accept_duplicating_nodes_with_no_file(self):
        pathlib.Path(self.job.file).unlink()

        self.controller.bulk_duplicate_stages(
            [
                {
                    "original_id": self.job.id,
                    "new_id": "duplicated",
                    "type": "jobs",
                    "position": [2, 2],
                    "title": "Duplicated",
                }
            ]
        )
        project = ProjectRepository.load()

        self.assertEqual(len(project.jobs), 2)
        self.assertEqual(project.jobs[0].id, self.job.id)
        self.assertEqual(project.jobs[0].workflow_position, (0, 0))
        self.assertEqual(project.jobs[1].id, "duplicated")
        self.assertEqual(project.jobs[1].workflow_position, (2, 2))
        self.assertFalse(pathlib.Path("job1-copy.py").exists())

    def test_duplicating_should_not_maintain_external_transition(self):
        self.controller.bulk_create_transitions(
            [
                {
                    "source": {"type": "forms", "id": self.form.id},
                    "target": {"type": "hooks", "id": self.hook.id},
                    "id": "transition1",
                    "label": "success",
                }
            ]
        )
        self.controller.bulk_duplicate_stages(
            [
                {
                    "original_id": self.form.id,
                    "new_id": "duplicated",
                    "type": "forms",
                    "position": [2, 2],
                    "title": "Duplicated",
                }
            ]
        )
        project = ProjectRepository.load()
        duplicated = project.forms[1]
        self.assertEqual(duplicated.id, "duplicated")
        self.assertEqual(duplicated.workflow_transitions, [])

    def test_duplicating_should_maintain_internal_transitions(self):
        self.controller.bulk_create_transitions(
            [
                {
                    "source": {"type": "forms", "id": self.form.id},
                    "target": {"type": "hooks", "id": self.hook.id},
                    "id": "transition1",
                    "label": "success",
                }
            ]
        )
        self.controller.bulk_duplicate_stages(
            [
                {
                    "original_id": self.form.id,
                    "new_id": "duplicated-form",
                    "type": "forms",
                    "position": [2, 2],
                    "title": "Duplicated Form",
                },
                {
                    "original_id": self.hook.id,
                    "new_id": "duplicated-hook",
                    "type": "hooks",
                    "position": [2, 2],
                    "title": "Duplicated Hook",
                },
            ]
        )
        project = ProjectRepository.load()
        duplicated = project.forms[1]
        self.assertEqual(duplicated.id, "duplicated-form")
        self.assertEqual(len(duplicated.workflow_transitions), 1)
        self.assertEqual(duplicated.workflow_transitions[0].target_type, "hooks")
        self.assertEqual(
            duplicated.workflow_transitions[0].target_id, "duplicated-hook"
        )

    def test_all_runtimes_can_be_duplicated(self):
        project = ProjectRepository.load()

        form1 = project.get_stage(self.form.id)
        job1 = project.get_stage(self.job.id)
        hook1 = project.get_stage(self.hook.id)
        script1 = project.get_stage(self.script.id)

        if form1 is None or job1 is None or hook1 is None or script1 is None:
            self.fail("Stage not found")

        form2 = form1.duplicate(new_id=form1.id, new_position=(0, 0))
        job2 = job1.duplicate(new_id=job1.id, new_position=(0, 0))
        hook2 = hook1.duplicate(new_id=hook1.id, new_position=(0, 0))
        script2 = script1.duplicate(new_id=script1.id, new_position=(0, 0))

        self.assertEqual(form1, form2)
        self.assertEqual(job1, job2)
        self.assertEqual(hook1, hook2)
        self.assertEqual(script1, script2)
