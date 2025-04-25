from abstra_internals.interface.sdk.forms.deprecated.widgets.widget_base import Output


class HtmlOutput(Output):
    type = "html-output"

    def __init__(self, html: str, **kwargs):
        self.set_props(dict(html=html, **kwargs))

    def set_props(self, props):
        self.html = props.get("html", "")
        self.full_width = props.get("full_width", False)
        super().set_props(props)

    def render(self, ctx: dict):
        return {"type": self.type, "html": self.html, "fullWidth": self.full_width}
