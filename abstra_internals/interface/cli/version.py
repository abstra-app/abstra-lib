import json
from datetime import datetime
from pathlib import Path
import pkg_resources, requests
from ...utils.environment import IS_PRODUCTION
from ...utils import get_package_version


CACHED_VERSION_FILE = ".abstra/cached_versions"
EXPIRE_PERIOD = 60 * 60 * 24  # 1 day
TIMEOUT = 5


def check_latest_version(package_name="abstra"):
    if IS_PRODUCTION:
        return

    try:
        current_version = get_package_version(package_name)
        latest_version = _get_cached_latest_version(package_name)

        if current_version == latest_version:
            print(f"Abstra Editor is up to date (version {current_version}).")
        else:
            print(
                f"A new version of Abstra Editor is available. Latest version is {latest_version}, but you have {current_version}."
            )
            print(f"Please run 'pip install {package_name} --upgrade' to update.")

    except pkg_resources.DistributionNotFound:
        print(f"{package_name} is not installed.")

    except requests.exceptions.RequestException:
        print(f"Unable to fetch version information for {package_name} from PyPI.")

    print("\n")


def _get_cached_latest_version(package_name="abstra"):
    cached_file = Path(CACHED_VERSION_FILE) / f"{package_name}.json"

    if cached_file.exists():
        try:
            with open(cached_file, "r") as f:
                cached_version = json.loads(f.readline())

            created_at = cached_version["created_at"]
            version = cached_version["version"]
        except:
            created_at = None
            version = None

        if (
            created_at is not None
            and isinstance(created_at, float)
            and version is not None
            and datetime.utcnow().timestamp() - created_at < EXPIRE_PERIOD
        ):
            return version

    response = requests.get(
        f"https://pypi.org/pypi/{package_name}/json", timeout=TIMEOUT
    )
    latest_version = response.json()["info"]["version"]

    if not cached_file.parent.exists():
        cached_file.parent.mkdir(parents=True)

    with open(cached_file, "w") as f:
        json.dump(
            {
                "version": latest_version,
                "created_at": datetime.utcnow().timestamp(),
            },
            f,
        )

    return latest_version
