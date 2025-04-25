from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    AbstraOption,
    InputWidget,
    MultipleHandler,
    OptionsHandler,
)


class DropdownInput(InputWidget):
    """Dropdown select widget allowing selection from predefined options.

    Attributes:
        value (Union[List[object], object, None]): The selected value(s) from the dropdown options.
    """

    type = "dropdown-input"
    multiple_handler: MultipleHandler
    options_handler: OptionsHandler
    value: Union[List[object], object, None]

    def __init__(
        self,
        label: str,
        options: List["AbstraOption"],
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
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a DropdownInput widget.

        Args:
            label (str): Text label displayed above the dropdown.
            options (List[AbstraOption]): List of options to choose from, as AbstraOption objects.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether a selection is required before proceeding.
            hint (Optional[str]): Help text displayed below the dropdown.
            placeholder (str): Text shown when no option is selected.
            full_width (bool): Whether the dropdown should take up the full width of its container.
            disabled (bool): Whether the dropdown is non-interactive.
            multiple (bool): Whether multiple options can be selected.
            min (Optional[int]): Minimum number of selections required when multiple=True.
            max (Optional[int]): Maximum number of selections allowed when multiple=True.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.options = options
        self.required = required
        self.hint = hint
        self.placeholder = placeholder
        self.full_width = full_width
        self.disabled = disabled
        self.multiple = multiple
        self.min = min
        self.max = max
        self.value = None
        self.multiple_handler = MultipleHandler(
            self.multiple, self.min, self.max, self.required
        )
        self.options_handler = OptionsHandler(self.options)
        self.errors = errors

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "options": self.options_handler.serialized_options(),
            "hint": self.hint,
            "multiple": self.multiple,
            "placeholder": self.placeholder,
            "value": self._serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
            "min": self.min,
            "max": self.max,
        }

    def _run_validators(self) -> List[str]:
        return self.multiple_handler.validate(self.value)

    def _serialize_value(self) -> List:
        list_values = self.multiple_handler.value_to_list(self.value)
        return self.options_handler.ids_from_values(list_values)

    def _parse_value(self, value: Union[List[str], None]):
        list_values = self.options_handler.values_from_ids(value)
        return self.multiple_handler.value_to_list_or_value(list_values)
