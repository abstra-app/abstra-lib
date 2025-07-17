import abc
import datetime
import random

import jwt

from abstra_internals.cloud_api.http_client import HTTPClient
from abstra_internals.environment import PROJECT_ID


def _generate_n_digit_code(n: int) -> str:
    return str(random.randint(10 ** (n - 1), 10**n - 1))


class PasswordlessRepository(abc.ABC):
    def sign(self, email: str):
        raise NotImplementedError()

    def gen_code(self):
        raise NotImplementedError()

    def sanitize_code(self, code: str) -> str:
        raise NotImplementedError()


class ProductionPasswordlessRepository(PasswordlessRepository):
    base_url: str

    def __init__(self, client: "HTTPClient"):
        self.client = client

    def sign(self, email: str):
        r = self.client.post(
            endpoint="/jwt/sign",
            json=dict(email=email),
        )

        if not r.ok:
            raise ValueError(f"Failed to sign JWT: {r.text}")

        return r.json()["jwt"]

    def gen_code(self):
        return _generate_n_digit_code(6)

    def sanitize_code(self, code: str) -> str:
        return code


class LocalPasswordlessRepository(PasswordlessRepository):
    def sign(self, email: str):
        return jwt.encode(
            key="fake",
            algorithm="HS256",
            payload={
                "email": email,
                "aud": PROJECT_ID,
                "exp": datetime.datetime.now(datetime.timezone.utc)
                + datetime.timedelta(days=7),
            },
        )

    def gen_code(self):
        return "000000"

    def sanitize_code(self, code: str) -> str:
        return "000000"
