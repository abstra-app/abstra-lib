from dataclasses import dataclass
from typing import List, Literal, Union

from abstra_internals.cloud_api.http_client import HTTPClient

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
    is_resend: bool

    def to_dict(self):
        return {
            "kind": self.kind,
            "to": self.to,
            "subject": self.subject,
            "body": self.body,
            "attachments": [attachment.to_dict() for attachment in self.attachments],
            "isHtml": self.is_html,
            "isResend": self.is_resend,
        }

    def __init__(
        self,
        kind: Kind,
        to: List[str],
        subject: str,
        body: str,
        attachments: List[Union[EmailAttachment, dict]],
        is_html: bool,
        is_resend: bool = False,
    ):
        self.kind = kind
        self.to = to
        self.subject = subject
        self.body = body
        self.is_html = is_html
        self.is_resend = is_resend

        self.attachments = []
        for attachment in attachments:
            if isinstance(attachment, EmailAttachment):
                self.attachments.append(attachment)
            elif isinstance(attachment, dict):
                self.attachments.append(EmailAttachment(**attachment))
            else:
                raise ValueError("Invalid attachment type")


class EmailRepository:
    def __init__(self, client: "HTTPClient"):
        self.client = client

    def send(self, param: EmailParams):
        self.client.post(
            endpoint="/email",
            json=param.to_dict(),
        ).raise_for_status()
