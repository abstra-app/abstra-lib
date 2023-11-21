from unittest import TestCase
from .fixtures import init_dir, clear_dir
from abstra_internals.server.controller import MainController
from abstra_internals.server import get_local_app
from pathlib import Path


class TestRequirementsApi(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        controller = MainController()
        self.client = get_local_app(controller).test_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_initial_requirements(self):
        requirements = self.client.get("/_editor/api/requirements").get_json()
        self.assertEqual(len(requirements), 1)
        self.assertEqual(requirements[0]["name"], "abstra")

    def test_existing_requirements(self):
        Path("requirements.txt").write_text("foo==1.0.0\nbar\n\n# baz")
        requirements = self.client.get("/_editor/api/requirements").get_json()
        self.assertEqual(
            requirements,
            [{"name": "foo", "version": "1.0.0"}, {"name": "bar", "version": None}],
        )

    def test_post_requirement(self):
        self.client.post("/_editor/api/requirements", json={"name": "foo"})
        requirements = self.client.get("/_editor/api/requirements").get_json()
        self.assertEqual(len(requirements), 2)
        non_abstra_requirements = [
            requirement
            for requirement in requirements
            if requirement["name"] != "abstra"
        ]
        self.assertEqual(non_abstra_requirements, [{"name": "foo", "version": None}])

        self.assertTrue(Path("requirements.txt").exists())

    def test_delete_requirement(self):
        Path("requirements.txt").write_text("foo==1.0.0\nbar\n\n# baz")
        self.client.delete("/_editor/api/requirements/foo")
        requirements = self.client.get("/_editor/api/requirements").get_json()
        self.assertEqual(requirements, [{"name": "bar", "version": None}])
        self.assertTrue(Path("requirements.txt").exists())
        self.assertEqual(Path("requirements.txt").read_text(), "bar")

    def test_get_requirements_recommendation(self):
        recommendation = self.client.get(
            "/_editor/api/requirements/recommendations"
        ).get_json()
        self.assertEqual(recommendation, [])
        Path("foo.py").write_text("import pandas as pd")
        Path("abstra.json").write_text(
            '{"version": "0.2", "scripts": [ { "id": "2zp6zc8w739", "file": "foo.py", "path": "2zp6zc8w739", "title": "Script1", "is_initial": false, "workflow_position": [ 726, 312 ], "transitions": [ { "target_path": "1q46aarvny3", "target_type": "forms", "label": "", "id": "49g5pgobohd" } ] } ]}'
        )
        recommendation = self.client.get(
            "/_editor/api/requirements/recommendations"
        ).get_json()
        self.assertEqual(recommendation[0]["name"], "pandas")
