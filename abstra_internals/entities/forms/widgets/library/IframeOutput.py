from urllib.parse import quote

from validators import url

from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class IframeOutput(OutputWidget):
    """Iframe output widget for embedding external web content or HTML.

    Attributes:
        url (str): The URL or data URI of the iframe content.
    """

    type = "iframe-output"

    def __init__(
        self,
        url_or_html: str,
        *,
        width: int = 800,
        height: int = 600,
        full_width: bool = False,
    ):
        """Initialize an IframeOutput widget.

        Args:
            url_or_html (str): The URL to embed or HTML content to display in the iframe.
            width (int): Width of the iframe in pixels.
            height (int): Height of the iframe in pixels.
            full_width (bool): Whether the iframe should take up the full width of its container.
        """
        self.url = (
            url_or_html if url(url_or_html) else f"data:text/html,{quote(url_or_html)}"
        )
        self.width = width
        self.height = height
        self.full_width = full_width

    def _render(self):
        return {
            "type": self.type,
            "url": self.url,
            "width": self.width,
            "height": self.height,
            "fullWidth": self.full_width,
        }
