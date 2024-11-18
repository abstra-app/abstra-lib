import ast
import io
import os
import pathlib
import re
import shutil
import tempfile
import typing as t
import uuid
import warnings
from pathlib import Path
from typing import Generator, Optional, Union

from werkzeug.datastructures import FileStorage

from abstra_internals.utils.dot_abstra import DOT_ABSTRA_FOLDER_NAME

FILE_TYPES = {
    "txt": {
        "mime": "text/plain",
        "extensions": ["txt"],
    },
    "md": {
        "mime": "text/markdown",
        "extensions": ["md"],
    },
    "csv": {
        "mime": "text/csv",
        "extensions": ["csv"],
    },
    "html": {
        "mime": "text/html",
        "extensions": ["html"],
    },
    "css": {
        "mime": "text/css",
        "extensions": ["css"],
    },
    "py": {
        "mime": "text/x-python-script",
        "extensions": ["py"],
    },
    "png": {
        "mime": "image/png",
        "extensions": ["png"],
    },
    "jpg": {
        "mime": "image/jpeg",
        "extensions": ["jpg", "jpeg"],
    },
    "jpeg": {
        "mime": "image/jpeg",
        "extensions": ["jpg", "jpeg"],
    },
    "mp3": {
        "mime": "audio/mp3",
        "extensions": ["mp3"],
    },
    "wav": {
        "mime": "audio/wav",
        "extensions": ["wav"],
    },
    "flac": {
        "mime": "audio/flac",
        "extensions": ["flac"],
    },
    "aac": {
        "mime": "audio/aac",
        "extensions": ["aac"],
    },
    "ogg": {
        "mime": "audio/ogg",
        "extensions": ["ogg"],
    },
    "wma": {
        "mime": "audio/x-ms-wma",
        "extensions": ["wma"],
    },
    "avi": {
        "mime": "video/avi",
        "extensions": ["avi"],
    },
    "mp4": {
        "mime": "video/mp4",
        "extensions": ["mp4"],
    },
    "mkv": {
        "mime": "video/x-matroska",
        "extensions": ["mkv"],
    },
    "mov": {
        "mime": "video/quicktime",
        "extensions": ["mov"],
    },
    "webm": {
        "mime": "video/webm",
        "extensions": ["webm"],
    },
    "flv": {
        "mime": "video/x-flv",
        "extensions": ["flv"],
    },
    "wmv": {
        "mime": "video/x-ms-wmv",
        "extensions": ["wmv"],
    },
    "m4v": {
        "mime": "video/x-m4v",
        "extensions": ["m4v"],
    },
    "zip": {
        "mime": "application/zip",
        "extensions": ["zip"],
    },
    "rar": {
        "mime": "application/vnd.rar",
        "extensions": ["rar"],
    },
    "7z": {
        "mime": "application/x-7z-compressed",
        "extensions": ["7z"],
    },
    "tar": {
        "mime": "application/x-tar",
        "extensions": ["tar"],
    },
    "gzip": {
        "mime": "application/gzip",
        "extensions": ["gzip"],
    },
    "js": {
        "mime": "application/javascript",
        "extensions": ["js"],
    },
    "ts": {
        "mime": "application/typescript",
        "extensions": ["ts"],
    },
    "json": {
        "mime": "application/json",
        "extensions": ["json"],
    },
    "xml": {
        "mime": "application/xml",
        "extensions": ["xml"],
    },
    "yaml": {
        "mime": "application/x-yaml",
        "extensions": ["yaml"],
    },
    "toml": {
        "mime": "application/toml",
        "extensions": ["toml"],
    },
    "pdf": {
        "mime": "application/pdf",
        "extensions": ["pdf"],
    },
    "xls": {
        "mime": "application/vnd.ms-excel",
        "extensions": ["xls"],
    },
    "doc": {
        "mime": "application/msword",
        "extensions": ["doc"],
    },
    "ppt": {
        "mime": "application/vnd.ms-powerpoint",
        "extensions": ["ppt"],
    },
    "docx": {
        "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "extensions": ["docx"],
    },
    "pptx": {
        "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "extensions": ["pptx"],
    },
    "image": {
        "mime": "image/*",
        "extensions": ["png", "jpg", "jpeg"],
    },
    "video": {
        "mime": "video/*",
        "extensions": ["avi", "mp4", "mkv", "mov", "webm", "flv", "wmv", "m4v"],
    },
    "audio": {
        "mime": "audio/*",
        "extensions": ["mp3", "wav", "flac", "aac", "ogg", "wma"],
    },
    "text": {
        "mime": "text/*",
        "extensions": ["txt", "md", "csv", "html", "css", "py"],
    },
    "application": {
        "mime": "application/*",
        "extensions": [
            "zip",
            "rar",
            "7z",
            "tar",
            "gzip",
            "js",
            "ts",
            "json",
            "xml",
            "yaml",
            "toml",
            "pdf",
            "xls",
            "doc",
            "ppt",
            "docx",
            "pptx",
        ],
    },
    "unknown": {
        "mime": "*",
        "extensions": [
            "txt",
            "md",
            "csv",
            "html",
            "css",
            "py",
            "png",
            "jpg",
            "jpeg",
            "mp3",
            "wav",
            "flac",
            "aac",
            "ogg",
            "wma",
            "avi",
            "mp4",
            "mkv",
            "mov",
            "webm",
            "flv",
            "wmv",
            "m4v",
            "zip",
            "rar",
            "7z",
            "tar",
            "gzip",
            "js",
            "ts",
            "json",
            "xml",
            "yaml",
            "toml",
            "pdf",
            "xls",
            "doc",
            "ppt",
            "docx",
            "pptx",
            "image",
            "video",
            "audio",
            "text",
            "application",
            "unknown",
            "zip",
            "rar",
            "7z",
            "tar",
            "gzip",
            "js",
            "ts",
            "json",
            "xml",
            "yaml",
            "toml",
            "pdf",
            "xls",
            "doc",
            "ppt",
            "docx",
            "pptx",
        ],
    },
}


GIT_FOLDER = ".git"
ABSTRA_IGNORE = ".abstraignore"
ABSTRA_TABLES_FILE = "abstra-tables.json"


def is_relative_path(path: str) -> bool:
    return not path.startswith("<") and not path.startswith("/")


def make_ignore_regex(path: str) -> re.Pattern:
    posix_path = path.replace("\\", "/")

    ignore_regex = r"^" + re.escape(posix_path).replace(r"\*", ".*").replace(r"\?", ".")

    if not posix_path.endswith("/"):
        ignore_regex += r"(/|$)"

    return re.compile(ignore_regex)


def get_ignore_files(dir: Path):
    GITIGNORE = dir.joinpath(".gitignore")
    IGNOREFILE = dir.joinpath(ABSTRA_IGNORE)
    git_path = dir.joinpath(GIT_FOLDER)
    abstra_path = dir.joinpath(DOT_ABSTRA_FOLDER_NAME)
    ignored = [IGNOREFILE.name, GITIGNORE.name, abstra_path.name, git_path.name]

    if IGNOREFILE.exists():
        with open(IGNOREFILE, "r", encoding="utf-8"):
            ignored.extend(IGNOREFILE.read_text(encoding="utf-8").split("\n"))
    elif GITIGNORE.exists():
        ignored.extend(GITIGNORE.read_text(encoding="utf-8").split("\n"))
    return [
        make_ignore_regex(p)
        for p in ignored
        if p and not p.startswith("#") and not p.startswith("!")
    ]


def should_ignore(ignored_paths, _path: Path):
    path = _path.as_posix()
    for ignored_path in ignored_paths:
        if ignored_path.search(path):
            return True
    return False


def files_from_directory(directory: Path):
    ignored = [*get_ignore_files(directory), *get_ignore_files(Path.cwd())]
    paths = filter(
        lambda p: p.is_file() and not should_ignore(ignored, p.relative_to(directory)),
        Path(directory).rglob("*"),
    )
    return list(paths)


def path2module(path: Path) -> str:
    if path.suffix == ".py":
        path = path.with_suffix("")
    if path.name == "__init__":
        path = path.parent
    return str(path).replace("/", ".").replace("\\", ".")


def module2path(module: str, package: bool) -> Path:
    path_list = module.split(".")

    # Handle trailing dots
    is_first_trailing_dot = True
    for index, path in enumerate(path_list):
        if path.__len__() == 0:
            if is_first_trailing_dot:
                path_list[index] = "."
                is_first_trailing_dot = False
            else:
                path_list[index] = ".."
        else:
            break

    if package:
        path_list.append("__init__.py")
    else:
        path_list[-1] += ".py"
    return Path(*path_list)


def _get_file_path_from_absolute_module(module: str) -> Union[Path, None]:
    module_path = Path(module2path(module, package=False))
    if module_path.is_file():
        return module_path

    package_path = Path(module2path(module, package=True))
    if package_path.is_file():
        return package_path

    return None


def _get_file_path_from_relative_module(
    module: str, parent_path: Path
) -> Union[Path, None]:
    module_path = parent_path / module2path(module, package=False)
    resolved_module_path = module_path.resolve().relative_to(os.getcwd())

    if resolved_module_path.is_file():
        return resolved_module_path

    package_path = parent_path / module2path(module, package=True)
    resolved_package_path = package_path.resolve().relative_to(os.getcwd())

    if resolved_package_path.is_file():
        return resolved_package_path

    return None


def _get_file_path_depending_on_node_level(
    node_level: int, module: str, path_parent: Path
) -> Optional[Path]:
    return (
        _get_file_path_from_relative_module(module, path_parent)
        if node_level > 0
        else _get_file_path_from_absolute_module(module)
    )


def _get_file_path(
    node_level: int,
    module: Optional[str],
    alias_name: str,
    path_parent: Path,
) -> Optional[Path]:
    prefix = "." * (node_level)
    has_module = module is not None and module != ""

    # Check if it's importing a file
    module_name = f"{module}." if has_module else ""
    relative_module = f"{prefix}{module_name}{alias_name}"
    file_path = _get_file_path_depending_on_node_level(
        node_level, relative_module, path_parent
    )

    # Check if it's importing an entity from a file
    if file_path is None:
        relative_module = f"{prefix}{module if has_module else ''}"
        file_path = _get_file_path_depending_on_node_level(
            node_level, relative_module, path_parent
        )

    return file_path


def silent_traverse_code(
    path: Path, raise_on_syntax_errors=False
) -> Generator[Path, None, None]:
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        yield from traverse_code(path, raise_on_syntax_errors)


def traverse_code(
    path: Path, raise_on_syntax_errors=False
) -> Generator[Path, None, None]:
    yield path

    try:
        code = path.read_text(encoding="utf-8")
        parsed = ast.parse(code)

        for node in parsed.body:
            if isinstance(node, ast.Import):
                for alias in node.names:
                    file_path = _get_file_path_from_absolute_module(alias.name)

                    if file_path is not None:
                        yield from traverse_code(file_path)

            if isinstance(node, ast.ImportFrom):
                for alias in node.names:
                    file_path = _get_file_path(
                        node.level, node.module, alias.name, path.parent
                    )

                    if file_path is not None:
                        yield from traverse_code(file_path)

    except Exception as e:
        if raise_on_syntax_errors and isinstance(e, SyntaxError):
            raise e


def get_tmp_upload_dir():
    uploaded_files_dir = Path(tempfile.gettempdir(), "_uploaded_files")
    uploaded_files_dir.mkdir(exist_ok=True)
    return uploaded_files_dir


def get_random_filepath(name=None):
    if name is None:
        name = str(uuid.uuid4())
    else:
        name = str(uuid.uuid4()) + "/" + Path(name).name
    path = get_tmp_upload_dir() / name
    path.parent.mkdir(exist_ok=True)
    return name, path


def upload_file(file: t.Union[str, FileStorage, io.IOBase, pathlib.Path]):
    public_path = lambda name: f"/_files/{name}"  # noqa: E731

    if isinstance(file, str):
        if file.startswith("http") or file.startswith("data:"):
            return file

        name, path = get_random_filepath(file)
        shutil.copy(file, path)
        return public_path(name)

    if isinstance(file, (io.BufferedReader, io.TextIOWrapper)):
        # TODO: use hasattr(file, "name")
        name, path = get_random_filepath(file.name)
        shutil.copy(file.name, path)
        return public_path(name)

    if isinstance(file, FileStorage):
        name, path = get_random_filepath(file.filename)
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


CONFLICTING_STATIC_PATHS = [
    # Player routes
    "oidc-login-callback",
    "oidc-logout-callback",
    "login",
    "threads",
]

CONFLICTING_DYNAMIC_PATHS = [
    # Player routes
    "error/",
    "_player/",
    "form/",
    "forms/",
    "hook/",
    "hooks/",
    # Editor routes
    "_editor/",
]


def is_path_in_conflict(path: str):
    return path in CONFLICTING_STATIC_PATHS or any(
        path.startswith(p) for p in CONFLICTING_DYNAMIC_PATHS
    )


def generate_conflictless_path(path: str):
    if is_path_in_conflict(path):
        random_suffix = str(uuid.uuid4())[:8]
        return f"{path}-{random_suffix}"
    else:
        return path


def extension_to_mime(extension: str) -> str:
    extension_without_dot = extension.replace(".", "")
    if extension_without_dot in FILE_TYPES:
        return FILE_TYPES[extension_without_dot]["mime"]
    return FILE_TYPES["unknown"]["mime"]
