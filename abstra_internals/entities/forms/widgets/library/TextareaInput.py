from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class TextareaInput(InputWidget):
    """Textarea input widget for collecting multi-line text.

    Attributes:
        value (str): The multi-line text value entered by the user.
    """

    type = "textarea-input"
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
    ):
        """Initialize a TextareaInput widget.

        Args:
            label (str): Text label displayed above the textarea.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            placeholder (str): Placeholder text displayed when the textarea is empty.
            required (bool): Whether the textarea must be filled before proceeding.
            hint (Optional[str]): Help text displayed below the textarea.
            full_width (bool): Whether the textarea should take up the full width of its container.
            disabled (bool): Whether the textarea is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
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
            "disabled": self.disabled,
            "errors": self.errors,
        }
