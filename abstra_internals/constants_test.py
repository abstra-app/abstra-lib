from unittest import TestCase

from abstra_internals.constants import get_persistent_dir
from abstra_internals.consts.filepaths import PERSISTENT_DIR_PATH
from tests.fixtures import clear_dir, init_dir


class GetPersistentDirTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_value(self):
        self.assertFalse((self.root / PERSISTENT_DIR_PATH).exists())
        self.assertEqual(self.root / PERSISTENT_DIR_PATH, get_persistent_dir())
        self.assertTrue((self.root / PERSISTENT_DIR_PATH).exists())
