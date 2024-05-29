import sys
from typing import Literal

import pkg_resources
import sentry_sdk

from abstra_internals.compatibility.compat_traceback import print_exception
from abstra_internals.utils import is_dev_env, is_test_env


class DevSDK:
    @classmethod
    def init(cls, *args, **kwargs):
        pass

    @classmethod
    def capture_exception(cls, exception: Exception):
        print("[ABSTRA_LOGGER] Exception captured:", file=sys.stderr)
        print_exception(exception)

    @classmethod
    def capture_message(cls, message):
        print(f"[ABSTRA_LOGGER] Message captured: {message}")

    @classmethod
    def flush(cls):
        pass


class AbstraLogger:
    @classmethod
    def init(cls, environment: Literal["cloud", "local"]):
        try:
            cls.get_sdk().init(
                dsn="https://9bbccd1a46ddb8a563483c6afc61ca35@o1317386.ingest.us.sentry.io/4507024713383936",
                traces_sample_rate=1.0,
                profiles_sample_rate=1.0,
                environment=environment,
                enable_tracing=True,
                release=pkg_resources.get_distribution("abstra").version,
                shutdown_timeout=0,
            )
        except Exception:
            print("[ABSTRA_LOGGER]Error reporting has been turned off.")

    @classmethod
    def capture_exception(cls, exception: Exception):
        cls.get_sdk().capture_exception(exception)
        cls.get_sdk().flush()

    @classmethod
    def capture_message(cls, message: str):
        cls.get_sdk().capture_message(message)
        cls.get_sdk().flush()

    @classmethod
    def get_sdk(cls):
        if is_test_env() or is_dev_env():
            return DevSDK

        return sentry_sdk
