from typing import Dict, Optional, Union

from abstra_internals.constants import get_persistent_dir, get_project_url
from abstra_internals.controllers.sdk import FormSDKController
from abstra_internals.jwt_auth import UserClaims


def get_user(refresh: bool = False) -> Union[UserClaims, None]:
    sdk_controller = FormSDKController()
    return sdk_controller.get_user(force_refresh=refresh)


def execute_js(code: str, context: dict = {}):
    sdk_controller = FormSDKController()
    return sdk_controller.execute_js(code, context)


def redirect(url: str, query_params: Optional[dict] = None) -> None:
    sdk_controller = FormSDKController()
    sdk_controller.redirect(url, query_params)


def get_query_params() -> Dict[str, str]:
    sdk_controller = FormSDKController()
    return sdk_controller.get_query_params()


__all__ = [
    "get_user",
    "get_query_params",
    "redirect",
    "execute_js",
    "get_persistent_dir",
    "get_project_url",
]
