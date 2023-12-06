from ..widget_base import Output
from urllib.parse import quote
from validators import url


class IframeOutput(Output):
    type = "iframe-output"

    def __init__(self, url_or_html: str, **kwargs):
        self.set_props(dict(url_or_html=url_or_html, **kwargs))

    def set_props(self, props):
        url_or_html = props.get("url_or_html", "")
        if url(url_or_html):
            self.url = url_or_html
        else:
            self.url = f"data:text/html,{quote(url_or_html)}"
        self.width = props.get("width", "800")
        self.height = props.get("height", "600")
        self.full_width = props.get("full_width", False)

    def render(self, ctx: dict):
        return {
            "type": self.type,
            "url": self.url,
            "width": self.width,
            "height": self.height,
            "fullWidth": self.full_width,
        }
