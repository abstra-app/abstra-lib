from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CnpjInput(InputWidget):
    type = "cnpj-input"
    value: str

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        placeholder: Optional[str] = "00.000.000/0001-00",
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        value: str = "",
        invalid_message: Optional[str] = "i18n_error_invalid_cnpj",
        errors: Optional[Union[List[str], str]] = None,
    ):
        self.label = label
        self._key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = value
        self.invalid_message = invalid_message
        self.errors = self._init_errors(errors)

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
            "invalidMessage": self.invalid_message,
            "errors": self.errors,
        }
