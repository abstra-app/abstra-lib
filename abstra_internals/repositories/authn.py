import requests, typing, abc, jwt, datetime
from ..utils.environment import SIDECAR_URL, SIDECAR_HEADERS, PROJECT_ID


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


class AuthnRepository(abc.ABC):
    def authenticate(self, email: str) -> bool:
        raise NotImplementedError()

    def verify(self, email: str, token: str) -> typing.Optional[str]:
        raise NotImplementedError()


class ProductionAuthnRepository(AuthnRepository):
    base_url: str

    def __init__(self, sidecar_url: str):
        self.base_url = sidecar_url + "/passwordless"

    def authenticate(self, email: str) -> bool:
        url = self.base_url + "/authenticate"
        resp = requests.post(url, json={"email": email}, headers=SIDECAR_HEADERS)
        return resp.ok

    def verify(self, email: str, token: str) -> typing.Optional[str]:
        url = self.base_url + "/verify"
        resp = requests.post(
            url, json={"email": email, "token": token}, headers=SIDECAR_HEADERS
        )
        if not resp.ok:
            return None

        return resp.json()["jwt"]


class LocalAuthnRepository(AuthnRepository):
    emails = {}

    def authenticate(self, email: str) -> bool:
        self.emails[email] = True
        return True

    def verify(self, email: str, token: str) -> typing.Optional[str]:
        if token == "000000":
            # for testing purposes
            return None

        verified = self.emails.pop(email, False)
        if not verified:
            return None

        return endcode_fake_jwt(email)


def authn_repository_factory() -> AuthnRepository:
    if SIDECAR_URL is None:
        return LocalAuthnRepository()
    else:
        return ProductionAuthnRepository(SIDECAR_URL)
