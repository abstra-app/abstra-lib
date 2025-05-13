import datetime
import re
import time
from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
)


class DateInput(InputWidget):
    """Date input widget with calendar picker.

    Attributes:
        value (Optional[datetime.date]): The date value selected by the user.
    """

    type = "date-input"
    value: Optional[datetime.date]

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
        min_date: Optional[datetime.date] = None,
        max_date: Optional[datetime.date] = None,
    ):
        """Initialize a DateInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether a date must be selected before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
            min_date (Optional[datetime.date]): Earliest selectable date.
            max_date (Optional[datetime.date]): Latest selectable date.
        """
        self.label = label
        self.key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = None
        self.errors = errors
        self.min_date = min_date
        self.max_date = max_date

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "hint": self.hint,
            "label": self.label,
            "value": self._serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
            "minDate": self.min_date.isoformat() if self.min_date else None,
            "maxDate": self.max_date.isoformat() if self.max_date else None,
        }

    def _serialize_value(self) -> str:
        if isinstance(self.value, datetime.date):
            date = self.value.isoformat()
            if "T" in date:
                return date.split("T")[0]
            return date
        if isinstance(self.value, time.struct_time):
            return (
                datetime.datetime.fromtimestamp(time.mktime(self.value))
                .date()
                .isoformat()
            )
        if isinstance(self.value, str) and re.match(
            "^\\d{4}-\\d{2}-\\d{2}$", self.value
        ):
            return self.value
        return ""

    def _parse_value(self, value: str) -> Optional[datetime.date]:
        if not value:
            return None
        try:
            split_value = value.split("T")[0].split("-")
            year = int(split_value[0])
            month = int(split_value[1])
            day = int(split_value[2])
            return datetime.date(year, month, day)
        except Exception:
            raise ValueError("Invalid date string format. Expected YYYY-MM-DD.")

    @property
    def _validators(self):
        return [
            self._basic_validate_required,
            self._validate_date_limits,
        ]

    def _validate_date_limits(self):
        errors = []
        if (
            self.min_date is not None
            and self.value is not None
            and self.value < self.min_date
        ):
            errors.append("i18n_error_min_date")

        if (
            self.max_date is not None
            and self.value is not None
            and self.value > self.max_date
        ):
            errors.append("i18n_error_max_date")

        return errors
