import webbrowser
from typing import List

from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.utils.platform import is_windows
from abstra_internals.version import PackageVersionManager, VersionStatus

RELEASE_NOTES_URL = "https://github.com/abstra-app/abstra-lib/releases"


def _update_lib_version():
    import os
    import subprocess
    import sys

    try:
        subprocess.check_call(
            [sys.executable, "-m", "pip", "install", "--upgrade", "abstra"]
        )

        os.execv(sys.executable, [sys.executable] + sys.argv)
    except Exception as e:
        print(f"Failed to update Abstra: {e}")


class UpdateAbstraVersion(LinterFix):
    def __init__(self) -> None:
        self.label = "Update Abstra Editor version"

    def fix(self):
        _update_lib_version()


class OpenChangeLog(LinterFix):
    def __init__(self) -> None:
        self.label = "Open the release notes"

    def fix(self):
        webbrowser.open(RELEASE_NOTES_URL)


class NewVersionOfAbstraAvailableFound(LinterIssue):
    def __init__(self) -> None:
        package_version = PackageVersionManager("abstra")
        self.label = f"Latest version is {package_version.cached_latest_version}, but you have {package_version.current_local_version}."
        if is_windows():
            self.fixes = [OpenChangeLog()]
        else:
            self.fixes = [UpdateAbstraVersion()]


class NewVersionOfAbstraAvailable(LinterRule):
    label = "A new version of Abstra Editor is available"
    type = "info"

    def find_issues(self) -> List[LinterIssue]:
        package_version = PackageVersionManager("abstra")
        version_status = package_version.get_version_status()
        is_there_a_new_version = version_status == VersionStatus.OUT_OF_DATE

        if is_there_a_new_version is True:
            return [NewVersionOfAbstraAvailableFound()]
        else:
            return []
