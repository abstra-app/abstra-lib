import os

import requests

from abstra_internals.environment import (
    CLOUD_API_ENDPOINT,
    CLOUDFRONT_CLOUD_API_ENDPOINT,
)
from abstra_internals.logger import AbstraLogger


def select_cloud_api_endpoint() -> str:
    user_defined_endpoint = os.getenv("CLOUD_API_ENDPOINT")
    if user_defined_endpoint:
        print(f"Using Cloud API endpoint: {user_defined_endpoint}")
        return user_defined_endpoint

    if _healthcheck(CLOUD_API_ENDPOINT):
        print(f"Using Cloud API endpoint: {CLOUD_API_ENDPOINT}")
        return CLOUD_API_ENDPOINT

    print(f"Using Cloud API endpoint: {CLOUDFRONT_CLOUD_API_ENDPOINT}")
    return CLOUDFRONT_CLOUD_API_ENDPOINT


def _healthcheck(endpoint: str) -> bool:
    try:
        healthcheck_url = f"{endpoint}/healthcheck"
        response = requests.get(healthcheck_url, timeout=10)
        return response.status_code == 200
    except Exception as e:
        AbstraLogger.debug(f"Healthcheck failed for {endpoint}: {e}")
        return False
