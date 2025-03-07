from urllib.parse import quote

from validators import url

from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class IframeOutput(OutputWidget):
    type = "iframe-output"

    def __init__(
        self,
        url_or_html: str,
        *,
        width: int = 800,
        height: int = 600,
        full_width: bool = False,
    ):
        self.url = (
            url_or_html if url(url_or_html) else f"data:text/html,{quote(url_or_html)}"
        )
        self.width = width
        self.height = height
        self.full_width = full_width

    def render(self):
        return {
            "type": self.type,
            "url": self.url,
            "width": self.width,
            "height": self.height,
            "fullWidth": self.full_width,
        }
