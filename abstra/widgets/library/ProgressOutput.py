from ..widget_base import Output


class ProgressOutput(Output):
    type = "progress-output"

    def __init__(self, current: float = 50, total: float = 100, **kwargs):
        self.current = current
        self.total = total
        self.text = kwargs.get("text", "")
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "current": self.current,
            "total": self.total,
            "text": self.text,
            "columns": self.columns,
            "fullWidth": self.full_width,
        }
