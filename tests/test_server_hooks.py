import unittest, pathlib
from .fixtures import init_dir, clear_dir, get_local_client
from abstra_internals.templates import new_hook_code


class TestHooks(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.client = get_local_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_api_list(self):
        hooks = self.client.get("/_editor/api/hooks/").get_json()
        self.assertEqual(len(hooks), 0)
        self.client.post(
            "/_editor/api/hooks/", json={"title": "New hook", "file": "hook.py"}
        )
        hooks = self.client.get("/_editor/api/hooks/").get_json()
        self.assertEqual(len(hooks), 1)

    def test_change_path(self):
        hook = self.client.post(
            "/_editor/api/hooks/", json={"title": "New hook", "file": "hook.py"}
        ).get_json()
        self.client.put("/_editor/api/hooks/" + hook["id"], json={"path": "new_path"})
        hooks = self.client.get("/_editor/api/hooks/").get_json()
        self.assertEqual(len(hooks), 1)
        self.assertEqual(hooks[0]["path"], "new-path")

    def test_create_hook_with_right_template(self):
        hook = self.client.post(
            "/_editor/api/hooks/", json={"title": "New hook", "file": "hook.py"}
        ).get_json()
        file_content = pathlib.Path(hook["file"]).read_text(encoding="utf-8")
        self.assertEqual(file_content, new_hook_code)


if __name__ == "__main__":
    unittest.main()
