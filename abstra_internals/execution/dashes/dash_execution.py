import simple_websocket, threading

from ..execution import Execution
from ...contract import dashes_contract
from ..live_execution import LiveExecution


class DashExecution(LiveExecution):
    def _run(self):
        from .dash_runtime import DashRuntime

        self.thread_id = threading.get_ident()
        Execution.executions[self.thread_id] = self

        msg_handler = DashRuntime(self, dash_json=self.runtime_json)  # type: ignore
        self.send(dashes_contract.ExecutionIdMessage(self.id))
        while True:
            try:
                type, data = self.recv()
                msg_handler.handle(type, data)
            except simple_websocket.ConnectionError:
                print("connection closed")
