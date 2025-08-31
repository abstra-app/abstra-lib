from multiprocessing import Pipe
from pathlib import Path

from abstra_internals.controllers.execution.execution import ExecutionController
from abstra_internals.controllers.execution.execution_client_hook import HookClient
from abstra_internals.entities.execution_context import HookContext, Request, Response
from abstra_internals.repositories.project.project import HookStage
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
            )
        )

        self.project = self.repositories.project.load(include_disabled_stages=False)
        self.stage = HookStage.create(
            title="mock_stage",
            file="mock_file.py",
            id="mock_hook_id",
            workflow_position=(0, 1),
        )
        Path(self.stage.file).write_text("print('Hello, World!')", encoding="utf-8")
        self.project.add_stage(self.stage)
        self.repositories.project.save(self.project)

        self.parent_conn, child_conn = Pipe()
        self.hook_client = HookClient(self.context, conn=child_conn)

    def test_run_initial_returns_dto(self):
        ExecutionController(
            repositories=self.repositories,
            stage=self.stage,
            context=self.context,
            client=self.hook_client,
        ).run()

        response = self.parent_conn.recv()
        assert isinstance(response, Response)

        if not response:
            self.fail("Response was not set")

        self.assertEqual(response.status, 200)
