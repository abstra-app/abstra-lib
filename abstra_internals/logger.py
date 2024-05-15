from typing import Literal

import pkg_resources
import sentry_sdk

from .utils import is_dev_env, is_test_env


class AbstraLogger:
    @staticmethod
    def init(environment: Literal["cloud", "local"]):
        if AbstraLogger.is_disabled():
            return

        try:
            sentry_sdk.init(
                dsn="https://9bbccd1a46ddb8a563483c6afc61ca35@o1317386.ingest.us.sentry.io/4507024713383936",
                traces_sample_rate=1.0,
                profiles_sample_rate=1.0,
                environment=environment,
                enable_tracing=True,
                release=pkg_resources.get_distribution("abstra").version,
                shutdown_timeout=0,
            )
        except Exception:
            print("Error reporting has been turned off.")

    @staticmethod
    def capture_exception(exception: Exception):
        if AbstraLogger.is_disabled():
            return

        sentry_sdk.capture_exception(exception)
        sentry_sdk.flush()

    @staticmethod
    def capture_message(message: str):
        if AbstraLogger.is_disabled():
            return

        sentry_sdk.capture_message(message)
        sentry_sdk.flush()

    @staticmethod
    def is_disabled():
        return is_test_env() or is_dev_env()
