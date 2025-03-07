from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class PasswordInput(InputWidget):
    type = "password-input"
    value: str

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        hint: Optional[str] = None,
        required: bool = True,
        full_width: bool = False,
        lowercase_required: bool = False,
        uppercase_required: bool = False,
        special_required: bool = False,
        digit_required: bool = False,
        min_length: Optional[int] = None,
        max_length: Optional[int] = None,
        size: Optional[int] = None,
        pattern: Optional[str] = None,
        autocomplete: Optional[str] = None,
        placeholder: Optional[str] = None,
        disabled: bool = False,
        secret: bool = False,
        errors: Optional[Union[List[str], str]] = None,
        value: str = "",
    ):
        self.label = label
        self._key = key or label
        self.value = value
        self.hint = hint
        self.required = required
        self.full_width = full_width
        self.lowercase_required = lowercase_required
        self.uppercase_required = uppercase_required
        self.special_required = special_required
        self.digit_required = digit_required
        self.min_length = min_length
        self.max_length = max_length
        self.size = size
        self.pattern = pattern
        self.autocomplete = autocomplete
        self.placeholder = placeholder
        self.disabled = disabled
        self.secret = secret
        self.errors = self._init_errors(errors)
        self.value = value

    def render(self):
        return {
            "value": self.value,
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "hint": self.hint,
            "required": self.required,
            "fullWidth": self.full_width,
            "lowercaseRequired": self.lowercase_required,
            "uppercaseRequired": self.uppercase_required,
            "specialRequired": self.special_required,
            "digitRequired": self.digit_required,
            "minLength": self.min_length,
            "maxLength": self.max_length,
            "size": self.size,
            "pattern": self.pattern,
            "autocomplete": self.autocomplete,
            "placeholder": self.placeholder,
            "disabled": self.disabled,
            "secret": self.secret,
            "errors": self.errors,
        }

    def parse_value(self, value: str) -> str:
        return value
