import flask_sock, simple_websocket

from ...session import LiveSession
from .program import PythonProgram
from ...api.classes import DashJSON
from ...contract import dashes_contract
from .message_handler import MessageHandler


def run_dash(conn: flask_sock.Server, dash: DashJSON, code: str):
    session = LiveSession(conn, "dashes", dash.path)
    py = PythonProgram(dash, code)
    msg_handler = MessageHandler(py, session, main_file=dash.file)
    session.send(dashes_contract.ExecutionIdMessage(session.id))
    while True:
        try:
            type, data = session.recv()
            msg_handler.handle(type, data)
        except simple_websocket.ConnectionError:
            print("connection closed")
