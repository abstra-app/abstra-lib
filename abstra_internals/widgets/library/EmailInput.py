import re
from typing import List
from abstra_internals.widgets.widget_base import Input


class EmailInput(Input):
    type = 'email-input'
    empty_value = ''
    value: str

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get('label', 'Label')
        self.value = props.get('initial_value', self.empty_value)
        self.required = props.get('required', True)
        self.hint = props.get('hint', None)
        self.placeholder = props.get('placeholder', '')
        self.full_width = props.get('full_width', False)
        self.invalid_email_message = props.get('invalid_email_message',
            'i18n_error_invalid_email')
        self.disabled = props.get('disabled', False)

    def render(self, ctx: dict):
        return {'type': self.type, 'key': self.key, 'label': self.label,
            'value': self.serialize_value(), 'placeholder': self.
            placeholder, 'required': self.required, 'hint': self.hint,
            'fullWidth': self.full_width, 'invalidEmailMessage': self.
            invalid_email_message, 'disabled': self.disabled, 'errors':
            self.errors}

    def serialize_value(self) ->str:
        return self.value if self.value else ''

    def validate(self) ->List[str]:
        errors = super().validate()
        if len(self.value) == 0:
            return errors
        is_valid_email = bool(re.search(
            '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
            , self.value.strip().lower()))
        if not is_valid_email:
            errors.append(self.invalid_email_message)
        return errors
