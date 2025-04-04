from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class ToggleInput(InputWidget):
    """Toggle switch input widget for capturing boolean values.

    Attributes:
        value (bool): The boolean value indicating whether the toggle is on or off.
    """

    type = "toggle-input"
    value: bool

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        on_text: str = "Yes",
        off_text: str = "No",
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a ToggleInput widget.

        Args:
            label (str): Text label displayed next to the toggle.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            on_text (str): Text to display when the toggle is on.
            off_text (str): Text to display when the toggle is off.
            required (bool): Whether the toggle must be switched on before proceeding.
            hint (Optional[str]): Help text displayed below the toggle.
            full_width (bool): Whether the widget should take up the full width of its container.
            disabled (bool): Whether the toggle is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.on_text = on_text
        self.off_text = off_text
        self.value = False
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.errors = errors

    def is_value_unset(self):
        return False

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "onText": self.on_text,
            "offText": self.off_text,
            "value": self._serialize_value(),
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def _serialize_value(self) -> bool:
        return self.value or False

    def _parse_value(self, value: bool) -> bool:
        return bool(value)
