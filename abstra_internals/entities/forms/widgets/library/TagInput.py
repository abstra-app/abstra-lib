from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class TagInput(InputWidget):
    """Tag input widget for entering multiple tag values.

    Attributes:
        value (List[str]): The list of tag values entered by the user.
    """

    type = "tag-input"
    value: List[str]

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
        """Initialize a TagInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            placeholder (str): Placeholder text displayed when the input is empty.
            required (bool): Whether at least one tag must be entered before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = []
        self.errors = errors

    def is_value_unset(self):
        return False

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
