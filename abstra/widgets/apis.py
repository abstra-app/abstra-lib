import io, os, tempfile, shutil
from typing import Union
from werkzeug.datastructures import FileStorage
from uuid import uuid4 as uuid


def public_path(name: str):
    return "/_files/" + name


def internal_path(name: str):
    return os.path.join(tempfile.gettempdir(), "_uploaded_files", name)


def upload_file(file: Union[FileStorage, io.BufferedReader, io.TextIOWrapper]):
    if isinstance(file, io.BufferedReader) or isinstance(file, io.TextIOWrapper):
        name = str(uuid())
        path = internal_path(name)
        shutil.copy(file.name, path)
        return public_path(name)

    elif isinstance(file, FileStorage):
        directory = tempfile.gettempdir()
        name = str(uuid())
        path = os.path.join(directory, "_uploaded_files", name)
        if not os.path.exists(os.path.join(directory, "_uploaded_files")):
            os.mkdir(os.path.join(directory, "_uploaded_files"))
        file.save(path)

        return public_path(name)

    raise ValueError(f"Cannot upload {type(file)}")
