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


class FakeControlConsumer(Consumer):
    def __init__(self, queue: Queue):
        self.queue = queue
        self.running = True
        self.acks = 0

    def threadsafe_ack(self, msg):
        self.acks += 1

    def threadsafe_nack(self, msg):
        pass

    def stop_iter(self):
        self.running = False

    def iter(self):
        while self.running:
            try:
                msg = self.queue.get(timeout=0.1)
                yield msg
            except Exception:
                continue


class TestWebEditorKillIntegration(unittest.TestCase):
    def setUp(self):
        SettingsController.set_root_path("/tmp")
        SettingsController.set_server_port(3000)

    def test_end_to_end_kill_signal(self):
        # 1. Setup
        control_queue = Queue()
        fake_control_consumer = FakeControlConsumer(control_queue)

        mock_main_controller = MagicMock()
        mock_main_controller.repositories.mp_context.get_context.return_value = (
            MagicMock()
        )
        mock_main_controller.repositories.producer = (
            MagicMock()
        )  # Not LocalProducerRepository to avoid queue lookup

        mock_consumer = MagicMock()
        mock_consumer.iter.return_value = []  # No normal executions

        controller = ConsumerController(
            mock_main_controller, mock_consumer, control_consumer=fake_control_consumer
        )

        mock_executor_pool = MagicMock()
        controller.executor_pool = mock_executor_pool

        # 2. Start the controller loops
        # start_loop starts the control_thread
        controller.start_loop()

        try:
            # 3. Simulate sending a kill message from "Web Editor"
            execution_id = "exec-123"
            control_msg = ControlMessage(
                type="stop", payload={"execution_id": execution_id}
            )
            queue_msg = ControlQueueMessage(message=control_msg, delivery_tag=1)

            control_queue.put(queue_msg)

            # 4. Wait for processing (the control loop runs in a background thread)
            max_wait = 2.0
            start_time = time.time()
            while time.time() - start_time < max_wait:
                if mock_executor_pool.kill_execution.called:
                    break
                time.sleep(0.1)

            # 5. Assertions
            mock_executor_pool.kill_execution.assert_called_with(execution_id)
            self.assertEqual(fake_control_consumer.acks, 1)

        finally:
            fake_control_consumer.stop_iter()
            controller.shutdown()


if __name__ == "__main__":
    unittest.main()
