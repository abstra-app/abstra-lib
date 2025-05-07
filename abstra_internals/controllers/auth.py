import typing
from typing import Optional, Tuple

import requests

from abstra_internals.email_templates import authn_template
from abstra_internals.environment import OIDC_AUTHORITY, REQUEST_TIMEOUT
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.email import EmailRepository
from abstra_internals.repositories.jwt_signer import JWTRepository
from abstra_internals.repositories.keyvalue import KVRepository
from abstra_internals.repositories.users import UsersRepository


def authn_kv_key(email: str) -> str:
    return f"authn::key::{email}"


def authn_kv_counter(email: str) -> str:
    return f"authn::counter::{email}"


def get_oidc_userinfo_email(access_token: str) -> typing.Optional[str]:
    if not OIDC_AUTHORITY():
        raise ValueError("[OIDC] OIDC_AUTHORITY is not set")

    r = requests.get(
        f"{OIDC_AUTHORITY()}/.well-known/openid-configuration",
        timeout=REQUEST_TIMEOUT,
    )
    if not r.ok:
        raise ValueError("[OIDC] Failed to fetch OIDC configuration")

    userinfo_endpoint = r.json().get("userinfo_endpoint")
    if not userinfo_endpoint:
        raise ValueError("[OIDC] userinfo_endpoint not found in OIDC configuration")

    r = requests.get(
        userinfo_endpoint,
        headers={"Authorization": f"Bearer {access_token}"},
        timeout=REQUEST_TIMEOUT,
    )
    if not r.ok:
        return None

    return r.json().get("email")


class AuthController:
    kv_repository: KVRepository
    jwt_repository: JWTRepository
    users_repository: UsersRepository
    email_repository: EmailRepository

    def __init__(
        self,
        *,
        kv_repository: KVRepository,
        jwt_repository: JWTRepository,
        email_repository: EmailRepository,
        users_repository: UsersRepository,
    ):
        self.kv_repository = kv_repository
        self.jwt_repository = jwt_repository
        self.email_repository = email_repository
        self.users_repository = users_repository

    def _sign_and_signup(self, email: str) -> str:
        self.users_repository.insert_user(email)
        return self.jwt_repository.sign(email)

    def authenticate(self, email: str) -> bool:
        try:
            key = authn_kv_key(email)
            code = self.jwt_repository.gen_code()
            self.kv_repository.set(key, code)

            counter_key = authn_kv_counter(email)
            self.kv_repository.set(counter_key, ".")

            authentication_email = authn_template.generate_email(email, code)
            self.email_repository.send(authentication_email)

            return True
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return False

    def verify(self, email: str, user_code: str) -> Tuple[int, Optional[str]]:
        try:
            key = authn_kv_key(email)
            counter_key = authn_kv_counter(email)
            user_code = self.jwt_repository.sanitize_code(user_code)

            code = self.kv_repository.get(key)
            if code != user_code:
                counter = self.kv_repository.get(counter_key)
                if len(counter) >= 3:
                    self.kv_repository.delete(key)
                    self.kv_repository.delete(counter_key)
                    return 410, None

                self.kv_repository.set(counter_key, counter + ".")
                return 400, None

            self.kv_repository.delete(key)
            self.kv_repository.delete(counter_key)

            return 200, self._sign_and_signup(email)
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return 500, None

    def oidc_verify(self, access_token: str) -> Tuple[Optional[str], Optional[str]]:
        try:
            email = get_oidc_userinfo_email(access_token)
            if not email:
                return None, None

            return self._sign_and_signup(email), email
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return None, None
