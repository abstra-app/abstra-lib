from os.path import sep
from pathlib import Path


class NotSubpathError(Exception):
    def __init__(self) -> None:
        super().__init__("Path is not a subpath of the base path")


class NotAbsoluteBasePathError(Exception):
    def __init__(self) -> None:
        super().__init__("Base path must be absolute if path is absolute")


def get_relative_path(path: Path, base_path: Path) -> Path:
    if path.is_absolute() and base_path.is_absolute():
        if str(path).startswith(str(base_path)):
            relative_part = str(path).replace(str(base_path) + sep, "")
            return Path(relative_part)
        else:
            raise NotSubpathError()
    elif path.is_absolute() and not base_path.is_absolute():
        raise NotAbsoluteBasePathError()
    elif not path.is_absolute() and base_path.is_absolute():
        return path
    else:
        path_str = str(path)
        base_path_str = str(base_path)
        if path_str.startswith(base_path_str):
            relative_part = path_str.replace(base_path_str + sep, "")
            return Path(relative_part)
        else:
            raise NotSubpathError()
