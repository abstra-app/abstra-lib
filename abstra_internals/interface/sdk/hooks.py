from typing import Dict, List, Tuple, Union

from abstra_internals.controllers.sdk import HookSDKController
from abstra_internals.utils import serialize


def get_raw_request() -> Tuple[str, Dict[str, str], Dict[str, str]]:
    sdk_controller = HookSDKController()
    return sdk_controller.get_raw_request()


def get_request() -> Tuple[Union[str, List, Dict], Dict[str, str], Dict[str, str]]:
    sdk_controller = HookSDKController()
    return sdk_controller.get_request()


def send_response(body="", status_code=200, headers={}) -> None:
    sdk_controller = HookSDKController()
    sdk_controller.set_response(status_code, body, headers)


def send_json(data={}, status_code=200, headers={}):
    send_response(serialize(data), status_code, headers)
