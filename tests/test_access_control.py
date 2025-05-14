from unittest import TestCase

from abstra_internals.repositories.project.project import (
    FormStage,
    JobStage,
    LocalProjectRepository,
    NotificationTrigger,
)
from tests.fixtures import clear_dir, init_dir


class TestAccessControl(TestCase):
    def setUp(self):
        self.root = init_dir()
        self.project_repository = LocalProjectRepository()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_defaults_on_create(self):
        project = self.project_repository.load()

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

        self.project_repository.save(project)
        newProject = self.project_repository.load()
        self.assertEqual(
            newProject.forms[0].access_control.as_dict,
            {"is_public": False, "required_roles": []},
        )

    def test_update_accesses(self):
        project = self.project_repository.load()

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

        self.project_repository.save(project)
        project = self.project_repository.load()

        self.assertEqual(
            project.forms[0].access_control.as_dict,
            {"is_public": False, "required_roles": []},
        )

        self.project_repository.save(project)
        project = self.project_repository.load()

        self.assertEqual(
            project.forms[0].access_control.as_dict,
            {"is_public": False, "required_roles": []},
        )
