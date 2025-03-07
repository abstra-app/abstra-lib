from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class HtmlOutput(OutputWidget):
    type = "html-output"

    def __init__(
        self,
        html: str,
        *,
        full_width: bool = False,
    ):
        self.html = html
        self.full_width = full_width

    def render(self):
        return {"type": self.type, "html": self.html, "fullWidth": self.full_width}
