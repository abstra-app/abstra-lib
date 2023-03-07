from ..widget_base import Output


class MarkdownOutput(Output):
    type = "markdown-output"

    def __init__(self, text: str, **kwargs):
        self.text = text
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "text": self.text,
            "columns": self.columns,
            "fullWidth": self.full_width,
        }
