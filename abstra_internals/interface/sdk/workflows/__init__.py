import json
from typing import Optional
from ....utils.json import to_json_serializable
from ....execution.execution import UnsetStageRun, get_current_execution_throwable


def is_json_serializable(value):
    try:
        json.dumps(value)
        return True
    except TypeError:
        return False


def get_data(key: Optional[str] = None):
    execution = get_current_execution_throwable()
    stage_run = execution.stage_run
    if not stage_run:
        raise UnsetStageRun()
    return stage_run.data.get(key) if key else stage_run.data


def set_data(key, value):
    value = to_json_serializable(value)
    if not is_json_serializable(value):
        raise TypeError(f"{key} is not JSON serializable")
    execution = get_current_execution_throwable()
    stage_run = execution.stage_run
    if not stage_run:
        raise UnsetStageRun()
    stage_run.data[key] = value
