from importlib.metadata import PackageNotFoundError, distribution

from packaging.version import Version


def get_local_package_version(package_name="abstra"):
    try:
        return parse_version(distribution(package_name).version)
    except PackageNotFoundError:
        raise


def parse_version(version: str):
    return Version(version)
