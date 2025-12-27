import json
from multiprocessing import Pipe
from pathlib import Path
from uuid import uuid4

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
            ),
            response=Response(headers={}, status=200, body=""),
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
        self.hook_client = HookClient(
            self.context, conn=child_conn, production_mode=False
        )

    def test_run_initial_returns_dto(self):
        ExecutionController(
            repositories=self.repositories,
            stage=self.stage,
            context=self.context,
            client=self.hook_client,
        ).run(execution_id=uuid4().__str__())

        started_msg_str = self.parent_conn.recv()
        assert isinstance(started_msg_str, str), (
            f"Expected str, got {type(started_msg_str)}"
        )

        started_msg = json.loads(started_msg_str)
        assert started_msg["type"] == "execution:started"
        assert "executionId" in started_msg

        response = self.parent_conn.recv()

        if not response:
            self.fail("Response was not set")

        if not isinstance(response, Response):
            response = Response(
                headers=response.get("headers", {}),
                status=response.get("status", 200),
                body=response.get("body", ""),
            )

        self.assertEqual(response.status, 200)

    def test_execution_started_message_is_json_serializable(self):
        """Test that ExecutionStartedMessage is properly serialized to JSON"""
        ExecutionController(
            repositories=self.repositories,
            stage=self.stage,
            context=self.context,
            client=self.hook_client,
        ).run(execution_id="test_execution_id")

        # Receive and verify the message is a valid JSON string
        started_msg_str = self.parent_conn.recv()
        self.assertIsInstance(started_msg_str, str)

        # Verify it can be parsed as JSON
        try:
            started_msg = json.loads(started_msg_str)
        except json.JSONDecodeError:
            self.fail("ExecutionStartedMessage is not valid JSON")

        # Verify the structure
        self.assertEqual(started_msg["type"], "execution:started")
        self.assertIn("executionId", started_msg)
        self.assertIsInstance(started_msg["executionId"], str)

    def test_execution_ended_message_is_json_serializable(self):
        """Test that ExecutionEndedMessage is properly serialized to JSON"""
        ExecutionController(
            repositories=self.repositories,
            stage=self.stage,
            context=self.context,
            client=self.hook_client,
        ).run(execution_id="test_execution_id")

        # Skip the started message
        self.parent_conn.recv()

        # Skip response
        self.parent_conn.recv()

        # Get the ended message
        ended_msg_str = self.parent_conn.recv()
        self.assertIsInstance(ended_msg_str, str)

        # Verify it can be parsed as JSON
        try:
            ended_msg = json.loads(ended_msg_str)
        except json.JSONDecodeError:
            self.fail("ExecutionEndedMessage is not valid JSON")

        # Verify the structure
        self.assertEqual(ended_msg["type"], "execution:ended")
        self.assertIn("exitStatus", ended_msg)
        self.assertEqual(ended_msg["exitStatus"], "SUCCESS")
