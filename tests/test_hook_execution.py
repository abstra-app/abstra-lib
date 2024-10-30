from tests.fixtures import BaseTest, clear_dir


class TestHookExecution(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.hook = self.controller.create_hook("New hook", "hook.py")
        self.flask_client = self.get_editor_flask_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_initial_case(self):
        response = self.flask_client.post(f"/_hooks/{self.hook.path}")
        self.assertEqual(response.status_code, 200)
