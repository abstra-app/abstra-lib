import pathlib, json
from pkg_resources import get_distribution

abstraignore = (pathlib.Path(__file__).parent / "abstraignore").read_text()
new_form_code = (pathlib.Path(__file__).parent / "new_form.py").read_text()
new_hook_code = (pathlib.Path(__file__).parent / "new_hook.py").read_text()
new_job_code = (pathlib.Path(__file__).parent / "new_job.py").read_text()
new_script_code = (pathlib.Path(__file__).parent / "new_script.py").read_text()
vscode_launch_json = json.load(
    (pathlib.Path(__file__).parent / "vscode_launch.json").open()
)


def ensure_abstraignore(dir: pathlib.Path):
    path = dir / ".abstraignore"
    if not path.exists():
        path.write_text(abstraignore, encoding="utf-8")
