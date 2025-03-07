from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CodeInput(InputWidget):
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
        value: str = "",
        errors: Optional[Union[List[str], str]] = None,
    ):
        self.label = label
        self._key = key or label
        self.required = required
        self.language = language
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = value
        self.errors = self._init_errors(errors)

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "value": self.value,
            "language": self.language,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }
