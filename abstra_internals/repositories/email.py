import abc
from dataclasses import dataclass
from typing import List, Literal, Union

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import REQUEST_TIMEOUT, SIDECAR_HEADERS

Kind = Literal["passwordless", "task-waiting", "message"]


@dataclass
class EmailAttachment:
    filename: str
    content: str
    type: str

    def to_dict(self):
        return {
            "filename": self.filename,
            "content": self.content,
            "type": self.type,
        }


@dataclass
class EmailParams:
    kind: Kind
    to: List[str]
    subject: str
    body: str
    attachments: List[EmailAttachment]
    is_html: bool

    def to_dict(self):
        return {
            "kind": self.kind,
            "to": self.to,
            "subject": self.subject,
            "body": self.body,
            "attachments": [attachment.to_dict() for attachment in self.attachments],
            "isHtml": self.is_html,
        }

    def __init__(
        self,
        kind: Kind,
        to: List[str],
        subject: str,
        body: str,
        attachments: List[Union[EmailAttachment, dict]],
        is_html: bool,
    ):
        self.kind = kind
        self.to = to
        self.subject = subject
        self.body = body
        self.is_html = is_html

        self.attachments = []
        for attachment in attachments:
            if isinstance(attachment, EmailAttachment):
                self.attachments.append(attachment)
            elif isinstance(attachment, dict):
                self.attachments.append(EmailAttachment(**attachment))
            else:
                raise ValueError("Invalid attachment type")


class EmailRepository(abc.ABC):
    def send(self, param: EmailParams):
        raise NotImplementedError()


class ProductionEmailRepository(EmailRepository):
    base_url: str

    def __init__(self, sidecar_url: str):
        self.base_url = sidecar_url + "/email"

    def send(self, param: EmailParams):
        requests.post(
            self.base_url,
            json=param.to_dict(),
            headers=SIDECAR_HEADERS,
            timeout=REQUEST_TIMEOUT,
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
            self.base_url,
            json=param.to_dict(),
            headers=headers,
            timeout=REQUEST_TIMEOUT,
        ).raise_for_status()


class TestEmailRepository(EmailRepository):
    def send(self, param: EmailParams):
        pass
