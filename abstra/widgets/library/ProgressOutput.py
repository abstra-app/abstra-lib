from ..widget_base import Output


class ProgressOutput(Output):
    type = "progress-output"

    def __init__(self, current: float = 50, total: float = 100, **kwargs):
        self.set_props(dict(current=current, total=total, **kwargs))

    def set_props(self, props):
        self.current = props.get("current", 0)
        self.total = props.get("total", 0)
        self.text = props.get("text", "")
        self.full_width = props.get("full_width", False)

    def render(self, context: dict):
        return {
            "type": self.type,
            "current": self.current,
            "total": self.total,
            "text": self.text,
            "fullWidth": self.full_width,
        }
