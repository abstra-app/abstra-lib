from abstra_server.runtimes.dashes.program import PythonProgram
from abstra_server.api.classes import DashJSON, SlotJSON
import unittest

dash_page_state = {"widgets": {"widgetA": {"value": None}, "widgetB": {"value": None}}}


def prepare_program(slot_dict: dict):
    dash = DashJSON.from_dict(
        {
            "path": "foo",
            "file": "",
            "layout": {
                "version": "0.2",
                "slot": slot_dict,
                "props": {},
            },
            "title": "foo",
        }
    )
    program = PythonProgram(dash, "print('hello world')")
    program.root = SlotJSON(slot_dict)
    return program


no_slots_layout = {
    "widgetA": {
        "id": "widgetA",
        "type": "text-input",
        "props": {"label": '"label"', "placeholder": '"placeholder"'},
        "events": {},
        "colEnd": 8,
        "rowEnd": 5,
        "colStart": 6,
        "rowStart": 3,
        "variable": None,
    }
}

one_grid_layout = {
    "gridBlock": {
        "id": "gridBlock",
        "type": "if-block",
        "row": 1,
        "height": 5,
        "order": 0,
        "props": {"condition": "True"},
        "slot": {
            "widgetA": {
                "type": "text-input",
                "props": {"label": '"label"', "placeholder": '"placeholder"'},
                "events": {},
                "rowStart": 2,
                "rowEnd": 4,
                "colStart": 6,
                "colEnd": 8,
                "id": "widgetA",
                "variable": None,
            }
        },
    },
}


class TestComputeWidgets(unittest.TestCase):
    def test_get_widget_simple_case(self):
        program = prepare_program(no_slots_layout)
        widget = program._PythonProgram__get_widget("widgetA")
        self.assertEqual(widget.__dict__, no_slots_layout["widgetA"])

    def test_get_widget_one_grid(self):
        program = prepare_program(one_grid_layout)
        widget = program._PythonProgram__get_widget("widgetA")
        self.assertEqual(
            widget.__dict__, one_grid_layout["gridBlock"]["slot"]["widgetA"]
        )
