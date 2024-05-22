import json
import sys
from typing import Union

from abstra_internals.settings import Settings
from abstra_internals.utils import serialize


class EverythingSet:
    pass


class NoSettingsJson:
    pass


class InvalidSettingsJson:
    pass


class MissingPythonPath:
    pass


class MismatchedPythonPath:
    pass


def check_settings_json() -> (
    Union[
        EverythingSet,
        NoSettingsJson,
        InvalidSettingsJson,
        MissingPythonPath,
        MismatchedPythonPath,
    ]
):
    settings_json_file = Settings.root_path.joinpath(".vscode/settings.json")
    if not settings_json_file.exists():
        return NoSettingsJson()

    try:
        if not isinstance(
            json.loads(settings_json_file.read_text(encoding="utf-8")), dict
        ):
            return InvalidSettingsJson()
    except json.JSONDecodeError:
        return InvalidSettingsJson()

    settings_json = json.loads(settings_json_file.read_text(encoding="utf-8"))
    if "python.defaultInterpreterPath" not in settings_json:
        return MissingPythonPath()

    if settings_json["python.defaultInterpreterPath"] != sys.executable:
        return MismatchedPythonPath()

    return EverythingSet()


def is_settings_json_set():
    return isinstance(check_settings_json(), EverythingSet)


def configure_settings_json():
    configuration_check = check_settings_json()
    if isinstance(configuration_check, EverythingSet):
        return
    elif isinstance(configuration_check, NoSettingsJson):
        Settings.root_path.joinpath(".vscode").mkdir(exist_ok=True)
        Settings.root_path.joinpath(".vscode/settings.json").write_text(
            serialize({"python.defaultInterpreterPath": sys.executable}, indent=4),
            encoding="utf-8",
        )
    elif isinstance(configuration_check, InvalidSettingsJson):
        Settings.root_path.joinpath(".vscode/settings.json").write_text(
            serialize({"python.defaultInterpreterPath": sys.executable}, indent=4),
            encoding="utf-8",
        )
    elif isinstance(configuration_check, MissingPythonPath):
        settings_json_file = Settings.root_path.joinpath(".vscode/settings.json")
        settings_json = json.loads(settings_json_file.read_text(encoding="utf-8"))
        settings_json["python.defaultInterpreterPath"] = sys.executable
        settings_json_file.write_text(
            serialize(settings_json, indent=4), encoding="utf-8"
        )
    elif isinstance(configuration_check, MismatchedPythonPath):
        raise Exception("Mismatched python path in settings.json")
    else:
        raise Exception("Unknown configuration check result")
