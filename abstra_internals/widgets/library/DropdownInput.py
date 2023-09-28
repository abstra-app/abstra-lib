from ..widget_base import OptionalListInput
from typing import Union, List, Dict, Any


class DropdownInput(OptionalListInput):
    type = "dropdown-input"
    empty_value = None
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
        self.placeholder = props.get("placeholder", "")
        self.full_width = props.get("full_width", False)
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
            "placeholder": self.placeholder,
            "value": self.serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> Union[List, Any]:
        if isinstance(self.value, list):
            return self.value
        if not self.value:
            return []
        return [self.value]
