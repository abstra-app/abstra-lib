import pathlib, json

abstraignore = (pathlib.Path(__file__).parent / "abstraignore").read_text()
new_form_code = (pathlib.Path(__file__).parent / "new_form.py").read_text()
new_hook_code = (pathlib.Path(__file__).parent / "new_hook.py").read_text()
new_job_code = (pathlib.Path(__file__).parent / "new_job.py").read_text()
new_dash_code = (pathlib.Path(__file__).parent / "new_dash.py").read_text()
new_script_code = (pathlib.Path(__file__).parent / "new_script.py").read_text()
new_dash_layout = json.load(
    (pathlib.Path(__file__).parent / "new_dash_layout.json").open()
)
vscode_launch_json = json.load(
    (pathlib.Path(__file__).parent / "vscode_launch.json").open()
)


def create_abstraignore(dir: pathlib.Path):
    (dir / ".abstraignore").write_text(abstraignore, encoding="utf-8")
