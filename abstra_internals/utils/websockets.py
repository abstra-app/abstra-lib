from collections import deque
from multiprocessing.connection import Connection
from time import sleep
from typing import Union

import flask_sock
import simplejson

from .ai import AiWs
from .threading import Thread


class MockWS:
    def __init__(self):
        self.browser_messages = deque([])
        self.python_messages = deque([])

    def send(self, python_message):
        self.python_messages.append(simplejson.loads(python_message))

    def receive(self):
        if len(self.browser_messages) == 0:
            sleep(1)
        if len(self.browser_messages) == 0:
            raise ValueError("No messages to receive")
        return simplejson.dumps(self.browser_messages.popleft())

    def add_browser_message(self, message):
        self.browser_messages.append(message)

    def close(self):
        self.browser_messages.clear()
        self.python_messages.clear()


WsLike = Union[flask_sock.Server, MockWS, AiWs]


def bind_ws_with_connection(ws: WsLike, conn: Connection, block: bool):
    def server_loop():
        while True:
            try:
                message = ws.receive()

                if message is None:
                    conn.close()
                    ws.close()
                    break
            except flask_sock.ConnectionClosed:
                conn.close()
                break
            try:
                conn.send(message)
            except (EOFError, BrokenPipeError, ConnectionResetError):
                ws.close()
                break

    def client_loop():
        while True:
            try:
                message = conn.recv()

            except (EOFError, BrokenPipeError, ConnectionResetError):
                ws.close()
                break
            try:
                ws.send(message)
            except flask_sock.ConnectionClosed:
                conn.close()
                break

    th1 = Thread(target=server_loop, daemon=True)
    th1.start()
    th2 = Thread(target=client_loop, daemon=True)
    th2.start()

    if block:
        th1.join()
        th2.join()
