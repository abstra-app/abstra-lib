import sys

import flask

from ...debugger.vscode import (
    configure_launch_json,
    configure_settings_json,
    is_client_connected,
    is_launch_json_configured,
    is_settings_json_set,
    start_debugger,
)
from ...settings import Settings
from ...usage import usage
from .main import MainController


# Debugger
def get_debugger_status():
    return dict(
        port=start_debugger(),
        connected=is_client_connected(),
        is_launch_json_configured=is_launch_json_configured()
        and is_settings_json_set(),
        interpreter=sys.executable,
        root=str(Settings.root_path),
    )


def create_vscode_launch():
    configure_launch_json()
    configure_settings_json()
    return {"status": "ok"}


def get_editor_bp(controller: MainController):
    bp = flask.Blueprint("editor_debugger", __name__)

    @bp.get("/")
    def _get_debugger_status():
        return get_debugger_status()

    @bp.post("/vscode-launch")
    @usage
    def _create_vscode_launch():
        return create_vscode_launch()

    return bp
