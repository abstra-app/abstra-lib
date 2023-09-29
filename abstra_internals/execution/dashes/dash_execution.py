import simple_websocket
from ..live_execution import LiveExecution
from ...contract import dashes_contract
import typing


class DashExecution(LiveExecution):
    def run_sync(self):
        from .dash_runtime import DashRuntime

        msg_handler = DashRuntime(self, dash_json=self.runtime_json)  # type: ignore
        self.send(dashes_contract.ExecutionIdMessage(self.id))
        while True:
            try:
                type, data = self.recv()
                msg_handler.handle(type, data)
            except simple_websocket.ConnectionError:
                print("connection closed")
