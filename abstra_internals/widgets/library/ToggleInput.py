from typing import Optional, Union
from ..widget_base import Input


class ToggleInput(Input):
    type = "toggle-input"
    empty_value: bool = False

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.on_text = props.get("on_text", "Yes")
        self.off_text = props.get("off_text", "No")
        self.value = props.get("initial_value", False)
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.full_width = props.get("full_width", False)
        self.disabled = props.get("disabled", False)

    def is_value_unset(self):
        return False

    def render(self, context: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "onText": self.on_text,
            "offText": self.off_text,
            "value": self.serialize_value(),
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> bool:
        return self.value or False

    def parse_value(self, value: bool) -> bool:
        return bool(value)
