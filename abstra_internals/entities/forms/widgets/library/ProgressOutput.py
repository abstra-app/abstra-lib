from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class ProgressOutput(OutputWidget):
    """Progress bar output widget for displaying completion status."""

    type = "progress-output"

    def __init__(
        self,
        current: float = 50,
        total: float = 100,
        *,
        text: str = "",
        full_width: bool = False,
    ):
        """Initialize a ProgressOutput widget.

        Args:
            current (float): The current progress value.
            total (float): The total value representing 100% progress.
            text (str): Text displayed alongside the progress bar.
            full_width (bool): Whether the progress bar should take up the full width of its container.
        """
        self.current = current
        self.total = total
        self.text = text
        self.full_width = full_width

    def _render(self):
        return {
            "type": self.type,
            "current": self.current,
            "total": self.total,
            "text": self.text,
            "fullWidth": self.full_width,
        }
