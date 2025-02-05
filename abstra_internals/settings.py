import os
import pathlib
import sys
import typing

from abstra_internals.environment import DEFAULT_PORT, PROJECT_URL
from abstra_internals.utils import get_free_port


class SettingsController(object):
    _instance: typing.Optional["SettingsController"] = None
    _root_path: typing.Optional[pathlib.Path] = None
    _server_port: typing.Optional[int] = None
    _public_url: typing.Optional[str] = PROJECT_URL

    def __new__(cls):
        if not cls._instance:
            cls._instance = super(SettingsController, cls).__new__(cls)
        return cls._instance

    @staticmethod
    def set_root_path(root_path_str: str):
        root_path = pathlib.Path(root_path_str).absolute()
        root_path.mkdir(exist_ok=True, parents=True)
        os.chdir(root_path)

        if root_path not in sys.path:
            sys.path.append(str(root_path))

        SettingsController._root_path = root_path

    @staticmethod
    def set_server_port(server_port: typing.Union[int, str, None], force=False):
        port = 3000
        if isinstance(server_port, int):
            port = server_port
        elif isinstance(server_port, str):
            port = int(server_port)
        elif DEFAULT_PORT:
            port = int(DEFAULT_PORT)

        if not force:
            port = get_free_port(port)

        SettingsController._server_port = port

    @staticmethod
    def set_public_url(public_url: str):
        SettingsController._public_url = public_url

    @property
    def root_path(self) -> pathlib.Path:
        if SettingsController._root_path is None:
            raise Exception("You must set the root path before using it")
        return SettingsController._root_path

    @property
    def server_port(self) -> int:
        if SettingsController._server_port is None:
            raise Exception("You must set the server before using it")
        return SettingsController._server_port

    def has_public_url(self) -> bool:
        return SettingsController._public_url is not None

    @property
    def public_url(self) -> str:
        if SettingsController._public_url is None:
            raise Exception("You must set the public url before using it")
        return SettingsController._public_url


Settings = SettingsController()
