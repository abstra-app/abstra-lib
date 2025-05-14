from typing import Iterator, List, Optional

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.controllers.sdk.sdk_tasks import Task
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.tasks import TaskPayload
from abstra_internals.utils.json import to_json_serializable

BATCH_SIZE = 10


def get_tasks(
    limit: Optional[int] = None, offset: int = 0, where: Optional[dict] = None
) -> List[Task]:
    """Retrieve a list of pending tasks.

    Args:
        limit (Optional[int]): Maximum number of tasks to retrieve.
            Defaults to None which is interpreted as 100.
            Will be capped at 10000.
        offset (int): Number of tasks to skip. Defaults to 0.
        where (Optional[dict]): Dictionary of filters to apply. Defaults to None.

    Returns:
        List[Task]: List of pending tasks matching the criteria.
    """
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


def send_task(type: str, payload: "TaskPayload", show_warning: bool = True) -> None:
    """Send a new task to the task queue.

    Args:
        type (str): Type identifier for the task.
        payload (TaskPayload): Dictionary containing the task data.
        show_warning (bool): Whether to show warnings. Defaults to True.

    Raises:
        Exception: If the payload is not a dictionary.
    """
    context = SDKContextStore.get_by_thread()
    if not isinstance(payload, dict):
        raise Exception("Task payload must be a dictionary")
    serializable_payload = {k: to_json_serializable(v) for k, v in payload.items()}
    context.task_sdk.send_task(type, serializable_payload, show_warning)


def get_trigger_task() -> Task:
    """Retrieve the task that triggered the current execution.

    Returns:
        Task: The task object that triggered this execution.
    """
    context = SDKContextStore.get_by_thread()
    return context.task_sdk.get_trigger_task()


def iter_tasks(where: Optional[dict] = None) -> Iterator[Task]:
    """Iterate through all pending tasks, handling pagination automatically.

    This function yields tasks preloads in batches of 10. It continues to fetch
    and yield tasks until there are no more tasks to retrieve.

    Args:
        where (Optional[dict]): Dictionary of filters to apply. Defaults to None.

    Yields:
        Task: Each pending task matching the criteria.
    """
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
    limit: Optional[int] = None, offset: int = 0, where: Optional[dict] = None
) -> List[Task]:
    """Retrieve a list of tasks that have been sent.

    Args:
        limit (Optional[int]): Maximum number of tasks to retrieve.
            Defaults to None which is interpreted as 100 if where is also None.
        offset (int): Number of tasks to skip. Defaults to 0.
        where (Optional[dict]): Dictionary of filters to apply. Defaults to None.

    Returns:
        List[Task]: List of sent tasks matching the criteria.
    """
    context = SDKContextStore.get_by_thread()
    if limit is None and where is None:
        limit = 100
    if where is None:
        where = {}
    return context.task_sdk.get_stage_sent_tasks(limit, offset, where)
