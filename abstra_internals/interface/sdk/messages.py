import io
from typing import List, Union

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.email_templates import message_template


def send_email(
    to: Union[str, List[str]],
    message: str,
    title: str = "",
    attachments: List[Union[str, io.IOBase]] = [],
    is_html: bool = False,
):
    """Send an email to one or more recipients.

    Args:
        to (Union[str, List[str]]): Email address(es) of the recipient(s). Can be a single
            email address as a string or multiple addresses as a list of strings.
        message (str): Content of the email message.
        title (str): Subject line of the email. Defaults to "".
        attachments (List[Union[str, io.IOBase]]): List of attachments to include.
            Each attachment can be a file path string or an open file-like object. Defaults to [].
        is_html (bool): Whether the message content is HTML. When True, the message
            will be sent as HTML; when False, the message will be sent as plain text. Defaults to False.
    """
    if isinstance(to, str):
        to = [to]
    SDKContextStore.get_by_thread().repositories.email.send(
        message_template.generate_email(to, message, title, attachments, is_html)
    )


__all__ = [
    "send_email",
]
