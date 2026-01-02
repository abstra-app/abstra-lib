import time
import unittest
from unittest.mock import MagicMock

from abstra_internals.utils.websockets import bind_ws_with_connection


class MockWS:
    def __init__(self):
        self.sent_messages = []
        self.receive_queue = []
        self.closed = False

    def send(self, message):
        self.sent_messages.append(message)

    def receive(self):
        if not self.receive_queue:
            time.sleep(0.1)
            return None  # Or block
        return self.receive_queue.pop(0)

    def close(self):
        self.closed = True


class TestWebsockets(unittest.TestCase):
    def test_bind_ws_forwarding(self):
        """Test that messages are forwarded between WS and Connection."""
        ws = MagicMock()
        conn = MagicMock()

        # Setup WS receive
        # WS receives "from_browser", then raises ConnectionClosed or blocks
        ws.receive.side_effect = ["from_browser", Exception("Stop loop")]

        # Setup Conn recv
        # Conn receives "from_worker", then raises EOFError
        conn.recv.side_effect = ["from_worker", EOFError("Closed")]

        # bind_ws_with_connection spawns threads. block=True waits for them.
        # But threads loop forever. We need them to stop.
        # We make receive/recv raise exception to break loops.

        # Exception "Stop loop" for WS receive will cause:
        # 1. conn.send('{"type": "kill"}')
        # 2. conn.close()
        # 3. break server_loop

        # EOFError for Conn recv will cause:
        # 1. ws.close()
        # 2. break client_loop

        # We need to ensure timing/concurrency doesn't deadlock.
        # If ws.receive raises immediately, it closes conn.
        # If conn recv raises immediately, it closes ws.

        # We want both to happen.

        # To avoid race conditions, we can make one wait?

        # Let's try mocking flask_sock.ConnectionClosed
        import flask_sock

        ws.receive.side_effect = ["from_browser", flask_sock.ConnectionClosed()]

        bind_ws_with_connection(ws, conn, block=True)

        # Verify forwarding
        conn.send.assert_any_call("from_browser")
        ws.send.assert_any_call("from_worker")

        # Verify closure
        conn.close.assert_called()
        # ws.close might be called or not depending on who finished first.
        # If WS closed first, it calls conn.close().
        # If Conn closed first, it calls ws.close().


if __name__ == "__main__":
    unittest.main()
