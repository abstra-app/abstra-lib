import abc
import datetime
from functools import lru_cache
from typing import Optional

import jwt
import requests

from abstra_internals.environment import PROJECT_ID, REQUEST_TIMEOUT, SIDECAR_HEADERS
from abstra_internals.jwt_auth import decode_jwt
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
            self.base_url,
            json=dict(email=email),
            headers=SIDECAR_HEADERS,
            timeout=REQUEST_TIMEOUT,
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
                "exp": datetime.datetime.now(datetime.timezone.utc)
                + datetime.timedelta(days=7),
            },
        )

    def gen_code(self):
        return "000000"

    def sanitize_code(self, code: str) -> str:
        return "000000"


class EditorJWTRepository(abc.ABC):
    def verify(self, token: Optional[str]) -> bool:
        raise NotImplementedError()

    def decode(self, token: str) -> Optional[dict]:
        raise NotImplementedError()


class LocalEditorJWTRepository(EditorJWTRepository):
    def verify(self, token: Optional[str]) -> bool:
        return True

    def decode(self, token: str) -> Optional[dict]:
        return decode_jwt(token, aud=f"web-editor-{PROJECT_ID}")


class WebEditorJWTRepository(EditorJWTRepository):
    @lru_cache(maxsize=10)
    def __verify(self, token: str) -> bool:
        return self.decode(token) is not None

    def verify(self, token: Optional[str]) -> bool:
        if not token:
            return False
        return self.__verify(token)

    def decode(self, token: str):
        return decode_jwt(token, aud=f"web-editor-{PROJECT_ID}")


def get_editor_jwt_repository(mode) -> EditorJWTRepository:
    if mode == "web":
        return WebEditorJWTRepository()
    return LocalEditorJWTRepository()
