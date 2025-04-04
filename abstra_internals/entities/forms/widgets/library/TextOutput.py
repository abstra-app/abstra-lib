from typing import Literal

from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class TextOutput(OutputWidget):
    """Text output widget for displaying plain text."""

    type = "text-output"

    def __init__(
        self,
        text: str,
        *,
        size: Literal["small", "medium", "large"] = "medium",
        full_width: bool = False,
    ):
        """Initialize a TextOutput widget.

        Args:
            text (str): The text to display.
            size (Literal["small", "medium", "large"]): The size of the text.
            full_width (bool): Whether the widget should take up the full width of its container.
        """
        self.text = text
        self.size = size
        self.full_width = full_width

    def _render(self):
        return {
            "type": self.type,
            "text": self.text,
            "size": self.size,
            "fullWidth": self.full_width,
        }
