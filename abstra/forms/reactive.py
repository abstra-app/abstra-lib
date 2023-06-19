import typing


class Reactive:
    type = "reactive"

    def __init__(self, callback: typing.Callable):
        self.callback = callback
        self.page = None

    def json(self, payload):
        self.page = self.callback(payload)
        return self.page.json(payload) if self.page else []

    def get_widgets(self):
        return self.page.get_concrete_widgets() if self.page else []
