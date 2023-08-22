import pathlib


def resolve_cwd(root: pathlib.Path):
    cwd = pathlib.Path.cwd()
    return (cwd / root).resolve()
