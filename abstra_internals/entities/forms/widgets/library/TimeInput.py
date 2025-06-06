import datetime
import re
from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class TimeInput(InputWidget):
    """Time input widget with time picker.

    Attributes:
        value (Optional[datetime.time]): The time value selected by the user.
    """

    type = "time-input"
    value: Optional[datetime.time]

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        format: str = "24hs",
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a TimeInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether a time must be selected before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            format (str): The format of the time input.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.value = None
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.format = format
        self.errors = errors

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "format": self.format,
            "hint": self.hint,
            "value": self._serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def _serialize_value(self) -> Optional[dict]:
        if isinstance(self.value, str) and re.match("^\\d{2}:\\d{2}$", self.value):
            return {
                "hour": int(self.value.split(":")[0]),
                "minute": int(self.value.split(":")[1]),
            }
        if isinstance(self.value, datetime.time):
            return {"hour": self.value.hour, "minute": self.value.minute}
        if self.value is None:
            return None
        return {"hour": 0, "minute": 0}

    def _parse_value(self, value) -> Optional[datetime.time]:
        if value is None or value["hour"] is None or value["minute"] is None:
            return None
        return datetime.time(value["hour"], value["minute"])
