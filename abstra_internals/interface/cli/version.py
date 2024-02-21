import pkg_resources, requests
from enum import Enum

from ...settings import Settings
from ...utils import packages as pkg_utils
from ...utils.environment import IS_PRODUCTION

VersionStatus = Enum(
    "VersionStatus", ["UP_TO_DATE", "OUT_OF_DATE", "LATEST_IS_OUTDATED", "UNKNOWN"]
)


class PackageVersionManager:
    def __init__(self, package_name: str) -> None:
        self.package_name = package_name
        self.package_display_name = (
            package_name if package_name != "abstra" else "Abstra Editor"
        )
        self.current_local_version = pkg_utils.get_local_package_version(package_name)
        self.cached_latest_version = pkg_utils.get_cached_latest_version(
            Settings.root_path, package_name
        )

    def get_version_status(self) -> VersionStatus:
        if IS_PRODUCTION:
            return VersionStatus.UNKNOWN

        try:
            if self.current_local_version < self.cached_latest_version:
                return VersionStatus.OUT_OF_DATE

            if self.current_local_version > self.cached_latest_version:
                pkg_utils.update_cached_latest_version(
                    Settings.root_path, self.current_local_version, self.package_name
                )
                return VersionStatus.LATEST_IS_OUTDATED

            return VersionStatus.UP_TO_DATE

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
            return f"{self.package_display_name} is up to date (version {self.current_local_version}).\n"
        elif status == VersionStatus.OUT_OF_DATE:
            return f"A new version of {self.package_display_name} is available. Latest version is {self.cached_latest_version}, but you have {self.current_local_version}.\nPlease run 'pip install {self.package_name} --upgrade' to update.\n"
        else:
            return ""

    def print_status_message(self):
        print(self.get_status_message())


def check_latest_version(package_name="abstra"):
    package_version = PackageVersionManager(package_name)
    package_version.print_status_message()
