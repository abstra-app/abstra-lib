import os, json, tempfile
from pathlib import Path

abstra_json = {"version": "0.2"}


def rm_tree(pth: Path):
    pth = Path(pth)
    for child in pth.glob("*"):
        if child.is_file():
            child.unlink()
        else:
            rm_tree(child)
    pth.rmdir()


def init_dir():
    path = Path(tempfile.mkdtemp())
    abstra_json_path = path / "abstra.json"
    path.mkdir(exist_ok=True)
    if not abstra_json_path.exists():
        abstra_json_path.write_text(json.dumps(abstra_json))
    os.environ["ABSTRA_DATABASE_URL"] = str(Path(path, "db.sqlite3"))
    os.chdir(path)
    return path


def clear_dir(path: Path):
    rm_tree(path)
