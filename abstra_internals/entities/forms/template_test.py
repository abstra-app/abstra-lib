from unittest import TestCase

from abstra_internals.entities.forms.widgets.library import Row, TextInput

from .template import TemplateRenderer


class TemplateRendererParseStateTest(TestCase):
    def test_simple(self):
        renderer = TemplateRenderer(
            [
                TextInput("name"),
                TextInput("age"),
            ]
        )

        raw_state = {"name": "Alice", "age": 30}
        state = renderer.parse_state(raw_state=raw_state, include_missing=True)

        self.assertEqual(state["name"], "Alice")
        self.assertEqual(state["age"], 30)

    def test_with_row(self):
        row = Row(
            [
                TextInput("first_name"),
                TextInput("last_name"),
            ]
        )
        renderer = TemplateRenderer(
            [
                TextInput("title"),
                # A Row widget containing two TextInput widgets
                row,
            ]
        )

        raw_state = {
            "title": "Ms.",
            row.key: {"first_name": "Alice", "last_name": "Smith"},
        }
        state = renderer.parse_state(raw_state=raw_state, include_missing=True)
        self.assertEqual(state["title"], "Ms.")
        self.assertEqual(state["first_name"], "Alice")
        self.assertEqual(state["last_name"], "Smith")
