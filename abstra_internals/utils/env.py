import os

from .packages import get_local_package_version


def is_test_env():
    return "PYTEST_CURRENT_TEST" in os.environ


def is_dev_env() -> bool:
    dev_versions = ["0.0.0"]

    return str(get_local_package_version()) in dev_versions
