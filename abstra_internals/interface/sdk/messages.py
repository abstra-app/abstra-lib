from typing import List, Union

from abstra_internals.controllers.execution_store import ExecutionStore
from abstra_internals.email_templates import message_template


def send_email(to: Union[str, List[str]], message: str, title: str = ""):
    if isinstance(to, str):
        to = [to]

    ExecutionStore.get_by_thread().repositories.email.send(
        message_template.generate_email(to, message, title)
    )


__all__ = [
    "send_email",
]
