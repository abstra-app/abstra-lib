from .example_instances import example_instances
from abstra.widgets.metadata import metadata
from abstra.widgets.validation import validate_widget_props

generated_widgets = [example_instance.json() for example_instance in example_instances]

del metadata["list-input"]


class TestFunction:
    def test_widget_examples_contains_all_widgets(self):
        for widget_type in metadata:
            if widget_type != "list-input":
                assert any(
                    widget["type"] == widget_type
                    for widget in generated_widgets
                    if widget["type"] != "list-input"
                )

    def test_widgets_exist_in_metadata(self):
        for widget_example in generated_widgets:
            assert widget_example["type"] in metadata

    def test_widgets_props_are_right(self):
        for widget_example in generated_widgets:
            validate_widget_props(widget_example)
