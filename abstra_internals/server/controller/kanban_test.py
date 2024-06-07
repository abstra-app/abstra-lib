from unittest import TestCase

from abstra_internals.repositories.project.project import (
    FormStage,
    JobStage,
    NotificationTrigger,
    ProjectRepository,
)
from abstra_internals.repositories.stage_run import LocalStageRunRepository
from abstra_internals.server.controller.kanban import (
    DataRequest,
    KanbanController,
    KanbanData,
    StageCardContentItem,
    StageRunCard,
)
from tests.fixtures import clear_dir, init_dir


class KanbanTests(TestCase):
    def setUp(self):
        self.root = init_dir()

        self.stage_run_repository = LocalStageRunRepository()
        self.project_repository = ProjectRepository
        self.controller = KanbanController(
            stage_run_repository=self.stage_run_repository,
            project_repository=self.project_repository,
        )

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_get_data_empty(self):
        data = self.controller.get_data(
            DataRequest.from_dict(
                {
                    "selection": [],
                    "filter": {},
                }
            )
        )

        self.assertEqual(
            data, KanbanData(stage_run_cards=[], not_found_stages=[], total_count=0)
        )

    def test_get_data_stage_no_filters(self):
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
            id="form",
            path="form",
            title="Form",
            file="form.py",
            workflow_position=(0, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        project.add_stage(job)
        project.add_stage(form)
        ProjectRepository.save(project)
        job_stage_run = self.stage_run_repository.create_initial("job")
        form_stage_run = self.stage_run_repository.create_initial("form")

        data = self.controller.get_data(
            DataRequest.from_dict(
                {
                    "selection": [],
                    "filter": {},
                }
            )
        )

        self.assertEqual(
            data,
            KanbanData(
                stage_run_cards=[
                    StageRunCard(
                        form_stage_run.id,
                        created_at=form_stage_run.created_at,
                        updated_at=form_stage_run.updated_at,
                        status=form_stage_run.status,
                        content=[],
                        stage=form_stage_run.stage,
                    ),
                    StageRunCard(
                        job_stage_run.id,
                        created_at=job_stage_run.created_at,
                        updated_at=job_stage_run.updated_at,
                        status=job_stage_run.status,
                        content=[],
                        stage=job_stage_run.stage,
                    ),
                ],
                not_found_stages=[],
                total_count=2,
            ),
        )

    def test_get_data_with_stage_filter(self):
        self.maxDiff = None
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
            id="form",
            path="form",
            title="Form",
            file="form.py",
            workflow_position=(0, 0),
            workflow_transitions=[],
            notification_trigger=NotificationTrigger(
                variable_name="val", enabled=False
            ),
        )
        project.add_stage(job)
        project.add_stage(form)
        ProjectRepository.save(project)
        job_stage_run = self.stage_run_repository.create_initial("job")
        self.stage_run_repository.create_initial("form")

        data = self.controller.get_data(
            DataRequest.from_dict(
                {
                    "limit": 10,
                    "offset": 0,
                    "filter": {
                        "stage": ["job"],
                    },
                }
            )
        )

        self.assertEqual(
            data,
            KanbanData(
                stage_run_cards=[
                    StageRunCard(
                        job_stage_run.id,
                        created_at=job_stage_run.created_at,
                        updated_at=job_stage_run.updated_at,
                        status=job_stage_run.status,
                        content=[],
                        stage=job_stage_run.stage,
                    ),
                ],
                not_found_stages=[],
                total_count=1,
            ),
        )

    def test_get_data_with_advanced_data_filter(self):
        project = ProjectRepository.load()

        job = JobStage(
            id="job",
            title="Job",
            file="job.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(job)
        ProjectRepository.save(project)
        job_stage_run_1 = self.stage_run_repository.create_initial(
            "job", {"foo": "bar"}
        )
        job_stage_run_2 = self.stage_run_repository.create_initial(
            "job", {"foo": "contains bar"}
        )
        self.stage_run_repository.create_initial("job", {"foo": "baz"})

        data = self.controller.get_data(
            DataRequest.from_dict(
                {
                    "limit": 10,
                    "offset": 0,
                    "filter": {
                        "advanced_data_filter": {
                            "key": "foo",
                            "comparator": "contains",
                            "value": "bar",
                        },
                    },
                }
            )
        )

        self.assertEqual(
            data,
            KanbanData(
                stage_run_cards=[
                    StageRunCard(
                        job_stage_run_2.id,
                        created_at=job_stage_run_2.created_at,
                        updated_at=job_stage_run_2.updated_at,
                        status=job_stage_run_2.status,
                        content=[StageCardContentItem(key="foo", value="contains bar")],
                        stage=job_stage_run_2.stage,
                    ),
                    StageRunCard(
                        job_stage_run_1.id,
                        created_at=job_stage_run_1.created_at,
                        updated_at=job_stage_run_1.updated_at,
                        status=job_stage_run_1.status,
                        content=[StageCardContentItem(key="foo", value="bar")],
                        stage=job_stage_run_1.stage,
                    ),
                ],
                not_found_stages=[],
                total_count=2,
            ),
        )

    def test_get_job(self):
        project = ProjectRepository.load()

        job = JobStage(
            id="job",
            title="Job",
            file="job.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(job)
        ProjectRepository.save(project)

        rtvd = self.controller.get_job("job")

        self.assertEqual(rtvd, job)
