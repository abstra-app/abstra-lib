import ast
import fnmatch, re
import os
from pathlib import Path
from typing import Generator, Union


GIT_FOLDER = ".git"
ABSTRA_FOLDER = ".abstra"
ABSTRA_IGNORE = ".abstraignore"
CREDENTIALS_FILE = ".abstra/credentials"


def get_ignore_files(dir: Path):
    GITIGNORE = dir.joinpath(".gitignore")
    IGNOREFILE = dir.joinpath(ABSTRA_IGNORE)
    git_path = dir.joinpath(GIT_FOLDER)
    abstra_path = dir.joinpath(ABSTRA_FOLDER)
    ignored = [IGNOREFILE.name, GITIGNORE.name, abstra_path.name, git_path.name]

    if IGNOREFILE.exists():
        with open(IGNOREFILE, "r", encoding="utf-8") as f:
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
                prefix = "." * (node.level)
                module_name = f"{node.module}." if node.module is not None else ""

                for alias in node.names:
                    relative_module = f"{prefix}{module_name}{alias.name}"

                    file_path = (
                        _get_file_path_from_relative_module(
                            relative_module, path.parent
                        )
                        if node.level > 0
                        else _get_file_path_from_absolute_module(relative_module)
                    )

                    if file_path is not None:
                        yield from traverse_code(file_path)

    except Exception as e:
        if raise_on_syntax_errors and isinstance(e, SyntaxError):
            raise e
