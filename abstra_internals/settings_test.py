from pathlib import Path
from tempfile import gettempdir
from unittest import TestCase

from abstra_internals.settings import SettingsController


def reset_settings_controller():
    SettingsController._instance = None
    SettingsController._root_path = None
    SettingsController._server_port = None
    SettingsController._public_url = None


class SettingsTest(TestCase):
    def setUp(self) -> None:
        reset_settings_controller()

    def tearDown(self) -> None:
        reset_settings_controller()

    def test_settings_controller_set_valid_root_path(self):
        controller = SettingsController()
        tmpdir = gettempdir()
        controller.set_root_path(tmpdir)
        self.assertEqual(controller.root_path, Path(tmpdir))

    def test_settings_controller_set_deep_valid_root_path(self):
        controller = SettingsController()
        tmpdir = gettempdir()
        controller.set_root_path(tmpdir + "/test")
        self.assertEqual(controller.root_path, Path(tmpdir + "/test"))

    def test_settings_controller_no_default_server_port(self):
        controller = SettingsController()
        self.assertRaises(Exception, lambda: controller.server_port)

    def test_settings_controller_set_str_server_port(self):
        controller = SettingsController()
        controller.set_server_port("3000")
        self.assertEqual(controller.server_port, 3000)

    def test_settings_controller_set_int_server_port(self):
        controller = SettingsController()
        controller.set_server_port(3000)
        self.assertEqual(controller.server_port, 3000)
