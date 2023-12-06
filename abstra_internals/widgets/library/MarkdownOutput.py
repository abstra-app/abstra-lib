from ..widget_base import Output


class MarkdownOutput(Output):
    type = "markdown-output"

    def __init__(self, text: str, **kwargs):
        self.set_props(dict(text=text, **kwargs))

    def set_props(self, props):
        self.text = props.get("text", "")
        self.full_width = props.get("full_width", False)

    def render(self, ctx: dict):
        return {"type": self.type, "text": self.text, "fullWidth": self.full_width}
