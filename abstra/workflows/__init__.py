from abstra_internals.execution.execution import get_execution_throwable
from abstra_internals.repositories.stage_run import StageRun
from typing import List, Optional
from abstra_internals.repositories import StageRunRepository


def get_stage() -> StageRun:
    execution = get_execution_throwable()
    if execution.stage_run is None:
        raise Exception("Stage run not set")
    return execution.stage_run


def set_stage(**kwargs) -> Optional[StageRun]:
    execution = get_execution_throwable()
    execution.set_stage(**kwargs)
    return execution.stage_run


def next_stage(next_stage_runs: Optional[List[dict]] = None):
    """
    :param next_stage_runs: List of dicts with the following structure:
        {
            "assignee": "user@email.com",
            "data": {
                "key": "value"
            },
            "stage": "stage_name"
        }
    """
    execution = get_execution_throwable()

    execution.advance_stage(next_stage_runs, False)
