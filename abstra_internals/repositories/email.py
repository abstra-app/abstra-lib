import abc
from dataclasses import dataclass
from typing import List, Literal

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import CLOUD_API_CLI_URL, SIDECAR_HEADERS, SIDECAR_URL

Kind = Literal["passwordless", "thread-waiting", "message"]


@dataclass
class EmailParams:
    kind: Kind
    to: List[str]
    subject: str
    body: str
    is_html: bool

    def to_dict(self):
        return {
            "kind": self.kind,
            "to": self.to,
            "subject": self.subject,
            "body": self.body,
            "isHtml": self.is_html,
        }


class EmailRepository(abc.ABC):
    def send(self, param: EmailParams):
        raise NotImplementedError()


class ProductionEmailRepository(EmailRepository):
    base_url: str

    def __init__(self, sidecar_url: str):
        self.base_url = sidecar_url + "/email"

    def send(self, param: EmailParams):
        requests.post(
            self.base_url, json=param.to_dict(), headers=SIDECAR_HEADERS
        ).raise_for_status()


class LocalEmailRepository(EmailRepository):
    base_url: str

    def __init__(self, cloud_api_cli_url: str):
        self.base_url = cloud_api_cli_url + "/email"

    def send(self, param: EmailParams):
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to send an email")
        requests.post(
            self.base_url, json=param.to_dict(), headers=headers
        ).raise_for_status()


class TestEmailRepository(EmailRepository):
    def send(self, param: EmailParams):
        pass


def email_repository_factory() -> EmailRepository:
    if SIDECAR_URL is None:
        return LocalEmailRepository(CLOUD_API_CLI_URL)
    else:
        return ProductionEmailRepository(SIDECAR_URL)
