import unittest
from unittest.mock import MagicMock, patch

from abstra_internals.repositories.consumer import QueueMessage, RabbitMQConsumer


class TestRabbitMQConsumerACK(unittest.TestCase):
    """Tests to verify that messages are properly ACKed before yielding"""

    def setUp(self):
        self.conn_uri = "amqp://test"
        self.queue_name = "test_queue"
        self.concurrency = 2
        self.logger_prefix = "TestConsumer"

    @patch("abstra_internals.repositories.consumer.time.sleep")
    @patch("abstra_internals.repositories.consumer.pika.BlockingConnection")
    def test_message_acked_before_yield(self, mock_connection_class, mock_sleep):
        """Test that basic_ack is called immediately before yielding a message"""
        # Setup mocks
        mock_connection = MagicMock()
        mock_channel = MagicMock()
        mock_connection_class.return_value = mock_connection
        mock_connection.channel.return_value = mock_channel
        mock_connection.is_closed = False

        # Create a valid message matching PreExecution model
        mock_method = MagicMock()
        mock_method.delivery_tag = 123
        valid_json = b'{"execution_id": "test-exec-id", "stage_id": "test-stage", "context": {"mock_execution": {}}}'

        # Track calls to basic_ack and yield
        ack_called = False

        def track_ack(*args, **kwargs):
            nonlocal ack_called
            ack_called = True
            return True

        mock_channel.basic_ack.side_effect = track_ack

        # Create consumer first so we can reference it in the mock
        consumer = RabbitMQConsumer(
            self.conn_uri, self.queue_name, self.concurrency, self.logger_prefix
        )

        # Mock consume to yield message then None values until stop_evt
        def mock_consume(*args, **kwargs):
            yield (mock_method, None, valid_json)
            # Yield None to simulate inactivity timeout until stop_evt is set
            while not consumer.stop_evt.is_set():
                yield (None, None, None)

        mock_channel.consume.side_effect = mock_consume

        # Collect all messages - the mock will only yield one
        messages = []
        for message in consumer.iter():
            messages.append(message)
            # After getting the first message, signal to stop
            consumer.stop_evt.set()

        # Assertions
        self.assertEqual(len(messages), 1, "Should receive exactly one message")
        self.assertTrue(ack_called, "basic_ack should have been called")
        mock_channel.basic_ack.assert_called_once_with(delivery_tag=123)
        self.assertIsInstance(messages[0], QueueMessage)
        self.assertEqual(messages[0].delivery_tag, 123)

    @patch("abstra_internals.repositories.consumer.time.sleep")
    @patch("abstra_internals.repositories.consumer.pika.BlockingConnection")
    def test_message_nacked_on_deserialization_error(
        self, mock_connection_class, mock_sleep
    ):
        """Test that basic_nack is called when deserialization fails"""
        # Setup mocks
        mock_connection = MagicMock()
        mock_channel = MagicMock()
        mock_connection_class.return_value = mock_connection
        mock_connection.channel.return_value = mock_channel
        mock_connection.is_closed = False

        # Create invalid message
        mock_method = MagicMock()
        mock_method.delivery_tag = 456
        invalid_json = b"invalid json"

        # Create consumer first so we can reference it in the mock
        consumer = RabbitMQConsumer(
            self.conn_uri, self.queue_name, self.concurrency, self.logger_prefix
        )

        # Mock consume to yield invalid message then None values
        call_count = {"count": 0}

        def mock_consume(*args, **kwargs):
            call_count["count"] += 1
            if call_count["count"] == 1:
                # First call: yield invalid message then some None values
                yield (mock_method, None, invalid_json)
                for _ in range(3):
                    yield (None, None, None)
                # Set stop_evt after invalid message is processed
                consumer.stop_evt.set()
            # Subsequent calls: yield None until stop_evt is set
            while not consumer.stop_evt.is_set():
                yield (None, None, None)

        mock_channel.consume.side_effect = mock_consume

        # Process messages (should fail and trigger NACK without yielding)
        yielded_messages = []

        # Consume messages - the invalid message should be NACKed but not yielded
        for msg in consumer.iter():
            yielded_messages.append(msg)

        # Assertions
        self.assertEqual(
            len(yielded_messages), 0, "No messages should be yielded for invalid data"
        )
        mock_channel.basic_nack.assert_called_once_with(delivery_tag=456, requeue=False)
        mock_channel.basic_ack.assert_not_called()

    @patch("abstra_internals.repositories.consumer.pika.BlockingConnection")
    def test_threadsafe_ack_callback(self, mock_connection_class):
        """Test that threadsafe_ack properly schedules callback"""
        mock_connection = MagicMock()
        mock_channel = MagicMock()
        mock_connection_class.return_value = mock_connection
        mock_connection.channel.return_value = mock_channel
        mock_connection.is_closed = False

        consumer = RabbitMQConsumer(
            self.conn_uri, self.queue_name, self.concurrency, self.logger_prefix
        )

        # Create mock message
        mock_msg = MagicMock()
        mock_msg.delivery_tag = 789

        # Call threadsafe_ack
        consumer.threadsafe_ack(mock_msg)

        # Verify callback was scheduled
        mock_connection.add_callback_threadsafe.assert_called_once()

    @patch("abstra_internals.repositories.consumer.pika.BlockingConnection")
    def test_threadsafe_nack_callback(self, mock_connection_class):
        """Test that threadsafe_nack properly schedules callback"""
        mock_connection = MagicMock()
        mock_channel = MagicMock()
        mock_connection_class.return_value = mock_connection
        mock_connection.channel.return_value = mock_channel
        mock_connection.is_closed = False

        consumer = RabbitMQConsumer(
            self.conn_uri, self.queue_name, self.concurrency, self.logger_prefix
        )

        # Create mock message
        mock_msg = MagicMock()
        mock_msg.delivery_tag = 999

        # Call threadsafe_nack
        consumer.threadsafe_nack(mock_msg)

        # Verify callback was scheduled
        mock_connection.add_callback_threadsafe.assert_called_once()


if __name__ == "__main__":
    unittest.main()
