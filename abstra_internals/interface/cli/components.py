import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Optional

from abstra_internals.interface.cli.dir import select_dir
from abstra_internals.repositories.project import json_migrations
from abstra_internals.settings import Settings, SettingsController
from abstra_internals.utils.git import download_github_repo, get_default_branch


def install(github_url: str, root_dir: Optional[str] = None):
    SettingsController.set_root_path(root_dir or select_dir())
    root_path = Settings.root_path
    components_dir = root_path / "abstra_components"

    repo_url = github_url.rstrip("/")
    folder_name = repo_url.split("/")[-1]
    target_folder = components_dir / folder_name

    try:
        components_dir.mkdir(exist_ok=True)

        default_branch = get_default_branch(repo_url)

        download_github_repo(
            repo_url=repo_url,
            extract_path=components_dir,
            branch_name=default_branch,
            target_folder_name=folder_name,
        )

        requirements_path = target_folder / "requirements.txt"
        if requirements_path.exists():
            subprocess.check_call(
                [
                    sys.executable,
                    "-m",
                    "pip",
                    "install",
                    "-r",
                    str(requirements_path),
                ]
            )

        migrate_abstra_json(target_folder / "abstra.json")

        print(f"Installed {folder_name} successfully")
    except Exception as e:
        if target_folder.exists():
            shutil.rmtree(target_folder)
        if components_dir.exists() and not any(components_dir.iterdir()):
            shutil.rmtree(components_dir)
        print(f"Failed to install {folder_name}: {e}")
        raise


def uninstall(folder_name: str, root_dir: Optional[str] = None):
    SettingsController.set_root_path(root_dir or select_dir())
    root_path = Settings.root_path
    components_dir = root_path / "abstra_components"
    target_folder = components_dir / folder_name

    try:
        if not target_folder.exists():
            print(f"Module {folder_name} not found")
            return

        shutil.rmtree(target_folder)
        print(f"Uninstalled {folder_name} successfully")

        if components_dir.exists() and not any(components_dir.iterdir()):
            shutil.rmtree(components_dir)

    except Exception as e:
        print(f"Failed to uninstall {folder_name}: {e}")
        raise


def migrate_abstra_json(abstra_json_path: Path):
    if not abstra_json_path.exists():
        return

    data = json.loads(abstra_json_path.read_text(encoding="utf-8"))
    assert isinstance(data, dict)

    initial_version = data.get("version")

    migrated_data = json_migrations.migrate(
        data,
        Settings.root_path,
        verbose=True,
    )

    if migrated_data["version"] != initial_version:
        temp_file = Path(tempfile.mkdtemp()) / "abstra.json"

        with temp_file.open("w") as f:
            json.dump(migrated_data, f, indent=2, sort_keys=True)

        shutil.move(str(temp_file), abstra_json_path)
        Path.rmdir(temp_file.parent)
