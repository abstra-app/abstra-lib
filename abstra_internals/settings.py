import os
import pathlib
import sys
import typing

from abstra_internals.environment import DEFAULT_PORT
from abstra_internals.utils import get_free_port


class SettingsController(object):
    _instance: typing.Optional["SettingsController"] = None
    _root_path: typing.Optional[pathlib.Path] = None
    _server_port: typing.Optional[int] = None

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
    def set_server_port(server_port: typing.Union[int, str, None]):
        port = 3000
        if isinstance(server_port, int):
            port = server_port
        elif isinstance(server_port, str):
            port = int(server_port)
        elif DEFAULT_PORT:
            port = int(DEFAULT_PORT)

        free_port = get_free_port(port)
        SettingsController._server_port = free_port

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


Settings = SettingsController()
