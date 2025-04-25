from abstra_internals.interface.sdk.forms.deprecated.widgets.metadata_parsed import (
    metadata_objects,
)
from abstra_internals.interface.sdk.forms.deprecated.widgets.prop_check import (
    validate_widget_props,
)
from tests.example_instances import example_instances

generated_widgets = [
    example_instance.render({}) for example_instance in example_instances
]


class TestFunction:
    def test_widget_examples_contains_all_widgets(self):
        for widget_type in metadata_objects:
            if widget_type != "list-input":
                assert any(
                    widget["type"] == widget_type
                    for widget in generated_widgets
                    if widget["type"] != "list-input"
                )

    def test_widgets_exist_in_metadata(self):
        for widget_example in generated_widgets:
            assert widget_example["type"] in metadata_objects

    def test_widgets_props_are_right(self):
        for widget_example in generated_widgets:
            validate_widget_props(widget_example)
