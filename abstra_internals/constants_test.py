from unittest import TestCase
from .constants import get_persistent_dir
from tests.fixtures import init_dir, clear_dir


class GetPersistentDirTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_value(self):
        self.assertFalse((self.root / ".abstra" / "persistent").exists())
        self.assertEqual(self.root / ".abstra" / "persistent", get_persistent_dir())
        self.assertTrue((self.root / ".abstra" / "persistent").exists())
