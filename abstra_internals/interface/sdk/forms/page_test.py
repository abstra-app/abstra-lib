import unittest
from abstra.forms import Page
from abstra.forms import ListItemSchema


class TestPage(unittest.TestCase):
    def test_reactive_list_dropdown(self):
        schema = ListItemSchema().read_dropdown("dropdown", ["foo", "bar"])

        def render(ctx):
            return Page().read_list(schema, key="list", min=1)

        page = Page().reactive(render)

        rendered = page.render({})

        bar_value = rendered[0]["schemas"][0][0]["options"][1]["value"]

        browser_input = {"list": [{"dropdown": [bar_value]}]}
        parsed_value = page.parse_value(browser_input)

        self.assertEqual(parsed_value, {"list": [{"dropdown": "bar"}]})
