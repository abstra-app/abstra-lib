from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class TextInput(InputWidget):
    """Text input widget for collecting single-line text.

    Attributes:
        value (str): The text value entered by the user.
    """

    type = "text-input"
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
        mask: Optional[str] = None,
        max_length: Optional[int] = None,
        min_length: Optional[int] = None,
    ):
        """Initialize a TextInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            placeholder (str): Placeholder text displayed when the input is empty.
            required (bool): Whether the input must be filled before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
            mask (Optional[str]): String pattern for input masking.
            max_length (Optional[int]): Maximum number of characters allowed.
            min_length (Optional[int]): Minimum number of characters required.
        """
        self.label = label
        self.key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = ""
        self.errors = errors
        self.mask = mask
        self.max_length = max_length
        self.min_length = min_length

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.value,
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "mask": self.mask,
            "maxLength": self.max_length,
            "minLength": self.min_length,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    @property
    def _validators(self):
        return [
            self._basic_validate_required,
            self._validate_length,
        ]

    def _validate_length(self):
        if self.max_length and len(self.value) > self.max_length:
            return [f"Value is too long. Max length is {self.max_length}"]
        if self.min_length and len(self.value) < self.min_length:
            return [f"Value is too short. Min length is {self.min_length}"]
        return []
