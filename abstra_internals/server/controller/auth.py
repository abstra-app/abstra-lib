import typing
from typing import Optional, Tuple

import flask
import requests

from abstra_internals.email_templates import authn_template
from abstra_internals.environment import (
    OIDC_AUTHORITY,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.email import EmailRepository
from abstra_internals.repositories.jwt_signer import JWTRepository
from abstra_internals.repositories.keyvalue import KVRepository
from abstra_internals.server.controller.main import MainController
from abstra_internals.utils.email import is_valid_email


def authn_kv_key(email: str) -> str:
    return f"authn::key::{email}"


def authn_kv_counter(email: str) -> str:
    return f"authn::counter::{email}"


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


class AuthController:
    kv_repository: KVRepository
    jwt_repository: JWTRepository
    email_repository: EmailRepository

    def __init__(
        self,
        *,
        kv_repository: KVRepository,
        jwt_repository: JWTRepository,
        email_repository: EmailRepository,
    ):
        self.kv_repository = kv_repository
        self.jwt_repository = jwt_repository
        self.email_repository = email_repository

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

            return 200, self.jwt_repository.sign(email)
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return 500, None

    def oidc_verify(self, access_token: str) -> Optional[str]:
        try:
            email = get_oidc_userinfo_email(access_token)
            if not email:
                return None

            return self.jwt_repository.sign(email)
        except Exception as e:
            AbstraLogger.capture_exception(e)
            return None


def get_player_bp(main_controller: MainController):
    bp = flask.Blueprint("auth", __name__)
    controller = AuthController(
        kv_repository=main_controller.kv_repository,
        jwt_repository=main_controller.jwt_repository,
        email_repository=main_controller.email_repository,
    )

    @bp.post("/authenticate")
    def _authenticate():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        email = data.get("email")
        if not email or not is_valid_email(email):
            return flask.abort(400)

        ok = controller.authenticate(email)
        if not ok:
            return flask.abort(400)

        return {"ok": True}

    @bp.post("/verify")
    def _verify():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        email = data.get("email")
        code = data.get("token")
        if not email or not code:
            return flask.abort(400)

        status, jwt = controller.verify(email, code)
        if not jwt:
            return flask.abort(status)

        return {"jwt": jwt}

    @bp.post("/oidc-verify")
    def _oidc_access():
        data = flask.request.get_json(force=True)
        if not data:
            return flask.abort(400)

        access_token = data.get("access_token")
        if not access_token:
            return flask.abort(400)

        jwt = controller.oidc_verify(access_token)
        if not jwt:
            return flask.abort(404)

        return {"jwt": jwt}

    return bp
