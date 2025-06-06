from typing import Callable, List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    LabelValueDict,
    OptionsHandler,
)


class ChecklistInput(InputWidget):
    """Checklist input widget for selecting multiple options from a list.

    Attributes:
        value (List[object]): The list of selected values.
    """

    type = "checklist-input"
    value: List[object]

    def __init__(
        self,
        label: str,
        options: Union[List["LabelValueDict"], List[str]],
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        min: int = 0,
        max: Optional[int] = None,
        errors: Optional[List[str]] = None,
    ):
        """Initialize a ChecklistInput widget.

        Args:
            label (str): Text label displayed above the checklist.
            options (Union[List[LabelValueDict], List[str]]): List of options to choose from, either as {"label": str, "value": str} dictionaries or simple strings.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether at least one option must be selected before proceeding.
            hint (Optional[str]): Help text displayed below the checklist.
            full_width (bool): Whether the checklist should take up the full width of its container.
            disabled (bool): Whether the checklist is non-interactive.
            min (int): Minimum number of options that must be selected.
            max (Optional[int]): Maximum number of options that can be selected.
            errors (Optional[List[str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.options = options
        self.value = []
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.min: int = min
        self.max = max or len(self.options)
        self.options_handler = OptionsHandler(self.options)
        self.errors = errors

    def _checklist_validate_required(self) -> List[str]:
        if not self.required and len(self.value) == 0:
            return []
        errors = []
        if len(self.value) < self.min:
            if len(self.options) == 1:
                errors.append("i18n_error_required_field")
            else:
                errors.append("i18n_error_min_list")
        if len(self.value) > self.max:
            errors.append("i18n_error_max_list")
        return errors

    @property
    def _validators(self) -> List[Callable[[], List[str]]]:
        return [self._checklist_validate_required]

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "options": self.options_handler.serialized_options(),
            "label": self.label,
            "value": self._serialize_value(),
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
            "min": self.min,
            "max": self.max,
        }

    def _serialize_value(self) -> List:
        return self.options_handler.ids_from_values(self.value)

    def _parse_value(self, value):
        return self.options_handler.values_from_ids(value)
