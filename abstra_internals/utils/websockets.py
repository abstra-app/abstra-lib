import time
from collections import deque
from typing import Union

import flask_sock
import simplejson

from abstra_internals.controllers.execution.connection_protocol import (
    ConnectionProtocol,
)
from abstra_internals.utils.ai import AiWs
from abstra_internals.utils.threads import ExceptionAwareThread


class MockWS:
    def __init__(self):
        self.browser_messages = deque([])
        self.python_messages = deque([])
        self.closed = False

    def send(self, python_message):
        self.python_messages.append(simplejson.loads(python_message))

    def receive(self):
        if self.closed:
            raise flask_sock.ConnectionClosed()
        if len(self.browser_messages) == 0:
            raise ValueError("No messages to receive")
        return simplejson.dumps(self.browser_messages.popleft())

    def add_browser_message(self, message):
        if not self.closed:
            self.browser_messages.append(message)

    def close(self):
        self.closed = True
        self.browser_messages.clear()
        self.python_messages.clear()


WsLike = Union[flask_sock.Server, MockWS, AiWs]


def bind_ws_with_connection(ws: WsLike, conn: ConnectionProtocol, block: bool):
    def server_loop():
        while True:
            try:
                message = ws.receive()
            except flask_sock.ConnectionClosed:
                try:
                    conn.send('{"type": "kill"}')
                    conn.close()
                except Exception:
                    pass
                break
            except ValueError:
                time.sleep(0.01)
                continue
            try:
                conn.send(message)
            except (EOFError, BrokenPipeError, ConnectionResetError, OSError):
                try:
                    ws.close()
                except Exception:
                    pass
                break

    def client_loop():
        while True:
            try:
                message = conn.recv()
            except (EOFError, BrokenPipeError, ConnectionResetError, OSError):
                try:
                    ws.close()
                except Exception:
                    pass
                break
            try:
                ws.send(message)
            except flask_sock.ConnectionClosed:
                try:
                    conn.close()
                except Exception:
                    pass
                break

    server_thread = ExceptionAwareThread(target=server_loop, daemon=True)
    server_thread.start()
    client_thread = ExceptionAwareThread(target=client_loop, daemon=True)
    client_thread.start()

    if block:
        server_thread.join()
        client_thread.join()
