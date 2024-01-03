import json
from ...settings import Settings
from ...templates import vscode_launch_json

CONNECTED_PORT = None


def is_launch_json_configured():
    launch_json_file = Settings.root_path.joinpath(".vscode/launch.json")
    if not launch_json_file.exists():
        return False

    launch_json = json.loads(launch_json_file.read_text(encoding="utf-8"))
    if launch_json["version"] != "0.2.0":
        return False

    configurations = launch_json["configurations"]
    if len(configurations) == 0:
        return False
    configuration = [c for c in configurations if c["name"] == "Abstra debugger"][0]
    if configuration["type"] != "python":
        return False
    if configuration["request"] != "attach":
        return False
    if configuration["connect"]["host"] not in ["localhost", "127.0.0.1", "0.0.0.0"]:
        return False
    if configuration["connect"]["port"] != "${input:abstraDebugPort}":
        return False
    inputs = launch_json["inputs"]
    if len(inputs) == 0:
        return False
    input = [i for i in inputs if i["id"] == "abstraDebugPort"][0]
    if input["type"] != "promptString":
        return False
    if input["id"] != "abstraDebugPort":
        return False
    return True


def configure_launch_json():
    if is_launch_json_configured():
        return
    Settings.root_path.joinpath(".vscode").mkdir(exist_ok=True)
    Settings.root_path.joinpath(".vscode/launch.json").write_text(
        json.dumps(vscode_launch_json, indent=4), encoding="utf-8"
    )
