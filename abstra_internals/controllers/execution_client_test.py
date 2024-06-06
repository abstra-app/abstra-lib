from typing import List
from unittest import TestCase

from abstra_internals.controllers.execution_client import FormClient


class MockWS:
    messages: List[str]

    def __init__(self):
        self.messages = []

    def send(self, data):
        self.messages.append(data)


class FormClientTest(TestCase):
    def test_stdio_is_sent(self):
        ws = MockWS()
        form_client = FormClient(ws, {}, production_mode=False)  # type: ignore

        form_client.handle_stdio("stdout", "Hello, World!")
        form_client.handle_stdio("stderr", "Goodbye, World!")

        self.assertEqual(
            ws.messages,
            [
                '{"type": "execution:stdout", "log": "Hello, World!"}',
                '{"type": "execution:stderr", "log": "Goodbye, World!"}',
            ],
        )

    def test_stdio_ommited_in_production_mode(self):
        ws = MockWS()
        form_client = FormClient(ws, {}, production_mode=True)  # type: ignore

        form_client.handle_stdio("stdout", "Hello, World!")
        form_client.handle_stdio("stderr", "Goodbye, World!")

        self.assertEqual(ws.messages, [])
