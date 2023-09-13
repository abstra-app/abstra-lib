import fnmatch, re
from pathlib import Path


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


def files_from_directory(directory):
    ignored = [*get_ignore_files(directory), *get_ignore_files(Path.cwd())]
    paths = filter(
        lambda p: p.is_file() and not should_ignore(ignored, p.relative_to(directory)),
        Path(directory).rglob("*"),
    )
    return list(paths)
