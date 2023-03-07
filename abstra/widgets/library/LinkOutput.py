from ..widget_base import Output


class LinkOutput(Output):
    type = "link-output"

    def __init__(self, link_url: str, **kwargs):
        self.link_url = link_url
        self.link_text = kwargs.get("link_text", "Click here")
        self.same_tab = kwargs.get("same_tab", False)
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "linkText": self.link_text,
            "linkUrl": self.link_url,
            "columns": self.columns,
            "sameTab": self.same_tab,
            "fullWidth": self.full_width,
        }
