import typing, threading
from abstra_internals.contract import dashes_contract
from abstra_internals.session import LiveSession, get_live_session_throwable
from .common import get_query_params, get_user, redirect, alert, execute_js  # exported


def __set_refresh_interval(
    session: LiveSession,
    interval: int,
    user_callback: typing.Optional[typing.Callable],
):
    def timer_callback():
        if user_callback:
            user_callback()
        if session.connected:
            session.send(dashes_contract.SetupRefreshIntervalMessage())
            __set_refresh_interval(session, interval, user_callback)

    timer = threading.Timer(interval, timer_callback)
    session.context["refresh_interval"] = timer
    timer.start()


def start_refresh_interval(
    interval: int, user_callback: typing.Optional[typing.Callable] = None
):
    """Experimental"""
    session = get_live_session_throwable()
    __set_refresh_interval(session, interval, user_callback)


def stop_refresh_interval():
    """Experimental"""
    session = get_live_session_throwable()
    timer = session.context.get("refresh_interval")
    if timer:
        timer.cancel()
        session.context["refresh_interval"] = None
