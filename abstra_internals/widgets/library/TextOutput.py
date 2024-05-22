from abstra_internals.widgets.widget_base import Output


class TextOutput(Output):
    type = 'text-output'

    def __init__(self, text: str, **kwargs):
        self.set_props(dict(text=text, **kwargs))

    def set_props(self, props):
        self.text = str(props['text'])
        self.size = props.get('size', 'medium')
        self.full_width = props.get('full_width', False)

    def render(self, ctx: dict):
        return {'type': self.type, 'text': self.text, 'size': self.size,
            'fullWidth': self.full_width}
