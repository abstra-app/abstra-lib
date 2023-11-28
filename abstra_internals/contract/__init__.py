from . import forms as forms_contract  # exported
from .forms import Message, StdioMessage  # exported


def should_send(msg: Message, is_preview: bool) -> bool:
    return is_preview or not isinstance(msg, StdioMessage)
