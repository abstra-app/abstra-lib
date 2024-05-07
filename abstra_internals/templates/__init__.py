import json
import pathlib

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
