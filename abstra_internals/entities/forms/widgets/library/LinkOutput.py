from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class LinkOutput(OutputWidget):
    """Link output widget for displaying clickable hyperlinks.

    Attributes:
        link_url (str): The URL that the link points to.
        link_text (str): The visible text of the link.
    """

    type = "link-output"

    def __init__(
        self,
        link_url: str,
        *,
        link_text: str = "Click here",
        same_tab: bool = False,
        full_width: bool = False,
    ):
        """Initialize a LinkOutput widget.

        Args:
            link_url (str): The URL that the link points to.
            link_text (str): The visible text of the link.
            same_tab (bool): Whether the link should open in the same tab.
            full_width (bool): Whether the link should take up the full width of its container.
        """
        self.link_url = link_url
        self.link_text = link_text
        self.same_tab = same_tab
        self.full_width = full_width

    def _render(self):
        return {
            "type": self.type,
            "linkText": self.link_text,
            "linkUrl": self.link_url,
            "sameTab": self.same_tab,
            "fullWidth": self.full_width,
        }
