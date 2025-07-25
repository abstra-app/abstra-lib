import json
from datetime import datetime
from pathlib import Path

import requests
from packaging.version import Version

from abstra_internals.consts.filepaths import CACHED_VERSIONS_DIR_PATH
from abstra_internals.logger import AbstraLogger

EXPIRE_PERIOD = 60 * 60 * 4  # 4 hours
TIMEOUT = 5


def get_cached_latest_version(root_path: Path, package_name="abstra"):
    cached_file = root_path / CACHED_VERSIONS_DIR_PATH / f"{package_name}.json"

    if cached_file.exists():
        try:
            with open(cached_file, "r", encoding="utf-8") as f:
                cached_version = json.loads(f.readline())

            created_at = cached_version["created_at"]
            version = cached_version["version"]
        except Exception as e:
            AbstraLogger.capture_exception(e)
            created_at = None
            version = None

        if (
            created_at is not None
            and isinstance(created_at, float)
            and version is not None
            and datetime.utcnow().timestamp() - created_at < EXPIRE_PERIOD
        ):
            return Version(version)

    try:
        response = requests.get(
            f"https://pypi.org/pypi/{package_name}/json", timeout=TIMEOUT
        )
        response.raise_for_status()
        latest_version = response.json()["info"]["version"]

        update_cached_latest_version(root_path, latest_version, package_name)

        return Version(latest_version)
    except Exception:
        return None


def update_cached_latest_version(
    root_path: Path, version: Version, package_name="abstra"
):
    cached_file = root_path / CACHED_VERSIONS_DIR_PATH / f"{package_name}.json"

    if not cached_file.parent.exists():
        cached_file.parent.mkdir(parents=True)

    with open(cached_file, "w", encoding="utf-8") as f:
        json.dump(
            {
                "version": str(version),
                "created_at": datetime.utcnow().timestamp(),
            },
            f,
        )
