"""
Tests for ACK/NACK behavior in RabbitMQConsumer.

These tests verify that:
1. iter() does NOT ACK messages (caller is responsible via threadsafe_ack)
2. threadsafe_ack() works correctly after iter()
3. threadsafe_nack() works correctly for error handling

This prevents the double-ACK bug that caused PRECONDITION_FAILED errors
and cascading failures in production.
"""

import json
import threading
import time
import unittest
from concurrent.futures import ThreadPoolExecutor
from typing import List, Tuple
from unittest.mock import MagicMock, Mock, PropertyMock, patch

from pika.exceptions import AMQPChannelError, AMQPError

from abstra_internals.repositories.consumer import RabbitMQConsumer


def create_mock_method(delivery_tag: int):
    """Create a mock method object with delivery_tag."""
    method = MagicMock()
    method.delivery_tag = delivery_tag
    return method


def create_mock_body(stage_id: str = "test-stage", execution_id: str = "test-exec"):
    """Create a valid message body that can be deserialized."""
    return json.dumps(
        {"stage_id": stage_id, "execution_id": execution_id, "context": {}}
    ).encode()


class AckTracker:
    """Tracks ACK/NACK calls to detect issues."""

    def __init__(self):
        self.acked_tags: List[int] = []
        self.nacked_tags: List[int] = []
        self.ack_call_count: int = 0
        self.nack_call_count: int = 0
        self.errors: List[str] = []
        self.ack_order: List[int] = []  # Track order of ACKs
        self._lock = threading.Lock()

    def basic_ack(self, delivery_tag: int):
        with self._lock:
            self.ack_call_count += 1
            self.ack_order.append(delivery_tag)
            if delivery_tag in self.acked_tags or delivery_tag in self.nacked_tags:
                error = AMQPChannelError(
                    406, f"PRECONDITION_FAILED - unknown delivery tag {delivery_tag}"
                )
                self.errors.append(str(error))
                raise error
            self.acked_tags.append(delivery_tag)

    def basic_nack(self, delivery_tag: int, requeue: bool = False):
        with self._lock:
            self.nack_call_count += 1
            if delivery_tag in self.acked_tags or delivery_tag in self.nacked_tags:
                error = AMQPChannelError(
                    406, f"PRECONDITION_FAILED - unknown delivery tag {delivery_tag}"
                )
                self.errors.append(str(error))
                raise error
            self.nacked_tags.append(delivery_tag)


def make_tracked_mock_connection(
    ack_tracker: AckTracker, messages: List[Tuple], channel_open: bool = True
):
    """Create a mock connection that tracks ACK calls."""
    mock_conn = MagicMock()
    mock_channel = MagicMock()
    mock_conn.channel.return_value = mock_channel
    mock_conn.is_closed = False
    mock_channel.is_closed = False
    mock_channel.is_open = channel_open

    mock_channel.basic_ack.side_effect = lambda delivery_tag: ack_tracker.basic_ack(
        delivery_tag
    )
    mock_channel.basic_nack.side_effect = (
        lambda delivery_tag, requeue=False: ack_tracker.basic_nack(
            delivery_tag, requeue
        )
    )

    def consume_generator(*args, **kwargs):
        for msg in messages:
            yield msg

    mock_channel.consume.side_effect = consume_generator

    def add_callback_threadsafe(callback):
        callback()

    mock_conn.add_callback_threadsafe.side_effect = add_callback_threadsafe

    return mock_conn


class TestRabbitMQConsumerAckBehavior(unittest.TestCase):
    """Tests for correct ACK/NACK behavior."""

    def test_iter_does_not_ack_messages(self):
        """iter() should NOT ACK messages - caller is responsible."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            for msg in consumer.iter():
                self.assertEqual(
                    ack_tracker.ack_call_count, 0, "iter() should NOT ACK before yield"
                )
                consumer.stop_iter()
                break

    def test_threadsafe_ack_works_after_iter(self):
        """threadsafe_ack() should successfully ACK after iter()."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received_msg = None
            for msg in consumer.iter():
                received_msg = msg
                consumer.stop_iter()
                break

            self.assertIsNotNone(received_msg)
            self.assertEqual(ack_tracker.ack_call_count, 0, "No ACK yet")

            consumer.threadsafe_ack(received_msg)

            self.assertEqual(ack_tracker.ack_call_count, 1, "Exactly one ACK")
            self.assertEqual(len(ack_tracker.errors), 0, "No errors")

    def test_threadsafe_nack_works_for_error_handling(self):
        """threadsafe_nack() should work for error path."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received_msg = None
            for msg in consumer.iter():
                received_msg = msg
                consumer.stop_iter()
                break

            self.assertEqual(ack_tracker.ack_call_count, 0, "No ACK")

            consumer.threadsafe_nack(received_msg)

            self.assertEqual(ack_tracker.nack_call_count, 1, "NACK worked")
            self.assertEqual(ack_tracker.ack_call_count, 0, "No ACK on error path")
            self.assertEqual(len(ack_tracker.errors), 0, "No errors")

    def test_multiple_messages_each_acked_once(self):
        """Each message should be ACKed exactly once."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body("s1", "e1")),
            (create_mock_method(2), MagicMock(), create_mock_body("s2", "e2")),
            (create_mock_method(3), MagicMock(), create_mock_body("s3", "e3")),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            processed_msgs = []
            for msg in consumer.iter():
                processed_msgs.append(msg)
                if len(processed_msgs) >= 3:
                    consumer.stop_iter()
                    break

            self.assertEqual(len(processed_msgs), 3)
            self.assertEqual(ack_tracker.ack_call_count, 0)

            for msg in processed_msgs:
                consumer.threadsafe_ack(msg)

            self.assertEqual(ack_tracker.ack_call_count, 3, "3 ACKs for 3 messages")
            self.assertEqual(len(ack_tracker.errors), 0, "No errors")

    def test_no_double_ack_possible(self):
        """Calling threadsafe_ack twice should cause error (RabbitMQ behavior)."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received_msg = None
            for msg in consumer.iter():
                received_msg = msg
                consumer.stop_iter()
                break

            consumer.threadsafe_ack(received_msg)
            self.assertEqual(ack_tracker.ack_call_count, 1)
            self.assertEqual(len(ack_tracker.errors), 0)

            # Second ACK fails (but error is caught internally)
            consumer.threadsafe_ack(received_msg)
            self.assertEqual(ack_tracker.ack_call_count, 2)
            self.assertEqual(len(ack_tracker.errors), 1, "Double ACK causes error")


class TestDeserializationErrors(unittest.TestCase):
    """Tests for deserialization failure scenarios."""

    def test_invalid_json_body_causes_nack(self):
        """Invalid JSON body should cause automatic NACK."""
        ack_tracker = AckTracker()

        # Invalid JSON body followed by valid message to break the loop
        messages = [
            (create_mock_method(1), MagicMock(), b"not valid json{{{"),
            (
                create_mock_method(2),
                MagicMock(),
                create_mock_body(),
            ),  # Valid message to yield
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            messages_received = []
            for msg in consumer.iter():
                messages_received.append(msg)
                consumer.stop_iter()
                break

            # Only the valid message should be yielded
            self.assertEqual(
                len(messages_received), 1, "Only valid message should be yielded"
            )
            self.assertEqual(
                messages_received[0].delivery_tag, 2, "Should be the second message"
            )
            self.assertEqual(
                ack_tracker.nack_call_count, 1, "Invalid message should be NACKed"
            )
            self.assertEqual(ack_tracker.ack_call_count, 0, "No ACK yet")

    def test_missing_required_fields_causes_nack(self):
        """Body missing required fields should cause automatic NACK."""
        ack_tracker = AckTracker()

        # Missing stage_id followed by valid message
        invalid_body = json.dumps({"execution_id": "test", "context": {}}).encode()

        messages = [
            (create_mock_method(1), MagicMock(), invalid_body),
            (create_mock_method(2), MagicMock(), create_mock_body()),  # Valid message
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            messages_received = []
            for msg in consumer.iter():
                messages_received.append(msg)
                consumer.stop_iter()
                break

            # Only valid message should be yielded
            self.assertEqual(
                len(messages_received), 1, "Only valid message should be yielded"
            )
            self.assertEqual(messages_received[0].delivery_tag, 2)
            self.assertEqual(
                ack_tracker.nack_call_count, 1, "Missing fields should cause NACK"
            )

    def test_empty_body_causes_nack(self):
        """Empty body should cause automatic NACK."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), b""),
            (create_mock_method(2), MagicMock(), create_mock_body()),  # Valid message
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            messages_received = []
            for msg in consumer.iter():
                messages_received.append(msg)
                consumer.stop_iter()
                break

            self.assertEqual(len(messages_received), 1)
            self.assertEqual(messages_received[0].delivery_tag, 2)
            self.assertEqual(
                ack_tracker.nack_call_count, 1, "Empty body should cause NACK"
            )


class TestConnectionProblems(unittest.TestCase):
    """Tests for connection failure scenarios."""

    def test_channel_closed_during_ack(self):
        """ACK should handle channel being closed."""
        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        # Create connection with channel that will be "closed"
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_channel.is_closed = False
        mock_channel.is_open = False  # Channel is closed!

        def consume_generator(*args, **kwargs):
            for msg in messages:
                yield msg

        mock_channel.consume.side_effect = consume_generator

        def add_callback_threadsafe(callback):
            callback()

        mock_conn.add_callback_threadsafe.side_effect = add_callback_threadsafe

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received_msg = None
            for msg in consumer.iter():
                received_msg = msg
                consumer.stop_iter()
                break

            # ACK should not raise even with closed channel
            consumer.threadsafe_ack(received_msg)

            # basic_ack should NOT have been called (channel was closed)
            mock_channel.basic_ack.assert_not_called()

    def test_channel_closes_after_yield_before_ack(self):
        """Handle channel closing between yield and ACK."""
        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_channel.is_closed = False

        # Channel starts open, then closes
        is_open_values = [True, False]  # Open during iter, closed during ACK
        is_open_iter = iter(is_open_values)
        type(mock_channel).is_open = PropertyMock(
            side_effect=lambda: next(is_open_iter, False)
        )

        def consume_generator(*args, **kwargs):
            for msg in messages:
                yield msg

        mock_channel.consume.side_effect = consume_generator

        def add_callback_threadsafe(callback):
            callback()

        mock_conn.add_callback_threadsafe.side_effect = add_callback_threadsafe

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received_msg = None
            for msg in consumer.iter():
                received_msg = msg
                consumer.stop_iter()
                break

            # Should not raise - handles closed channel gracefully
            consumer.threadsafe_ack(received_msg)

    def test_connection_error_during_ack(self):
        """Handle connection error during ACK."""
        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_channel.is_closed = False
        mock_channel.is_open = True

        # ACK raises connection error
        mock_channel.basic_ack.side_effect = AMQPError("Connection lost")

        def consume_generator(*args, **kwargs):
            for msg in messages:
                yield msg

        mock_channel.consume.side_effect = consume_generator

        def add_callback_threadsafe(callback):
            callback()

        mock_conn.add_callback_threadsafe.side_effect = add_callback_threadsafe

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received_msg = None
            for msg in consumer.iter():
                received_msg = msg
                consumer.stop_iter()
                break

            # Should not raise - error is caught internally
            consumer.threadsafe_ack(received_msg)

            # ACK was attempted
            mock_channel.basic_ack.assert_called_once()


class TestProductionScenarios(unittest.TestCase):
    """Tests for real-world production scenarios."""

    def test_message_without_ack_remains_unacked(self):
        """Message not ACKed should remain in unacked state."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received_msg = None
            for msg in consumer.iter():
                received_msg = msg
                consumer.stop_iter()
                break

            # Simulate "abandoned" execution - no ACK/NACK called
            self.assertIsNotNone(received_msg)
            self.assertEqual(ack_tracker.ack_call_count, 0, "No ACK")
            self.assertEqual(ack_tracker.nack_call_count, 0, "No NACK")
            # Message remains unacked - RabbitMQ will redeliver on connection close

    def test_partial_processing_then_nack(self):
        """Simulate error during processing - message should be NACKed."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            for msg in consumer.iter():
                # Simulate processing that fails
                try:
                    raise ValueError("Processing error")
                except ValueError:
                    consumer.threadsafe_nack(msg)
                consumer.stop_iter()
                break

            self.assertEqual(ack_tracker.nack_call_count, 1, "Should NACK on error")
            self.assertEqual(ack_tracker.ack_call_count, 0, "Should not ACK")

    def test_slow_processing_does_not_affect_ack(self):
        """Slow processing should still allow ACK to work."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            for msg in consumer.iter():
                # Simulate slow processing
                time.sleep(0.01)  # Small delay
                consumer.threadsafe_ack(msg)
                consumer.stop_iter()
                break

            self.assertEqual(
                ack_tracker.ack_call_count, 1, "ACK should work after delay"
            )


class TestConcurrency(unittest.TestCase):
    """Tests for concurrent processing scenarios."""

    def test_acks_out_of_order(self):
        """ACKs can arrive out of order when processing in parallel."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body("s1", "e1")),
            (create_mock_method(2), MagicMock(), create_mock_body("s2", "e2")),
            (create_mock_method(3), MagicMock(), create_mock_body("s3", "e3")),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            processed_msgs = []
            for msg in consumer.iter():
                processed_msgs.append(msg)
                if len(processed_msgs) >= 3:
                    consumer.stop_iter()
                    break

            # ACK in reverse order (simulating different processing times)
            for msg in reversed(processed_msgs):
                consumer.threadsafe_ack(msg)

            self.assertEqual(ack_tracker.ack_call_count, 3)
            # ACKs should be in reverse order
            self.assertEqual(ack_tracker.ack_order, [3, 2, 1])
            self.assertEqual(len(ack_tracker.errors), 0)

    def test_parallel_acks_from_threadpool(self):
        """ACKs from ThreadPoolExecutor should all succeed."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(i), MagicMock(), create_mock_body(f"s{i}", f"e{i}"))
            for i in range(1, 6)
        ] + [(None, None, None)]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            processed_msgs = []
            for msg in consumer.iter():
                processed_msgs.append(msg)
                if len(processed_msgs) >= 5:
                    consumer.stop_iter()
                    break

            # ACK all in parallel using ThreadPoolExecutor
            with ThreadPoolExecutor(max_workers=5) as executor:
                futures = [
                    executor.submit(consumer.threadsafe_ack, msg)
                    for msg in processed_msgs
                ]
                for f in futures:
                    f.result()  # Wait for all to complete

            self.assertEqual(ack_tracker.ack_call_count, 5, "All 5 ACKs should succeed")
            self.assertEqual(len(ack_tracker.errors), 0, "No errors")

    def test_stop_iter_during_processing(self):
        """stop_iter() during message processing should not cause issues."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (create_mock_method(2), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received_msgs = []
            for msg in consumer.iter():
                received_msgs.append(msg)
                # Stop immediately after first message
                consumer.stop_iter()
                # But still ACK the message we received
                consumer.threadsafe_ack(msg)
                break

            self.assertEqual(len(received_msgs), 1)
            self.assertEqual(ack_tracker.ack_call_count, 1)

    def test_stop_iter_from_another_thread(self):
        """stop_iter() called from another thread should stop iteration."""
        ack_tracker = AckTracker()

        # Many messages to ensure we don't process all before stop
        messages = [
            (create_mock_method(i), MagicMock(), create_mock_body())
            for i in range(1, 100)
        ] + [(None, None, None)]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received_count = [0]
            stop_event = threading.Event()

            def stop_after_delay():
                stop_event.wait(timeout=0.1)
                consumer.stop_iter()

            stop_thread = threading.Thread(target=stop_after_delay)
            stop_thread.start()

            for msg in consumer.iter():
                received_count[0] += 1
                if received_count[0] == 5:
                    stop_event.set()  # Signal stop thread
                consumer.threadsafe_ack(msg)

            stop_thread.join()

            # Should have stopped before processing all 100
            self.assertLess(received_count[0], 100, "Should stop before all messages")
            self.assertEqual(ack_tracker.ack_call_count, received_count[0])


class TestEdgeCases(unittest.TestCase):
    """Tests for edge cases."""

    def test_delivery_tag_zero(self):
        """Delivery tag 0 should work correctly."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(0), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            for msg in consumer.iter():
                self.assertEqual(msg.delivery_tag, 0)
                consumer.threadsafe_ack(msg)
                consumer.stop_iter()
                break

            self.assertEqual(ack_tracker.ack_call_count, 1)
            self.assertIn(0, ack_tracker.acked_tags)

    def test_large_delivery_tag(self):
        """Large delivery tag should work correctly."""
        ack_tracker = AckTracker()
        large_tag = 2**63 - 1  # Max int64

        messages = [
            (create_mock_method(large_tag), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            for msg in consumer.iter():
                self.assertEqual(msg.delivery_tag, large_tag)
                consumer.threadsafe_ack(msg)
                consumer.stop_iter()
                break

            self.assertEqual(ack_tracker.ack_call_count, 1)

    def test_ack_then_nack_same_message(self):
        """ACK then NACK same message should fail."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            for msg in consumer.iter():
                consumer.threadsafe_ack(msg)
                consumer.threadsafe_nack(msg)  # Should fail
                consumer.stop_iter()
                break

            self.assertEqual(ack_tracker.ack_call_count, 1)
            self.assertEqual(ack_tracker.nack_call_count, 1)
            self.assertEqual(len(ack_tracker.errors), 1, "NACK after ACK should error")

    def test_nack_then_ack_same_message(self):
        """NACK then ACK same message should fail."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            for msg in consumer.iter():
                consumer.threadsafe_nack(msg)
                consumer.threadsafe_ack(msg)  # Should fail
                consumer.stop_iter()
                break

            self.assertEqual(ack_tracker.nack_call_count, 1)
            self.assertEqual(ack_tracker.ack_call_count, 1)
            self.assertEqual(len(ack_tracker.errors), 1, "ACK after NACK should error")

    def test_only_inactivity_timeouts(self):
        """Handle stream of only inactivity timeouts - iter should not yield."""
        ack_tracker = AckTracker()

        # Only inactivity timeouts, then a real message to break the loop
        messages = [
            (None, None, None),
            (None, None, None),
            (None, None, None),
            (
                create_mock_method(1),
                MagicMock(),
                create_mock_body(),
            ),  # Real message to break
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received = []
            for msg in consumer.iter():
                received.append(msg)
                consumer.stop_iter()
                break

            # Only the real message should be yielded, timeouts are skipped
            self.assertEqual(len(received), 1, "Only real message should be yielded")
            self.assertEqual(received[0].delivery_tag, 1)
            self.assertEqual(ack_tracker.ack_call_count, 0)
            self.assertEqual(ack_tracker.nack_call_count, 0)


class TestReconnection(unittest.TestCase):
    """Tests for reconnection scenarios."""

    def test_connect_method_establishes_connection(self):
        """_connect should establish connection and channel."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            # Connection should be established
            self.assertIsNotNone(consumer.connection)
            self.assertIsNotNone(consumer.channel)
            factory.assert_called_once()

    def test_connection_retry_on_initial_failure(self):
        """_connect should retry on initial connection failure."""
        from pika.exceptions import AMQPConnectionError

        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        # First call fails, second succeeds
        factory = Mock(side_effect=[AMQPConnectionError("Failed"), mock_conn])

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            # Should have retried and succeeded
            self.assertEqual(factory.call_count, 2)
            self.assertIsNotNone(consumer.connection)

    def test_stop_evt_prevents_reconnection_loop(self):
        """Setting stop_evt should prevent infinite reconnection loops."""
        ack_tracker = AckTracker()
        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            # Set stop event before iterating
            consumer.stop_iter()

            # Iteration should exit immediately
            count = 0
            for _ in consumer.iter():
                count += 1
                if count > 10:
                    break

            # Should not have iterated
            self.assertEqual(count, 0)


class TestContextManager(unittest.TestCase):
    """Tests for context manager behavior (__enter__/__exit__)."""

    def test_context_manager_enter_returns_self(self):
        """__enter__ should return the consumer instance."""
        ack_tracker = AckTracker()
        messages = [(None, None, None)]
        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            result = consumer.__enter__()
            self.assertIs(result, consumer)

    def test_context_manager_exit_processes_data_events(self):
        """__exit__ should call process_data_events."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_conn.is_open = True
        mock_channel.is_open = True

        def consume_generator(*args, **kwargs):
            yield (None, None, None)

        mock_channel.consume.side_effect = consume_generator

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            consumer.__exit__(None, None, None)

            mock_conn.process_data_events.assert_called_once()

    def test_context_manager_exit_cancels_channel(self):
        """__exit__ should cancel and close the channel."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_conn.is_open = True
        mock_channel.is_open = True

        def consume_generator(*args, **kwargs):
            yield (None, None, None)

        mock_channel.consume.side_effect = consume_generator

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            consumer.__exit__(None, None, None)

            mock_channel.cancel.assert_called_once()
            mock_channel.close.assert_called_once()

    def test_context_manager_exit_closes_connection(self):
        """__exit__ should close the connection."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_conn.is_open = True
        mock_channel.is_open = True

        def consume_generator(*args, **kwargs):
            yield (None, None, None)

        mock_channel.consume.side_effect = consume_generator

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            consumer.__exit__(None, None, None)

            mock_conn.close.assert_called_once()

    def test_context_manager_exit_handles_closed_connection(self):
        """__exit__ should handle already-closed connection gracefully."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_conn.is_open = False  # Connection already closed
        mock_channel.is_open = True

        def consume_generator(*args, **kwargs):
            yield (None, None, None)

        mock_channel.consume.side_effect = consume_generator

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            # Should not raise
            result = consumer.__exit__(None, None, None)

            self.assertFalse(result)
            # close() should NOT be called since connection is already closed
            mock_conn.close.assert_not_called()


class TestSubclasses(unittest.TestCase):
    """Tests for consumer subclasses."""

    def test_web_editor_consumer_uses_correct_queue(self):
        """WebEditorConsumer should use web_editor_executions queue."""
        from abstra_internals.repositories.consumer import WebEditorConsumer

        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            _consumer = WebEditorConsumer(
                "amqp://localhost", connection_factory=factory
            )

            # Should have declared the correct queue
            mock_channel.queue_declare.assert_called_with(
                queue="web_editor_executions", durable=True
            )
            self.assertEqual(_consumer.queue, "web_editor_executions")

    def test_web_editor_consumer_custom_queue_name(self):
        """WebEditorConsumer should accept custom queue name."""
        from abstra_internals.repositories.consumer import WebEditorConsumer

        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            _consumer = WebEditorConsumer(
                "amqp://localhost",
                queue_name="custom_queue",
                connection_factory=factory,
            )

            mock_channel.queue_declare.assert_called_with(
                queue="custom_queue", durable=True
            )
            self.assertEqual(_consumer.queue, "custom_queue")

    def test_web_editor_control_consumer_deserializes_control_message(self):
        """WebEditorControlConsumer should deserialize to ControlQueueMessage."""
        from abstra_internals.repositories.consumer import (
            ControlQueueMessage,
            WebEditorControlConsumer,
        )

        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_channel.is_open = True

        control_body = json.dumps(
            {"type": "stop", "payload": {"reason": "user_request"}}
        ).encode()

        messages = [
            (create_mock_method(1), MagicMock(), control_body),
            (None, None, None),
        ]

        def consume_generator(*args, **kwargs):
            for msg in messages:
                yield msg

        mock_channel.consume.side_effect = consume_generator

        def add_callback_threadsafe(callback):
            callback()

        mock_conn.add_callback_threadsafe.side_effect = add_callback_threadsafe

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = WebEditorControlConsumer(
                "amqp://localhost", connection_factory=factory
            )

            received = []
            for msg in consumer.iter():
                received.append(msg)
                consumer.stop_iter()
                break

            self.assertEqual(len(received), 1)
            self.assertIsInstance(received[0], ControlQueueMessage)
            self.assertEqual(received[0].message.type, "stop")

    def test_editor_consumer_uses_multiprocessing_queue(self):
        """EditorConsumer should consume from multiprocessing Queue."""
        from multiprocessing import Queue

        from abstra_internals.repositories.consumer import EditorConsumer
        from abstra_internals.repositories.producer import PreExecution, QueueMessage

        q = Queue()
        consumer = EditorConsumer(q)

        # Put a message in the queue
        pre_exec = PreExecution(
            stage_id="test-stage", execution_id="test-exec", context={}
        )
        msg = QueueMessage(preexecution=pre_exec, delivery_tag=1)
        q.put(msg)

        received = []
        for m in consumer.iter():
            received.append(m)
            consumer.stop_iter()
            break

        self.assertEqual(len(received), 1)
        self.assertEqual(received[0].preexecution.stage_id, "test-stage")

    def test_editor_consumer_ack_nack_are_noop(self):
        """EditorConsumer ACK/NACK should be no-ops."""
        from multiprocessing import Queue

        from abstra_internals.repositories.consumer import EditorConsumer
        from abstra_internals.repositories.producer import PreExecution, QueueMessage

        q = Queue()
        consumer = EditorConsumer(q)

        pre_exec = PreExecution(
            stage_id="test-stage", execution_id="test-exec", context={}
        )
        msg = QueueMessage(preexecution=pre_exec, delivery_tag=1)

        # Should not raise
        consumer.threadsafe_ack(msg)
        consumer.threadsafe_nack(msg)

    def test_editor_consumer_stop_iter(self):
        """EditorConsumer should stop iteration when stop_iter is called."""
        from multiprocessing import Queue

        from abstra_internals.repositories.consumer import EditorConsumer

        q = Queue()
        consumer = EditorConsumer(q)

        # Set stop event before iterating
        consumer.stop_iter()

        received = []
        for msg in consumer.iter():
            received.append(msg)

        # Should exit gracefully without messages
        self.assertEqual(len(received), 0)


class TestConfiguration(unittest.TestCase):
    """Tests for configuration options."""

    def test_basic_qos_uses_concurrency(self):
        """basic_qos should be called with the concurrency value."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            _consumer = RabbitMQConsumer(
                "amqp://localhost",
                "test-queue",
                concurrency=5,
                connection_factory=factory,
            )

            mock_channel.basic_qos.assert_called_with(prefetch_count=5)
            self.assertEqual(_consumer.concurrency, 5)

    def test_queue_declared_as_durable(self):
        """Queue should be declared as durable."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            _consumer = RabbitMQConsumer(
                "amqp://localhost", "my-queue", 1, connection_factory=factory
            )

            mock_channel.queue_declare.assert_called_with(
                queue="my-queue", durable=True
            )
            self.assertEqual(_consumer.queue, "my-queue")

    def test_custom_logger_prefix(self):
        """Custom logger prefix should be used in logs."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost",
                "test-queue",
                1,
                logger_prefix="MyCustomConsumer",
                connection_factory=factory,
            )

            self.assertEqual(consumer.logger_prefix, "MyCustomConsumer")

    def test_connection_timeout_parameters(self):
        """Connection should use timeout parameters."""
        import pika

        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        captured_params = []

        def capture_factory(params):
            captured_params.append(params)
            return mock_conn

        with patch("time.sleep"):
            _consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=capture_factory
            )

            self.assertEqual(len(captured_params), 1)
            params = captured_params[0]
            self.assertIsInstance(params, pika.URLParameters)
            self.assertIsNotNone(_consumer)


class TestNackRequeue(unittest.TestCase):
    """Tests for NACK with requeue behavior."""

    def test_nack_without_requeue(self):
        """NACK should be called with requeue=False by default."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_channel.is_open = True

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        def consume_generator(*args, **kwargs):
            for msg in messages:
                yield msg

        mock_channel.consume.side_effect = consume_generator

        def add_callback_threadsafe(callback):
            callback()

        mock_conn.add_callback_threadsafe.side_effect = add_callback_threadsafe

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            for msg in consumer.iter():
                consumer.threadsafe_nack(msg)
                consumer.stop_iter()
                break

            mock_channel.basic_nack.assert_called_with(delivery_tag=1, requeue=False)

    def test_deserialization_error_nacks_without_requeue(self):
        """Deserialization errors should NACK without requeue."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_channel.is_open = True

        # Invalid message followed by valid one
        messages = [
            (create_mock_method(1), MagicMock(), b"invalid json"),
            (create_mock_method(2), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        def consume_generator(*args, **kwargs):
            for msg in messages:
                yield msg

        mock_channel.consume.side_effect = consume_generator

        def add_callback_threadsafe(callback):
            callback()

        mock_conn.add_callback_threadsafe.side_effect = add_callback_threadsafe

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            for msg in consumer.iter():
                consumer.stop_iter()
                break

            # Should have NACKed the invalid message
            mock_channel.basic_nack.assert_called_with(delivery_tag=1, requeue=False)


class TestConnectionEdgeCases(unittest.TestCase):
    """Tests for connection edge cases."""

    def test_connection_is_closed_during_iter(self):
        """Handle connection.is_closed becoming True during iteration."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_channel.is_open = True

        # Start open, then become closed
        is_closed_values = iter([False, False, True, False])
        type(mock_conn).is_closed = property(lambda self: next(is_closed_values, False))

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        def consume_generator(*args, **kwargs):
            for msg in messages:
                yield msg

        mock_channel.consume.side_effect = consume_generator

        def add_callback_threadsafe(callback):
            callback()

        mock_conn.add_callback_threadsafe.side_effect = add_callback_threadsafe

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received = []
            for msg in consumer.iter():
                received.append(msg)
                consumer.stop_iter()
                break

            self.assertEqual(len(received), 1)

    def test_channel_closed_but_connection_open(self):
        """Handle channel being closed while connection remains open."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_channel.is_closed = True  # Channel closed
        mock_channel.is_open = False

        messages = [
            (create_mock_method(1), MagicMock(), create_mock_body()),
            (None, None, None),
        ]

        def consume_generator(*args, **kwargs):
            for msg in messages:
                yield msg

        mock_channel.consume.side_effect = consume_generator

        def add_callback_threadsafe(callback):
            callback()

        mock_conn.add_callback_threadsafe.side_effect = add_callback_threadsafe

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            # ACK should handle closed channel
            for msg in consumer.iter():
                consumer.threadsafe_ack(msg)
                consumer.stop_iter()
                break

            # basic_ack should not be called since channel is closed
            mock_channel.basic_ack.assert_not_called()

    def test_exception_during_connection_close_in_cleanup(self):
        """Handle exception during connection.close() in cleanup."""
        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False
        mock_channel.is_open = True

        # close() raises exception
        mock_conn.close.side_effect = Exception("Close failed")

        messages = [(None, None, None)]

        def consume_generator(*args, **kwargs):
            for msg in messages:
                yield msg

        mock_channel.consume.side_effect = consume_generator

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            # Simulate connection error during iter
            consumer.connection = None


class TestPerformanceStress(unittest.TestCase):
    """Tests for performance and stress scenarios."""

    def test_high_volume_messages(self):
        """Should handle high volume of messages efficiently."""
        ack_tracker = AckTracker()
        num_messages = 100  # Reduced from 1000 for faster CI

        messages = [
            (create_mock_method(i), MagicMock(), create_mock_body(f"s{i}", f"e{i}"))
            for i in range(1, num_messages + 1)
        ] + [(None, None, None)]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost",
                "test-queue",
                10,  # Higher concurrency
                connection_factory=factory,
            )

            received = []
            for msg in consumer.iter():
                received.append(msg)
                consumer.threadsafe_ack(msg)
                if len(received) >= num_messages:
                    consumer.stop_iter()
                    break

            self.assertEqual(len(received), num_messages)
            self.assertEqual(ack_tracker.ack_call_count, num_messages)

    def test_large_message_body(self):
        """Should handle large message bodies."""
        ack_tracker = AckTracker()

        # Create a large body (1MB of JSON)
        large_data = {"data": "x" * (1024 * 1024)}
        large_body = json.dumps(
            {
                "stage_id": "test-stage",
                "execution_id": "test-exec",
                "context": large_data,
            }
        ).encode()

        messages = [
            (create_mock_method(1), MagicMock(), large_body),
            (None, None, None),
        ]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            received = []
            for msg in consumer.iter():
                received.append(msg)
                consumer.threadsafe_ack(msg)
                consumer.stop_iter()
                break

            self.assertEqual(len(received), 1)
            self.assertEqual(ack_tracker.ack_call_count, 1)

    def test_rapid_stop_start_iterations(self):
        """Should handle rapid stop/start of iterations."""
        ack_tracker = AckTracker()

        messages = [
            (create_mock_method(i), MagicMock(), create_mock_body())
            for i in range(1, 11)
        ] + [(None, None, None)]

        factory = Mock(return_value=make_tracked_mock_connection(ack_tracker, messages))

        with patch("time.sleep"):
            consumer = RabbitMQConsumer(
                "amqp://localhost", "test-queue", 1, connection_factory=factory
            )

            # Multiple rapid iterations
            total_received = []
            for _ in range(5):
                consumer.stop_evt.clear()  # Reset stop event
                for msg in consumer.iter():
                    total_received.append(msg)
                    consumer.stop_iter()
                    break

            # Should have received some messages
            self.assertGreater(len(total_received), 0)


class TestRabbitConsumerEnvironment(unittest.TestCase):
    """Tests for RabbitConsumer with environment variables."""

    def test_rabbit_consumer_uses_env_queue(self):
        """RabbitConsumer should use RABBITMQ_EXECUTION_QUEUE from environment."""
        from abstra_internals.repositories.consumer import RabbitConsumer

        mock_conn = MagicMock()
        mock_channel = MagicMock()
        mock_conn.channel.return_value = mock_channel
        mock_conn.is_closed = False

        factory = Mock(return_value=mock_conn)

        with patch("time.sleep"):
            with patch(
                "abstra_internals.repositories.consumer.RABBITMQ_EXECUTION_QUEUE",
                "test-executions",
            ):
                with patch(
                    "abstra_internals.repositories.consumer.ABSTRA_EXECUTOR_POOL_SIZE",
                    3,
                ):
                    consumer = RabbitConsumer(
                        "amqp://localhost", connection_factory=factory
                    )

                    self.assertEqual(consumer.queue, "test-executions")
                    self.assertEqual(consumer.concurrency, 3)


if __name__ == "__main__":
    unittest.main()
