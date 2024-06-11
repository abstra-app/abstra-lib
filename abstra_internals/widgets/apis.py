import io
import pathlib
import shutil
import typing as t

from werkzeug.datastructures import FileStorage

from abstra_internals.utils.file import get_random_filepath


def public_path(name: str):
    return "/_files/" + name


def upload_file(file: t.Union[FileStorage, io.IOBase, pathlib.Path]):
    if isinstance(file, (io.BufferedReader, io.TextIOWrapper)):
        # TODO: use hasattr(file, "name")
        name, path = get_random_filepath(file.name)
        shutil.copy(file.name, path)
        return public_path(name)

    if isinstance(file, FileStorage):
        name, path = get_random_filepath(file.name)
        file.save(path)
        return public_path(name)

    if isinstance(file, pathlib.Path):
        name, path = get_random_filepath(file.name)
        shutil.copy(file, path)
        return public_path(name)

    if isinstance(file, io.IOBase):
        name, path = get_random_filepath()
        with open(path, "wb") as f:
            shutil.copyfileobj(file, f)
        return public_path(name)

    raise ValueError(f"Cannot upload {type(file)}")
