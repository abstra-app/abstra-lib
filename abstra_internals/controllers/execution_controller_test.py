from pathlib import Path
from unittest import TestCase

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.execution_client import HookClient
from abstra_internals.entities.execution import RequestContext
from abstra_internals.repositories.execution import execution_repository_factory
from abstra_internals.repositories.project.project import (
    HookStage,
    ProjectRepository,
)
from abstra_internals.repositories.stage_run import (
    stage_run_repository_factory,
)
from tests.fixtures import clear_dir, init_dir


class ExecutionControllerTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.stage_run_repository = stage_run_repository_factory()
        self.execution_repository = execution_repository_factory()
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
        controller = ExecutionController(
            stage=self.stage,
            target_stage_run_id=None,
            request=self.request_context,
            stage_run_repository=self.stage_run_repository,
            execution_repository=self.execution_repository,
            project_repository=ProjectRepository,
            client=self.hook_client,
        )

        execution_dto = controller.run()

        if not execution_dto:
            self.fail("ExecutionDTO is None")

        self.assertEqual(execution_dto["status"], "finished")

    def test_run_detached_returns_dto(self):
        controller = ExecutionController(
            stage=self.stage,
            target_stage_run_id=None,
            request=self.request_context,
            stage_run_repository=self.stage_run_repository,
            execution_repository=self.execution_repository,
            project_repository=ProjectRepository,
            client=self.hook_client,
        )

        execution_dto = controller.run_detached(thread_data={})

        if not execution_dto:
            self.fail("ExecutionDTO is None")

        self.assertEqual(execution_dto["status"], "finished")
