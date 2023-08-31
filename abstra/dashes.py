# This is an interface only file
# Actual functions are defined on runtime
import typing


class AuthResponse:
    email: str


def get_user() -> AuthResponse:
    raise Exception("Not implemented")


def redirect(url: str, params={}):
    raise Exception("Not implemented")


def get_query_params() -> dict:
    raise Exception("Not implemented")


def alert(message: str, severity: str = "info"):
    raise Exception("Not implemented")


def execute_js():
    raise Exception("Not implemented")


def start_refresh_interval(interval: int, callback: typing.Callable):
    """Experimental"""
    raise Exception("Not implemented")


def stop_refresh_interval():
    """Experimental"""
    raise Exception("Not implemented")
