import re
from typing import Optional

from abstra_internals.entities.forms.widgets.response_types import PhoneResponse
from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class PhoneInput(InputWidget):
    """Phone number input widget with country code selection.

    Attributes:
        value (PhoneResponse): The phone number entered by the user.
    """

    type = "phone-input"
    value: PhoneResponse

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        placeholder: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[str] = None,
        invalid_message: Optional[str] = None,
    ):
        """Initialize a PhoneInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            placeholder (Optional[str]): Placeholder text displayed when the input is empty.
            required (bool): Whether the input must be filled before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            errors (Optional[str]): Pre-defined validation error messages to display.
            invalid_message (Optional[str]): Custom error message for invalid phone numbers.
        """
        self.label = label
        self._key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = self.make_empty()
        self.errors = self._init_errors(errors)
        self.invalid_message = invalid_message

    def make_empty(self):
        return PhoneResponse(raw="", masked="", country_code="", national_number="")

    def _render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "value": self._serialize_value(),
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
            "invalidMessage": self.invalid_message,
        }

    def _run_validators(self):
        errors = []
        if self.required and (
            self.value.country_code == "" or self.value.national_number == ""
        ):
            errors.append("i18n_error_required_field")
        return errors

    def is_value_unset(self):
        return self.value.raw == ""

    def _set_value(self, value, set_errors=False):
        if isinstance(value, PhoneResponse):
            self.value = value
        elif isinstance(value, dict):
            self.value = self._parse_value(value)
        elif value is None:
            self.value = self.make_empty()
        if set_errors:
            self._set_errors()

    def _serialize_value(self):
        if isinstance(self.value, dict):
            return {
                "countryCode": re.sub(
                    "\\D", "", str(self.value.get("country_code", ""))
                ),
                "nationalNumber": re.sub(
                    "\\D", "", str(self.value.get("national_number", ""))
                ),
            }
        if isinstance(self.value, PhoneResponse):
            return {
                "countryCode": re.sub("\\D", "", str(self.value.country_code)),
                "nationalNumber": re.sub("\\D", "", str(self.value.national_number)),
            }
        return {"countryCode": "", "nationalNumber": ""}

    def _parse_value(self, value) -> PhoneResponse:
        if value is None:
            return self.make_empty()
        masked = f"+{value.get('countryCode')} {value.get('nationalNumber')}"
        raw = re.sub("\\D", "", masked)
        return PhoneResponse(
            raw=raw,
            masked=masked,
            country_code=f"+{value.get('countryCode')}",
            national_number=value.get("nationalNumber"),
        )
