from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class LinkOutput(OutputWidget):
    type = "link-output"

    def __init__(
        self,
        link_url: str,
        *,
        link_text: str = "Click here",
        same_tab: bool = False,
        full_width: bool = False,
    ):
        self.link_url = link_url
        self.link_text = link_text
        self.same_tab = same_tab
        self.full_width = full_width

    def render(self):
        return {
            "type": self.type,
            "linkText": self.link_text,
            "linkUrl": self.link_url,
            "sameTab": self.same_tab,
            "fullWidth": self.full_width,
        }
