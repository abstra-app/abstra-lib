import os
import fnmatch
from pathlib import Path

from .main import remove_prefix


GIT_FOLDER = ".git/"
ABSTRA_FOLDER = ".abstra/"
ABSTRA_IGNORE = ".abstraignore"
CREDENTIALS_FILE = ".abstra/credentials"


def get_ignore_files(dir):
    GITIGNORE = os.path.join(dir, ".gitignore")
    IGNOREFILE = os.path.join(dir, ABSTRA_IGNORE)
    git_path = os.path.join(dir, GIT_FOLDER)
    abstra_path = os.path.join(dir, ABSTRA_FOLDER)
    ignored = [IGNOREFILE, GITIGNORE, abstra_path, git_path]

    if os.path.exists(IGNOREFILE):
        with open(IGNOREFILE, "r", encoding="utf-8") as f:
            ignored.extend([os.path.join(dir, f) for f in f.read().split("\n") if f])
    elif os.path.exists(GITIGNORE):
        with open(GITIGNORE, "r", encoding="utf-8") as f:
            ignored.extend([os.path.join(dir, f) for f in f.read().split("\n") if f])
    return ignored


def should_ignore(ignored_paths, _path):
    path = str(_path)
    for _ignored_path in ignored_paths:
        ignored_path = normalize_path(_ignored_path)
        if fnmatch.fnmatch(path, ignored_path):
            return True
        if fnmatch.fnmatch(path, ignored_path + "/*"):
            return True
    return False


def normalize_path(path):
    path = str(path)
    if path.endswith("/"):
        path = path[:-1]
    if path.startswith("./"):
        path = path[2:]
    return path


def files_from_directory(directory):
    ignored = [*get_ignore_files(directory), *get_ignore_files(os.getcwd())]
    paths = Path(directory).rglob("*")
    paths = [
        path for path in paths if path.is_file() and not should_ignore(ignored, path)
    ]
    return paths


def remove_filepath_prefix(filepath, prefix):
    return remove_prefix(normalize_path(filepath), normalize_path(prefix) + "/")
