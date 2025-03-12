import io
from typing import List, Union

from abstra_internals.controllers.sdk_context import SDKContextStore
from abstra_internals.email_templates import message_template


def send_email(
    to: Union[str, List[str]],
    message: str,
    title: str = "",
    attachments: List[Union[str, io.IOBase]] = [],
    is_html: bool = False,
):
    if isinstance(to, str):
        to = [to]
    SDKContextStore.get_by_thread().repositories.email.send(
        message_template.generate_email(to, message, title, attachments, is_html)
    )


__all__ = [
    "send_email",
]
