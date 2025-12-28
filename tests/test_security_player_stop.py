import unittest
from unittest.mock import MagicMock

from abstra_internals.server.apps.cloud import get_cloud_app


class TestSecurityPlayerStop(unittest.TestCase):
    def setUp(self):
        # Mock the controller and repositories
        self.mock_controller = MagicMock()
        # Ensure repositories structure exists
        self.mock_controller.repositories = MagicMock()
        self.mock_controller.repositories.project = MagicMock()

        # Create the Player App (Cloud App)
        self.app = get_cloud_app(self.mock_controller)
        self.client = self.app.test_client()

    def test_stop_route_not_exposed_on_player(self):
        # The stop route is defined as POST /api/executions/<id>/stop in the Editor
        # or /executions/<id>/stop depending on the blueprint registration.
        # In the Editor Blueprint:
        #   bp.register_blueprint(executions_bp, url_prefix="/executions")
        #   bp.register_blueprint(api_bp, url_prefix="/api") -> _get_api_bp -> executions
        # So it's likely /api/executions/<id>/stop or /executions/<id>/stop in the Editor context.

        # We try to access it on the Player App.

        execution_id = "exec-test-security"

        # Try various potential paths just to be sure
        paths_to_test = [
            f"/executions/{execution_id}/stop",
            f"/api/executions/{execution_id}/stop",
            f"/_editor/executions/{execution_id}/stop",
        ]

        for path in paths_to_test:
            response = self.client.post(path)
            # Should be 404 Not Found (if no route matches) or 405 Method Not Allowed
            # (if it matches the GET-only SPA catch-all).
            # Crucially, it must NOT be 200 (OK) or 202 (Accepted).
            self.assertIn(
                response.status_code,
                [404, 405],
                f"Path {path} returned {response.status_code}",
            )


if __name__ == "__main__":
    unittest.main()
