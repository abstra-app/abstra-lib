import shutil
from pathlib import Path
from typing import Dict, Optional, Union
from uuid import uuid4

from abstra_internals.constants import (
    get_persistent_dir,
    get_project_url,
    get_public_dir,
)
from abstra_internals.controllers.sdk import FormSDKController
from abstra_internals.jwt_auth import UserClaims
from abstra_internals.settings import Settings


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


def create_public_link(path: Union[str, Path]) -> str:
    if isinstance(path, str):
        path = Settings.root_path / path

    if not path.exists():
        raise Exception("path does not exist")

    new_path = f"{uuid4()}/{path.name}"
    public_path = get_public_dir() / new_path
    public_path.parent.mkdir(parents=True, exist_ok=True)

    shutil.copy(path, public_path)
    return f"{get_project_url()}/_public/{new_path}"


__all__ = [
    "get_user",
    "redirect",
    "execute_js",
    "get_query_params",
    "get_project_url",
    "get_persistent_dir",
    "get_public_dir",
    "create_public_link",
]
