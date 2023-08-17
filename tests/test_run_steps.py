import unittest
from pathlib import Path
from .utils import assert_form
import json
import os


class TestRunSteps(unittest.TestCase):
    def setUp(self) -> None:
        os.chdir(Path(__file__).parent)

    def test_back_and_forth(self):
        code_path = "./resources/test_run_steps/test_back_and_forth/code.py"
        msgs_path = "./resources/test_run_steps/test_back_and_forth/messages.json"
        code = open(code_path).read()
        msgs = json.load(open(msgs_path))
        assert_form(code, msgs, session_id="session-id")
