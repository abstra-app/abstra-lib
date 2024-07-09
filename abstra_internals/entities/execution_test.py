from datetime import datetime
from unittest import TestCase

from abstra_internals.entities.execution import Execution, RequestContext
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

        request = RequestContext(
            body={"a": 1}.__str__(),
            headers={"auth": "secret_token"},
            query_params={"c": "3"},
            method="GET",
        )

        execution = Execution.create(
            stage_id=mock_stage.id, request_context=request, stage_run_id="mock_sr_id"
        )

        dto = execution.to_dto()

        self.assertEqual(dto["stageId"], "mock_hook_id")
        self.assertEqual(dto["stageRunId"], "mock_sr_id")
        self.assertEqual(dto["context"], request)
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

        resquest = RequestContext(
            body={"a": 1}.__str__(),
            headers={"auth": "secret_token"},
            query_params={"c": "3"},
            method="GET",
        )

        execution = Execution.create(
            stage_id=mock_stage.id, request_context=resquest, stage_run_id="mock_sr_id"
        )

        dto = execution.to_dto()

        self.assertTrue(is_serializable(dto))
