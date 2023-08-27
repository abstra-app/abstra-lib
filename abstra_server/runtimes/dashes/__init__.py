import flask_sock, simple_websocket

from ...session import LiveSession
from ...api.classes import DashJSON
from ...contract import dashes_contract
from .dash_runtime import DashRuntime


def run_dash(conn: flask_sock.Server, dash: DashJSON):
    session = LiveSession(conn, "dashes", dash.path)
    msg_handler = DashRuntime(session, dash_json=dash)
    session.send(dashes_contract.ExecutionIdMessage(session.id))
    while True:
        try:
            type, data = session.recv()
            msg_handler.handle(type, data)
        except simple_websocket.ConnectionError:
            print("connection closed")
