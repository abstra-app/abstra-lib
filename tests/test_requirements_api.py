from unittest import TestCase
from .fixtures import init_dir, clear_dir
from abstra_internals.server.controller import MainController
from abstra_internals.server.apps import create_app
from pathlib import Path


class TestRequirementsApi(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        controller = MainController()
        self.client = create_app(controller).test_client()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_empty_requirements(self):
        requirements = self.client.get("/_editor/api/requirements").get_json()
        self.assertEqual(requirements, [])

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
        self.assertEqual(requirements, [{"name": "foo", "version": None}])

        self.assertTrue(Path("requirements.txt").exists())

    def test_delete_requirement(self):
        Path("requirements.txt").write_text("foo==1.0.0\nbar\n\n# baz")
        self.client.delete("/_editor/api/requirements/foo")
        requirements = self.client.get("/_editor/api/requirements").get_json()
        self.assertEqual(requirements, [{"name": "bar", "version": None}])
        self.assertTrue(Path("requirements.txt").exists())
        self.assertEqual(Path("requirements.txt").read_text(), "bar")

    def test_get_rquirements_recommendation(self):
        recommendation = self.client.get(
            "/_editor/api/requirements-recommendations"
        ).get_json()
        self.assertEqual(recommendation, [])
        Path("foo.py").write_text("import pandas as pd")
        recommendation = self.client.get(
            "/_editor/api/requirements-recommendations"
        ).get_json()
        self.assertEqual(recommendation[0]["name"], "pandas")
