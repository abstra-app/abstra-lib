from ..widget_base import Output


class HtmlOutput(Output):
    type = "html-output"

    def __init__(self, html: str, **kwargs):
        self.html = html
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "html": self.html,
            "columns": self.columns,
            "fullWidth": self.full_width,
        }
