from ..widget_base import OptionalListInput
from typing import List, Dict, Union, Any


class MultipleChoiceInput(OptionalListInput):
    type = "multiple-choice-input"
    empty_value: Union[List, Any] = None
    multiple: bool = False

    def __init__(
        self, key: str, label: str, options: Union[List[str], List[Dict]], **kwargs
    ):
        super().__init__(key)
        self.set_props(dict(label=label, options=options, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.options = props.get("options", [])
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.full_width = props.get("full_width", False)
        self.min = props.get("min", None)
        self.max = props.get("max", None)
        self.disabled = props.get("disabled", False)
        self.multiple = props.get("multiple", False)
        self.empty_value = [] if self.multiple else None
        self.value = props.get("initial_value", self.empty_value)

    def render(self, context: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "options": self.options,
            "hint": self.hint,
            "multiple": self.multiple,
            "value": self.serialize_value(),
            "required": self.required and not self.multiple,
            "fullWidth": self.full_width,
            "min": self.min,
            "max": self.max,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> List[Any]:
        if isinstance(self.value, list):
            return self.value
        if not self.value:
            return []
        return [self.value]
