from abstra_internals.widgets.widget_base import Output


class LinkOutput(Output):
    type = 'link-output'

    def __init__(self, link_url: str, **kwargs):
        self.set_props(dict(link_url=link_url, **kwargs))

    def set_props(self, props):
        self.link_url = props.get('link_url', '')
        self.link_text = props.get('link_text', 'Click here')
        self.same_tab = props.get('same_tab', False)
        self.full_width = props.get('full_width', False)

    def render(self, ctx: dict):
        return {'type': self.type, 'linkText': self.link_text, 'linkUrl':
            self.link_url, 'sameTab': self.same_tab, 'fullWidth': self.
            full_width}
