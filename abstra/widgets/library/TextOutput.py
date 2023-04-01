from ..widget_base import Output


class TextOutput(Output):
    type = "text-output"

    def __init__(self, text: str, **kwargs):
        self.text = str(text)
        self.size = kwargs.get("size", "medium")
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "text": self.text,
            "size": self.size,
            "columns": self.columns,
            "fullWidth": self.full_width,
        }
