from typing import Dict, List, Optional

from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.template import (
    SPREADED_KEY,
    Template,
    TemplateRenderer,
)
from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class Row(InputWidget):
    """
    Creates a horizontal layout for organizing other widgets side-by-side.

    Attributes:
        value (Dict[str, State]): A dictionary containing the current state/values of the nested widgets.
    """

    type = "row"
    widgets: Template
    value: State
    key: Optional[str]

    def __init__(
        self, widgets: "Template", *, key: Optional[str] = None, errors: List[str] = []
    ):
        """
        Initializes a Row widget.

        Args:
            widgets (Template): A list of widgets to display horizontally in this row.
            key (Optional[str]): An optional key to identify this row. If not provided, one will be generated.
            errors (List[str]): A list of error messages to start with. Defaults to [].
        """
        self.widgets = widgets
        self.value = State()
        self._errors = errors
        for idx, w in enumerate(self.widgets):
            if isinstance(w, InputWidget):
                key = w.key or w.type + str(idx)
                self.value[w.key or f"{self.key}{key}"] = w.value

        self.key = self.compute_key()
        self.required = any(
            w.required for w in self.widgets if isinstance(w, InputWidget)
        )

    def compute_key(self) -> str:
        return (
            SPREADED_KEY
            + "_row_"
            + "_".join(
                w.key if isinstance(w, InputWidget) and w.key else w.type
                for w in self.widgets
            )
        )

    def update_required(self):
        return any(w.required for w in self.widgets if isinstance(w, InputWidget))

    def _render(self):
        renderer = TemplateRenderer(self.widgets)
        output = renderer.render(self.value)
        rendered_widgets = output["widgets"]

        serialized_value = {
            widget["key"]: widget["value"]
            for widget in output["widgets"]
            if "key" in widget
        }

        errors = []
        for rendered_widget in rendered_widgets:
            if "errors" in rendered_widget and rendered_widget["errors"]:
                errors.append(
                    (rendered_widget["label"] or rendered_widget["key"]) + ":"
                )
                errors.extend(rendered_widget["errors"])

        return {
            "type": self.type,
            "key": self.key,
            "widgets": rendered_widgets,
            "value": serialized_value,
            "errors": errors,
        }

    def _parse_value(self, value: dict) -> Dict[str, State]:
        renderer = TemplateRenderer(self.widgets)

        keys = list(key for key in value.keys() if key.startswith(SPREADED_KEY))
        for key in keys:
            if key.startswith(SPREADED_KEY) and isinstance(value[key], dict):
                value.update(value[key])
        parsed = renderer.parse_state(raw_state=value, include_missing=True)
        return parsed
