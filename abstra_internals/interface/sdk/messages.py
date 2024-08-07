from typing import List, Union

from abstra_internals.email_templates import message_template
from abstra_internals.repositories import email_repository


def send_email(to: Union[str, List[str]], message: str, title: str = ""):
    if isinstance(to, str):
        to = [to]

    email_repository.send(message_template.generate_email(to, message, title))


__all__ = [
    "send_email",
]
