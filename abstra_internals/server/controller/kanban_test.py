from unittest import TestCase

from abstra_internals.repositories.execution_logs import LocalExecutionLogsRepository
from abstra_internals.repositories.project.project import (
    FormStage,
    JobStage,
    NotificationTrigger,
    ProjectRepository,
)
from abstra_internals.repositories.stage_run import (
    CountStageRunsByStatus,
    LocalStageRunRepository,
)
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
        self.controller = KanbanController(
            execution_logs_repository=LocalExecutionLogsRepository(),
            stage_run_repository=self.stage_run_repository,
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
            data.to_dict(),
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
            ).to_dict(),
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
            data.to_dict(),
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
            ).to_dict(),
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
            data.to_dict(),
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
            ).to_dict(),
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

    def test_count_by_status_one(self):
        project = ProjectRepository.load()

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
        project.add_stage(form)
        ProjectRepository.save(project)
        self.stage_run_repository.create_initial("form")

        count = self.controller.count_by_status()

        self.assertEqual(count, [CountStageRunsByStatus("form", 1, "waiting")])

        count = self.controller.count_by_status()

        self.assertEqual(count, [CountStageRunsByStatus("form", 1, "waiting")])

    def test_count_by_status_multiple(self):
        project = ProjectRepository.load()

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
        job = JobStage(
            id="job",
            title="Job",
            file="job.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        project.add_stage(form)
        project.add_stage(job)
        ProjectRepository.save(project)
        form_sr1 = self.stage_run_repository.create_initial("form")
        form_sr2 = self.stage_run_repository.create_initial("form")
        form_sr3 = self.stage_run_repository.create_initial("form")
        form_sr4 = self.stage_run_repository.create_initial("form")
        job_sr1 = self.stage_run_repository.create_initial("job")
        _job_sr2 = self.stage_run_repository.create_initial("job")

        self.stage_run_repository.change_status(form_sr1.id, "running")
        self.stage_run_repository.change_status(form_sr2.id, "running")
        self.stage_run_repository.change_status(form_sr3.id, "running")
        self.stage_run_repository.change_status(form_sr4.id, "running")
        self.stage_run_repository.change_status(job_sr1.id, "running")

        self.stage_run_repository.change_status(form_sr3.id, "finished")
        self.stage_run_repository.change_status(form_sr4.id, "failed")

        count = self.controller.count_by_status()

        expected = [
            CountStageRunsByStatus("form", 2, "running"),
            CountStageRunsByStatus("form", 1, "finished"),
            CountStageRunsByStatus("form", 1, "failed"),
            CountStageRunsByStatus("job", 1, "waiting"),
            CountStageRunsByStatus("job", 1, "running"),
        ]

        self.assertCountEqual(count, expected)
