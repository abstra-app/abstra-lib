from abstra_internals.widgets.widget_base import Input


class PasswordInput(Input):
    type = 'password-input'

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get('label', 'Label')
        self.hint = props.get('hint', None)
        self.required = props.get('required', True)
        self.full_width = props.get('full_width', False)
        self.lowercase_required = props.get('lowercase_required', True)
        self.uppercase_required = props.get('uppercase_required', True)
        self.special_required = props.get('special_required', True)
        self.digit_required = props.get('digit_required', True)
        self.min_length = props.get('min_length', 8)
        self.max_length = props.get('max_length', None)
        self.size = props.get('size', None)
        self.pattern = props.get('pattern', None)
        self.autocomplete = props.get('autocomplete', 'current-password')
        self.placeholder = props.get('placeholder', '')
        self.disabled = props.get('disabled', False)
        self.value = ''
        self.secret = True

    def render(self, ctx: dict):
        return {'value': self.serialize_value(), 'type': self.type, 'key':
            self.key, 'label': self.label, 'hint': self.hint, 'required':
            self.required, 'fullWidth': self.full_width,
            'lowercaseRequired': self.lowercase_required,
            'uppercaseRequired': self.uppercase_required, 'specialRequired':
            self.special_required, 'digitRequired': self.digit_required,
            'minLength': self.min_length, 'maxLength': self.max_length,
            'size': self.size, 'pattern': self.pattern, 'autocomplete':
            self.autocomplete, 'placeholder': self.placeholder, 'disabled':
            self.disabled, 'secret': self.secret, 'errors': self.errors}

    def serialize_value(self) ->str:
        return self.value or ''

    def parse_value(self, value: str) ->str:
        return value
