from abstra_internals.server.api.classes import FormJSON
from utils import assert_form
import unittest, json, os
from pathlib import Path


class TestFormExamples(unittest.TestCase):
    def setUp(self) -> None:
        os.chdir(Path(__file__).parent)

    def test_back_and_forth(self):
        code_path = "./resources/test_form_examples/test_back_and_forth/code.py"
        msgs_path = "./resources/test_form_examples/test_back_and_forth/messages.json"
        msgs = json.load(open(msgs_path))
        file_path = Path(__file__).parent.joinpath(code_path)
        form_json = FormJSON(
            title="Test Form", path="test_form", file=file_path.as_posix()
        )
        assert_form(self, form_json, msgs, session_id="session-id")

    # Tests if required errors are correctly sent when field becomes empty
    def test_required_error(self):
        code_path = "./resources/test_form_examples/test_required_error/code.py"
        msgs_path = "./resources/test_form_examples/test_required_error/messages.json"
        msgs = json.load(open(msgs_path))
        file_path = Path(__file__).parent.joinpath(code_path)
        form_json = FormJSON(
            title="Test Form", path="test_form", file=file_path.as_posix()
        )
        assert_form(self, form_json, msgs, session_id="session-id")

    # Tests if required errors are correctly sent when next button is pressed
    def test_required_error_next_page(self):
        code_path = (
            "./resources/test_form_examples/test_required_error_next_page/code.py"
        )
        msgs_path = (
            "./resources/test_form_examples/test_required_error_next_page/messages.json"
        )
        msgs = json.load(open(msgs_path))
        file_path = Path(__file__).parent.joinpath(code_path)
        form_json = FormJSON(
            title="Test Form", path="test_form", file=file_path.as_posix()
        )
        assert_form(self, form_json, msgs, session_id="session-id")
