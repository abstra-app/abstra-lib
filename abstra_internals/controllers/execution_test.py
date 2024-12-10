from pathlib import Path

from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.execution_client_hook import HookClient
from abstra_internals.entities.execution_context import HookContext, Request, Response
from abstra_internals.repositories.project.project import HookStage, ProjectRepository
from tests.fixtures import BaseTest


class ExecutionControllerTest(BaseTest):
    def setUp(self) -> None:
        super().setUp()

        self.request = Request(
            body={"a": 1}.__str__(),
            headers={"auth": "some_secret_token"},
            query_params={"c": "3"},
            method="GET",
        )

        self.context = HookContext(
            request=Request(
                body={"a": 1}.__str__(),
                headers={"auth": "some_secret_token"},
                query_params={"c": "3"},
                method="GET",
            ),
            response=Response(headers={}, status=200, body=""),
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

        self.hook_client = HookClient(self.context)

    def test_run_initial_returns_dto(self):
        ExecutionController(
            repositories=self.repositories,
        ).run(
            stage=self.stage,
            context=self.context,
            client=self.hook_client,
        )

        if not self.context.response:
            self.fail("Response was not set")

        self.assertEqual(self.context.response.status, 200)
