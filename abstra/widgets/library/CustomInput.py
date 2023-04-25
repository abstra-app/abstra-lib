from ..widget_base import Input
from typing import Any


class CustomInput(Input):
    type = "custom-input"

    def __init__(self, key: str, html_body: str, **kwargs):
        super().__init__(key)
        self.html_body = html_body
        self.label = kwargs.get("label", "")
        self.html_head = kwargs.get("html_head", "")
        self.css = kwargs.get("css", "")
        self.js = kwargs.get("js", "")
        self.initial_value = kwargs.get("initial_value", None)
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "initialValue": self.initial_value,
            "htmlBody": self.html_body,
            "htmlHead": self.html_head,
            "css": self.css,
            "js": self.js,
            "columns": self.columns,
            "fullWidth": self.full_width,
        }

    def convert_answer(self, answer) -> Any:
        return answer
