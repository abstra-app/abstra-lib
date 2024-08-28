import re
from abstra_internals.widgets.response_types import PhoneResponse
from abstra_internals.widgets.widget_base import Input


class PhoneInput(Input):
    type = 'phone-input'
    empty_value: PhoneResponse = PhoneResponse(raw='', masked='',
        country_code='', national_number='')

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get('label', 'Label')
        self.value = props.get('initial_value', None)
        self.required = props.get('required', True)
        self.hint = props.get('hint', None)
        self.placeholder = props.get('placeholder', '')
        self.full_width = props.get('full_width', False)
        self.disabled = props.get('disabled', False)
        self.invalid_message = props.get('invalid_message',
            'i18n_error_invalid_phone_number')

    def render(self, ctx: dict):
        return {'type': self.type, 'key': self.key, 'label': self.label,
            'value': self.serialize_value(), 'placeholder': self.
            placeholder, 'required': self.required, 'hint': self.hint,
            'fullWidth': self.full_width, 'disabled': self.disabled,
            'errors': self.errors, 'invalidMessage': self.invalid_message}

    def validate(self):
        errors = []
        if self.required and (self.value.country_code == '' or self.value.
            national_number == ''):
            errors.append('i18n_error_required_field')
        return errors

    def is_value_unset(self):
        return self.value.raw == ''

    def set_value(self, value, set_errors=False):
        if isinstance(value, PhoneResponse):
            self.value = value
        elif isinstance(value, dict):
            self.value = self.parse_value(value)
        elif value is None:
            self.value = self.empty_value
        if set_errors:
            self.set_errors()

    def serialize_value(self):
        if isinstance(self.value, dict):
            return {'countryCode': re.sub('\\D', '', str(self.value.get(
                'country_code', ''))), 'nationalNumber': re.sub('\\D', '',
                str(self.value.get('national_number', '')))}
        if isinstance(self.value, PhoneResponse):
            return {'countryCode': re.sub('\\D', '', str(self.value.
                country_code)), 'nationalNumber': re.sub('\\D', '', str(
                self.value.national_number))}
        return {'countryCode': '', 'nationalNumber': ''}

    def parse_value(self, value) ->PhoneResponse:
        if value is None:
            return self.empty_value
        masked = f"+{value.get('countryCode')} {value.get('nationalNumber')}"
        raw = re.sub('\\D', '', masked)
        return PhoneResponse(raw=raw, masked=masked, country_code=
            f"+{value.get('countryCode')}", national_number=value.get(
            'nationalNumber'))
