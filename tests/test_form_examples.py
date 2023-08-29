import unittest
from pathlib import Path
from .utils import assert_form
import json
import os


class TestFormExamples(unittest.TestCase):
    def setUp(self) -> None:
        os.chdir(Path(__file__).parent)

    def test_back_and_forth(self):
        code_path = "./resources/test_form_examples/test_back_and_forth/code.py"
        msgs_path = "./resources/test_form_examples/test_back_and_forth/messages.json"
        code = open(code_path).read()
        msgs = json.load(open(msgs_path))
        assert_form(self, code, msgs, session_id="session-id")

    # Tests if required errors are correctly sent when field becomes empty
    def test_required_error(self):
        code_path = "./resources/test_form_examples/test_required_error/code.py"
        msgs_path = "./resources/test_form_examples/test_required_error/messages.json"
        code = open(code_path).read()
        msgs = json.load(open(msgs_path))
        assert_form(self, code, msgs, session_id="session-id")

    # Tests if required errors are correctly sent when next button is pressed
    def test_required_error_next_page(self):
        code_path = (
            "./resources/test_form_examples/test_required_error_next_page/code.py"
        )
        msgs_path = (
            "./resources/test_form_examples/test_required_error_next_page/messages.json"
        )
        code = open(code_path).read()
        msgs = json.load(open(msgs_path))
        assert_form(self, code, msgs, session_id="session-id")

    # def test_list_reactive(self):
    #     code_path = "./resources/test_run_steps/test_list_reactive/code.py"
    #     msgs_path = "./resources/test_run_steps/test_list_reactive/messages.json"
    #     code = open(code_path).read()
    #     msgs = json.load(open(msgs_path))
    #     assert_form(self, code, msgs, session_id="session-id")
