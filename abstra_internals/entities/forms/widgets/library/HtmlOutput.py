from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class HtmlOutput(OutputWidget):
    """HTML output widget for displaying custom HTML content.

    Attributes:
        html (str): The HTML content to display.
    """

    type = "html-output"

    def __init__(
        self,
        html: str,
        *,
        full_width: bool = False,
    ):
        """Initialize an HtmlOutput widget.

        Args:
            html (str): The HTML content to display.
            full_width (bool): Whether the content should take up the full width of its container.
        """
        self.html = html
        self.full_width = full_width

    def _render(self):
        return {"type": self.type, "html": self.html, "fullWidth": self.full_width}
