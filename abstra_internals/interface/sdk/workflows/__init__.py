from typing import Dict, Optional, Union

from abstra_internals.controllers.execution_store import ExecutionStore


def get_data(key: Optional[str] = None) -> Union[Dict[str, object], object]:
    sdk_ctx = ExecutionStore.get_by_thread()
    return sdk_ctx.workflow_sdk.get_data(key)


def set_data(key: str, value: object):
    sdk_ctx = ExecutionStore.get_by_thread()
    sdk_ctx.workflow_sdk.set_data(key, value)


def set_title(title: str):
    set_data("_thread_title", title)
