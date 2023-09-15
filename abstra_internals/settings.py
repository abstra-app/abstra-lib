import typing, pathlib, os, sys


class SettingsController(object):
    _instance: typing.Optional["SettingsController"] = None
    _root_path: typing.Optional[pathlib.Path] = None

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

    @property
    def root_path(self) -> pathlib.Path:
        if SettingsController._root_path is None:
            raise Exception("You must set the root path before using it")
        return SettingsController._root_path


Settings = SettingsController()
