from ..widget_base import Input
from typing import Union, Optional
import datetime
import time


class DateInput(Input):
    type = "date-input"

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.label = label
        self.initial_value = kwargs.get("initial_value", None)
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.disabled = kwargs.get("disabled", False)

    @staticmethod
    def convert_value(value: Union[datetime.date, time.struct_time, str]) -> str:
        if isinstance(value, datetime.date):
            return value.isoformat()
        elif isinstance(value, time.struct_time):
            return (
                datetime.datetime.fromtimestamp(time.mktime(value)).date().isoformat()
            )
        return value

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "hint": self.hint,
            "label": self.label,
            "initialValue": DateInput.convert_value(self.initial_value)
            if self.initial_value
            else "",
            "required": self.required,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
        }

    @staticmethod
    def __revert_value(value: Union[datetime.date, time.struct_time, str]) -> str:
        return DateInput.convert_value(value)

    @staticmethod
    def __convert_answer(answer: str) -> Optional[datetime.date]:
        if not answer:
            return None
        try:
            split_answer = answer.split("T")[0].split("-")
            year = int(split_answer[0])
            month = int(split_answer[1])
            day = int(split_answer[2])
            return datetime.date(year, month, day)
        except Exception:
            raise ValueError("Invalid date string format. Expected YYYY-MM-DD.")

    def convert_answer(self, answer: str) -> Optional[datetime.date]:
        """
        Returns:
            datetime.date: The value entered by the user
        """
        return self.__convert_answer(answer)
