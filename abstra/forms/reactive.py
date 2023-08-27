import typing
from uuid import uuid4 as uuid
from abstra.widgets.widget_base import Input


class Reactive(Input):
    type = "reactive"

    def __init__(self, callback: typing.Callable, **kwargs):
        self.set_props(dict(callback=callback, **kwargs))

    def has_errors(self):
        return False

    def render(self, context: dict):
        self.page = self.callback(context)
        if self.page is None:
            return []

        if self.value:
            self.page.set_values(self.value)
        return self.page.render(context)

    def serialize_value(self):
        return self.page.serialize_value() if self.page else []

    def set_props(self, props):
        self.callback = props.get("callback")
        self.set_value(props.get("initial_value", {}))
        self.page = None

    def validate(self):
        errors = []
        if self.page:
            errors.extend(self.page.validate())
        return errors

    def set_value(self, value):
        return super().set_value(value)

    def parse_value(self, value):
        if self.page:
            parsed = self.page.parse_value(value)
            return parsed
        else:
            return {}
