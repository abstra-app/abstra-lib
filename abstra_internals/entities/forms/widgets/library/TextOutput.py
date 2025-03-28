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
            value (str): The text to display.
            key (Optional[str]): Identifier for the widget.
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
