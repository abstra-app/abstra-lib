import debugpy, json
from ...utils import get_free_port
from ...settings import Settings
from ...templates import vscode_launch_json

CONNECTED_PORT = None


def is_launch_json_configured():
    launch_json_file = Settings.root_path.joinpath(".vscode/launch.json")
    if not launch_json_file.exists():
        return False

    # TODO: Check if launch.json is configured correctly
    return True


def configure_launch_json():
    Settings.root_path.joinpath(".vscode").mkdir(exist_ok=True)
    Settings.root_path.joinpath(".vscode/launch.json").write_text(
        json.dumps(vscode_launch_json, indent=4), encoding="utf-8"
    )


def start_debugger():
    global CONNECTED_PORT
    if CONNECTED_PORT is None:
        CONNECTED_PORT = get_free_port(5678)
        debugpy.listen(CONNECTED_PORT)
    return CONNECTED_PORT


def is_client_connected():
    return debugpy.is_client_connected()
