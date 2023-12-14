from typing import Optional
from abstra_internals.execution.execution import (
    UnsetStageRun,
    get_current_execution_throwable,
)


def get_data(key: Optional[str] = None):
    execution = get_current_execution_throwable()
    stage_run = execution.stage_run
    if not stage_run:
        raise UnsetStageRun()
    return stage_run.data.get(key) if key else stage_run.data


def set_data(key, value):
    execution = get_current_execution_throwable()
    stage_run = execution.stage_run
    if not stage_run:
        raise UnsetStageRun()
    stage_run.data[key] = value
