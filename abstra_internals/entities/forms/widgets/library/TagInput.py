from typing import Any, List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class TagInput(InputWidget):
    type = "tag-input"
    value: List[Any]

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
        value: Optional[List[str]] = None,
        errors: Optional[Union[List[str], str]] = None,
    ):
        self.label = label
        self._key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = value or []
        self.errors = self._init_errors(errors)

    def is_value_unset(self):
        return False

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
