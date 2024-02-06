from typing import Optional

from ...constants import get_persistent_dir  # exported
from ...execution.form_execution import get_form_execution_throwable


def get_user(refresh: bool = False):
    execution = get_form_execution_throwable()
    return execution.get_user(refresh=refresh)


def execute_js(code: str, context: dict = {}):
    execution = get_form_execution_throwable()
    return execution.execute_js(code, context=context)


def redirect(url: str, query_params: Optional[dict] = None):
    execution = get_form_execution_throwable()
    return execution.redirect(url, query_params)


def get_query_params() -> dict:
    execution = get_form_execution_throwable()
    return execution.query_params
