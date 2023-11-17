import unittest, pathlib
from abstra_internals.server.controller import MainController
from .fixtures import init_dir, clear_dir
from abstra_internals.server import get_local_app
from abstra_internals.templates import new_hook_code
from abstra_internals.repositories.project.project import ProjectRepository


class TestHooks(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        controller = MainController()
        self.client = get_local_app(controller).test_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_api_list(self):
        hooks = self.client.get("/_editor/api/hooks/").get_json()
        self.assertEqual(len(hooks), 0)
        self.client.post("/_editor/api/hooks/")
        hooks = self.client.get("/_editor/api/hooks/").get_json()
        self.assertEqual(len(hooks), 1)

    def test_rename_hook(self):
        hook = self.client.post("/_editor/api/hooks/").get_json()
        hooks = self.client.get("/_editor/api/hooks/").get_json()
        self.assertEqual(len(hooks), 1)
        self.client.put("/_editor/api/hooks/" + hook["path"], json={"path": "new_path"})
        hooks = self.client.get("/_editor/api/hooks/").get_json()
        self.assertEqual(len(hooks), 1)
        self.assertEqual(hooks[0]["path"], "new_path")

    def test_create_hook_with_right_template(self):
        hook = self.client.post("/_editor/api/hooks/").get_json()
        file_content = pathlib.Path(hook["file"]).read_text()
        self.assertEqual(file_content, new_hook_code)

    def test_renaming_hook_should_change_all_transitions_pointing_to_it(self):
        controller = MainController()

        source = self.client.post("/_editor/api/forms/").get_json()
        target = self.client.post("/_editor/api/hooks/").get_json()

        res = self.client.post(
            "/_editor/api/workflow-editor/add-transition",
            json=[
                {
                    "source": {"type": "forms", "id": source["path"]},
                    "target": {"type": "hooks", "id": target["path"]},
                    "id": "transition1",
                }
            ],
        )

        self.assertEqual(len(ProjectRepository.load().forms[0].workflow_transitions), 1)

        self.client.put(
            "/_editor/api/hooks/" + target["path"], json={"path": "new_path"}
        )

        data = self.client.get("/_editor/api/workflow-editor/initial-data").get_json()

        forms = [f for f in data if f["type"] == "forms"]

        self.assertEqual(forms[0]["transitions"][0]["targetPath"], "new_path")


if __name__ == "__main__":
    unittest.main()
