from typing import Any, Callable, Optional

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CustomInput(InputWidget):
    type = "custom-input"
    value: Any

    def __init__(
        self,
        html_body: str,
        *,
        key: Optional[str] = None,
        label: str = "",
        html_head: str = "",
        height: int = 200,
        css: str = "",
        js: str = "",
        value: Any = None,
        full_width: bool = False,
        change_event: Optional[Callable] = None,
    ):
        self.html_body = html_body
        self._key = key or str(hash(html_body))
        self.label = label
        self.html_head = html_head
        self.height = height
        self.css = css
        self.js = js
        self.value = value
        self.full_width = full_width
        self.change_event = change_event

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "value": self.value,
            "htmlBody": self.html_body,
            "height": self.height,
            "htmlHead": self.html_head,
            "css": self.css,
            "js": self.js,
            "fullWidth": self.full_width,
            "errors": self.errors,
        }

    def parse_value(self, value) -> Any:
        if self.change_event is not None:
            self.value = self.change_event(value)
        else:
            self.value = value
        return self.value
