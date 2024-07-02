import abc
import datetime
import typing

import jwt
import requests

from abstra_internals.environment import (
    OIDC_AUTHORITY,
    PROJECT_ID,
    SIDECAR_HEADERS,
    SIDECAR_URL,
)


def endcode_fake_jwt(email: str):
    return jwt.encode(
        key="fake",
        algorithm="HS256",
        payload={
            "email": email,
            "aud": PROJECT_ID,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7),
        },
    )


def get_oidc_userinfo_email(access_token: str) -> typing.Optional[str]:
    if not OIDC_AUTHORITY():
        raise ValueError("[OIDC] OIDC_AUTHORITY is not set")

    r = requests.get(f"{OIDC_AUTHORITY()}/.well-known/openid-configuration")
    if not r.ok:
        raise ValueError("[OIDC] Failed to fetch OIDC configuration")

    userinfo_endpoint = r.json().get("userinfo_endpoint")
    if not userinfo_endpoint:
        raise ValueError("[OIDC] userinfo_endpoint not found in OIDC configuration")

    r = requests.get(
        userinfo_endpoint, headers={"Authorization": f"Bearer {access_token}"}
    )
    if not r.ok:
        return None

    return r.json().get("email")


class AuthnRepository(abc.ABC):
    def authenticate(self, email: str) -> bool:
        raise NotImplementedError()

    def verify(self, email: str, token: str) -> typing.Tuple[int, typing.Optional[str]]:
        raise NotImplementedError()

    def oidc_access(self, access_token: str) -> typing.Optional[str]:
        raise NotImplementedError()


class ProductionAuthnRepository(AuthnRepository):
    base_url: str

    def __init__(self, sidecar_url: str):
        self.base_url = sidecar_url + "/passwordless"

    def authenticate(self, email: str) -> bool:
        url = self.base_url + "/authenticate"
        resp = requests.post(url, json={"email": email}, headers=SIDECAR_HEADERS)
        return resp.ok

    def verify(self, email: str, token: str) -> typing.Tuple[int, typing.Optional[str]]:
        url = self.base_url + "/verify"
        resp = requests.post(
            url, json={"email": email, "token": token}, headers=SIDECAR_HEADERS
        )
        if not resp.ok:
            return resp.status_code, None

        return resp.status_code, resp.json()["jwt"]

    def oidc_access(self, access_token: str) -> typing.Optional[str]:
        email = get_oidc_userinfo_email(access_token)
        if email is None:
            return None

        url = self.base_url + "/token"
        resp = requests.post(url, json={"email": email}, headers=SIDECAR_HEADERS)
        resp.raise_for_status()

        return resp.json().get("jwt")


class LocalAuthnRepository(AuthnRepository):
    emails = {}

    def authenticate(self, email: str) -> bool:
        self.emails[email] = True
        return True

    def verify(self, email: str, token: str) -> typing.Tuple[int, typing.Optional[str]]:
        if token == "000000":
            # for testing purposes
            return 400, None

        verified = self.emails.pop(email, False)
        if not verified:
            return 404, None

        return 200, endcode_fake_jwt(email)

    def oidc_access(self, access_token: str) -> typing.Optional[str]:
        email = get_oidc_userinfo_email(access_token)
        if email is None:
            return None

        return endcode_fake_jwt(email)


def authn_repository_factory() -> AuthnRepository:
    if SIDECAR_URL is None:
        return LocalAuthnRepository()
    else:
        return ProductionAuthnRepository(SIDECAR_URL)
