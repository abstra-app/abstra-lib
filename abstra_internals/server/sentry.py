from typing import Literal
import sentry_sdk
import pkg_resources


def init_sentry(environment: Literal["cloud", "local"]):
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
