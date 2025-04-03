from typing import Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CheckboxInput(InputWidget):
    """Checkbox input widget for capturing boolean values.

    Attributes:
        value (bool): The boolean value indicating whether the checkbox is checked.
    """

    type = "checkbox-input"
    value: bool

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[list, str]] = None,
    ):
        """Initialize a CheckboxInput widget.

        Args:
            label (str): Text label displayed next to the checkbox.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether the checkbox must be checked before proceeding.
            hint (Optional[str]): Help text displayed below the checkbox.
            full_width (bool): Whether the widget should take up the full width of its container.
            disabled (bool): Whether the checkbox is non-interactive.
            errors (Optional[Union[list, str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.errors = errors
        self.value = False

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.value,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }
