import time
import unittest
from multiprocessing import Queue
from unittest.mock import MagicMock

from abstra_internals.controllers.execution.consumer import ConsumerController
from abstra_internals.repositories.consumer import (
    Consumer,
    ControlMessage,
    ControlQueueMessage,
)
from abstra_internals.settings import SettingsController


class MockExecutorPool:
    def __init__(self):
        self.killed_ids = []

    def kill_execution(self, execution_id):
        # Simulate check
        if execution_id == "explode":
            raise Exception("Unexpected error in pool")
        self.killed_ids.append(execution_id)

    def start(self):
        pass

    def shutdown(self):
        pass


class FaultyControlConsumer(Consumer):
    def __init__(self, queue: Queue):
        self.queue = queue
        self.running = True
        self.acks = []
        self.nacks = []

    def threadsafe_ack(self, msg):
        self.acks.append(msg)

    def threadsafe_nack(self, msg):
        self.nacks.append(msg)

    def stop_iter(self):
        self.running = False

    def iter(self):
        while self.running:
            try:
                # Using a slightly longer timeout to prevent tight loops in tests
                msg = self.queue.get(timeout=0.1)
                yield msg
            except Exception:
                continue


class TestWebEditorKillRobustness(unittest.TestCase):
    def setUp(self):
        SettingsController.set_root_path("/tmp")
        SettingsController.set_server_port(3000)
        self.control_queue = Queue()
        self.consumer_mock = FaultyControlConsumer(self.control_queue)

        self.mock_main_controller = MagicMock()
        self.mock_main_controller.repositories.mp_context.get_context.return_value = (
            MagicMock()
        )
        self.mock_main_controller.repositories.producer = MagicMock()

        # Mock the regular consumer to just sit idle
        self.regular_consumer = MagicMock()
        self.regular_consumer.iter.return_value = []

        self.controller = ConsumerController(
            self.mock_main_controller,
            self.regular_consumer,
            control_consumer=self.consumer_mock,
        )
        self.pool_mock = MockExecutorPool()
        self.controller.executor_pool = self.pool_mock

    def tearDown(self):
        self.consumer_mock.stop_iter()
        self.controller.shutdown()

    def test_malformed_message_does_not_crash_loop(self):
        # 1. Start the loop
        self.controller.start_loop()

        # 2. Send a "Poison Message" (Not a ControlQueueMessage, just random string/object)
        # The real RabbitMQ consumer might yield deserialization errors, but if logic fails
        # inside the loop, it might receive something unexpected or raise.
        # Here we verify the loop handles unexpected types gracefully.
        poison_msg = "I am not a message"
        self.control_queue.put(poison_msg)

        # 3. Send a VALID message immediately after
        valid_id = "exec-valid-1"
        control_msg = ControlMessage(type="stop", payload={"execution_id": valid_id})
        queue_msg = ControlQueueMessage(message=control_msg, delivery_tag=1)
        self.control_queue.put(queue_msg)

        # 4. Wait for processing
        time.sleep(1.0)  # Give thread time to process both

        # 5. Assertions
        # The loop should have survived the poison message and processed the valid one
        self.assertIn(valid_id, self.pool_mock.killed_ids)
        # The valid message should be acked
        self.assertIn(queue_msg, self.consumer_mock.acks)

        # Depending on implementation, the poison message might be acked (to clear) or nacked
        # Our current implementation acks unknown types to clear the queue (ConsumerController._control_loop logic)
        # "Received unknown message type... self.control_consumer.threadsafe_ack(msg)"
        self.assertIn(poison_msg, self.consumer_mock.acks)

    def test_exception_during_processing_keeps_loop_alive(self):
        # Risk: ExecutorPool raises an exception. Does the loop crash?
        self.controller.start_loop()

        # 1. Send message that triggers exception in our MockPool
        control_msg_bad = ControlMessage(
            type="stop", payload={"execution_id": "explode"}
        )
        queue_msg_bad = ControlQueueMessage(message=control_msg_bad, delivery_tag=666)
        self.control_queue.put(queue_msg_bad)

        # 2. Send valid message after
        control_msg_good = ControlMessage(
            type="stop", payload={"execution_id": "exec-good"}
        )
        queue_msg_good = ControlQueueMessage(message=control_msg_good, delivery_tag=777)
        self.control_queue.put(queue_msg_good)

        time.sleep(1.0)

        # 3. Assertions
        # The second message MUST be processed implies the thread is still alive
        self.assertIn("exec-good", self.pool_mock.killed_ids)

        # The bad message should ideally be NACKed if an exception occurred
        # Check ConsumerController logic: "except Exception ... threadsafe_nack(msg)"
        self.assertIn(queue_msg_bad, self.consumer_mock.nacks)
        self.assertIn(queue_msg_good, self.consumer_mock.acks)

    def test_kill_unknown_execution_is_safe(self):
        # This primarily tests the ExecutorPool, but here we verify integration
        self.controller.start_loop()

        # 1. Kill ID that doesn't exist
        control_msg = ControlMessage(type="stop", payload={"execution_id": "ghost-id"})
        queue_msg = ControlQueueMessage(message=control_msg, delivery_tag=999)
        self.control_queue.put(queue_msg)

        time.sleep(0.5)

        # 2. Assert it called the pool (pool handles the logic of "not found")
        self.assertIn("ghost-id", self.pool_mock.killed_ids)
        self.assertIn(queue_msg, self.consumer_mock.acks)


if __name__ == "__main__":
    unittest.main()
