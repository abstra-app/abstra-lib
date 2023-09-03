import flask_sock, simple_websocket, typing
from pathlib import Path
from ....session import LiveSession
from ...api.classes import DashJSON
from .dash_runtime import DashRuntime
from ....contract import dashes_contract


def run_dash(
    conn: flask_sock.Server,
    dash: DashJSON,
    root_path: Path,
    session_id: typing.Optional[str] = None,
):
    session = LiveSession(conn, "dashes", dash.path)
    session.start_files_monitoring(root_path)
    if session_id is not None:
        session.id = session_id

    msg_handler = DashRuntime(session, dash_json=dash)
    session.send(dashes_contract.ExecutionIdMessage(session.id))
    while True:
        try:
            type, data = session.recv()
            msg_handler.handle(type, data)
        except simple_websocket.ConnectionError:
            print("connection closed")
