import json
from typing import Optional
from ....utils.json import to_json_serializable
from ....execution.execution import get_current_execution_throwable
from ....execution.hook_execution import HookExecution
from ....execution.stage_run_manager import UnsetStageRun
from ....repositories.stage_run import GetStageRunByQueryFilter


def is_json_serializable(value):
    try:
        json.dumps(value)
        return True
    except TypeError:
        return False


def match_thread(filter: dict):
    execution = get_current_execution_throwable()
    if not isinstance(execution, HookExecution):
        raise Exception("match_thread may only be used inside a hook")
    stage_id = execution.stage.id
    stage_runs = execution.stage_run_manager.find(
        filter=GetStageRunByQueryFilter(stage=stage_id, data=filter, status="waiting")
    )
    if len(stage_runs) == 0:
        raise Exception(f"No thread found for {filter}")
    stage_run = stage_runs[0]
    execution.set_stage_run(stage_run.id)
    if execution.status == "lock-failed":
        raise Exception(f"Failed to lock execution")


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
    execution.stage_run_manager.update_data(stage_run.id, stage_run.data)
