from datetime import datetime
from typing import List, Optional, Tuple, Union

from abstra_internals.entities.forms.widgets.response_types import AppointmentSlot
from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class AppointmentInput(InputWidget):
    """Appointment scheduling input widget for selecting time slots.

    Attributes:
        value (Optional[AppointmentSlot]): The selected appointment time slot.
    """

    type = "appointment-input"

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        slots: Optional[List[AppointmentSlot]] = None,
        errors: Optional[Union[List[str], str]] = None,
    ) -> None:
        """Initialize an AppointmentInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether a time slot must be selected before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            slots (Optional[List[AppointmentSlot]]): List of available time slots.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self._key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.slots = AppointmentSlot.from_list(slots or [])
        self.errors = self._init_errors(errors)
        self.value = None

    @property
    def value(self) -> Optional[AppointmentSlot]:
        return self._value

    @value.setter
    def value(
        self, value: Optional[Union[AppointmentSlot, dict, Tuple[datetime, datetime]]]
    ) -> None:
        if value is None:
            self._value = None
        if isinstance(value, AppointmentSlot):
            self._value = value
        elif isinstance(value, dict):
            self._value = AppointmentSlot.from_dict(value)
        elif isinstance(value, tuple):
            self._value = AppointmentSlot(*value)
        else:
            raise ValueError(f"Invalid value type {type(value)}")

    def _render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "hint": self.hint,
            "value": self._serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "slots": [s.to_dict() for s in self.slots],
            "errors": self.errors,
        }

    def _serialize_value(self) -> Optional[int]:
        return self.slots.index(self.value) if self.value is not None else None

    def _parse_value(self, value: Optional[int]) -> Optional[AppointmentSlot]:
        if value is None:
            return None
        return self.slots[value]
