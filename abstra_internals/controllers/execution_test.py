from pathlib import Path

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.execution_client_hook import HookClient
from abstra_internals.controllers.workflow_engine import WorkflowEngine
from abstra_internals.controllers.workflow_engine_detached import DetachedWorkflowEngine
from abstra_internals.entities.execution import RequestContext
from abstra_internals.repositories.project.project import HookStage, ProjectRepository
from tests.fixtures import BaseTest


class ExecutionControllerTest(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.workflow_engine = WorkflowEngine(self.repositories)

        self.detached_workflow_engine = DetachedWorkflowEngine(self.repositories)

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

    def test_run_initial_returns_dto(self):
        ExecutionController(
            repositories=self.repositories, workflow_engine=self.workflow_engine
        ).run(
            stage=self.stage,
            client=self.hook_client,
            request=self.request_context,
        )

        self.assertEqual(self.hook_client.response["status"], 200)

    def test_run_detached_returns_dto(self):
        ExecutionController(
            repositories=self.repositories,
            workflow_engine=self.detached_workflow_engine,
        ).test(
            stage=self.stage,
            client=self.hook_client,
            request=self.request_context,
        )

        self.assertEqual(self.hook_client.response["status"], 200)
