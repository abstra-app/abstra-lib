import abc
import datetime

import jwt
import requests

from abstra_internals.environment import (
    PROJECT_ID,
    SIDECAR_HEADERS,
    SIDECAR_URL,
)
from abstra_internals.utils import generate_n_digit_code


class JWTRepository(abc.ABC):
    def sign(self, email: str):
        raise NotImplementedError()

    def gen_code(self):
        raise NotImplementedError()

    def sanitize_code(self, code: str) -> str:
        raise NotImplementedError()


class ProductionJWTRepository(JWTRepository):
    base_url: str

    def __init__(self, sidecar_url: str):
        self.base_url = sidecar_url + "/jwt/sign"

    def sign(self, email: str):
        r = requests.post(
            self.base_url, json=dict(email=email), headers=SIDECAR_HEADERS
        )

        if not r.ok:
            raise ValueError(f"Failed to sign JWT: {r.text}")

        return r.json()["jwt"]

    def gen_code(self):
        return generate_n_digit_code(6)

    def sanitize_code(self, code: str) -> str:
        return code


class LocalJWTRepository(JWTRepository):
    def sign(self, email: str):
        return jwt.encode(
            key="fake",
            algorithm="HS256",
            payload={
                "email": email,
                "aud": PROJECT_ID,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7),
            },
        )

    def gen_code(self):
        return "000000"

    def sanitize_code(self, code: str) -> str:
        return "000000"


def jwt_repository_factory() -> JWTRepository:
    if SIDECAR_URL is None:
        return LocalJWTRepository()
    else:
        return ProductionJWTRepository(SIDECAR_URL)
