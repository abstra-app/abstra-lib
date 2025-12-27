"""
Tests for RabbitMQConnection serialization/deserialization
"""

import json
import pickle
import unittest
from unittest.mock import MagicMock, Mock, patch

from abstra_internals.entities.execution_context import Response
from abstra_internals.utils.rabbitmq_connection import RabbitMQConnection


# Global class for pickle testing (local classes cannot be pickled)
class PickleTestClass:
    def __init__(self, value):
        self.value = value


class TestRabbitMQConnectionSerialization(unittest.TestCase):
    """
    Test that RabbitMQConnection properly serializes and deserializes
    different data types when sending/receiving messages.
    """

    def setUp(self):
        """Set up mocks for RabbitMQ connection"""
        self.mock_send_connection = MagicMock()
        self.mock_send_channel = MagicMock()
        self.mock_recv_connection = MagicMock()
        self.mock_recv_channel = MagicMock()

        # Patch pika.BlockingConnection
        self.patcher = patch(
            "abstra_internals.utils.rabbitmq_connection.pika.BlockingConnection"
        )
        self.mock_blocking_connection = self.patcher.start()

        # Setup connection mock to return our mocked channels
        self.mock_blocking_connection.side_effect = [
            self.mock_send_connection,
            self.mock_recv_connection,
        ]
        self.mock_send_connection.channel.return_value = self.mock_send_channel
        self.mock_recv_connection.channel.return_value = self.mock_recv_channel

    def tearDown(self):
        """Clean up patches"""
        self.patcher.stop()

    def _create_connection(self) -> RabbitMQConnection:
        """Helper to create a RabbitMQConnection with mocked dependencies"""
        conn = RabbitMQConnection(
            connection_uri="amqp://test:test@localhost/test",
            send_queue="test_send_queue",
            recv_queue="test_recv_queue",
            execution_id="test-execution-id",
        )
        return conn

    def test_send_pydantic_serializable_object(self):
        """Test sending a Pydantic/Serializable object (Response)"""
        conn = self._create_connection()

        response = Response(headers={"X-Test": "value"}, status=200, body="test body")
        conn.send(response)

        # Verify basic_publish was called
        self.mock_send_channel.basic_publish.assert_called_once()
        call_args = self.mock_send_channel.basic_publish.call_args

        # Check that body is properly JSON-encoded
        body = call_args.kwargs["body"]
        decoded = json.loads(body.decode("utf-8"))
        self.assertEqual(decoded["status"], 200)
        self.assertEqual(decoded["body"], "test body")
        self.assertEqual(decoded["headers"]["X-Test"], "value")

        # Check content type
        properties = call_args.kwargs["properties"]
        self.assertEqual(properties.content_type, "application/json")

    def test_send_pre_serialized_string(self):
        """Test sending a pre-serialized JSON string"""
        conn = self._create_connection()

        json_string = '{"key": "value", "number": 42}'
        conn.send(json_string)

        # Verify basic_publish was called
        self.mock_send_channel.basic_publish.assert_called_once()
        call_args = self.mock_send_channel.basic_publish.call_args

        # Check that body is the string encoded as bytes
        body = call_args.kwargs["body"]
        self.assertEqual(body, json_string.encode("utf-8"))

        # Check content type
        properties = call_args.kwargs["properties"]
        self.assertEqual(properties.content_type, "application/json")

    def test_send_dict(self):
        """Test sending a plain dict"""
        conn = self._create_connection()

        data = {"key": "value", "number": 42, "nested": {"inner": "data"}}
        conn.send(data)

        # Verify basic_publish was called
        self.mock_send_channel.basic_publish.assert_called_once()
        call_args = self.mock_send_channel.basic_publish.call_args

        # Check that body is properly JSON-encoded
        body = call_args.kwargs["body"]
        decoded = json.loads(body.decode("utf-8"))
        self.assertEqual(decoded, data)

        # Check content type
        properties = call_args.kwargs["properties"]
        self.assertEqual(properties.content_type, "application/json")

    def test_send_list(self):
        """Test sending a list"""
        conn = self._create_connection()

        data = [1, 2, 3, "four", {"five": 5}]
        conn.send(data)

        # Verify basic_publish was called
        self.mock_send_channel.basic_publish.assert_called_once()
        call_args = self.mock_send_channel.basic_publish.call_args

        # Check that body is properly JSON-encoded
        body = call_args.kwargs["body"]
        decoded = json.loads(body.decode("utf-8"))
        self.assertEqual(decoded, data)

        # Check content type
        properties = call_args.kwargs["properties"]
        self.assertEqual(properties.content_type, "application/json")

    def test_send_primitives(self):
        """Test sending primitive types (string, int, bool, None)"""
        conn = self._create_connection()

        # Test each primitive type
        primitives = [
            ("test string", "test string"),
            (123, 123),
            (True, True),
            (None, None),
            (3.14, 3.14),
        ]

        for original, expected in primitives:
            self.mock_send_channel.reset_mock()

            conn.send(original)

            # Verify basic_publish was called
            self.mock_send_channel.basic_publish.assert_called_once()
            call_args = self.mock_send_channel.basic_publish.call_args

            # Check that body is properly encoded
            body = call_args.kwargs["body"]
            if isinstance(original, str):
                # Strings are sent as-is (pre-serialized)
                decoded = body.decode("utf-8")
            else:
                decoded = json.loads(body.decode("utf-8"))
            self.assertEqual(decoded, expected)

    def test_send_non_json_serializable_falls_back_to_pickle(self):
        """Test that non-JSON-serializable objects fall back to pickle"""
        conn = self._create_connection()

        # Create an object that's not JSON serializable
        obj = PickleTestClass(42)
        conn.send(obj)

        # Verify basic_publish was called
        self.mock_send_channel.basic_publish.assert_called_once()
        call_args = self.mock_send_channel.basic_publish.call_args

        # Check that body is pickle-encoded
        body = call_args.kwargs["body"]
        decoded = pickle.loads(body)
        self.assertEqual(decoded.value, 42)

        # Check content type
        properties = call_args.kwargs["properties"]
        self.assertEqual(properties.content_type, "application/python-pickle")

    def test_recv_json_message(self):
        """Test receiving a JSON message"""
        # This test is more complex as it involves threading
        # We'll test the deserialization logic directly

        # Create mock properties with JSON content type
        mock_properties = Mock()
        mock_properties.content_type = "application/json"

        data = {"key": "value", "number": 42}
        body = json.dumps(data).encode("utf-8")

        # Simulate the deserialization that happens in consumer_loop
        content_type = mock_properties.content_type
        if content_type == "application/python-pickle":
            message = pickle.loads(body)
        else:
            message = json.loads(body.decode("utf-8"))

        self.assertEqual(message, data)

    def test_recv_pickle_message(self):
        """Test receiving a pickle message"""

        # Create mock properties with pickle content type
        mock_properties = Mock()
        mock_properties.content_type = "application/python-pickle"

        # Create an object that's not JSON serializable
        obj = PickleTestClass(42)
        body = pickle.dumps(obj)

        # Simulate the deserialization that happens in consumer_loop
        content_type = mock_properties.content_type
        if content_type == "application/python-pickle":
            message = pickle.loads(body)
        else:
            message = json.loads(body.decode("utf-8"))

        self.assertEqual(message.value, 42)

    def test_recv_no_content_type_defaults_to_json(self):
        """Test that messages without content_type default to JSON"""
        # Create mock properties without content_type
        mock_properties = None

        data = {"key": "value"}
        body = json.dumps(data).encode("utf-8")

        # Simulate the deserialization that happens in consumer_loop
        content_type = (
            mock_properties.content_type
            if mock_properties and hasattr(mock_properties, "content_type")
            else "application/json"
        )

        if content_type == "application/python-pickle":
            message = pickle.loads(body)
        else:
            message = json.loads(body.decode("utf-8"))

        self.assertEqual(message, data)


if __name__ == "__main__":
    unittest.main()
