from unittest import TestCase

from abstra_internals.modules import import_as_new
from tests.fixtures import clear_dir, init_dir


class TestImportAsNew(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_export_variables(self):
        code = "x = 1"
        file = self.root / "test.py"
        file.write_text(code)
        module = import_as_new("test.py")
        self.assertEqual(module.x, 1)

    def test_reload_variables(self):
        old_code = "x = 1"
        file = self.root / "test.py"
        file.write_text(old_code)
        module = import_as_new("test.py")
        self.assertEqual(module.x, 1)
        new_code = "x = 2"
        file.write_text(new_code)
        module = import_as_new("test.py")
        self.assertEqual(module.x, 2)
