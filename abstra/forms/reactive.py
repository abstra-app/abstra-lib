import typing
from abstra_internals.widgets.widget_base import Input


class Reactive(Input):
    type = "reactive"

    def __init__(self, callback: typing.Callable, **kwargs):
        self.set_props(dict(callback=callback, **kwargs))
        self.page = None

    def has_errors(self):
        return self.page.has_errors() if self.page else False

    def render(self, context: dict):
        payload = {}
        payload.update(self.value)
        payload.update(context)
        self.page = self.callback(payload)
        if self.page is None:
            return []

        if self.value:
            self.page.set_values(self.value)
            self.page.set_errors()

        return self.page.render(context)

    def set_value(self, value):
        self.value = value
        if hasattr(self, "page") and self.page:
            self.page.set_values(value)

    def serialize_value(self):
        return self.page.serialize_value() if self.page else {}

    def set_props(self, props):
        self.callback = props.get("callback")
        self.set_value(props.get("initial_value", {}))
        self.page = None

    def set_errors(self):
        if self.page:
            self.page.set_errors()

    def parse_value(self, value):
        if self.page:
            parsed = self.page.parse_value(value)
            return parsed
        else:
            return {}
