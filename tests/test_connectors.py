import unittest
from unittest.mock import MagicMock

from abstra_internals.repositories.connectors import ConnectorsRepository


class MockResponse:
    def __init__(self, json_data: dict, status_code: int = 200):
        self._json_data = json_data
        self.status_code = status_code

    def json(self):
        return self._json_data

    def raise_for_status(self):
        if self.status_code >= 400:
            raise Exception(f"HTTP Error: {self.status_code}")
        return self


class TestConnectorsRepository(unittest.TestCase):
    def setUp(self):
        self.mock_client = MagicMock()
        self.repo = ConnectorsRepository.__new__(ConnectorsRepository)
        self.repo.client = self.mock_client

    def test_run_connection_action_returns_dict(self):
        """Test that run_connection_action correctly handles dict responses"""
        expected_data = {"items": [{"id": "123"}], "total": 1}
        self.mock_client.post.return_value = MockResponse(
            {"status": "success", "data": expected_data}
        )

        result = self.repo.run_connection_action(
            "test-connection", "test-action", {"param": "value"}
        )

        self.assertEqual(result, expected_data)
        self.assertIsInstance(result, dict)

    def test_run_connection_action_returns_list(self):
        """Test that run_connection_action correctly handles list responses (the bug fix)"""
        expected_data = [
            {"id": "abc-123", "versao": 1, "valor_pago": 1000.00},
            {"id": "def-456", "versao": 1, "valor_pago": 500.00},
        ]
        self.mock_client.post.return_value = MockResponse(
            {"status": "success", "data": expected_data}
        )

        result = self.repo.run_connection_action(
            "conta-azul",
            "financial/get_v1_financeiro_eventos_financeiros_by_id_evento_parcelas",
            {"id_evento": "valid-id"},
        )

        self.assertEqual(result, expected_data)
        self.assertIsInstance(result, list)

    def test_run_connection_action_returns_empty_list(self):
        """Test that run_connection_action handles empty list responses"""
        expected_data = []
        self.mock_client.post.return_value = MockResponse(
            {"status": "success", "data": expected_data}
        )

        result = self.repo.run_connection_action("test-connection", "test-action", {})

        self.assertEqual(result, expected_data)
        self.assertIsInstance(result, list)

    def test_run_connection_action_raises_on_error_status(self):
        """Test that run_connection_action raises exception on error status"""
        self.mock_client.post.return_value = MockResponse(
            {"status": "error", "message": "Connection failed"}
        )

        with self.assertRaises(Exception) as context:
            self.repo.run_connection_action("test-connection", "test-action", {})

        self.assertEqual(str(context.exception), "Connection failed")

    def test_run_connection_action_with_nested_dict_data(self):
        """Test that run_connection_action handles nested dict data"""
        expected_data = {"nested": {"key": "value"}, "array": [1, 2, 3]}
        self.mock_client.post.return_value = MockResponse(
            {"status": "success", "data": expected_data}
        )

        result = self.repo.run_connection_action("test-connection", "test-action", {})

        self.assertEqual(result, expected_data)
        self.assertIsInstance(result, dict)


if __name__ == "__main__":
    unittest.main()
