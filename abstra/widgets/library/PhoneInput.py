from ..widget_base import Input
from typing import Optional
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

    def _initial_value_to_json(self, initial_value):
        if isinstance(initial_value, str):
            return {"countryCode": "+1", "nationalNumber": initial_value}
        return {
            "countryCode": initial_value["country_code"]
            if "country_code" in initial_value
            else "",
            "nationalNumber": initial_value["national_number"]
            if "national_number" in initial_value
            else "",
        }

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "initialValue": self._initial_value_to_json(self.initial_value),
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
        }

    @staticmethod
    def __revert_value(value: Optional[PhoneResponse]):
        if not value:
            return None
        return {
            "raw": value.raw,
            "masked": value.masked,
            "countryCode": value.country_code,
            "nationalNumber": value.national_number,
        }

    @staticmethod
    def __convert_answer(answer) -> Optional[PhoneResponse]:
        if not answer:
            return None
        return PhoneResponse(
            masked=answer["masked"],
            raw=answer["raw"],
            country_code=answer["countryCode"],
            national_number=answer["nationalNumber"],
        )

    def convert_answer(self, answer) -> Optional[PhoneResponse]:
        """
        Returns:
            PhoneResponse: A dict containing the value entered by the user ({"raw": str, "masked": str})
        """
        return self.__convert_answer(answer)
