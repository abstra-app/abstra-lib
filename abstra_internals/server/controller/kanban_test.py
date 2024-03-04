from unittest import TestCase
from tests.fixtures import init_dir, clear_dir
from .kanban import KanbanController, DataRequest, KanbanData, ColumnStage, KanbanColumn
from ...repositories.project.project import (
    ProjectRepository,
    JobStage,
    ConditionStage,
    ScriptStage,
    WorkflowTransition,
)
from ...repositories.stage_run import LocalStageRunRepository


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
            data, KanbanData(columns=[], next_stage_options=[], not_found_stages=[])
        )

    def test_get_data_single_stage_no_selection(self):
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
                columns=[],
                next_stage_options=[
                    ColumnStage(
                        id="job",
                        title="Job",
                        path=None,
                        can_be_started=False,
                        type="job",
                    )
                ],
                not_found_stages=[],
            ),
        )

    def test_get_data_single_stage_with_selection(self):
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

        project.add_stage(job)
        ProjectRepository.save(project)

        data = self.controller.get_data(
            DataRequest.from_dict(
                {
                    "selection": [
                        {
                            "stage_id": "job",
                            "limit": 10,
                            "offset": 0,
                        }
                    ],
                    "filter": {},
                }
            )
        )

        self.assertEqual(
            data,
            KanbanData(
                columns=[
                    KanbanColumn(
                        selected_stage=ColumnStage.create(job),
                        stages=[ColumnStage.create(job)],
                        stage_run_cards=[],
                        total_count=0,
                    )
                ],
                next_stage_options=[],
                not_found_stages=[],
            ),
        )

    def test_get_data_multiple_stages_no_selection(self):
        self.maxDiff = None
        project = ProjectRepository.load()

        script = ScriptStage(
            id="script",
            file="script.py",
            title="Script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        condition = ConditionStage(
            id="condition",
            title="Condition",
            variable_name="title",
            type_name="condition",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="script",
                    target_type="script",
                    type="conditions:patternMatched",
                    condition_value="true",
                )
            ],
        )

        job = JobStage(
            id="job",
            title="Job",
            file="job.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="condition",
                    target_type="condition",
                    type="jobs:finished",
                    condition_value=None,
                )
            ],
        )

        project.add_stage(job)
        project.add_stage(condition)
        project.add_stage(script)
        ProjectRepository.save(project)

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
                columns=[],
                next_stage_options=[
                    ColumnStage.create(job),
                    ColumnStage.create(script),
                    ColumnStage.create(condition),
                ],
                not_found_stages=[],
            ),
        )

    def test_get_data_multiple_stages_single_selection(self):
        self.maxDiff = None
        project = ProjectRepository.load()

        script = ScriptStage(
            id="script",
            file="script.py",
            title="Script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        condition = ConditionStage(
            id="condition",
            title="Condition",
            variable_name="title",
            type_name="condition",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="script",
                    target_type="script",
                    type="conditions:patternMatched",
                    condition_value="true",
                )
            ],
        )

        job = JobStage(
            id="job",
            title="Job",
            file="job.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="condition",
                    target_type="condition",
                    type="jobs:finished",
                    condition_value=None,
                )
            ],
        )

        project.add_stage(job)
        project.add_stage(condition)
        project.add_stage(script)
        ProjectRepository.save(project)

        data = self.controller.get_data(
            DataRequest.from_dict(
                {
                    "selection": [
                        {
                            "stage_id": "job",
                            "limit": 10,
                            "offset": 0,
                        }
                    ],
                    "filter": {},
                }
            )
        )

        self.assertEqual(
            data,
            KanbanData(
                columns=[
                    KanbanColumn(
                        selected_stage=ColumnStage.create(job),
                        stages=[
                            ColumnStage.create(script),
                            ColumnStage.create(condition),
                            ColumnStage.create(job),
                        ],
                        stage_run_cards=[],
                        total_count=0,
                    )
                ],
                next_stage_options=[
                    ColumnStage.create(script),
                    ColumnStage.create(condition),
                ],
                not_found_stages=[],
            ),
        )

    def test_get_data_multiple_stages_multiple_selection(self):
        self.maxDiff = None
        project = ProjectRepository.load()

        script = ScriptStage(
            id="script",
            file="script.py",
            title="Script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        condition = ConditionStage(
            id="condition",
            title="Condition",
            variable_name="title",
            type_name="condition",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="script",
                    target_type="script",
                    type="conditions:patternMatched",
                    condition_value="true",
                )
            ],
        )

        job = JobStage(
            id="job",
            title="Job",
            file="job.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="condition",
                    target_type="condition",
                    type="jobs:finished",
                    condition_value=None,
                )
            ],
        )

        project.add_stage(job)
        project.add_stage(condition)
        project.add_stage(script)
        ProjectRepository.save(project)

        data = self.controller.get_data(
            DataRequest.from_dict(
                {
                    "selection": [
                        {
                            "stage_id": "job",
                            "limit": 10,
                            "offset": 0,
                        },
                        {
                            "stage_id": "condition",
                            "limit": 10,
                            "offset": 0,
                        },
                    ],
                    "filter": {},
                }
            )
        )

        self.assertEqual(
            data,
            KanbanData(
                columns=[
                    KanbanColumn(
                        selected_stage=ColumnStage.create(job),
                        stages=[
                            ColumnStage.create(script),
                            ColumnStage.create(job),
                        ],
                        stage_run_cards=[],
                        total_count=0,
                    ),
                    KanbanColumn(
                        selected_stage=ColumnStage.create(condition),
                        stages=[
                            ColumnStage.create(script),
                            ColumnStage.create(condition),
                        ],
                        stage_run_cards=[],
                        total_count=0,
                    ),
                ],
                next_stage_options=[ColumnStage.create(script)],
                not_found_stages=[],
            ),
        )

    def test_get_data_multiple_multiple_initial_with_selection(self):
        self.maxDiff = None
        project = ProjectRepository.load()

        script = ScriptStage(
            id="script",
            file="script.py",
            title="Script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        condition = ConditionStage(
            id="condition",
            title="Condition",
            variable_name="title",
            type_name="condition",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="script",
                    target_type="script",
                    type="conditions:patternMatched",
                    condition_value="true",
                )
            ],
        )

        job1 = JobStage(
            id="job1",
            title="Job1",
            file="job1.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="condition",
                    target_type="condition",
                    type="jobs:finished",
                    condition_value=None,
                )
            ],
        )

        job2 = JobStage(
            id="job2",
            title="Job2",
            file="job2.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="condition",
                    target_type="condition",
                    type="jobs:finished",
                    condition_value=None,
                )
            ],
        )

        project.add_stage(job1)
        project.add_stage(job2)
        project.add_stage(condition)
        project.add_stage(script)
        ProjectRepository.save(project)

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
                columns=[],
                next_stage_options=[
                    ColumnStage.create(job1),
                    ColumnStage.create(job2),
                    ColumnStage.create(script),
                    ColumnStage.create(condition),
                ],
                not_found_stages=[],
            ),
        )

    def test_get_data_multiple_multiple_initial_with_multiple_selection(self):
        self.maxDiff = None
        project = ProjectRepository.load()

        script = ScriptStage(
            id="script",
            file="script.py",
            title="Script",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )
        condition = ConditionStage(
            id="condition",
            title="Condition",
            variable_name="title",
            type_name="condition",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="script",
                    target_type="script",
                    type="conditions:patternMatched",
                    condition_value="true",
                )
            ],
        )

        job1 = JobStage(
            id="job1",
            title="Job1",
            file="job1.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="condition",
                    target_type="condition",
                    type="jobs:finished",
                    condition_value=None,
                )
            ],
        )

        job2 = JobStage(
            id="job2",
            title="Job2",
            file="job2.py",
            schedule="* * * * *",
            workflow_position=(0, 0),
            workflow_transitions=[
                WorkflowTransition(
                    id="transition",
                    target_id="condition",
                    target_type="condition",
                    type="jobs:finished",
                    condition_value=None,
                )
            ],
        )

        project.add_stage(job1)
        project.add_stage(job2)
        project.add_stage(condition)
        project.add_stage(script)
        ProjectRepository.save(project)

        data = self.controller.get_data(
            DataRequest.from_dict(
                {
                    "selection": [
                        {
                            "stage_id": "job1",
                            "limit": 10,
                            "offset": 0,
                        },
                        {
                            "stage_id": "condition",
                            "limit": 10,
                            "offset": 0,
                        },
                    ],
                }
            )
        )

        self.assertEqual(
            data,
            KanbanData(
                columns=[
                    KanbanColumn(
                        selected_stage=ColumnStage.create(job1),
                        stages=[
                            ColumnStage.create(job2),
                            ColumnStage.create(script),
                            ColumnStage.create(job1),
                        ],
                        stage_run_cards=[],
                        total_count=0,
                    ),
                    KanbanColumn(
                        selected_stage=ColumnStage.create(condition),
                        stages=[
                            ColumnStage.create(job2),
                            ColumnStage.create(script),
                            ColumnStage.create(condition),
                        ],
                        stage_run_cards=[],
                        total_count=0,
                    ),
                ],
                next_stage_options=[
                    ColumnStage.create(job2),
                    ColumnStage.create(script),
                ],
                not_found_stages=[],
            ),
        )

    def test_return_not_found_stages(self):
        self.maxDiff = None
        project = ProjectRepository.load()

        ProjectRepository.save(project)

        data = self.controller.get_data(
            DataRequest.from_dict(
                {
                    "selection": [
                        {
                            "stage_id": "script",
                            "limit": 10,
                            "offset": 0,
                        }
                    ],
                    "filter": {},
                }
            )
        )

        self.assertEqual(
            data,
            KanbanData(
                columns=[],
                next_stage_options=[],
                not_found_stages=["script"],
            ),
        )
