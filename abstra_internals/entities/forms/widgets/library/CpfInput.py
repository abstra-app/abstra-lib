from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CpfInput(InputWidget):
    """CPF (Brazilian individual taxpayer registry) input widget.

    Attributes:
        value (str): The CPF number entered by the user.
    """

    type = "cpf-input"
    value: str

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        placeholder: Optional[str] = "000.000.000-00",
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        invalid_message: Optional[str] = "i18n_error_invalid_cpf",
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a CpfInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            placeholder (Optional[str]): Placeholder text displayed when the input is empty.
            required (bool): Whether the input must be filled before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            invalid_message (Optional[str]): Custom error message for invalid CPF numbers.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self._key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = ""
        self.invalid_message = invalid_message
        self.errors = self._init_errors(errors)

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
            "invalidMessage": self.invalid_message,
            "errors": self.errors,
        }
