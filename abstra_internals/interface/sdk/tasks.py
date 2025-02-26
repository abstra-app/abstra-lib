from typing import Iterator, List, Optional

from abstra_internals.controllers.sdk_context import SDKContextStore
from abstra_internals.controllers.sdk_tasks import Task
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.tasks import TaskPayload
from abstra_internals.utils.json import to_json_serializable

BATCH_SIZE = 10


def get_tasks(
    limit: Optional[int] = None, offset=0, where: Optional[dict] = None
) -> List[Task]:
    context = SDKContextStore.get_by_thread()
    if where is None:
        where = {}

    if limit is None or limit < 1:
        limit = 100
    else:
        if limit > 10000:
            limit = 10000
            AbstraLogger.warning(
                "get_tasks limit is too high, capping it to 10000. To iterate over all tasks, use iter_tasks"
            )

    return context.task_sdk.get_stage_pending_tasks(limit, offset, where)


def send_task(type: str, payload: TaskPayload, show_warning=True) -> None:
    context = SDKContextStore.get_by_thread()
    if not isinstance(payload, dict):
        raise Exception("Task payload must be a dictionary")
    serializable_payload = {k: to_json_serializable(v) for k, v in payload.items()}
    context.task_sdk.send_task(type, serializable_payload, show_warning)


def get_trigger_task() -> Task:
    context = SDKContextStore.get_by_thread()
    return context.task_sdk.get_trigger_task()


def iter_tasks(where: Optional[dict] = None) -> Iterator[Task]:
    if where is None:
        where = {}
    offset = 0
    while True:
        tasks = get_tasks(limit=BATCH_SIZE, offset=offset, where=where)
        if not tasks:
            break
        yield from tasks
        offset += BATCH_SIZE


def get_sent_tasks(
    limit: Optional[int] = None, offset=0, where: Optional[dict] = None
) -> List[Task]:
    context = SDKContextStore.get_by_thread()
    if limit is None and where is None:
        limit = 100
    if where is None:
        where = {}
    return context.task_sdk.get_stage_sent_tasks(limit, offset, where)
