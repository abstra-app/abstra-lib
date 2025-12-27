from datetime import datetime
from unittest import TestCase
from uuid import uuid4

from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import HookContext, Request, Response
from abstra_internals.repositories.project.project import HookStage
from abstra_internals.utils import is_serializable
from abstra_internals.utils.datetime import from_utc_iso_string


class ExecutionTest(TestCase):
    def test_init_and_dto(self):
        mock_stage = HookStage.create(
            title="mock_stage",
            file="mock_file",
            id="mock_hook_id",
            workflow_position=(0, 1),
        )

        request = Request(
            body={"a": 1}.__str__(),
            headers={"auth": "secret_token"},
            query_params={"c": "3"},
            method="GET",
        )

        context = HookContext(
            request=request,
            response=Response(headers={}, status=200, body=""),
        )

        execution: Execution[HookContext] = Execution.create(
            id=uuid4().__str__(), stage_id=mock_stage.id, context=context
        )

        dto = execution.dump()

        self.assertEqual(dto["stageId"], "mock_hook_id")
        self.assertEqual(dto["context"], context.dump())
        self.assertEqual(dto["status"], "running")
        self.assertIsNotNone(dto["id"])

        created_at = dto["createdAt"]
        self.assertIsNotNone(created_at)
        self.assertIsInstance(from_utc_iso_string(created_at), datetime)  # type: ignore

    def test_dto_is_serializable(self):
        mock_stage = HookStage.create(
            title="mock_stage",
            file="mock_file",
            id="mock_hook_id",
            workflow_position=(0, 1),
        )

        context = HookContext(
            request=Request(
                body={"a": 1}.__str__(),
                headers={"auth": "secret_token"},
                query_params={"c": "3"},
                method="GET",
            ),
            response=Response(headers={}, status=200, body=""),
        )

        execution: Execution[HookContext] = Execution.create(
            id=uuid4().__str__(), stage_id=mock_stage.id, context=context
        )

        dto = execution.dump()

        self.assertTrue(is_serializable(dto))
