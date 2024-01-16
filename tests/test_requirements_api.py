from pathlib import Path
from unittest import TestCase

from abstra_internals.server.controller.main import MainController

from .fixtures import init_dir, clear_dir, get_local_client


class TestRequirementsApi(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.client = get_local_client()
        self.controller = MainController()

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
        self.assertEqual(Path("requirements.txt").read_text(encoding="utf-8"), "bar")

    def test_get_requirements_recommendation(self):
        recommendation = self.client.get(
            "/_editor/api/requirements/recommendations"
        ).get_json()
        self.assertEqual(recommendation, [])

        script = self.controller.create_script("New script", "script.py")

        Path(script.file_path).write_text("import pandas as pd")

        recommendation = self.client.get(
            "/_editor/api/requirements/recommendations"
        ).get_json()
        self.assertEqual(recommendation[0]["name"], "pandas")
