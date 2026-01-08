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
        import flask_sock

        ws = MagicMock()
        conn = MagicMock()

        # Setup conn.poll() - returns True when data available
        # poll is called before recv, so we need to return True for the first recv
        conn.poll.side_effect = [True, True]

        # Setup conn.closed property - False initially, becomes True after close
        type(conn).closed = property(lambda self: False)

        # Setup WS receive with delay before closing
        # This gives client_loop time to process a message before server_loop triggers cleanup
        receive_count = [0]

        def receive_side_effect():
            receive_count[0] += 1
            if receive_count[0] == 1:
                return "from_browser"
            else:
                # Wait a bit before "closing" to give client_loop time to process
                time.sleep(0.1)
                raise flask_sock.ConnectionClosed()

        ws.receive.side_effect = receive_side_effect

        # Setup Conn recv
        # Conn receives "from_worker", then raises EOFError
        conn.recv.side_effect = ["from_worker", EOFError("Closed")]

        # bind_ws_with_connection spawns threads. block=True waits for them.
        # server_loop: receives from ws, sends to conn
        # client_loop: polls conn, receives from conn, sends to ws

        # Flow:
        # 1. server_loop: ws.receive() -> "from_browser" -> conn.send("from_browser")
        # 2. client_loop: conn.poll() -> True -> conn.recv() -> "from_worker" -> ws.send("from_worker")
        # 3. server_loop: ws.receive() -> (waits 0.1s) -> ConnectionClosed -> do_cleanup
        # 4. client_loop: conn.poll() -> True -> conn.recv() -> EOFError -> (cleanup already done)

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
