from typing import Dict, List, Tuple, Union

from abstra_internals.controllers.sdk_context import SDKContextStore
from abstra_internals.interface.sdk.user_exceptions import BadSendResponse
from abstra_internals.utils import serialize
from abstra_internals.utils.insensitive_dict import CaseInsensitiveDict


def get_raw_request() -> Tuple[str, Dict[str, str], Dict[str, str]]:
    return SDKContextStore.get_by_thread().hook_sdk.get_raw_request()


def get_request() -> Tuple[Union[str, List, Dict], Dict[str, str], Dict[str, str]]:
    return SDKContextStore.get_by_thread().hook_sdk.get_request()


def send_response(body="", status_code=200, headers={}) -> None:
    if not isinstance(body, str):
        body = serialize(body)

    if not isinstance(status_code, int):
        raise BadSendResponse("Status code must be an integer.")

    if not isinstance(headers, dict):
        raise BadSendResponse("Headers must be a dictionary.")

    SDKContextStore.get_by_thread().hook_sdk.set_response(status_code, body, headers)


def send_json(data={}, status_code=200, headers={}):
    if CaseInsensitiveDict(**headers).get("Content-Type") is None:
        headers["Content-Type"] = "application/json"

    send_response(serialize(data), status_code, headers)
