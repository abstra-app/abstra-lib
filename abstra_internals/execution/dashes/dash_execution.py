import flask_sock, simple_websocket
from ..live_execution import LiveExecution
from ...server.api.classes import DashJSON
from .dash_runtime import DashRuntime
from ...contract import dashes_contract


class DashExecution(LiveExecution):
    def run(self):
        msg_handler = DashRuntime(self, dash_json=self.runtime_json)
        self.send(dashes_contract.ExecutionIdMessage(self.id))
        while True:
            try:
                type, data = self.recv()
                msg_handler.handle(type, data)
            except simple_websocket.ConnectionError:
                print("connection closed")
