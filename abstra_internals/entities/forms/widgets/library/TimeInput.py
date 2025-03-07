import datetime
import re
from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class TimeInput(InputWidget):
    type = "time-input"
    value: Optional[datetime.time]

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        value: Optional[datetime.time] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        format: str = "24hs",
        errors: Optional[Union[List[str], str]] = None,
    ):
        self.label = label
        self._key = key or label
        self.value = value
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.format = format
        self.errors = self._init_errors(errors)

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "format": self.format,
            "hint": self.hint,
            "value": self.serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> Optional[dict]:
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

    def parse_value(self, value) -> Optional[datetime.time]:
        if value is None or value["hour"] is None or value["minute"] is None:
            return None
        return datetime.time(value["hour"], value["minute"])
