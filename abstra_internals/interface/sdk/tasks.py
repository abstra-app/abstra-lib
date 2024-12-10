from typing import List

from abstra_internals.controllers.sdk_context import SDKContextStore
from abstra_internals.controllers.sdk_tasks import Task
from abstra_internals.repositories.tasks import TaskPayload
from abstra_internals.utils.json import to_json_serializable


def get_tasks(limit=100) -> List[Task]:
    context = SDKContextStore.get_by_thread()
    return context.task_sdk.get_stage_pending_tasks(limit)


def send_task(type: str, payload: TaskPayload, show_warning=True) -> None:
    context = SDKContextStore.get_by_thread()
    if not isinstance(payload, dict):
        raise Exception("Task payload must be a dictionary")
    serializable_payload = {k: to_json_serializable(v) for k, v in payload.items()}
    context.task_sdk.send_task(type, serializable_payload, show_warning=show_warning)


def get_trigger_task() -> Task:
    context = SDKContextStore.get_by_thread()
    return context.task_sdk.get_trigger_task()
