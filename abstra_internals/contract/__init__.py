from . import dashes as dashes_contract  # exported
from . import forms as forms_contract  # exported
from . import common as common_contract  # exported
from .common import Message, StdioMessage  # exported


def should_send(msg: Message, is_preview: bool) -> bool:
    return is_preview or not isinstance(msg, StdioMessage)
