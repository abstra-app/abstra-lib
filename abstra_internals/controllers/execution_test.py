from pathlib import Path
from unittest import TestCase

from abstra_internals.controllers.execution import (
    DetachedExecutionController,
    ExecutionController,
)
from abstra_internals.controllers.execution_client_hook import HookClient
from abstra_internals.controllers.workflow_engine import WorkflowEngine
from abstra_internals.entities.execution import RequestContext
from abstra_internals.repositories.execution import EditorExecutionRepository
from abstra_internals.repositories.execution_logs import LocalExecutionLogsRepository
from abstra_internals.repositories.notifications import LocalNotificationRepository
from abstra_internals.repositories.project.project import (
    HookStage,
    ProjectRepository,
)
from abstra_internals.repositories.stage_run import LocalStageRunRepository
from tests.fixtures import clear_dir, init_dir


class ExecutionControllerTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.stage_run_repository = LocalStageRunRepository()
        self.execution_repository = EditorExecutionRepository()

        self.workflow_engine = WorkflowEngine(
            stage_run_repository=self.stage_run_repository,
            execution_repository=self.execution_repository,
            notification_repository=LocalNotificationRepository(),
            execution_logs_repository=LocalExecutionLogsRepository(),
        )

        self.request_context = RequestContext(
            body={"a": 1}.__str__(),
            headers={"auth": "some_secret_token"},
            query_params={"c": "3"},
            method="GET",
        )

        self.project = ProjectRepository.load()
        self.stage = HookStage.create(
            title="mock_stage",
            file="mock_file.py",
            id="mock_hook_id",
            workflow_position=(0, 1),
        )
        Path(self.stage.file).write_text("print('Hello, World!')")
        self.project.add_stage(self.stage)
        ProjectRepository.save(self.project)

        self.hook_client = HookClient(self.request_context)

        return super().setUp()

    def tearDown(self) -> None:
        clear_dir(self.root)
        return super().tearDown()

    def test_run_initial_returns_dto(self):
        ExecutionController(
            stage=self.stage,
            client=self.hook_client,
            target_stage_run_id=None,
            request=self.request_context,
            workflow_engine=self.workflow_engine,
            stage_run_repository=self.stage_run_repository,
            execution_repository=self.execution_repository,
        ).run().wait()

        self.assertEqual(self.hook_client.response["status"], 200)

    def test_run_detached_returns_dto(self):
        DetachedExecutionController(
            stage=self.stage,
            client=self.hook_client,
            target_stage_run_id=None,
            request=self.request_context,
            workflow_engine=self.workflow_engine,
            stage_run_repository=self.stage_run_repository,
            execution_repository=self.execution_repository,
        ).run().wait()

        self.assertEqual(self.hook_client.response["status"], 200)
