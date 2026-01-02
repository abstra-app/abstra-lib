import unittest
from typing import Type, cast
from unittest.mock import MagicMock, Mock, patch

from pika.adapters.blocking_connection import BlockingConnection
from pika.exceptions import AMQPChannelError, AMQPConnectionError

from .consumer import RabbitConsumer


def make_consumer_mock_connection(consume_yields=None):
    """Helper to create a mock connection for RabbitConsumer tests."""
    mock_conn = MagicMock()
    mock_channel = MagicMock()
    mock_conn.channel.return_value = mock_channel
    mock_conn.is_closed = False
    mock_channel.is_open = True

    # consume() must be a generator that yields (method, properties, body) tuples
    if consume_yields is None:
        consume_yields = [(None, None, None)]  # Single inactivity timeout

    def consume_generator(*args, **kwargs):
        for item in consume_yields:
            yield item
        # Keep yielding nothing to simulate waiting
        while True:
            yield (None, None, None)

    mock_channel.consume.side_effect = consume_generator
    return mock_conn


class TestRabbitConsumerFailure(unittest.TestCase):
    @patch("time.sleep")
    def test_consumer_stop_during_backoff(self, mock_sleep):
        """
        Scenario: If stop_iter is called while waiting for reconnect, it should exit cleanly.
        """
        mock_conn = make_consumer_mock_connection()

        factory = Mock()
        # First call succeeds (init), subsequent calls fail (reconnect in iter)
        factory.side_effect = [mock_conn, AMQPConnectionError("Broker down")]

        consumer = RabbitConsumer(
            "amqp://localhost",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        # Use consumer.iter() instead of iter(consumer)
        it = consumer.iter()

        # Simulate connection loss before iterating
        consumer.connection = None

        # Mock sleep to signal stop
        def sleep_side_effect(seconds):
            consumer.stop_iter()

        mock_sleep.side_effect = sleep_side_effect

        # next() should trigger reconnect, hit sleep, and then exit due to stop_iter
        with self.assertRaises(StopIteration):
            next(it)

    @patch("time.sleep")
    def test_precondition_failed_closes_connection(self, mock_sleep):
        """
        Scenario: AMQP 406 PRECONDITION_FAILED occurs.
        Expected: Connection should be explicitly closed and cleared to avoid dirty state.
        """
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        # First consume call yields nothing, second raises error
        call_count = [0]

        def consume_side_effect(*args, **kwargs):
            call_count[0] += 1
            if call_count[0] == 1:
                yield (None, None, None)
            else:
                raise AMQPChannelError(406, "PRECONDITION_FAILED")

        mock_channel.consume.side_effect = consume_side_effect

        factory = Mock(return_value=mock_conn)
        consumer = RabbitConsumer(
            "amqp://localhost",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        # Use consumer.iter() instead of iter(consumer)
        it = consumer.iter()

        # Trigger consume which will eventually fail
        def sleep_side_effect(seconds):
            consumer.stop_iter()

        mock_sleep.side_effect = sleep_side_effect

        with self.assertRaises(StopIteration):
            next(it)

        # Verify connection was closed
        self.assertTrue(mock_conn.close.called)
        self.assertIsNone(consumer.connection)

    def test_malformed_message_nacks(self):
        """Test that malformed messages are NACKed."""
        # Setup: Message that will fail deserialization
        malformed_body = b"invalid_json"
        method = MagicMock()
        method.delivery_tag = 123

        # Generator yields message once
        mock_conn = make_consumer_mock_connection(
            consume_yields=[(method, None, malformed_body)]
        )

        # Setup nack to stop the loop
        mock_channel = mock_conn.channel.return_value

        # IMPORTANT: Mock call to set stop_evt
        def nack_side_effect(*args, **kwargs):
            # print("NACK CALLED")
            consumer.stop_evt.set()

        mock_channel.basic_nack.side_effect = nack_side_effect

        factory = Mock(return_value=mock_conn)
        consumer = RabbitConsumer(
            "amqp://localhost",
            connection_factory=cast(Type[BlockingConnection], factory),
        )

        # Run loop. It should consume, fail deserialization, call nack (which stops loop)
        for _ in consumer.iter():
            pass

        # Verify nack called
        mock_channel.basic_nack.assert_called_with(delivery_tag=123, requeue=False)


if __name__ == "__main__":
    unittest.main()
