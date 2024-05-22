import datetime
import re
import time
from typing import Optional
from abstra_internals.widgets.widget_base import Input


class DateInput(Input):
    type = 'date-input'
    empty_value = None

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get('label', 'Label')
        self.value = props.get('initial_value', self.empty_value)
        self.required = props.get('required', True)
        self.hint = props.get('hint', None)
        self.full_width = props.get('full_width', False)
        self.disabled = props.get('disabled', False)

    def render(self, ctx: dict):
        return {'type': self.type, 'key': self.key, 'hint': self.hint,
            'label': self.label, 'value': self.serialize_value(),
            'required': self.required, 'fullWidth': self.full_width,
            'disabled': self.disabled, 'errors': self.errors}

    def serialize_value(self) ->str:
        if isinstance(self.value, datetime.date):
            return self.value.isoformat()
        if isinstance(self.value, time.struct_time):
            return datetime.datetime.fromtimestamp(time.mktime(self.value)
                ).date().isoformat()
        if isinstance(self.value, str) and re.match('^\\d{4}-\\d{2}-\\d{2}$',
            self.value):
            return self.value
        return ''

    def parse_value(self, value: str) ->Optional[datetime.date]:
        if not value:
            return None
        try:
            split_value = value.split('T')[0].split('-')
            year = int(split_value[0])
            month = int(split_value[1])
            day = int(split_value[2])
            return datetime.date(year, month, day)
        except Exception:
            raise ValueError('Invalid date string format. Expected YYYY-MM-DD.'
                )
