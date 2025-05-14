import datetime
from dataclasses import dataclass
from typing import Any, List
from uuid import uuid4

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.entities.execution_context import (
    FormContext,
    HookContext,
    Request,
    ScriptContext,
)
from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.repositories.tasks import TaskDTO, TaskEventDetails, TaskPayload
from abstra_internals.utils.datetime import to_utc_iso_string


@dataclass
class MockedTask:
    type: str
    payload: Any


def mock_form_answers(test_answers: List[Any]):
    context = SDKContextStore.get_by_thread()
    if not isinstance(context.task_sdk.execution.context, FormContext):
        raise user_exceptions.IncompatibleTestingFormsSDK()
    context.form_sdk.client.context.mock_execution.test_answers = test_answers


def mock_trigger_task(type: str, payload: TaskPayload):
    context = SDKContextStore.get_by_thread()
    if not isinstance(context.task_sdk.execution.context, ScriptContext):
        raise user_exceptions.IncompatibleTestingOnTasksSDK()
    mocked_task_id = "test-" + str(uuid4())
    context.task_sdk.execution.context.mock_execution.test_trigger_task = TaskDTO(
        id=mocked_task_id,
        type=type,
        payload=payload,
        target_stage_id="test",
        status="pending",
        created=TaskEventDetails(
            at=to_utc_iso_string(datetime.datetime.now(datetime.timezone.utc)),
            by_execution_id=context.task_sdk.execution.id,
            by_stage_id=context.task_sdk.execution.stage_id,
        ),
        locked=None,
        completed=None,
    )


def mock_hook_request(
    method: str,
    body: str = "",
    query_params: dict = {},
    headers: dict = {},
):
    context = SDKContextStore.get_by_thread()
    if not isinstance(context.task_sdk.execution.context, HookContext):
        raise user_exceptions.IncompatibleTestingHooksSDK()
    mocked_request = Request(
        method=method, body=body, query_params=query_params, headers=headers
    )
    context.task_sdk.execution.context.mock_execution.test_request = mocked_request


def mock_pending_tasks(tasks: List[dict]):
    context = SDKContextStore.get_by_thread()
    context.task_sdk.execution.context.mock_execution.test_pending_tasks = [
        TaskDTO(
            id="test-" + str(uuid4()),
            type=t["type"],
            payload=t["payload"],
            target_stage_id="test",
            status="pending",
            created=TaskEventDetails(
                at=to_utc_iso_string(datetime.datetime.now(datetime.timezone.utc)),
                by_execution_id=context.task_sdk.execution.id,
                by_stage_id=context.task_sdk.execution.stage_id,
            ),
            locked=None,
            completed=None,
        )
        for t in tasks
    ]
