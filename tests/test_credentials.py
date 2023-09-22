import unittest
from abstra_internals.credentials import (
    get_credentials,
    delete_credentials,
    set_credentials,
)
from .fixtures import init_dir, clear_dir


class TestCredentials(unittest.TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self):
        clear_dir(self.root)

    def test_get_credentials(self):
        self.assertIsNone(get_credentials())

        set_credentials("test")
        self.assertEqual(get_credentials(), "test")

        delete_credentials()
        self.assertIsNone(get_credentials())
