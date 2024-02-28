from unittest import TestCase

from .utils.dot_abstra import PERSISTENT_DIR
from .constants import get_persistent_dir
from tests.fixtures import init_dir, clear_dir


class GetPersistentDirTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_value(self):
        self.assertFalse((self.root / PERSISTENT_DIR).exists())
        self.assertEqual(self.root / PERSISTENT_DIR, get_persistent_dir())
        self.assertTrue((self.root / PERSISTENT_DIR).exists())
