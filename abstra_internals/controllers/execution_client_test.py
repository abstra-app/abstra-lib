from typing import List
from unittest import TestCase

from abstra_internals.controllers.execution_client import FormClient
from abstra_internals.settings import SettingsController


class MockWS:
    messages: List[str]

    def __init__(self):
        self.messages = []

    def send(self, data):
        self.messages.append(data)


class FormClientTest(TestCase):
    def setUp(self) -> None:
        SettingsController.set_root_path("/tmp")

    def test_stdio_is_sent(self):
        ws = MockWS()
        form_client = FormClient(ws, {}, production_mode=False)  # type: ignore

        form_client.handle_stdio("stdout", "Hello, World!")
        form_client.handle_stdio("stderr", "Goodbye, World!")

        self.assertEqual(
            ws.messages,
            [
                '{"type": "execution:stdout", "log": "Hello, World!", "debug": {"stack": []}}',
                '{"type": "execution:stderr", "log": "Goodbye, World!", "debug": {"stack": []}}',
            ],
        )

    def test_stdio_ommited_in_production_mode(self):
        ws = MockWS()
        form_client = FormClient(ws, {}, production_mode=True)  # type: ignore

        form_client.handle_stdio("stdout", "Hello, World!")
        form_client.handle_stdio("stderr", "Goodbye, World!")

        self.assertEqual(ws.messages, [])
