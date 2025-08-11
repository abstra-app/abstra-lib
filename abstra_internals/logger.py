import importlib.metadata
import logging
from typing import Literal, Optional

import sentry_sdk
from sentry_sdk.integrations.logging import LoggingIntegration

from abstra_internals.environment import (
    CLOUD_SAMPLE_RATE,
    LOCAL_SAMPLE_RATE,
    LOGFORMAT,
    LOGLEVEL,
    NOISY_LOGLEVEL,
)
from abstra_internals.utils.env import is_dev_env, is_test_env

internal_logger = lambda: logging.getLogger("abstra_internal")  # noqa: E731


class DevSDK:
    @classmethod
    def init(cls, *args, **kwargs):
        pass

    @classmethod
    def capture_exception(cls, exception: BaseException):
        internal_logger().exception(
            msg=f"[ABSTRA_LOGGER] Exception captured: {exception}"
        )

    @classmethod
    def capture_message(cls, message):
        internal_logger().info(f"[ABSTRA_LOGGER] Message captured: {message}")

    @classmethod
    def flush(cls):
        pass


LoggerEnvironment = Literal["cloud", "local"]


class AbstraLogger:
    environment: LoggerEnvironment = "local"

    @classmethod
    def init(cls, environment: Optional[LoggerEnvironment]):
        cls.environment = environment or "local"
        logging.basicConfig(level=LOGLEVEL(), format=LOGFORMAT())

        # Silence verbose dependencies
        logging.getLogger("pika").setLevel(NOISY_LOGLEVEL())
        logging.getLogger("werkzeug").setLevel(NOISY_LOGLEVEL())

        try:
            cls.get_sdk().init(
                dsn="https://9bbccd1a46ddb8a563483c6afc61ca35@o1317386.ingest.us.sentry.io/4507024713383936",
                traces_sample_rate=0.01,
                profiles_sample_rate=0.01,
                environment=cls.environment,
                enable_tracing=True,
                sample_rate=CLOUD_SAMPLE_RATE
                if AbstraLogger.environment == "cloud"
                else LOCAL_SAMPLE_RATE,
                release=importlib.metadata.distribution("abstra").version,
                shutdown_timeout=0,
                disabled_integrations=[
                    LoggingIntegration(),
                ],
            )
        except Exception:
            internal_logger().error(
                "[ABSTRA_LOGGER] Error reporting has been turned off."
            )

    @classmethod
    def capture_exception(cls, exception: BaseException):
        cls.get_sdk().capture_exception(exception)
        cls.get_sdk().flush()

    @classmethod
    def capture_message(cls, message: str):
        cls.get_sdk().capture_message(message)
        cls.get_sdk().flush()

    @classmethod
    def warning(cls, message: str):
        internal_logger().warning(message)

    @classmethod
    def info(cls, message: str):
        internal_logger().info(message)

    @classmethod
    def debug(cls, message: str):
        internal_logger().debug(message)

    @classmethod
    def error(cls, message: str):
        internal_logger().error(message)

    @classmethod
    def get_sdk(cls):
        if is_test_env() or is_dev_env():
            return DevSDK

        return sentry_sdk
