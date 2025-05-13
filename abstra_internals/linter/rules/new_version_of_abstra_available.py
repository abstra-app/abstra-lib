import webbrowser
from typing import List

from abstra_internals.linter.linter import LinterFix, LinterIssue, LinterRule
from abstra_internals.version import PackageVersionManager, VersionStatus

RELEASE_NOTES_URL = "https://github.com/abstra-app/abstra-lib/releases"


class OpenChangeLog(LinterFix):
    def __init__(self) -> None:
        self.label = "Open the release notes"

    def fix(self):
        webbrowser.open(RELEASE_NOTES_URL)


class NewVersionOfAbstraAvailableFound(LinterIssue):
    def __init__(self) -> None:
        package_version = PackageVersionManager("abstra")
        self.label = f"Latest version is {package_version.cached_latest_version}, but you have {package_version.current_local_version}."
        self.fixes = [OpenChangeLog()]


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
