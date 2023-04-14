from ..widget_base import Input
from typing import Optional, Union
from ..response_types import PhoneResponse


class PhoneInput(Input):
    type = "phone-input"

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.label = label
        self.initial_value = kwargs.get("initial_value", "")
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.placeholder = kwargs.get("placeholder", "")
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "initialValue": PhoneInput.__revert_value(self.initial_value),
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
        }

    @staticmethod
    def __revert_value(value: Optional[Union[PhoneResponse, str, dict]]):
        if isinstance(value, str):
            return {"countryCode": None, "nationalNumber": value}
        if isinstance(value, dict):
            return {
                "countryCode": value.get("country_code", ""),
                "nationalNumber": value.get("national_number", ""),
            }
        if isinstance(value, PhoneResponse):
            return {
                "raw": value.raw,
                "masked": value.masked,
                "countryCode": value.country_code,
                "nationalNumber": value.national_number,
            }
        return None

    @staticmethod
    def __convert_answer(answer) -> Optional[PhoneResponse]:
        if not answer:
            return None
        return PhoneResponse(
            masked=answer.get("masked"),
            raw=answer.get("raw"),
            country_code=answer.get("countryCode"),
            national_number=answer.get("nationalNumber"),
        )

    def convert_answer(self, answer) -> Optional[PhoneResponse]:
        """
        Returns:
            PhoneResponse: A dict containing the value entered by the user ({"raw": str, "masked": str})
        """
        return self.__convert_answer(answer)
