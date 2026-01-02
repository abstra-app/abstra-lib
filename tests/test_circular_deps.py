from unittest import TestCase

from circular_imports import cycles_in_path


class TestCircularDeps(TestCase):
    def test_no_cycles(self):
        cycles = cycles_in_path(".", ".venv,build")
        # Filter out false positives: single-file "cycles" caused by
        # file and directory having the same name (e.g., connectors.py and connectors/)
        real_cycles = [c for c in cycles if len(c) > 1]
        self.assertEqual(len(real_cycles), 0)
