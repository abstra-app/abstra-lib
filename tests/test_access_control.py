from unittest import TestCase

from abstra_internals.repositories.project.project import (
    FormStage,
    JobStage,
    NotificationTrigger,
    ProjectRepository,
)
from tests.fixtures import clear_dir, init_dir


class TestAccessControl(TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_non_public_kanban(self):
        project = ProjectRepository.load()

        self.assertEqual(
            project.kanban.access_control.as_dict,
            {"is_public": False, "required_roles": []},
        )

    def test_defaults_on_create(self):
        project = ProjectRepository.load()

        form = FormStage(
            id="form1",
            path="form1",
            title="form1",
            file="form1.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        project.forms.append(form)

        ProjectRepository.save(project)
        newProject = ProjectRepository.load()
        self.assertEqual(
            newProject.forms[0].access_control.as_dict,
            {"is_public": False, "required_roles": []},
        )

    def test_update_accesses(self):
        project = ProjectRepository.load()

        job = JobStage(
            id="job",
            title="Job",
            file="job.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        form = FormStage(
            id="form1",
            path="form1",
            title="form1",
            file="form1.py",
            workflow_position=(0.0, 0.0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )

        project.jobs.append(job)
        project.forms.append(form)

        ProjectRepository.save(project)
        project = ProjectRepository.load()

        project.update_access_controls(
            [
                {"id": "kanban", "is_public": False, "required_roles": ["admin"]},
            ]
        )

        self.assertEqual(
            project.kanban.access_control.as_dict,
            {"is_public": False, "required_roles": ["admin"]},
        )

        self.assertEqual(
            project.forms[0].access_control.as_dict,
            {"is_public": False, "required_roles": []},
        )

        ProjectRepository.save(project)
        project = ProjectRepository.load()

        self.assertEqual(
            project.kanban.access_control.as_dict,
            {"is_public": False, "required_roles": ["admin"]},
        )

        self.assertEqual(
            project.forms[0].access_control.as_dict,
            {"is_public": False, "required_roles": []},
        )
