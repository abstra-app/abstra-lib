from os.path import join

from tests.fixtures import BaseTest


class TestCRUDFiles(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.client = self.get_editor_flask_client()

    def test_api_update(self):
        self.client.put(
            "/_editor/api/workspace",
            json={"name": "test-workspace-updated", "brand_name": "test-brand-name"},
        )
        workspace = self.client.get("/_editor/api/workspace").get_json()
        self.assertEqual(workspace["name"], "test-workspace-updated")
        self.assertEqual(workspace["brand_name"], "test-brand-name")

    def test_list_files(self):
        res = self.client.get("/_editor/api/workspace/files")
        self.assertEqual(res.status_code, 200)

        self.assertCountEqual(
            res.json or [],
            [
                dict(path="requirements.txt", name="requirements.txt", type="file"),
                dict(path="abstra.json", name="abstra.json", type="file"),
                dict(name="favicon.ico", path="favicon.ico", type="file"),
                dict(name="logo.png", path="logo.png", type="file"),
                dict(name=".gitignore", path=".gitignore", type="file"),
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
