import datetime, re
from ..widget_base import Input
from typing import Optional, Union


class TimeInput(Input):
    type = "time-input"

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.label = label
        self.initial_value = kwargs.get("initial_value", "")
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.format = kwargs.get("format", "24hs")
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "format": self.format,
            "hint": self.hint,
            "initialValue": TimeInput.__revert_value(self.initial_value),
            "required": self.required,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
        }

    @staticmethod
    def __revert_value(
        value: Optional[Union[datetime.time, str, dict]]
    ) -> Optional[dict]:
        if isinstance(value, str) and re.match("^\\d{2}:\\d{2}$", value):
            return {
                "hour": int(value.split(":")[0]),
                "minute": int(value.split(":")[1]),
            }
        if isinstance(value, datetime.time):
            return {"hour": value.hour, "minute": value.minute}
        return None

    @staticmethod
    def __convert_answer(answer) -> Optional[datetime.time]:
        return datetime.time(answer["hour"], answer["minute"]) if answer else None

    def convert_answer(self, answer) -> Optional[datetime.time]:
        """
        Returns:
            datetime.time: A datetime.time object representing the value entered by the user
        """
        return self.__convert_answer(answer)
