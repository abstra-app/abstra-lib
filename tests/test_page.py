import unittest
from abstra.forms import Page
from abstra.forms import ListItemSchema


class TestPage(unittest.TestCase):
    def test_reactive_list_dropdown(self):
        schema = ListItemSchema().read_dropdown("dropdown", ["foo", "bar"])

        def render(ctx):
            return Page().read_list(schema, key="list")

        page = Page().reactive(render)

        page.render({})

        browser_input = {"list": [{"dropdown": ["bar"]}]}
        parsed_value = page.parse_value(browser_input)

        self.assertEqual(parsed_value, {"list": [{"dropdown": "bar"}]})
