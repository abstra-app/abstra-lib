from unittest import TestCase
from .settings_json import (
    check_settings_json,
    configure_settings_json,
    EverythingSet,
    InvalidSettingsJson,
    MissingPythonPath,
    MismatchedPythonPath,
    NoSettingsJson,
)
from tests.fixtures import init_dir, clear_dir
import json, sys


class CheckSettingsJsonTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_everything_set(self):
        self.root.joinpath(".vscode").mkdir(exist_ok=True)
        self.root.joinpath(".vscode/settings.json").write_text(
            json.dumps({"python.defaultInterpreterPath": sys.executable}, indent=4),
            encoding="utf-8",
        )
        self.assertIsInstance(check_settings_json(), EverythingSet)

    def test_default_no_settings_json(self):
        self.assertIsInstance(check_settings_json(), NoSettingsJson)

    def test_invalid_settings_json_when_different_type(self):
        self.root.joinpath(".vscode").mkdir(exist_ok=True)
        self.root.joinpath(".vscode/settings.json").write_text("[]")
        self.assertIsInstance(check_settings_json(), InvalidSettingsJson)

    def test_invalid_settings_json_when_syntax_error(self):
        self.root.joinpath(".vscode").mkdir(exist_ok=True)
        self.root.joinpath(".vscode/settings.json").write_text("{")
        self.assertIsInstance(check_settings_json(), InvalidSettingsJson)

    def test_missing_python_path(self):
        self.root.joinpath(".vscode").mkdir(exist_ok=True)
        self.root.joinpath(".vscode/settings.json").write_text("{}")
        self.assertIsInstance(check_settings_json(), MissingPythonPath)

    def test_mismatched_python_path(self):
        self.root.joinpath(".vscode").mkdir(exist_ok=True)
        self.root.joinpath(".vscode/settings.json").write_text(
            json.dumps(
                {"python.defaultInterpreterPath": "not the same as sys.executable"},
                indent=4,
            ),
            encoding="utf-8",
        )
        self.assertIsInstance(check_settings_json(), MismatchedPythonPath)


class ConfigureSettingsTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_set_from_empty(self):
        configure_settings_json()
        self.assertIsInstance(check_settings_json(), EverythingSet)

    def test_set_from_existing_config(self):
        self.root.joinpath(".vscode").mkdir(exist_ok=True)
        self.root.joinpath(".vscode/settings.json").write_text(
            json.dumps({"foo": "bar"}), encoding="utf-8"
        )
        configure_settings_json()
        self.assertIsInstance(check_settings_json(), EverythingSet)
        data = json.loads(
            self.root.joinpath(".vscode/settings.json").read_text(encoding="utf-8")
        )
        self.assertEqual(data["python.defaultInterpreterPath"], sys.executable)
        self.assertEqual(data["foo"], "bar")

    def test_set_from_invalid_config(self):
        self.root.joinpath(".vscode").mkdir(exist_ok=True)
        self.root.joinpath(".vscode/settings.json").write_text("[]")
        configure_settings_json()
        self.assertIsInstance(check_settings_json(), EverythingSet)
        data = json.loads(
            self.root.joinpath(".vscode/settings.json").read_text(encoding="utf-8")
        )
        self.assertEqual(data["python.defaultInterpreterPath"], sys.executable)

    def test_do_nothing_when_already_set(self):
        settings_json_path = self.root.joinpath(".vscode/settings.json")
        settings_json_path.parent.mkdir(exist_ok=True)
        settings_json_path.write_text(
            json.dumps({"python.defaultInterpreterPath": sys.executable}, indent=4),
            encoding="utf-8",
        )
        last_modified = settings_json_path.stat().st_mtime
        configure_settings_json()
        self.assertEqual(last_modified, settings_json_path.stat().st_mtime)
