from ..widget_base import Input
from typing import Union, List, Dict


class ChecklistInput(Input):
    type = "checklist-input"
    empty_value: List[str] = []

    def __init__(
        self, key: str, label: str, options: Union[List[str], List[Dict]], **kwargs
    ):
        super().__init__(key)
        self.set_props(dict(label=label, options=options, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.options = props.get("options", [])
        self.value = props.get("initial_value", self.empty_value)
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
            "options": self.options,
            "label": self.label,
            "value": self.serialize_value(),
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> list:
        if isinstance(self.value, list):
            return self.value
        return []
