from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class PasswordInput(InputWidget):
    """Password input widget for capturing sensitive text with masked display.

    Attributes:
        value (str): The password value entered by the user.
    """

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
    ):
        """Initialize a PasswordInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            hint (Optional[str]): Help text displayed below the input.
            required (bool): Whether the input must be filled before proceeding.
            full_width (bool): Whether the input should take up the full width of its container.
            lowercase_required (bool): Whether the input must contain at least one lowercase letter.
            uppercase_required (bool): Whether the input must contain at least one uppercase letter.
            special_required (bool): Whether the input must contain at least one special character.
            digit_required (bool): Whether the input must contain at least one digit.
            min_length (Optional[int]): Minimum number of characters required.
            max_length (Optional[int]): Maximum number of characters allowed.
            size (Optional[int]): Size of the input.
            pattern (Optional[str]): Regular expression pattern for input validation.
            autocomplete (Optional[str]): Autocomplete attribute for the input.
            placeholder (Optional[str]): Placeholder text displayed when the input is empty.
            disabled (bool): Whether the input is non-interactive.
            secret (bool): Whether the input is a secret (e.g., for passwords).
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.value = ""
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
        self.errors = errors

    def _render(self):
        return {
            "value": self.value,
            "type": self.type,
            "key": self.key,
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

    def _parse_value(self, value: str) -> str:
        return value
