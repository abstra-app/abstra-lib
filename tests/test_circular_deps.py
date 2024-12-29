from unittest import TestCase

from circular_imports import cycles_in_path


class TestCircularDeps(TestCase):
    def test_no_cycles(self):
        cycles = cycles_in_path(".", ".venv,build")
        self.assertEqual(len(cycles), 0)
