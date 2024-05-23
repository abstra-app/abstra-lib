from typing import Dict, Optional, Union

from abstra_internals.controllers.sdk import WorkflowSDKController
from abstra_internals.repositories import execution_repository, stage_run_repository
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.utils import is_json_serializable


def get_data(key: Optional[str] = None) -> Union[Dict[str, object], object]:
    sdk_controller = WorkflowSDKController(
        stage_run_repository=stage_run_repository,
        execution_repository=execution_repository,
        project_repository=ProjectRepository(),
    )
    return sdk_controller.get_data(key)


def set_data(key: str, value: object):
    if not is_json_serializable(value):
        raise Exception("Value is not JSON serializable")

    sdk_controller = WorkflowSDKController(
        stage_run_repository=stage_run_repository,
        execution_repository=execution_repository,
        project_repository=ProjectRepository(),
    )
    sdk_controller.set_data(key, value)


def set_title(title: str):
    set_data("_thread_title", title)
