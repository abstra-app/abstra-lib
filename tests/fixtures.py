import os, json, tempfile, shutil
from pathlib import Path
import shutil

abstra_json = {"version": "0.2"}


def rm_tree(pth: Path):
    pth = Path(pth)
    if not pth.exists():
        return
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
    os.chdir(path)
    return path


def clear_dir(path: Path):
    os.chdir(path.parent)
    rm_tree(path)


def copy_dir(src, dst, symlinks=False, ignore=None):
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            shutil.copytree(s, d, symlinks, ignore)
        else:
            shutil.copy2(s, d)
