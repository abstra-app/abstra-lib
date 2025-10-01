import json
import pathlib

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
abstra_logo = (pathlib.Path(__file__).parent / "abstra_logo.png").read_bytes()
abstra_favicon = (pathlib.Path(__file__).parent / "abstra_favicon.ico").read_bytes()


def ensure_gitignore(dir: pathlib.Path):
    path = dir / ".gitignore"
    if not path.exists():
        path.write_text(gitignore, encoding="utf-8")


def ensure_dotenv(dir: pathlib.Path):
    path = dir / ".env"
    if not path.exists():
        path.write_text("", encoding="utf-8")
