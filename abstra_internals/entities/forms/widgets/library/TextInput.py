from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class TextInput(InputWidget):
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
        value: str = "",
        errors: Optional[Union[List[str], str]] = None,
        mask: Optional[str] = None,
        max_length: Optional[int] = None,
        min_length: Optional[int] = None,
    ):
        self.label = label
        self._key = key or label
        self.placeholder = placeholder
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = value
        self.errors = self._init_errors(errors)
        self.mask = mask
        self.max_length = max_length
        self.min_length = min_length

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
            "mask": self.mask,
            "maxLength": self.max_length,
            "minLength": self.min_length,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def _run_validators(self):
        validation_errors = super()._run_validators()
        if self.max_length and len(self.value) > self.max_length:
            validation_errors.append(
                f"Value is too long. Max length is {self.max_length}"
            )
        if self.min_length and len(self.value) < self.min_length:
            validation_errors.append(
                f"Value is too short. Min length is {self.min_length}"
            )
        return validation_errors
