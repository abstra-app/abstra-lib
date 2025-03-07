import re
from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class EmailInput(InputWidget):
    type = "email-input"
    value: str

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        placeholder: Optional[str] = "",
        full_width: bool = False,
        invalid_email_message: str = "i18n_error_invalid_email",
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
        value: str = "",
    ):
        self.label = label
        self._key = key or label
        self.required = required
        self.hint = hint
        self.placeholder = placeholder
        self.full_width = full_width
        self.invalid_email_message = invalid_email_message
        self.disabled = disabled
        self.value = value
        self.errors = self._init_errors(errors)

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "value": self.value,
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "invalidEmailMessage": self.invalid_email_message,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def _run_validators(self) -> List[str]:
        errors = super()._run_validators()
        if len(self.value) == 0:
            return errors
        is_valid_email = bool(
            re.search(
                '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                self.value.strip().lower(),
            )
        )
        if not is_valid_email:
            errors.append(self.invalid_email_message)
        return errors
