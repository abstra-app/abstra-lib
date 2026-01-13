import os
import threading
import time
import unittest

from abstra_internals.utils.websockets import MockWS, bind_ws_with_connection


class MockConnection:
    """Mock connection for testing websocket behavior."""

    def __init__(self, delay=0.1):
        self.messages = []
        self.closed = False
        self.delay = delay
        self._has_data = True  # Simulate always having data available

    def send(self, message):
        if not self.closed:
            self.messages.append(message)

    def recv(self):
        if self.closed:
            raise EOFError("Connection closed")
        time.sleep(self.delay)
        return '{"type": "test"}'

    def poll(self, timeout: float = 0.0) -> bool:
        """Check if there's data available."""
        if self.closed:
            return False
        # Simulate waiting for data
        if timeout > 0:
            time.sleep(min(timeout, self.delay))
        return self._has_data and not self.closed

    def close(self):
        self.closed = True


class TestGeventWebSocketConcurrency(unittest.TestCase):
    """Test suite for gevent-based websocket concurrency."""

    def setUp(self):
        """Set up test fixtures."""
        # Store original WORKER_CLASS
        self.original_worker_class = os.getenv("ABSTRA_WORKER_CLASS")

    def tearDown(self):
        """Clean up after tests."""
        # Restore original WORKER_CLASS
        if self.original_worker_class:
            os.environ["ABSTRA_WORKER_CLASS"] = self.original_worker_class
        else:
            os.environ.pop("ABSTRA_WORKER_CLASS", None)

    def test_multiple_websocket_connections_simultaneously(self):
        """Test that multiple websocket connections can be handled simultaneously."""
        num_connections = 20
        websockets = []
        connections = []
        threads = []

        def handle_websocket(ws, conn):
            """Handle a single websocket connection."""
            try:
                bind_ws_with_connection(ws, conn, block=True)
            except Exception:
                pass

        # Create multiple websocket connections
        for i in range(num_connections):
            ws = MockWS()
            conn = MockConnection(delay=0.05)
            websockets.append(ws)
            connections.append(conn)

            # Simulate handling in separate threads (like gunicorn would)
            thread = threading.Thread(target=handle_websocket, args=(ws, conn))
            thread.daemon = True
            thread.start()
            threads.append(thread)

        # Give connections time to establish
        time.sleep(0.5)

        # Verify all connections are active
        active_threads = sum(1 for t in threads if t.is_alive())
        self.assertGreater(
            active_threads, num_connections * 0.8
        )  # At least 80% should be active

        # Close all connections
        for ws in websockets:
            ws.close()
        for conn in connections:
            conn.close()

        # Wait for cleanup
        time.sleep(0.5)

    def test_websocket_scaling_beyond_thread_limit(self):
        """Test that we can handle more websockets than the old thread limit (40)."""
        # This simulates the scenario where we had 2 workers * 20 threads = 40 limit
        num_connections = 50  # More than the old limit
        websockets = []
        connections = []
        threads = []

        def handle_websocket(ws, conn):
            """Handle a single websocket connection."""
            try:
                bind_ws_with_connection(ws, conn, block=True)
            except Exception:
                pass

        # Create connections exceeding old limit
        for i in range(num_connections):
            ws = MockWS()
            conn = MockConnection(delay=0.02)
            websockets.append(ws)
            connections.append(conn)

            thread = threading.Thread(target=handle_websocket, args=(ws, conn))
            thread.daemon = True
            thread.start()
            threads.append(thread)

        # Give connections time to establish
        time.sleep(0.5)

        # Verify most connections are active
        active_threads = sum(1 for t in threads if t.is_alive())
        self.assertGreaterEqual(
            active_threads,
            45,  # At least 45 out of 50 should be active
            f"Only {active_threads} out of {num_connections} connections are active",
        )

        # Clean up
        for ws in websockets:
            ws.close()
        for conn in connections:
            conn.close()

        time.sleep(0.5)

    def test_worker_class_default_is_gthread(self):
        """Test that WORKER_CLASS defaults to gthread when not set."""
        import importlib

        # Remove env var to test default
        os.environ.pop("ABSTRA_WORKER_CLASS", None)

        import abstra_internals.environment

        importlib.reload(abstra_internals.environment)

        from abstra_internals.environment import WORKER_CLASS

        self.assertEqual(WORKER_CLASS, "gthread")

    def test_worker_connections_configuration(self):
        """Test that WORKER_CONNECTIONS is properly configured."""
        from abstra_internals.environment import WORKER_CONNECTIONS

        self.assertIsInstance(WORKER_CONNECTIONS, int)
        self.assertGreaterEqual(WORKER_CONNECTIONS, 100)

    def test_gunicorn_config_uses_worker_connections_for_gevent(self):
        """Test that gunicorn config uses worker_connections for gevent."""
        import importlib
        from unittest.mock import MagicMock

        # Set env var to gevent
        os.environ["ABSTRA_WORKER_CLASS"] = "gevent"

        # Reload modules to pick up new env var
        import abstra_internals.environment

        importlib.reload(abstra_internals.environment)

        import abstra_internals.cloud.server_hooks

        importlib.reload(abstra_internals.cloud.server_hooks)

        from abstra_internals.cloud.server_hooks import GunicornOptionsBuilder

        # Create a mock controller
        controller = MagicMock()

        # Build gunicorn options
        builder = GunicornOptionsBuilder(controller)
        config = builder.build()

        # Should have worker_connections for gevent, not threads
        self.assertIn("worker_connections", config)
        self.assertNotIn("threads", config)
        self.assertEqual(config["worker_class"], "gevent")

    def test_gunicorn_config_uses_threads_for_gthread(self):
        """Test that gunicorn config uses threads for gthread worker."""
        import importlib
        from unittest.mock import MagicMock

        # Set env var to gthread (or remove to use default)
        os.environ["ABSTRA_WORKER_CLASS"] = "gthread"

        # Reload modules to pick up new env var
        import abstra_internals.environment

        importlib.reload(abstra_internals.environment)

        import abstra_internals.cloud.server_hooks

        importlib.reload(abstra_internals.cloud.server_hooks)

        from abstra_internals.cloud.server_hooks import GunicornOptionsBuilder

        # Create a mock controller
        controller = MagicMock()

        # Build gunicorn options
        builder = GunicornOptionsBuilder(controller)
        config = builder.build()

        # Should have threads for gthread, not worker_connections
        self.assertIn("threads", config)
        self.assertNotIn("worker_connections", config)
        self.assertEqual(config["worker_class"], "gthread")

    def test_websocket_message_exchange_with_concurrent_connections(self):
        """Test message exchange works correctly with concurrent connections."""
        num_connections = 15
        websockets = []
        connections = []
        threads = []

        def handle_websocket(ws, conn):
            """Handle a single websocket connection."""
            try:
                bind_ws_with_connection(ws, conn, block=True)
            except Exception:
                pass

        # Create connections
        for i in range(num_connections):
            ws = MockWS()
            conn = MockConnection(delay=0.05)

            # Add some test messages
            ws.add_browser_message({"type": "test", "value": i})

            websockets.append(ws)
            connections.append(conn)

            thread = threading.Thread(target=handle_websocket, args=(ws, conn))
            thread.daemon = True
            thread.start()
            threads.append(thread)

        # Give time for message exchange
        time.sleep(0.5)

        # Verify messages were exchanged
        total_messages = sum(len(conn.messages) for conn in connections)
        self.assertGreater(total_messages, 0, "No messages were exchanged")

        # Clean up
        for ws in websockets:
            ws.close()
        for conn in connections:
            conn.close()

        time.sleep(0.3)


if __name__ == "__main__":
    unittest.main()
