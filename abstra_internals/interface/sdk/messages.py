from typing import List, Union

from abstra_internals.repositories import notification_repository


def send_email(to: Union[str, List[str]], message: str, title: str = ""):
    if isinstance(to, str):
        to = [to]

    notification_repository.notify_message(to, message, title)


__all__ = [
    "send_email",
]
