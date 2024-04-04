from unittest import TestCase

from tests.fixtures import clear_dir, init_dir

from .constants import get_persistent_dir
from .utils.dot_abstra import PERSISTENT_DIR


class GetPersistentDirTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_value(self):
        self.assertFalse((self.root / PERSISTENT_DIR).exists())
        self.assertEqual(self.root / PERSISTENT_DIR, get_persistent_dir())
        self.assertTrue((self.root / PERSISTENT_DIR).exists())
