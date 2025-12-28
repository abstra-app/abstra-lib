import json
import unittest
from unittest.mock import MagicMock, patch

from abstra_internals.controllers.execution.consumer import ConsumerController
from abstra_internals.repositories.consumer import (
    ControlMessage,
    ControlQueueMessage,
)
from abstra_internals.repositories.execution import WebEditorExecutionRepository
from abstra_internals.settings import SettingsController


class TestWebEditorKill(unittest.TestCase):
    def setUp(self):
        SettingsController.set_root_path("/tmp")
        SettingsController.set_server_port(3000)
        self.rabbitmq_uri = "amqp://guest:guest@localhost:5672/%2F"

    @patch("abstra_internals.repositories.producer.pika.BlockingConnection")
    @patch("abstra_internals.repositories.producer.pika.URLParameters")
    def test_producer_sends_stop_message(self, mock_url_params, mock_connection):
        # Setup mocks
        mock_channel = MagicMock()
        mock_conn_instance = MagicMock()
        mock_conn_instance.channel.return_value.__enter__.return_value = mock_channel
        mock_connection.return_value.__enter__.return_value = mock_conn_instance

        # Initialize repository
        repo = WebEditorExecutionRepository(MagicMock(), self.rabbitmq_uri)

        # Action
        execution_id = "test-exec-id"
        repo.stop_execution(execution_id)

        # Assertions
        mock_channel.queue_declare.assert_called_with(
            queue="web_editor_control", durable=True
        )

        expected_payload = ControlMessage(
            type="stop", payload={"execution_id": execution_id}
        )

        # Verify the call arguments
        call_args = mock_channel.basic_publish.call_args
        self.assertIsNotNone(call_args)

        # Check body
        published_body = json.loads(call_args.kwargs["body"])
        self.assertEqual(published_body, expected_payload.dump())

        # Check routing key
        self.assertEqual(call_args.kwargs["routing_key"], "web_editor_control")

    @patch("abstra_internals.controllers.execution.consumer.Thread")
    def test_consumer_controller_handles_stop_message(self, mock_thread):
        # Setup mocks
        mock_main_controller = MagicMock()
        mock_consumer = MagicMock()
        mock_control_consumer = MagicMock()

        # Setup executor pool mock
        mock_executor_pool = MagicMock()

        # Initialize controller
        controller = ConsumerController(
            mock_main_controller, mock_consumer, control_consumer=mock_control_consumer
        )
        controller.executor_pool = mock_executor_pool

        # Prepare a control message
        execution_id = "test-exec-id"
        control_msg = ControlMessage(
            type="stop", payload={"execution_id": execution_id}
        )
        queue_msg = ControlQueueMessage(message=control_msg, delivery_tag=123)

        # Mock the iter() of control_consumer to yield our message once
        mock_control_consumer.iter.return_value = [queue_msg]

        # Run the control loop directly (bypassing threading for test)
        controller._control_loop()

        # Assertions
        mock_executor_pool.kill_execution.assert_called_with(execution_id)
        mock_control_consumer.threadsafe_ack.assert_called_with(queue_msg)


if __name__ == "__main__":
    unittest.main()
