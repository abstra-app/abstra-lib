from typing import Optional

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class RichTextInput(InputWidget):
    type = "rich-text-input"
    value: str

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        placeholder: Optional[str] = "",
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        value: str = "",
    ):
        self.label = label
        self._key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = value

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
            "disabled": self.disabled,
            "errors": self.errors,
        }
