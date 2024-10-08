import ast
import fnmatch
import os
import re
import tempfile
import uuid
import warnings
from pathlib import Path
from typing import Generator, Optional, Union

from abstra_internals.utils.dot_abstra import DOT_ABSTRA_FOLDER_NAME

GIT_FOLDER = ".git"
ABSTRA_IGNORE = ".abstraignore"
ABSTRA_TABLES_FILE = "abstra-tables.json"


def is_relative_path(path: str) -> bool:
    return not path.startswith("<") and not path.startswith("/")


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
        re.compile(fnmatch.translate(f"{p}*"))
        for p in ignored
        if p and not p.startswith("#") and not p.startswith("!")
    ]


def should_ignore(ignored_paths, _path: Path):
    path = str(_path)
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
