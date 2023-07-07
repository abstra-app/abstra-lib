import unittest, tempfile
from abstra_server.runtimes.dashes.program import PythonProgram, DashPageState
from pathlib import Path
from .fixtures import init_dir
from abstra_server.api import API
from uuid import uuid4 as uuid
from datetime import datetime


class TestProgram(unittest.TestCase):
    def test_program_works(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)
        api = API(root=workspace_root_path)
        dash = api.create_dash()
        code = "a = 1"
        py = PythonProgram(dash, code)
        py.execute_initial_code()
        a = py.ev("a")
        self.assertEqual(a, 1)

        # testing set variable
        py.set_variable("a", 2)
        a = py.ev("a")
        self.assertEqual(a, 2)
