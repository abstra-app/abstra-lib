import re
from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class EmailInput(InputWidget):
    """Email input widget for capturing email addresses.

    Attributes:
        value (str): The email address entered by the user.
    """

    type = "email-input"
    value: str

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        placeholder: str = "",
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
        max_length: Optional[int] = None,
        min_length: Optional[int] = None,
    ):
        """Initialize an EmailInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            placeholder (str): Placeholder text displayed when the input is empty.
            required (bool): Whether the input must be filled before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
            max_length (Optional[int]): Maximum number of characters allowed.
            min_length (Optional[int]): Minimum number of characters required.
        """
        self.label = label
        self._key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = ""
        self.errors = self._init_errors(errors)
        self.max_length = max_length
        self.min_length = min_length

    def _render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "value": self.value,
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
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
            errors.append("i18n_error_invalid_email")
        return errors
