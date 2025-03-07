from typing import Literal

from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class TextOutput(OutputWidget):
    type = "text-output"

    def __init__(
        self,
        text: str,
        *,
        size: Literal["small", "medium", "large"] = "medium",
        full_width: bool = False,
    ):
        self.text = text
        self.size = size
        self.full_width = full_width

    def render(self):
        return {
            "type": self.type,
            "text": self.text,
            "size": self.size,
            "fullWidth": self.full_width,
        }
