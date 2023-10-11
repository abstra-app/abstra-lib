import io, tempfile, shutil, uuid, typing
from werkzeug.datastructures import FileStorage
from pathlib import Path


def public_path(name: str):
    return "/_files/" + name


def ensure_uploaded_files_dir():
    uploaded_files_dir = Path(tempfile.gettempdir(), "_uploaded_files")
    uploaded_files_dir.mkdir(exist_ok=True)
    return uploaded_files_dir


def internal_path(name: str):
    uploaded_files_dir = ensure_uploaded_files_dir()
    return uploaded_files_dir.joinpath(name)


def get_random_filepath(name=None):
    if name is None:
        name = str(uuid.uuid4())
    else:
        name = str(uuid.uuid4()) + "/" + Path(name).name
    path = internal_path(name)
    path.parent.mkdir(exist_ok=True)
    return name, path


def upload_file(
    file: typing.Union[FileStorage, io.BufferedReader, io.TextIOWrapper, Path]
):
    name, path = get_random_filepath(file.name)

    if isinstance(file, io.BufferedReader) or isinstance(file, io.TextIOWrapper):
        shutil.copy(file.name, path)
        return public_path(name)

    if isinstance(file, FileStorage):
        file.save(path)
        return public_path(name)

    if isinstance(file, Path):
        shutil.copy(file, path)
        return public_path(name)

    raise ValueError(f"Cannot upload {type(file)}")
