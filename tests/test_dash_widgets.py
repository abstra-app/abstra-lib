import unittest, json
from pathlib import Path

from abstra_internals.server.controller import MainController
from .fixtures import init_dir, clear_dir, copy_dir
from .utils import assert_dash


class TestDashWidgets(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        source_path = Path(__file__).parent.joinpath("./resources/test_dash_widgets")
        copy_dir(source_path, self.root)
        self.controller = MainController()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_text_input(self):
        dash_json = self.controller.get_dash(path="test_text_input")
        msgs_path = "./test_text_input.json"
        msgs = json.load(open(msgs_path, encoding="utf-8"))
        assert_dash(self, dash_json, msgs, execution_id="execution-id")

    def test_text_output(self):
        dash_json = self.controller.get_dash(path="test_text_output")
        msgs_path = "./test_text_output.json"
        msgs = json.load(open(msgs_path, encoding="utf-8"))
        assert_dash(self, dash_json, msgs, execution_id="execution-id")

    def test_all_widgets(self):
        dash_json = self.controller.get_dash(path="test_all_widgets")
        msgs_path = "./test_all_widgets.json"
        msgs = json.load(open(msgs_path, encoding="utf-8"))
        assert_dash(self, dash_json, msgs, execution_id="execution-id")

    def test_kanban(self):
        dash_json = self.controller.get_dash(path="test_kanban")
        msgs_path = "./test_kanban.json"
        msgs = json.load(open(msgs_path, encoding="utf-8"))
        assert_dash(self, dash_json, msgs, execution_id="execution-id")

    def test_pandas_row_selection(self):
        dash_json = self.controller.get_dash(path="test_pandas_row_selection")
        msgs_path = "./test_pandas_row_selection.json"
        msgs = json.load(open(msgs_path, encoding="utf-8"))
        assert_dash(self, dash_json, msgs, execution_id="execution-id")

    def test_pandas_output(self):
        dash_json = self.controller.get_dash(path="test_pandas_output")
        msgs_path = "./test_pandas_output.json"
        msgs = json.load(open(msgs_path, encoding="utf-8"))
        assert_dash(self, dash_json, msgs, execution_id="execution-id")

    def test_plotly(self):
        dash_json = self.controller.get_dash(path="test_plotly")
        msgs_path = "./test_plotly.json"
        msgs = json.load(open(msgs_path, encoding="utf-8"))
        assert_dash(self, dash_json, msgs, execution_id="execution-id")
