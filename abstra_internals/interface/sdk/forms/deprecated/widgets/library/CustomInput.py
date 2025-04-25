from typing import Any

from abstra_internals.interface.sdk.forms.deprecated.widgets.widget_base import Input


class CustomInput(Input):
    type = "custom-input"

    def __init__(self, key: str, html_body: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(html_body=html_body, **kwargs))

    def set_props(self, props):
        self.html_body = props.get("html_body", "")
        self.label = props.get("label", "")
        self.html_head = props.get("html_head", "")
        self.height = props.get("height", 200)
        self.css = props.get("css", "")
        self.js = props.get("js", "")
        self.value = props.get("initial_value", None)
        self.full_width = props.get("full_width", False)
        self.change_event = props.get("change_event", None)
        super().set_props(props)

    def serialize_value(self) -> Any:
        return self.value

    def render(self, ctx: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.serialize_value(),
            "htmlBody": self.html_body,
            "height": self.height,
            "htmlHead": self.html_head,
            "css": self.css,
            "js": self.js,
            "fullWidth": self.full_width,
            "errors": self.errors,
        }

    def parse_value(self, value) -> Any:
        if self.change_event is not None:
            self.value = self.change_event(value)
        else:
            self.value = value
        return self.value
