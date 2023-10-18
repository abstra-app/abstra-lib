from abstra_internals.constants import get_persistent_dir  # exported
from abstra_internals.execution.live_execution import (
    get_live_execution_throwable,
    AuthResponse,
)  # exported


def get_user(refresh: bool = False):
    execution = get_live_execution_throwable()
    return execution.get_user(refresh=refresh)


def execute_js(code: str, context: dict = {}):
    execution = get_live_execution_throwable()
    return execution.execute_js(code, context=context)


def alert(message: str, severity: str = "info"):
    execution = get_live_execution_throwable()
    return execution.alert(message, severity)


def redirect(url: str, query_params: dict = {}):
    execution = get_live_execution_throwable()
    return execution.redirect(url, query_params)


def get_query_params() -> dict:
    execution = get_live_execution_throwable()
    return execution.query_params
