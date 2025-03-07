from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class ProgressOutput(OutputWidget):
    type = "progress-output"

    def __init__(
        self,
        current: float = 50,
        total: float = 100,
        *,
        text: str = "",
        full_width: bool = False,
    ):
        self.current = current
        self.total = total
        self.text = text
        self.full_width = full_width

    def render(self):
        return {
            "type": self.type,
            "current": self.current,
            "total": self.total,
            "text": self.text,
            "fullWidth": self.full_width,
        }
