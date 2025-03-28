from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class MarkdownOutput(OutputWidget):
    """Markdown output widget for displaying formatted text.

    Attributes:
        text (str): The markdown content to display.
    """

    type = "markdown-output"

    def __init__(
        self,
        text: str,
        *,
        full_width: bool = False,
    ):
        """Initialize a MarkdownOutput widget.

        Args:
            text (str): The markdown content to display.
            full_width (bool): Whether the content should take up the full width of its container.
        """
        self.text = text
        self.full_width = full_width

    def _render(self):
        return {"type": self.type, "text": self.text, "fullWidth": self.full_width}
