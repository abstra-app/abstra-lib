from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CodeInput(InputWidget):
    """Code input widget for entering code with syntax highlighting.

    Attributes:
        value (str): The code text entered by the user.
    """

    type = "code-input"
    value: str

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        language: Optional[str] = None,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a CodeInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether the input must be filled before proceeding.
            language (Optional[str]): Programming language for syntax highlighting. Eg. 'python', 'javascript', 'html'.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.required = required
        self.language = language
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
            "language": self.language,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }
