import io, tempfile, shutil, uuid, typing
from pathlib import Path
from werkzeug.datastructures import FileStorage


def public_path(name: str):
    return "/_files/" + name


def ensure_uploaded_files_dir():
    uploaded_files_dir = Path(tempfile.gettempdir(), "_uploaded_files")
    uploaded_files_dir.mkdir(exist_ok=True)
    return uploaded_files_dir


def internal_path(name: str):
    uploaded_files_dir = ensure_uploaded_files_dir()
    return uploaded_files_dir.joinpath(name)


def get_random_filepath():
    name = str(uuid.uuid4())
    path = internal_path(name)
    return name, path


def upload_file(file: typing.Union[FileStorage, io.BufferedReader, io.TextIOWrapper]):
    name, path = get_random_filepath()

    if isinstance(file, io.BufferedReader) or isinstance(file, io.TextIOWrapper):
        shutil.copy(file.name, path)
        return public_path(name)

    if isinstance(file, FileStorage):
        file.save(path)
        return public_path(name)

    raise ValueError(f"Cannot upload {type(file)}")
