import sys
from inspect import currentframe
from pathlib import Path
from types import ModuleType as _ModuleType
from typing import Any, Callable, Literal
from uuid import uuid4

from abstra.forms import url_params
from abstra.tasks import get_tasks, get_trigger_task, send_task
from abstra_internals.controllers.execution.execution import ClientAbandoned
from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.utils.json import to_json_serializable


class WorkflowModule(_ModuleType):
    set_data: Callable[[str, Any], None]
    get_data: Callable[[str], Any]
    set_title: Callable[[str], None]


def _set_data(varname: str, value: Any) -> None:
    execution = SDKContextStore.get_execution()
    execution.context.legacy_thread_data[varname] = to_json_serializable(value)


def _get_data(varname: str) -> Any:
    execution = SDKContextStore.get_execution()
    value = execution.context.legacy_thread_data.get(varname)
    if value is not None:
        return value
    else:
        raise KeyError(f'Variable "{varname}" was not set with set_data before')


def _set_title(title: str):
    _set_data("_thread_title", title)


def use_legacy_threads(mode: Literal["scripts", "forms", "jobs", "hooks"]):
    """
    Sets up compatibility mode for legacy threading functionality.

    Args:
        mode (Literal["scripts", "forms", "jobs", "hooks"]): The execution mode for the legacy threads.
    """
    callee = currentframe()
    if callee is None:
        return

    callee_back = callee.f_back
    if callee_back is None:
        return

    callee_filename = callee_back.f_code.co_filename

    if callee_filename == "<string>":
        return

    callee_path = Path(callee_filename)
    callee_code = callee_path.read_text(encoding="utf-8")

    workflow = WorkflowModule("abstra.workflows")

    task = None

    execution = SDKContextStore.get_execution()
    if mode == "scripts":
        task = get_trigger_task()
        execution.context.legacy_thread_data = task.get_payload()
    elif mode == "forms":
        pending_tasks = get_tasks()
        if len(pending_tasks) > 0:
            task = next(
                t
                for t in pending_tasks
                if t.get_payload().get("_id") == url_params["abstra-run-id"]
            )
            execution.context.legacy_thread_data = task.get_payload()

    execution.context.legacy_thread_data = {
        **execution.context.legacy_thread_data,
        "_id": uuid4().__str__(),
    }

    workflow.set_data = _set_data
    workflow.get_data = _get_data
    workflow.set_title = _set_title

    sys.modules["abstra.workflows"] = workflow

    try:
        exec(callee_code, callee.f_globals, callee.f_globals)
        send_task("success", execution.context.legacy_thread_data, show_warning=False)

        if task:
            task.complete()

    except SystemExit as e:
        status = "success" if e.code == 0 else "failure"
        send_task(status, execution.context.legacy_thread_data, show_warning=False)

        if task:
            task.complete()
    except ClientAbandoned:
        pass
    except Exception as e:
        send_task("failure", execution.context.legacy_thread_data, show_warning=False)

        if task:
            task.complete()

        raise e
    exit()
