import unittest
from abstra_server.runtimes.dashes.program import PythonProgram
from .fixtures import init_dir, clear_dir
from abstra_server.api import API


class TestProgram(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_program_works(self):
        api = API(root=self.root)
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
