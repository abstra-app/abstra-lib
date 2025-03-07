from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    AbstraOption,
    InputWidget,
    MultipleHandler,
    OptionsHandler,
)


class DropdownInput(InputWidget):
    type = "dropdown-input"
    multiple_handler: MultipleHandler
    options_handler: OptionsHandler
    value: Union[List[object], object]

    def __init__(
        self,
        label: str,
        options: List[AbstraOption],
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        placeholder: str = "",
        full_width: bool = False,
        disabled: bool = False,
        multiple: bool = False,
        min: Optional[int] = None,
        max: Optional[int] = None,
        errors: Optional[Union[List[object], object]] = None,
        value: Union[List[str], None] = None,
    ):
        self.label = label
        self._key = key or label
        self.options = options
        self.required = required
        self.hint = hint
        self.placeholder = placeholder
        self.full_width = full_width
        self.disabled = disabled
        self.multiple = multiple
        self.min = min
        self.max = max
        self.value = value
        self.multiple_handler = MultipleHandler(
            self.multiple, self.min, self.max, self.required
        )
        self.options_handler = OptionsHandler(self.options)
        self.errors = self._init_errors(errors)

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
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

    def _run_validators(self) -> List[str]:
        return self.multiple_handler.validate(self.value)

    def serialize_value(self) -> List:
        list_values = self.multiple_handler.value_to_list(self.value)
        return self.options_handler.ids_from_values(list_values)

    def parse_value(self, value: Union[List[str], None]):
        list_values = self.options_handler.values_from_ids(value)
        return self.multiple_handler.value_to_list_or_value(list_values)
