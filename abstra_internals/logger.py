from typing import Literal

import pkg_resources
import sentry_sdk

from .utils import is_testing


class AbstraLogger:
    @staticmethod
    def init(environment: Literal["cloud", "local"]):
        if is_testing():
            return

        try:
            sentry_sdk.init(
                dsn="https://9bbccd1a46ddb8a563483c6afc61ca35@o1317386.ingest.us.sentry.io/4507024713383936",
                traces_sample_rate=1.0,
                profiles_sample_rate=1.0,
                environment=environment,
                enable_tracing=True,
                release=pkg_resources.get_distribution("abstra").version,
            )
        except Exception:
            print("Error reporting has been turned off.")

    @staticmethod
    def capture_exception(exception: Exception):
        if is_testing():
            return

        sentry_sdk.capture_exception(exception)
