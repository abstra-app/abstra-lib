import threading
import unittest
from unittest.mock import MagicMock, Mock, patch

from pika.exceptions import AMQPChannelError, AMQPConnectionError

from abstra_internals.repositories.consumer import RabbitConsumer
from abstra_internals.utils.rabbitmq_connection import RabbitMQConnection


def make_mock_connection(consume_yields=None):
    """Helper to create a mock connection with proper consume() behavior."""
    mock_conn = MagicMock()
    mock_channel = MagicMock()
    mock_conn.channel.return_value = mock_channel
    mock_conn.is_closed = False
    mock_channel.is_closed = False

    # consume() must be a generator that yields (method, properties, body) tuples
    # None method means inactivity timeout
    if consume_yields is None:
        consume_yields = [(None, None, None)]  # Single inactivity timeout

    def consume_generator(*args, **kwargs):
        for item in consume_yields:
            yield item

    mock_channel.consume.side_effect = consume_generator
    return mock_conn


class TestRabbitMQConnectionFailure(unittest.TestCase):
    def test_consumer_thread_auto_reconnect(self):
        """
        Scenario: RabbitMQ consumer connection is lost.
        Expected: The consumer thread should attempt to reconnect automatically in a loop.
        """
        reconnect_event = threading.Event()
        connection_attempts = []

        def factory_side_effect(*args, **kwargs):
            connection_attempts.append(threading.current_thread().name)
            if len(connection_attempts) > 2:
                reconnect_event.set()
            return make_mock_connection()

        factory = Mock(side_effect=factory_side_effect)

        with patch("time.sleep"):
            conn = RabbitMQConnection(
                "amqp://localhost", "s", "r", "id", connection_factory=factory
            )

            # Initial setup should have called factory twice (sender + receiver)
            self.assertEqual(len(connection_attempts), 2)

            # Simulate receiver connection loss
            conn._recv_connection = None

            # Wait for reconnect with timeout
            reconnect_event.wait(timeout=1.0)

            # Should have attempted to reconnect receiver
            self.assertGreater(len(connection_attempts), 2)

            conn.close()

    def test_amqp_error_during_consumption_triggers_reconnect(self):
        """
        Scenario: An AMQP error occurs while processing data events.
        Expected: The loop should catch it and attempt to reconnect.
        """
        reconnect_event = threading.Event()
        call_count = [0]

        def factory_side_effect(*args, **kwargs):
            call_count[0] += 1
            if call_count[0] >= 4:
                reconnect_event.set()
            return make_mock_connection()

        factory = Mock(side_effect=factory_side_effect)

        with patch("time.sleep"):
            conn = RabbitMQConnection(
                "amqp://localhost", "s", "r", "id", connection_factory=factory
            )

            # Simulate connection loss to trigger reconnect
            conn._recv_connection = None

            # Wait for reconnect with timeout
            reconnect_event.wait(timeout=1.0)

            # Should have called setup_connections at least twice
            # (once at init, once after error)
            # factory is called 2x per setup.
            self.assertGreaterEqual(call_count[0], 4)

            conn.close()

    def test_thread_safety_during_close(self):
        """
        Scenario: Closing connection while consumer loop is active.
        Expected: No race conditions or deadlocks.
        """
        factory = Mock(side_effect=lambda *a, **k: make_mock_connection())

        with patch("time.sleep"):
            for _ in range(10):  # Repeat to increase chance of catching race
                conn = RabbitMQConnection(
                    "amqp://localhost", "s", "r", "id", connection_factory=factory
                )
                # Immediately close
                conn.close()
                self.assertFalse(conn._consumer_thread.is_alive())

    def test_sender_reconnect_logic(self):
        """
        Scenario: Sender connection is lost.
        Expected: send() should work after connection setup.
        """
        factory = Mock(side_effect=lambda *a, **k: make_mock_connection())

        with patch("time.sleep"):
            conn = RabbitMQConnection(
                "amqp://localhost", "s", "r", "id", connection_factory=factory
            )

            # Verify we can send a message
            conn.send({"test": "data"})

            # Verify basic_publish was called
            self.assertTrue(conn._send_channel.basic_publish.called)

            conn.close()

    def test_unhandled_exception_in_loop_doesnt_kill_it(self):
        """
        Scenario: An unexpected exception occurs in the consumer loop.
        Expected: The loop should log the error and continue.
        """
        sleep_called = threading.Event()
        conn_holder = [None]
        setup_call_count = [0]

        def sleep_side_effect(_):
            sleep_called.set()
            # Close the connection after sleep is called to stop the loop
            if conn_holder[0]:
                conn_holder[0]._closed = True

        def factory_side_effect(*args, **kwargs):
            setup_call_count[0] += 1
            if setup_call_count[0] > 2:
                # After initial setup (2 calls), raise exception on reconnect
                raise Exception("Unexpected error during reconnect")
            return make_mock_connection()

        factory = Mock(side_effect=factory_side_effect)

        with patch("time.sleep", side_effect=sleep_side_effect):
            conn = RabbitMQConnection(
                "amqp://localhost", "s", "r", "id", connection_factory=factory
            )
            conn_holder[0] = conn

            # Simulate connection loss to trigger reconnect path which will raise exception
            conn._recv_connection = None

            # Wait for sleep to be called (indicating error was caught)
            self.assertTrue(
                sleep_called.wait(timeout=1.0),
                "Loop should have caught exception and slept",
            )

            conn.close()

    def test_persistent_broker_failure_handling(self):
        """
        Scenario: Broker is down and stays down.
        Expected: Consumer thread continues to attempt reconnection with backoff,
                  but doesn't crash the main application.
        """
        factory = Mock()

        # Simulate connection failure at init
        factory.side_effect = AMQPConnectionError("Broker down")

        with patch("time.sleep"):
            # Verify Init failure
            with self.assertRaises(AMQPConnectionError):
                RabbitMQConnection(
                    "amqp://localhost", "s", "r", "id", connection_factory=factory
                )

        # Test failure AFTER init
        factory_call_count = [0]
        sleep_count = [0]
        close_event = threading.Event()

        def factory_success_then_fail(*args, **kwargs):
            factory_call_count[0] += 1
            if factory_call_count[0] <= 2:  # Sender + Receiver Init OK
                return make_mock_connection()
            raise AMQPConnectionError("Broker died")  # Reconnects fail

        factory.side_effect = factory_success_then_fail

        def sleep_side_effect(seconds):
            sleep_count[0] += 1
            if sleep_count[0] >= 3:
                close_event.set()

        with patch("time.sleep", side_effect=sleep_side_effect):
            conn = RabbitMQConnection(
                "amqp://localhost", "s", "r", "id", connection_factory=factory
            )

            # Force reconnect attempt
            conn._recv_connection = None

            # Wait for multiple sleep calls indicating retry loop is running
            close_event.wait(timeout=1.0)

            # Close to stop the thread
            conn.close()

            self.assertGreaterEqual(
                sleep_count[0], 3, "Should have slept multiple times"
            )


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

        consumer = RabbitConsumer("amqp://localhost", connection_factory=factory)

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
        consumer = RabbitConsumer("amqp://localhost", connection_factory=factory)

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


if __name__ == "__main__":
    unittest.main()
