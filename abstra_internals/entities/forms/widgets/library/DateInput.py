import datetime
import re
import time
from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class DateInput(InputWidget):
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
        value: Optional[datetime.date] = None,
        errors: Optional[Union[List[str], str]] = None,
    ):
        self.label = label
        self._key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = value
        self.errors = self._init_errors(errors)

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "hint": self.hint,
            "label": self.label,
            "value": self.serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> str:
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

    def parse_value(self, value: str) -> Optional[datetime.date]:
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
