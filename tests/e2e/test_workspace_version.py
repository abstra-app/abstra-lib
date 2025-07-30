from tests.fixtures import BaseTest


class TestWorkspaceVersionApi(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.client = self.get_editor_flask_client()

    def test_get_version(self):
        """Test that the version endpoint returns the correct structure"""
        response = self.client.get("/_editor/api/workspace/version")
        self.assertEqual(response.status_code, 200)

        data = response.get_json()
        self.assertIn("version", data)
        self.assertIsInstance(data["version"], str)
        # Version should not be empty
        self.assertGreater(len(data["version"]), 0)

    def test_version_format(self):
        """Test that the version has expected format"""
        response = self.client.get("/_editor/api/workspace/version")
        data = response.get_json()

        version = data["version"]
        # Should have version format like x.y.z or x.y.z.dev or similar
        self.assertTrue(
            any(char.isdigit() for char in version),
            f"Version '{version}' should contain at least one digit",
        )
