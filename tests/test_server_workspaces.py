import unittest
from os.path import join

from abstra_internals.server.controller.main import MainController
from tests.fixtures import clear_dir, get_local_client, init_dir


class TestWorkspace(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.client = get_local_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_api_update(self):
        controller = MainController()

        controller.update_workspace({"name": "test-workspace-updated"})

        workspace = controller.get_workspace()

        self.assertEqual(workspace.name, "test-workspace-updated")

    def test_list_files(self):
        res = self.client.get("/_editor/api/workspace/files")
        self.assertEqual(res.status_code, 200)
        self.assertCountEqual(
            res.json or [],
            [
                dict(path="requirements.txt", name="requirements.txt", type="file"),
                dict(path="abstra.json", name="abstra.json", type="file"),
            ],
        )

    def test_list_files_with_subdir(self):
        (self.root / "subdir").mkdir()
        (self.root / "subdir" / "test.txt").touch()

        res = self.client.get("/_editor/api/workspace/files?path=subdir")
        self.assertEqual(
            res.json,
            [dict(path=join("subdir", "test.txt"), name="test.txt", type="file")],
        )

    # def test_list_dirs(self):
    #     (self.root / "subdir").mkdir()

    #     res = self.client.get("/_editor/api/workspace/files")
    #     if res.json is None:
    #         raise Exception("No json response")

    #     self.assertIn(
    #         dict(path="abstra.json", name="abstra.json", type="file"), res.json
    #     )
    #     self.assertIn(dict(path="subdir", name="subdir", type="dir"), res.json)

    def test_shallow_module_mode(self):
        (self.root / "subdir").mkdir()
        (self.root / "subdir" / "__init__.py").touch()
        (self.root / "subdir" / "test.py").touch()

        res = self.client.get("/_editor/api/workspace/files?mode=module")
        if res.json is None:
            raise Exception("No json response")

        self.assertIn(dict(path="subdir", name="subdir", type="package"), res.json)

    def test_nested_module_mode(self):
        (self.root / "subdir").mkdir()
        (self.root / "subdir" / "__init__.py").touch()
        (self.root / "subdir" / "test.py").touch()

        res = self.client.get("/_editor/api/workspace/files?mode=module&path=subdir")
        if res.json is None:
            raise Exception("No json response")

        self.assertIn(dict(path="subdir.test", name="test", type="module"), res.json)
