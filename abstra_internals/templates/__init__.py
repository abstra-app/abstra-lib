import json
import os
import pathlib
import shutil

abstraignore = (pathlib.Path(__file__).parent / "abstraignore").read_text(
    encoding="utf-8"
)
gitignore = (pathlib.Path(__file__).parent / "gitignore").read_text(encoding="utf-8")
new_form_code = (pathlib.Path(__file__).parent / "new_form.py").read_text(
    encoding="utf-8"
)
new_hook_code = (pathlib.Path(__file__).parent / "new_hook.py").read_text(
    encoding="utf-8"
)
new_job_code = (pathlib.Path(__file__).parent / "new_job.py").read_text(
    encoding="utf-8"
)
new_script_code = (pathlib.Path(__file__).parent / "new_script.py").read_text(
    encoding="utf-8"
)
vscode_launch_json = json.load(
    (pathlib.Path(__file__).parent / "vscode_launch.json").open()
)


def ensure_abstraignore(dir: pathlib.Path):
    path = dir / ".abstraignore"
    if not path.exists():
        path.write_text(abstraignore, encoding="utf-8")


def ensure_gitignore(dir: pathlib.Path):
    path = dir / ".gitignore"
    if not path.exists():
        path.write_text(gitignore, encoding="utf-8")


def generate_getting_started_project(dir: pathlib.Path):
    source_dir = pathlib.Path(__file__).parent / "getting-started-project"

    for file_name in os.listdir(source_dir):
        source = os.path.join(source_dir, file_name)
        target = os.path.join(dir, file_name)
        if os.path.isdir(source):
            shutil.copytree(source, target)
        else:
            shutil.copy2(source, target)
