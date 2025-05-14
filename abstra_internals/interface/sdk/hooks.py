from typing import Dict, List, Tuple, Union

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.interface.sdk.user_exceptions import BadSendResponse
from abstra_internals.utils import serialize
from abstra_internals.utils.insensitive_dict import CaseInsensitiveDict


def get_raw_request() -> Tuple[str, Dict[str, str], Dict[str, str]]:
    """Get the raw HTTP request data.

    Returns:
        Tuple[str, Dict[str, str], Dict[str, str]]: A tuple containing:
            - Raw request body as a string
            - Request headers as a dictionary
            - Request query parameters as a dictionary
    """
    return SDKContextStore.get_by_thread().hook_sdk.get_raw_request()


def get_email_request():
    """Get the raw email request data.

    Returns:
        dict: Email request data containing sender, recipients, subject, and body information.
    """
    return SDKContextStore.get_by_thread().hook_sdk.get_email_request()


def get_request() -> Tuple[Union[str, List, Dict], Dict[str, str], Dict[str, str]]:
    """Get the HTTP request data with parsed body.

    Returns:
        Tuple[Union[str, List, Dict], Dict[str, str], Dict[str, str]]: A tuple containing:
            - Parsed request body (as string, list, or dict depending on content type)
            - Request headers as a dictionary
            - Request query parameters as a dictionary
    """
    return SDKContextStore.get_by_thread().hook_sdk.get_request()


def send_response(
    body: Union[str, Dict, List] = "",
    status_code: int = 200,
    headers: Dict[str, str] = {},
) -> None:
    """Send an HTTP response.

    Args:
        body (Union[str, Dict, List]): Response body content. Non-string values will
            be serialized to JSON. Defaults to empty string.
        status_code (int): HTTP status code. Defaults to 200.
        headers (Dict[str, str]): HTTP response headers. Defaults to empty dict.

    Raises:
        BadSendResponse: If status_code is not an integer or headers is not a dictionary.
    """
    if not isinstance(body, str):
        body = serialize(body)

    if not isinstance(status_code, int):
        raise BadSendResponse("Status code must be an integer.")

    if not isinstance(headers, dict):
        raise BadSendResponse("Headers must be a dictionary.")

    SDKContextStore.get_by_thread().hook_sdk.set_response(status_code, body, headers)


def send_json(
    data: Union[Dict, List] = {}, status_code: int = 200, headers: Dict[str, str] = {}
) -> None:
    """Send a JSON HTTP response.

    Automatically sets the Content-Type header to application/json if not already set.

    Args:
        data (Union[Dict, List]): Data to be serialized to JSON. Defaults to empty dict.
        status_code (int): HTTP status code. Defaults to 200.
        headers (Dict[str, str]): HTTP response headers. Defaults to empty dict.

    Raises:
        BadSendResponse: If status_code is not an integer or headers is not a dictionary.
    """
    if CaseInsensitiveDict(**headers).get("Content-Type") is None:
        headers["Content-Type"] = "application/json"

    send_response(serialize(data), status_code, headers)
