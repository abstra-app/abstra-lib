import base64
import io
import mimetypes
import os
from typing import List, Union

from abstra_internals.email_templates.i18n import get_translation
from abstra_internals.repositories.email import EmailParams
from abstra_internals.repositories.project.project import LocalProjectRepository

DEFAULT_FILENAME = "attachment.bin"
DEFAULT_APPLICATION_TYPE = "application/octet-stream"


def is_base64(s: str) -> bool:
    try:
        if isinstance(s, str):
            return base64.b64encode(base64.b64decode(s)).decode("utf-8") == s
        return False
    except Exception:
        return False


def convert_to_base64(file: Union[io.IOBase, str]) -> str:
    if isinstance(file, io.IOBase):
        file.seek(0)
        return base64.b64encode(file.read()).decode("utf-8")
    elif isinstance(file, str):
        if is_base64(file):
            return file
        else:
            if os.path.isfile(file):
                with open(file, "rb") as f:
                    return base64.b64encode(f.read()).decode("utf-8")
            else:
                raise ValueError(
                    f"Attachment string is neither a valid base64 nor a valid file path: {file}"
                )


def get_attachment_name(attachment: Union[str, io.IOBase]) -> str:
    if isinstance(attachment, io.FileIO):
        return os.path.basename(attachment.name)
    elif isinstance(attachment, str):
        return os.path.basename(attachment)
    else:
        return DEFAULT_FILENAME


def get_attachment_type(attachment_name: str) -> str:
    mime_type, _ = mimetypes.guess_type(attachment_name)
    return mime_type or DEFAULT_APPLICATION_TYPE


def generate_email(
    to: List[str],
    message: str,
    title: str,
    attachments: List[Union[str, io.IOBase]],
    is_html: bool,
) -> EmailParams:
    project = LocalProjectRepository().load()
    translations = get_translation(project.workspace.language or "en")

    subject = translations.message_from(project.workspace.project_name)
    if title:
        subject += f": {title}"

    parsed_attachments = []
    for attachment in attachments:
        attachment_name = get_attachment_name(attachment)
        attachment_type = get_attachment_type(attachment_name)
        attachment_content = convert_to_base64(attachment)
        parsed_attachments.append(
            {
                "filename": attachment_name,
                "content": attachment_content,
                "type": attachment_type,
            }
        )
    return EmailParams(
        kind="message",
        to=to,
        subject=subject,
        body=message,
        attachments=parsed_attachments,
        is_html=is_html,
    )
