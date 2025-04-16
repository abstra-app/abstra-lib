from typing import Any, Callable, List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CustomInput(InputWidget):
    """Custom HTML input widget for creating custom interactive components.

    Attributes:
        value (Any): The value returned by the custom component.
    """

    type = "custom-input"
    value: Any

    def __init__(
        self,
        html_body: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        label: str = "",
        html_head: str = "",
        height: int = 200,
        css: str = "",
        js: str = "",
        full_width: bool = False,
        change_event: Optional[Callable] = None,
        errors: Optional[Union[List[str], str]] = None,
    ):
        """Initialize a CustomInput widget.

        Args:
            html_body (str): HTML content for the body of the custom component.
            key (Optional[str]): Identifier for the widget, defaults to hash of html_body if not provided.
            required (bool): Whether the component must be filled before proceeding.
            label (str): Text label displayed above the component.
            html_head (str): HTML content for the head section.
            height (int): Height of the component in pixels.
            css (str): CSS styles for the component.
            js (str): JavaScript code for the component.
            full_width (bool): Whether the component should take up the full width of its container.
            change_event (Optional[Callable]): Function to process value changes before storing.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.html_body = html_body
        self.key = key or str(hash(html_body))
        self.required = required
        self.label = label
        self.html_head = html_head
        self.height = height
        self.css = css
        self.js = js
        self.value = None
        self.full_width = full_width
        self.change_event = change_event
        self.errors = errors

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.value,
            "required": self.required,
            "htmlBody": self.html_body,
            "height": self.height,
            "htmlHead": self.html_head,
            "css": self.css,
            "js": self.js,
            "fullWidth": self.full_width,
            "errors": self.errors,
        }

    def _parse_value(self, value) -> Any:
        if self.change_event is not None:
            self.value = self.change_event(value)
        else:
            self.value = value
        return self.value
