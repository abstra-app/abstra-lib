import pkg_resources
from packaging.version import Version


def get_local_package_version(package_name="abstra"):
    return parse_version(pkg_resources.get_distribution(package_name).version)


def parse_version(version: str):
    return Version(version)
