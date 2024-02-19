import json
from datetime import datetime
from pathlib import Path
from enum import Enum
import pkg_resources, requests
from ...utils.environment import IS_PRODUCTION
from ...utils import get_package_version


CACHED_VERSION_FILE = ".abstra/cached_versions"
EXPIRE_PERIOD = 60 * 60 * 4  # 4 hours
TIMEOUT = 5


VersionStatus = Enum(
    "VersionStatus", ["UP_TO_DATE", "OUT_OF_DATE", "LATEST_IS_OUTDATED", "UNKNOWN"]
)


class PackageVersionManager:
    def __init__(self, package_name: str) -> None:
        self.package_name = package_name
        self.package_display_name = (
            package_name if package_name != "abstra" else "Abstra Editor"
        )
        self.current_version = get_package_version(package_name)
        self.latest_version = self.get_latest_version()

    def get_latest_version(self) -> str:
        return _get_cached_latest_version(self.package_name)

    def get_version_status(self) -> VersionStatus:
        if IS_PRODUCTION:
            return VersionStatus.UNKNOWN

        try:
            if not isinstance(self.current_version, str):
                return VersionStatus.UNKNOWN

            version_status = compare_versions(self.current_version, self.latest_version)

            if version_status == VersionStatus.LATEST_IS_OUTDATED:
                _update_cached_latest_version(self.package_name, self.current_version)

            return version_status

        except pkg_resources.DistributionNotFound:
            print(f"{self.package_name} is not installed.\n")
            return VersionStatus.UNKNOWN

        except requests.exceptions.RequestException:
            print(
                f"Unable to fetch version information for {self.package_name} from PyPI.\n"
            )
            return VersionStatus.UNKNOWN

    def get_status_message(self) -> str:
        status = self.get_version_status()

        if (
            status == VersionStatus.UP_TO_DATE
            or status == VersionStatus.LATEST_IS_OUTDATED
        ):
            return f"{self.package_display_name} is up to date (version {self.current_version}).\n"
        elif status == VersionStatus.OUT_OF_DATE:
            return f"A new version of {self.package_display_name} is available. Latest version is {self.latest_version}, but you have {self.current_version}.\nPlease run 'pip install {self.package_name} --upgrade' to update.\n"
        else:
            return ""

    def print_status_message(self):
        print(self.get_status_message())


def check_latest_version(package_name="abstra"):
    package_version = PackageVersionManager(package_name)
    package_version.print_status_message()


def _get_cached_latest_version(package_name="abstra") -> str:
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

    _update_cached_latest_version(package_name, latest_version)

    return latest_version


def _update_cached_latest_version(package_name, latest_version: str):
    cached_file = Path(CACHED_VERSION_FILE) / f"{package_name}.json"

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


def compare_versions(current: str, latest: str) -> VersionStatus:
    current_version_array = current.split(".")
    latest_version_array = latest.split(".")

    if (len(current_version_array) != 3) or (len(latest_version_array) != 3):
        return VersionStatus.UNKNOWN

    for i in range(len(current_version_array)):
        if int(current_version_array[i]) > int(latest_version_array[i]):
            return VersionStatus.LATEST_IS_OUTDATED
        elif int(current_version_array[i]) < int(latest_version_array[i]):
            return VersionStatus.OUT_OF_DATE

    return VersionStatus.UP_TO_DATE
