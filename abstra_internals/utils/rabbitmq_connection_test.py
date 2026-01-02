import datetime
import decimal
import json
import pickle
import threading
import time
import unittest
from typing import Type, cast
from unittest.mock import MagicMock, Mock, patch

import numpy as np
from pika.adapters.blocking_connection import BlockingConnection
from pika.exceptions import AMQPConnectionError

from .rabbitmq_connection import RabbitMQConnection


# Helper for mocking connections
def make_mock_connection(consume_yields=None):
    mock_conn = MagicMock()
    mock_channel = MagicMock()
    mock_conn.channel.return_value = mock_channel
    mock_conn.is_closed = False
    mock_channel.is_closed = False
    mock_channel.is_open = True

    if consume_yields is None:
        consume_yields = []

    def consume_generator(*args, **kwargs):
        for item in consume_yields:
            yield item
        # Keep yielding nothing to simulate idle connection without closing
        while True:
            yield (None, None, None)

    mock_channel.consume.side_effect = consume_generator
    return mock_conn


class MockSerializable:
    def dump(self):
        return {"foo": "bar"}


class NonSerializable:
    pass


class TestRabbitMQConnection(unittest.TestCase):
    def setUp(self):
        # Patch time.sleep to speed up tests
        self.sleep_patcher = patch("time.sleep")
        self.mock_sleep = self.sleep_patcher.start()

    def tearDown(self):
        self.sleep_patcher.stop()

    def test_init_connects_success(self):
        """Test successful initialization of RabbitMQConnection."""
        factory = Mock(side_effect=lambda *a: make_mock_connection())
        conn = RabbitMQConnection(
            "amqp://localhost",
            "send_q",
            "recv_q",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        # Should create 2 connections (sender, receiver)
        self.assertEqual(factory.call_count, 2)
        conn.close()

    def test_init_retry_success(self):
        """Test initialization with some failures then success."""
        # Fail 2 times, succeed 3rd (and 4th for the second connection)
        success_conn = make_mock_connection()
        factory = Mock(
            side_effect=[
                AMQPConnectionError("Fail 1"),
                AMQPConnectionError("Fail 2"),
                success_conn,
                success_conn,
            ]
        )

        conn = RabbitMQConnection(
            "amqp://localhost",
            "send_q",
            "recv_q",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        self.assertEqual(factory.call_count, 4)
        conn.close()

    def test_init_retry_failure(self):
        """Test initialization failure after max retries."""
        factory = Mock(side_effect=AMQPConnectionError("Fail forever"))

        with self.assertRaises(AMQPConnectionError):
            RabbitMQConnection(
                "amqp://localhost",
                "send_q",
                "recv_q",
                "id",
                connection_factory=cast(Type[BlockingConnection], factory),
            )

        # 3 retries for sender connection = 3 calls
        self.assertEqual(factory.call_count, 3)

    def test_send_json_dict(self):
        """Test sending a dictionary (should be serialized to JSON)."""
        mock_conn = make_mock_connection()
        factory = Mock(return_value=mock_conn)

        conn = RabbitMQConnection(
            "amqp://localhost",
            "send_q",
            "recv_q",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        data = {"key": "value"}
        conn.send(data)

        # Verify basic_publish called with JSON bytes
        assert conn._send_channel
        channel = cast(Mock, conn._send_channel)
        channel.basic_publish.assert_called_once()
        args, kwargs = channel.basic_publish.call_args

        self.assertEqual(kwargs["body"], b'{"key": "value"}')
        self.assertEqual(kwargs["properties"].content_type, "application/json")
        conn.close()

    def test_send_json_string(self):
        """Test sending a string (should be sent as text/plain to preserve type)."""
        mock_conn = make_mock_connection()
        factory = Mock(return_value=mock_conn)
        conn = RabbitMQConnection(
            "amqp://localhost",
            "send_q",
            "recv_q",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        # Sending a string
        data = '{"key": "value"}'
        conn.send(data)

        assert conn._send_channel
        channel = cast(Mock, conn._send_channel)
        channel.basic_publish.assert_called_once()
        _, kwargs = channel.basic_publish.call_args

        self.assertEqual(kwargs["body"], b'{"key": "value"}')
        self.assertEqual(kwargs["properties"].content_type, "text/plain")
        conn.close()

    def test_recv_text_plain(self):
        """Test receiving text/plain message returns string."""
        raw_string = "Just text"
        body = raw_string.encode("utf-8")

        properties = MagicMock()
        properties.content_type = "text/plain"
        message = (MagicMock(), properties, body)

        factory = Mock(
            side_effect=lambda *a: make_mock_connection(consume_yields=[message])
        )

        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        received_data = conn.recv(timeout=1.0)
        conn.close()

        self.assertEqual(received_data, raw_string)

    def test_send_serializable(self):
        """Test sending an object with .dump() method."""
        mock_conn = make_mock_connection()
        factory = Mock(return_value=mock_conn)
        conn = RabbitMQConnection(
            "amqp://localhost",
            "send_q",
            "recv_q",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        obj = MockSerializable()
        conn.send(obj)

        assert conn._send_channel
        channel = cast(Mock, conn._send_channel)
        channel.basic_publish.assert_called_once()
        _, kwargs = channel.basic_publish.call_args

        self.assertEqual(kwargs["body"], b'{"foo": "bar"}')
        self.assertEqual(kwargs["properties"].content_type, "application/json")
        conn.close()

    def test_send_pickle_fallback(self):
        """Test sending non-serializable object falls back to pickle."""
        mock_conn = make_mock_connection()
        factory = Mock(return_value=mock_conn)
        conn = RabbitMQConnection(
            "amqp://localhost",
            "send_q",
            "recv_q",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        obj = NonSerializable()
        conn.send(obj)

        assert conn._send_channel
        channel = cast(Mock, conn._send_channel)
        channel.basic_publish.assert_called_once()
        _, kwargs = channel.basic_publish.call_args

        self.assertEqual(kwargs["properties"].content_type, "application/python-pickle")
        self.assertEqual(pickle.loads(kwargs["body"]).__class__, NonSerializable)
        conn.close()

    def test_send_fails_raises(self):
        """Test send raises exception if publish fails."""
        mock_conn = make_mock_connection()
        # Mock publish to raise exception
        mock_conn.channel.return_value.basic_publish.side_effect = Exception(
            "Publish error"
        )
        factory = Mock(return_value=mock_conn)

        conn = RabbitMQConnection(
            "amqp://localhost",
            "send_q",
            "recv_q",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        with self.assertRaises(Exception):
            conn.send({"foo": "bar"})
        conn.close()

    def test_recv_json_deserialization(self):
        """Test receiving JSON message."""
        expected_data = {"status": 200, "body": "ok", "headers": {}}
        json_body = json.dumps(expected_data).encode("utf-8")

        properties = MagicMock()
        properties.content_type = "application/json"
        message = (MagicMock(), properties, json_body)

        factory = Mock(
            side_effect=lambda *a: make_mock_connection(consume_yields=[message])
        )

        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        received_data = conn.recv(timeout=1.0)
        conn.close()

        self.assertEqual(received_data, expected_data)

    def test_recv_malformed_json(self):
        """Test receiving malformed JSON returns the raw string."""
        raw_string = "This is not JSON"
        body = raw_string.encode("utf-8")

        properties = MagicMock()
        properties.content_type = "application/json"
        message = (MagicMock(), properties, body)

        factory = Mock(
            side_effect=lambda *a: make_mock_connection(consume_yields=[message])
        )

        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        received_data = conn.recv(timeout=1.0)
        conn.close()

        self.assertEqual(received_data, raw_string)

    def test_recv_pickle(self):
        """Test receiving pickled message."""
        data = {"foo": "bar"}
        body = pickle.dumps(data)

        properties = MagicMock()
        properties.content_type = "application/python-pickle"
        message = (MagicMock(), properties, body)

        factory = Mock(
            side_effect=lambda *a: make_mock_connection(consume_yields=[message])
        )

        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        received_data = conn.recv(timeout=1.0)
        conn.close()

        self.assertEqual(received_data, data)

    def test_recv_reconnect(self):
        """Test consumer reconnects on connection loss."""
        reconnect_event = threading.Event()

        def factory_side_effect(*args, **kwargs):
            conn = make_mock_connection()
            if factory.call_count == 2:
                # Receiver connection 1. Make it fail after a bit.
                # We simulate this by making consume raise exception AND marking as closed
                def fail_later(*a, **k):
                    yield (None, None, None)
                    # Simulate connection state change due to error
                    conn.is_closed = True
                    conn.channel.return_value.is_closed = True
                    raise AMQPConnectionError("Connection lost")

                conn.channel.return_value.consume.side_effect = fail_later

            if factory.call_count > 2:
                # This means we are reconnecting
                reconnect_event.set()

            return conn

        factory = Mock(side_effect=factory_side_effect)

        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        # Wait for reconnect
        # The loop runs in background. It should hit exception -> sleep -> reconnect
        # Since sleep is mocked, it should be fast.
        success = reconnect_event.wait(timeout=2.0)
        conn.close()

        self.assertTrue(success, "Should have attempted to reconnect receiver")
        self.assertGreater(factory.call_count, 2)

    def test_recv_timeout(self):
        """Test recv raises TimeoutError."""
        factory = Mock(side_effect=lambda *a: make_mock_connection())  # Yields nothing
        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        with self.assertRaises(TimeoutError):
            conn.recv(timeout=0.1)
        conn.close()

    def test_poll(self):
        """Test poll behavior."""
        expected_data = {"a": 1}
        json_body = json.dumps(expected_data).encode("utf-8")
        properties = MagicMock()
        properties.content_type = "application/json"
        message = (MagicMock(), properties, json_body)

        factory = Mock(
            side_effect=lambda *a: make_mock_connection(consume_yields=[message])
        )
        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        # Poll should return True eventually
        start = time.time()
        while time.time() - start < 1.0:
            if conn.poll():
                break
            time.sleep(0.01)

        self.assertTrue(conn.poll())
        self.assertEqual(conn.recv(), expected_data)
        conn.close()

    def test_payload_unicode(self):
        """Test sending/receiving complex unicode characters."""
        unicode_data = {"msg": "🚀 Olá Mundo! 🐍"}
        json_body = json.dumps(unicode_data).encode("utf-8")

        properties = MagicMock()
        properties.content_type = "application/json"
        message = (MagicMock(), properties, json_body)

        factory = Mock(
            side_effect=lambda *a: make_mock_connection(consume_yields=[message])
        )

        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        conn.send(unicode_data)  # Send verification
        assert conn._send_channel
        channel = cast(Mock, conn._send_channel)
        channel.basic_publish.assert_called()
        _, kwargs = channel.basic_publish.call_args
        self.assertEqual(kwargs["body"], json_body)

        # Recv verification
        received = conn.recv(timeout=1.0)
        self.assertEqual(received, unicode_data)
        conn.close()

    def test_payload_large(self):
        """Test sending/receiving large payload (1MB)."""
        large_data = {"data": "x" * 1024 * 1024}  # 1MB
        json_body = json.dumps(large_data).encode("utf-8")

        properties = MagicMock()
        properties.content_type = "application/json"
        message = (MagicMock(), properties, json_body)

        factory = Mock(
            side_effect=lambda *a: make_mock_connection(consume_yields=[message])
        )

        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        conn.send(large_data)
        assert conn._send_channel
        channel = cast(Mock, conn._send_channel)
        _, kwargs = channel.basic_publish.call_args
        self.assertEqual(len(kwargs["body"]), len(json_body))

        received = conn.recv(timeout=1.0)
        self.assertEqual(len(received["data"]), 1024 * 1024)
        conn.close()

    def test_concurrent_send_recv(self):
        """Test thread safety of simultaneous send and receive operations."""
        # Setup: Receiver will yield 100 messages
        messages = []
        for i in range(100):
            body = json.dumps({"count": i}).encode("utf-8")
            props = MagicMock()
            props.content_type = "application/json"
            messages.append((MagicMock(), props, body))

        factory = Mock(
            side_effect=lambda *a: make_mock_connection(consume_yields=messages)
        )

        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        received_count = [0]
        send_count = [0]
        exceptions = []

        def sender_task():
            try:
                for i in range(100):
                    conn.send({"send_count": i})
                    send_count[0] += 1
            except Exception as e:
                exceptions.append(e)

        def receiver_task():
            try:
                for _ in range(100):
                    conn.recv(timeout=1.0)
                    received_count[0] += 1
            except Exception as e:
                exceptions.append(e)

        t1 = threading.Thread(target=sender_task)
        t2 = threading.Thread(target=receiver_task)

        t1.start()
        t2.start()

        t1.join()
        t2.join()

        conn.close()

        self.assertEqual(send_count[0], 100)
        self.assertEqual(received_count[0], 100)
        self.assertEqual(len(exceptions), 0, f"Exceptions occurred: {exceptions}")

    def test_concurrent_recv(self):
        """Test multiple threads calling recv() simultaneously."""
        # Setup: Receiver will yield 50 messages
        messages = []
        for i in range(50):
            body = json.dumps({"seq": i}).encode("utf-8")
            props = MagicMock()
            props.content_type = "application/json"
            messages.append((MagicMock(), props, body))

        factory = Mock(
            side_effect=lambda *a: make_mock_connection(consume_yields=messages)
        )

        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        received_items = []
        lock = threading.Lock()

        def receiver_task():
            while True:
                try:
                    # Timeout to stop if empty
                    msg = conn.recv(timeout=0.01)
                    with lock:
                        received_items.append(msg)
                except TimeoutError:
                    break
                except Exception:
                    break

        threads = [threading.Thread(target=receiver_task) for _ in range(5)]
        for t in threads:
            t.start()
        for t in threads:
            t.join()

        conn.close()

        # Verify all 50 messages received exactly once
        self.assertEqual(len(received_items), 50)
        # Check sequence
        seqs = sorted([m["seq"] for m in received_items])
        self.assertEqual(seqs, list(range(50)))

    # --- New Exotic Types Tests ---

    def test_send_exotic_types(self):
        """Test sending types that json.dumps fails on (datetime, decimal, numpy). Should use Pickle."""
        factory = Mock(return_value=make_mock_connection())
        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        data = {
            "date": datetime.datetime.now(),
            "dec": decimal.Decimal("10.5"),
            "np": np.array([1, 2, 3]),
        }

        conn.send(data)

        assert conn._send_channel
        channel = cast(Mock, conn._send_channel)
        channel.basic_publish.assert_called_once()
        _, kwargs = channel.basic_publish.call_args

        self.assertEqual(kwargs["properties"].content_type, "application/python-pickle")

        # Verify unpickle works and restores types
        restored = pickle.loads(kwargs["body"])
        self.assertIsInstance(restored["date"], datetime.datetime)
        self.assertIsInstance(restored["dec"], decimal.Decimal)
        self.assertTrue(np.array_equal(restored["np"], data["np"]))

        conn.close()

    def test_send_file_handle_raises(self):
        """Test that sending a file handle raises an exception (parity with Queue)."""
        import tempfile

        factory = Mock(return_value=make_mock_connection())
        conn = RabbitMQConnection(
            "amqp://localhost",
            "s",
            "r",
            "id",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        # Create a dummy file using tempfile
        with tempfile.NamedTemporaryFile(
            mode="w", suffix=".txt", delete=False, encoding="utf-8"
        ) as tmp:
            tmp.write("test")
            tmp_path = tmp.name

        try:
            with open(tmp_path, "r", encoding="utf-8") as f:
                # Pickle fails on open file handles
                with self.assertRaises(Exception):  # PickleError or TypeError
                    conn.send({"file": f})
        finally:
            import os

            os.remove(tmp_path)

        conn.close()


if __name__ == "__main__":
    unittest.main()
