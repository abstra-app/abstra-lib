import io
import pathlib
import shutil
import tempfile
import typing as t
import uuid

from werkzeug.datastructures import FileStorage


def public_path(name: str):
    return "/_files/" + name


def ensure_uploaded_files_dir():
    uploaded_files_dir = pathlib.Path(tempfile.gettempdir(), "_uploaded_files")
    uploaded_files_dir.mkdir(exist_ok=True)
    return uploaded_files_dir


def internal_path(name: str):
    uploaded_files_dir = ensure_uploaded_files_dir()
    return uploaded_files_dir.joinpath(name)


def get_random_filepath(name=None):
    if name is None:
        name = str(uuid.uuid4())
    else:
        name = str(uuid.uuid4()) + "/" + pathlib.Path(name).name
    path = internal_path(name)
    path.parent.mkdir(exist_ok=True)
    return name, path


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
