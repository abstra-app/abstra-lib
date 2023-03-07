from ..widget_base import Output
from urllib.parse import quote
from validators import url


class IframeOutput(Output):
    type = "iframe-output"

    def __init__(self, url_or_html: str, **kwargs):
        if url(url_or_html):
            self.url = url_or_html
        else:
            self.url = f"data:text/html,{quote(url_or_html)}"
        self.width = kwargs.get("width", "800")
        self.height = kwargs.get("height", "600")
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "url": self.url,
            "width": self.width,
            "height": self.height,
            "columns": self.columns,
            "fullWidth": self.full_width,
        }
