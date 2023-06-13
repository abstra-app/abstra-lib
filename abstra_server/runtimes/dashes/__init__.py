from ...session import LiveSession
from .program import PythonProgram
from ...api.classes import DashJSON
from ...contract import dashes_contract
from .message_handler import MessageHandler
from simple_websocket import ConnectionError


def run_dash(session: LiveSession, dash: DashJSON, code: str):
    py = PythonProgram(dash, code)
    msg_handler = MessageHandler(py, session)
    session.send(dashes_contract.ExecutionIdMessage(session.id))
    while True:
        try:
            type, data = session.recv()
            msg_handler.handle(type, data)
        except ConnectionError:
            print("connection closed")
