from tests.fixtures import BaseTest


class TestHookExecution(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.hook = self.controller.create_hook("New hook", "hook.py")
        self.client = self.get_editor_flask_client()

    def test_initial_case(self):
        response = self.client.post(f"/_hooks/{self.hook.path}")
        self.assertEqual(response.status_code, 200)
