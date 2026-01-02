import unittest
from pathlib import Path
from unittest.mock import MagicMock, patch

import pandas as pd

from abstra.forms import PandasOutput, TextInput, run
from abstra_internals.controllers.execution.execution_client_form import FormClient
from abstra_internals.controllers.sdk.sdk_forms import FormSDKController
from abstra_internals.entities.execution_context import FormContext, Request
from abstra_internals.repositories.users import UsersRepository
from abstra_internals.settings import Settings


class TestFormSDK(unittest.TestCase):
    def setUp(self):
        # Mock Settings.root_path
        Settings.set_root_path(str(Path(".")))

        self.mock_conn = MagicMock()
        self.context = FormContext(
            request=Request(headers={}, query_params={}, body="", method="GET")
        )
        self.client = FormClient(self.mock_conn, self.context, production_mode=False)
        self.users_repo = MagicMock(spec=UsersRepository)
        self.controller = FormSDKController(self.client, self.users_repo)

        # Patch the context store to return our controller
        self.store_patch = patch(
            "abstra_internals.controllers.sdk.sdk_context.SDKContextStore.get_by_thread"
        )
        self.mock_store = self.store_patch.start()
        self.mock_store.return_value.form_sdk = self.controller

    def tearDown(self):
        self.store_patch.stop()

    def test_run_simple_input(self):
        """Test running a simple input widget."""
        # Setup mock response from client
        # Sequence:
        # 1. run() renders -> sends FormRenderMessage
        # 2. client waits for message -> receives "form:input" or "form:navigation"

        self.mock_conn.recv.side_effect = [
            # 1. Update input value
            '{"type": "form:input", "payload": {"text_input": "Hello"}, "seq": 1}',
            # 2. Click Next
            '{"type": "form:navigation", "action": "i18n_next_action", "payload": {"text_input": "Hello"}, "seq": 2}',
        ]

        # Use a deterministic key for widget to match payload
        widget = TextInput(label="Name", key="text_input")

        # run(widget) creates a PageStep with [widget].
        result = run(widget)

        self.assertEqual(result, "Hello")

        # Verify send was called with render message
        self.assertTrue(self.mock_conn.send.called)

    def test_run_pandas_output(self):
        """Test serialization of Pandas DataFrame in output widget."""
        df = pd.DataFrame({"col1": [1, 2], "col2": ["a", "b"]})
        widget = PandasOutput(df)

        # Click Next
        self.mock_conn.recv.side_effect = [
            '{"type": "form:navigation", "action": "i18n_next_action", "payload": {}, "seq": 1}'
        ]

        run(widget)

        # Verify dataframe serialization
        # Search all send calls for the dataframe content
        found = False
        for call_args in self.mock_conn.send.call_args_list:
            sent_str = call_args[0][0]
            if '"col1"' in sent_str and '"col2"' in sent_str:
                found = True
                break
        self.assertTrue(found, "Pandas DataFrame content not found in sent messages")

    def test_run_multiple_steps(self):
        """Test running multiple pages."""
        steps = [
            [TextInput(label="S1", key="step1")],
            [TextInput(label="S2", key="step2")],
        ]

        # Sequence:
        # 1. Render Step 1
        # 2. Receive Input Step 1 (optional, usually sent with navigation or separate)
        # 3. Navigation Next Step 1
        # 4. Render Step 2
        # 5. Navigation Next Step 2

        self.mock_conn.recv.side_effect = [
            '{"type": "form:navigation", "action": "i18n_next_action", "payload": {"step1": "val1"}, "seq": 1}',
            '{"type": "form:navigation", "action": "i18n_next_action", "payload": {"step2": "val2"}, "seq": 2}',
        ]

        result = run(steps)

        self.assertEqual(result["step1"], "val1")
        self.assertEqual(result["step2"], "val2")
        # Should correspond to 2 render calls + maybe initial mount?
        # Actually client.request_render is called in loop.
        self.assertGreaterEqual(self.mock_conn.send.call_count, 2)

    def test_double_navigation_race_condition(self):
        """
        Scenario: User clicks "Next" twice rapidly.
        Server receives two "form:navigation" messages.
        1st advances step.
        2nd hits handle_navigation on the NEW step (Step 2).
        Since Step 2 has required fields and payload is from Step 1, validation should fail.
        Step 2 should NOT be skipped.
        """
        steps = [
            [TextInput(label="S1", key="step1")],
            [TextInput(label="S2", key="step2", required=True)],
        ]

        self.mock_conn.recv.side_effect = [
            # 1. Next for Step 1
            '{"type": "form:navigation", "action": "i18n_next_action", "payload": {"step1": "val1"}, "seq": 1}',
            # 2. Next again (dup) - Should trigger validation error on Step 2 and NOT advance
            '{"type": "form:navigation", "action": "i18n_next_action", "payload": {"step1": "val1"}, "seq": 2}',
            # 3. Next for Step 2 (Real one)
            '{"type": "form:navigation", "action": "i18n_next_action", "payload": {"step2": "val2"}, "seq": 3}',
        ]

        result = run(steps)

        self.assertEqual(result["step1"], "val1")
        self.assertEqual(result["step2"], "val2")

    def test_invalid_schema_message(self):
        """Test receiving a message with invalid schema (missing keys)."""
        steps = [[TextInput(label="S1", key="step1")]]

        self.mock_conn.recv.side_effect = [
            # 1. Invalid message (missing payload)
            '{"type": "form:input", "seq": 1}',
            # 2. Valid message to finish
            '{"type": "form:navigation", "action": "i18n_next_action", "payload": {"step1": "val1"}, "seq": 2}',
        ]

        # Should raise KeyError or similar if not handled.
        # Ideally, we should ignore or log it, but currently the code likely crashes.
        # Let's see if it crashes.

        # If it crashes, we might want to catch it in FormSDKController and continue?
        # Or let it crash the execution?

        # If execution crashes, user sees error. Maybe fine.

        with self.assertRaises(KeyError):
            run(steps)


if __name__ == "__main__":
    unittest.main()
