import typing, threading
from abstra_internals.contract import dashes_contract
from abstra_internals.execution.live_execution import (
    LiveExecution,
    get_live_execution_throwable,
)
from .common import get_query_params, get_user, redirect, alert, execute_js  # exported


def __set_refresh_interval(
    execution: LiveExecution,
    interval: int,
    user_callback: typing.Optional[typing.Callable],
):
    def timer_callback():
        if user_callback:
            user_callback()
        if execution.connected:
            execution.send(dashes_contract.SetupRefreshIntervalMessage())
            __set_refresh_interval(execution, interval, user_callback)

    timer = threading.Timer(interval, timer_callback)
    execution.context["refresh_interval"] = timer
    timer.start()


def start_refresh_interval(
    interval: int, user_callback: typing.Optional[typing.Callable] = None
):
    """Experimental"""
    execution = get_live_execution_throwable()
    __set_refresh_interval(execution, interval, user_callback)


def stop_refresh_interval():
    """Experimental"""
    execution = get_live_execution_throwable()
    timer = execution.context.get("refresh_interval")
    if timer:
        timer.cancel()
        execution.context["refresh_interval"] = None
