from pathlib import Path

from tests.fixtures import BaseTest


class TestRequirementsApi(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.client = self.get_editor_flask_client()

    def test_initial_requirements(self):
        requirements = self.client.get("/_editor/api/requirements").get_json()
        self.assertEqual(len(requirements), 1)
        self.assertEqual(requirements[0]["name"], "abstra")

    def test_existing_requirements(self):
        Path("requirements.txt").write_text(
            "foo==1.0.0\nbar\n\n# baz", encoding="utf-8"
        )
        requirements = self.client.get("/_editor/api/requirements").get_json()
        self.assertEqual(
            requirements,
            [
                {
                    "name": "foo",
                    "specifiers": [{"operator": "==", "version": "1.0.0"}],
                    "extras": [],
                    "marker": None,
                    "url": None,
                    "raw_requirement": "foo==1.0.0",
                    "installed_version": None,
                },
                {
                    "name": "bar",
                    "specifiers": [],
                    "extras": [],
                    "marker": None,
                    "url": None,
                    "raw_requirement": "bar",
                    "installed_version": None,
                },
            ],
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
        self.assertEqual(
            non_abstra_requirements,
            [
                {
                    "name": "foo",
                    "specifiers": [],
                    "extras": [],
                    "marker": None,
                    "url": None,
                    "raw_requirement": "foo",
                    "installed_version": None,
                }
            ],
        )

        self.assertTrue(Path("requirements.txt").exists())

    def test_delete_requirement(self):
        Path("requirements.txt").write_text(
            "foo==1.0.0\nbar\n\n# baz", encoding="utf-8"
        )
        self.client.delete("/_editor/api/requirements/foo")
        requirements = self.client.get("/_editor/api/requirements").get_json()
        self.assertEqual(
            requirements,
            [
                {
                    "name": "bar",
                    "specifiers": [],
                    "extras": [],
                    "marker": None,
                    "url": None,
                    "raw_requirement": "bar",
                    "installed_version": None,
                }
            ],
        )
        self.assertTrue(Path("requirements.txt").exists())
        self.assertEqual(Path("requirements.txt").read_text(encoding="utf-8"), "bar")

    def test_get_requirements_recommendation(self):
        recommendation = self.client.get(
            "/_editor/api/requirements/recommendations"
        ).get_json()
        self.assertEqual(recommendation, [])

        script = self.controller.create_tasklet("New script", "script.py")

        Path(script.file_path).write_text("import pandas as pd", encoding="utf-8")

        recommendation = self.client.get(
            "/_editor/api/requirements/recommendations"
        ).get_json()
        self.assertEqual(recommendation[0]["name"], "pandas")

    def test_get_requirements_recommendation_already_met(self):
        Path("requirements.txt").write_text("Pillow", encoding="utf-8")
        script = self.controller.create_tasklet("New script", "script.py")
        Path(script.file_path).write_text(
            "import pandas as pd\nfrom PIL import Image", encoding="utf-8"
        )

        recommendation = self.client.get(
            "/_editor/api/requirements/recommendations"
        ).get_json()

        self.assertEqual(len(recommendation), 1)
        self.assertEqual(recommendation[0]["name"], "pandas")
