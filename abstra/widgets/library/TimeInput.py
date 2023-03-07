from ..widget_base import Input
import datetime
from typing import Optional


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
            "initialValue": self.initial_value,
            "required": self.required,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
        }

    @staticmethod
    def __revert_value(value: Optional[datetime.time]):
        return {"hour": value.hour, "minute": value.minute} if value else None

    @staticmethod
    def __convert_answer(answer) -> Optional[datetime.time]:
        return datetime.time(answer["hour"], answer["minute"]) if answer else None

    def convert_answer(self, answer) -> Optional[datetime.time]:
        """
        Returns:
            datetime.time: A datetime.time object representing the value entered by the user
        """
        return self.__convert_answer(answer)
