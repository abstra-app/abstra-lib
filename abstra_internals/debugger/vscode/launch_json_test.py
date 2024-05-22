from unittest import TestCase

from abstra_internals.debugger.vscode.launch_json import (
    configure_launch_json,
    is_launch_json_configured,
)
from abstra_internals.utils import serialize
from tests.fixtures import clear_dir, init_dir


class ConfigureLaunchJsonTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_add_json_when_empty(self):
        self.assertFalse(is_launch_json_configured())

        configure_launch_json()

        self.assertTrue(is_launch_json_configured())

    def test_add_json_when_not_empty(self):
        launch_json_path = self.root.joinpath(".vscode/launch.json")
        launch_json_path.parent.mkdir(exist_ok=True, parents=True)
        launch_json_path.write_text(
            serialize({"version": "0.2.0", "configurations": []}), encoding="utf-8"
        )

        self.assertFalse(is_launch_json_configured())

        configure_launch_json()

        self.assertTrue(is_launch_json_configured())

    def test_do_nothing_when_already_configured(self):
        configure_launch_json()

        launch_json_path = self.root.joinpath(".vscode/launch.json")
        last_modified = launch_json_path.stat().st_mtime

        self.assertTrue(is_launch_json_configured())

        configure_launch_json()

        self.assertTrue(is_launch_json_configured())
        self.assertEqual(last_modified, launch_json_path.stat().st_mtime)


class IsLaunchJsonConfiguredTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_when_not_exists(self):
        self.assertFalse(is_launch_json_configured())

    def test_when_exists_but_no_config(self):
        launch_json_path = self.root.joinpath(".vscode/launch.json")
        launch_json_path.parent.mkdir(exist_ok=True, parents=True)
        launch_json_path.write_text(
            serialize({"version": "0.2.0", "configurations": []}), encoding="utf-8"
        )

        self.assertFalse(is_launch_json_configured())

    def test_when_exists_correctly(self):
        launch_json_path = self.root.joinpath(".vscode/launch.json")
        launch_json_path.parent.mkdir(exist_ok=True, parents=True)
        launch_json_path.write_text(
            serialize(
                {
                    "version": "0.2.0",
                    "configurations": [
                        {
                            "name": "Abstra debugger",
                            "type": "python",
                            "request": "attach",
                            "connect": {
                                "host": "localhost",
                                "port": "${input:abstraDebugPort}",
                            },
                        }
                    ],
                    "inputs": [{"id": "abstraDebugPort", "type": "promptString"}],
                }
            ),
            encoding="utf-8",
        )

        self.assertTrue(is_launch_json_configured())
