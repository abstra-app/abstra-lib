import os
import unittest

from abstra_internals.consts.filepaths import CREDENTIALS_FILEPATH, DOT_ABSTRA_DIR
from abstra_internals.credentials import (
    delete_credentials,
    get_credentials,
    resolve_headers,
    set_credentials,
)
from tests.fixtures import clear_dir, init_dir


class CredentialsTest(unittest.TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self):
        clear_dir(self.root)
        if "ABSTRA_API_TOKEN" in os.environ:
            del os.environ["ABSTRA_API_TOKEN"]

    def test_get_credentials_when_empty(self):
        self.assertIsNone(get_credentials())

    def test_get_credentials_when_file(self):
        self.root.joinpath(DOT_ABSTRA_DIR).mkdir(exist_ok=True)
        self.root.joinpath(CREDENTIALS_FILEPATH).write_text("test")
        self.assertEqual(get_credentials(), "test")

    def test_get_credentials_when_env(self):
        os.environ["ABSTRA_API_TOKEN"] = "test"
        self.assertEqual(get_credentials(), "test")

    def test_set_credentials(self):
        set_credentials("test")
        self.assertEqual(get_credentials(), "test")

    def test_delete_credentials(self):
        set_credentials("test")
        delete_credentials()
        self.assertIsNone(get_credentials())

    def test_resolve_headers_when_empty(self):
        self.assertIsNone(resolve_headers())

    def test_resolve_headers_with_credentials(self):
        set_credentials("test")
        self.assertEqual(resolve_headers(), {"Api-Authorization": "Bearer test"})
