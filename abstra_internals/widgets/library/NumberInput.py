from typing import List
from ..widget_base import Input, NumberValueHandler


class NumberInput(Input):
    type = "number-input"
    empty_value = None

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.value = props.get("initial_value", 0)
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.placeholder = props.get("placeholder", "")
        self.full_width = props.get("full_width", False)
        self.min = props.get("min")
        self.max = props.get("max")
        self.disabled = props.get("disabled", False)
        self.number_value_handler = NumberValueHandler(
            min=self.min, max=self.max, required=self.required
        )

    def render(self, ctx: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.serialize_value(),
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "min": self.min,
            "max": self.max,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def validate(self) -> List[str]:
        return self.number_value_handler.validate(self.value)

    def serialize_value(self) -> float:
        return self.value
