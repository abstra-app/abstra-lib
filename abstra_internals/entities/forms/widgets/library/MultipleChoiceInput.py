from typing import Any, List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    AbstraOption,
    InputWidget,
    MultipleHandler,
    OptionsHandler,
)


class MultipleChoiceInput(InputWidget):
    """Multiple choice input widget for selecting a single option from a set of radio buttons.

    Attributes:
        value (Optional[Union[List[Any], Any, None]]): The selected option value.
    """

    type = "multiple-choice-input"
    value: Union[List[Any], Any, None]

    def __init__(
        self,
        label: str,
        options: List["AbstraOption"],
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        multiple: bool = False,
        min: Optional[int] = None,
        max: Optional[int] = None,
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a MultipleChoiceInput widget.

        Args:
            label (str): Text label displayed above the options.
            options (List[AbstraOption]): List of options to choose from, as AbstraOption objects.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether an option must be selected before proceeding.
            hint (Optional[str]): Help text displayed below the options.
            full_width (bool): Whether the widget should take up the full width of its container.
            disabled (bool): Whether the widget is non-interactive.
            multiple (bool): Whether multiple options can be selected.
            min (Optional[int]): Minimum number of options that can be selected.
            max (Optional[int]): Maximum number of options that can be selected.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.options = options
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.multiple = multiple
        self.min = min
        self.max = max
        self.empty_value = [] if self.multiple else None
        self.multiple_handler = MultipleHandler(
            self.multiple, self.min, self.max, self.required
        )
        self.options_handler = OptionsHandler(self.options)
        self.value = [] if self.multiple else None
        self.errors = errors

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "options": self.options_handler.serialized_options(),
            "hint": self.hint,
            "multiple": self.multiple,
            "value": self._serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "min": self.min,
            "max": self.max,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def _run_validators(self) -> List[str]:
        return self.multiple_handler.validate(self.value)

    def _serialize_value(self) -> List:
        list_values = self.multiple_handler.value_to_list(self.value)
        return self.options_handler.ids_from_values(list_values)

    def _parse_value(self, value: Union[List[str], None]):
        list_values = self.options_handler.values_from_ids(value)
        return self.multiple_handler.value_to_list_or_value(list_values)
