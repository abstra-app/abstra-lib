from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class MarkdownOutput(OutputWidget):
    type = "markdown-output"

    def __init__(
        self,
        text: str,
        *,
        full_width: bool = False,
    ):
        self.text = text
        self.full_width = full_width

    def render(self):
        return {"type": self.type, "text": self.text, "fullWidth": self.full_width}
