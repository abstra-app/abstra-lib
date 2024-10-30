from typing import Dict, Optional

from abstra_internals.controllers.execution_store import ExecutionStore
from abstra_internals.jwt_auth import UserClaims
from abstra_internals.proxy import ReadOnlyProxyDict


def get_user(refresh: bool = False) -> UserClaims:
    """
    Get the current user

    Args:
        refresh (bool, optional): Whether to force refresh the user. Defaults to False.

    Returns:
        Union[UserClaims, None]: User information
    """

    return ExecutionStore.get_by_thread().form_sdk.get_user(force_refresh=refresh)


def execute_js(code: str, context: Optional[dict] = None):
    """
    Execute JavaScript code in the browser

    Args:
        code (str): JavaScript code to execute
        context (dict, optional): Context to pass to the JavaScript code. Defaults to {}.

    Returns:
        Any: Result of the JavaScript code
    """

    return ExecutionStore.get_by_thread().form_sdk.execute_js(code, context or {})


def redirect(url: str, query_params: Optional[dict] = None) -> None:
    """
    Redirect the user to a new URL

    Args:
        url (str): URL to redirect to
        query_params (Optional[dict], optional): Query parameters to append to the URL. Defaults to None.

    Returns:
        None
    """
    ExecutionStore.get_by_thread().form_sdk.redirect(url, query_params)


def get_query_params() -> Dict[str, str]:
    """
    Get the query parameters from the current URL

    Returns:
        Dict[str, str]: Query parameters
    """

    return ExecutionStore.get_by_thread().form_sdk.get_query_params()


# legacy
url_params = ReadOnlyProxyDict(get_query_params)


__all__ = [
    "get_user",
    "execute_js",
    "redirect",
    "get_query_params",
    "url_params",
]
