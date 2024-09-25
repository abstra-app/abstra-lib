from abstra_internals.controllers.execution_store import (
    ExecutionStore,
)


def get_execution_id() -> str:
    return ExecutionStore.get_by_thread().execution.id
