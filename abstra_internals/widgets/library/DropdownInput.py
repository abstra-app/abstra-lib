from typing import List, Union
from ..widget_base import (
    Input,
    LabelValueOption,
    MultipleHandler,
    OptionsHandler,
    AbstraOption,
)


class DropdownInput(Input):
    type = "dropdown-input"
    empty_value = None
    multiple: bool = False
    multiple_handler: MultipleHandler
    options_handler: OptionsHandler

    def __init__(self, key: str, label: str, options: List[AbstraOption], **kwargs):
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
        self.min = props.get("min", None)
        self.max = props.get("max", None)
        self.empty_value = [] if self.multiple else None
        self.value = props.get("initial_value", self.empty_value)
        self.multiple_handler = MultipleHandler(
            self.multiple, self.min, self.max, self.required
        )
        self.options_handler = OptionsHandler(self.options)

    def render(self, ctx: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "options": self.options_handler.serialized_options(),
            "hint": self.hint,
            "multiple": self.multiple,
            "placeholder": self.placeholder,
            "value": self.serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
            "min": self.min,
            "max": self.max,
        }

    def validate(self) -> List[str]:
        return self.multiple_handler.validate(self.value)

    def serialize_value(self) -> List:
        list_values = self.multiple_handler.value_to_list(self.value)
        return self.options_handler.uuids_from_values(list_values)

    def parse_value(self, value: Union[List[str], None]):
        list_values = self.options_handler.values_from_uuids(value)
        return self.multiple_handler.value_to_list_or_value(list_values)
