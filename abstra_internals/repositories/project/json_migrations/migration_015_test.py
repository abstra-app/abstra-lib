import tempfile
from pathlib import Path
from unittest import TestCase

from abstra_internals.repositories.project.json_migrations.migration_015 import (
    Migration015,
)
from abstra_internals.settings import Settings, SettingsController
from tests.fixtures import rm_tree


class TestMigration015(TestCase):
    def setUp(self):
        # Create a temp directory to simulate project root
        self.temp_dir = Path(tempfile.mkdtemp())
        SettingsController.set_root_path(self.temp_dir.as_posix())
        # Create a dummy script file
        (Settings.root_path / "shared.py").write_text("x = 1\n", encoding="utf-8")
        (Settings.root_path / "unique.py").write_text("y = 2\n", encoding="utf-8")

    def tearDown(self):
        # Clean up temp directory with Windows-compatible cleanup
        rm_tree(self.temp_dir)

    def test_multiple_stages_share_file(self):
        data = {
            "forms": [
                {"id": "f1", "title": "Form A", "file": "shared.py"},
                {"id": "f2", "title": "Form B", "file": "shared.py"},
            ],
            "scripts": [],
            "jobs": [],
            "hooks": [],
            "version": "14.0",
        }
        m = Migration015(data)
        m.apply()
        expected_files = {
            "form_form_a.py",
            "form_form_b.py",
        }
        files = {form["file"] for form in m.data["forms"]}
        self.assertEqual(files, expected_files)
        for form in m.data["forms"]:
            self.assertIn(form["file"], expected_files)
            file_path = Settings.root_path / form["file"]
            self.assertTrue(file_path.exists())
            content = file_path.read_text(encoding="utf-8")
            self.assertIn("import shared", content)

    def test_single_stage_file_untouched(self):
        data = {
            "forms": [
                {"id": "f1", "title": "Form A", "file": "unique.py"},
            ],
            "scripts": [],
            "jobs": [],
            "hooks": [],
            "version": "14.0",
        }
        m = Migration015(data)
        m.apply()
        # File should remain the same
        self.assertEqual(m.data["forms"][0]["file"], "unique.py")
        file_path = Settings.root_path / "unique.py"
        self.assertTrue(file_path.exists())
        content = file_path.read_text(encoding="utf-8")
        self.assertIn("y = 2", content)

    def test_multiple_stages_share_file_with_name_collision(self):
        data = {
            "forms": [
                {"id": "f1", "title": "Form X", "file": "shared.py"},
                {"id": "f2", "title": "Form X", "file": "shared.py"},
            ],
            "scripts": [
                {"id": "s1", "title": "Script X", "file": "shared.py"},
                {"id": "s2", "title": "Random name", "file": "shared.py"},
            ],
            "jobs": [],
            "hooks": [],
            "version": "14.0",
        }
        m = Migration015(data)
        m.apply()
        expected_files = {
            "form_form_x.py",
            "form_form_x_2.py",
            "script_script_x.py",
            "script_random_name.py",
        }
        files = {form["file"] for form in m.data["forms"]} | {
            script["file"] for script in m.data["scripts"]
        }
        self.assertEqual(files, expected_files)
        for form in m.data["forms"]:
            self.assertIn(form["file"], expected_files)
            file_path = Settings.root_path / form["file"]
            self.assertTrue(file_path.exists())
            content = file_path.read_text(encoding="utf-8")
            self.assertIn("import shared", content)
        for script in m.data["scripts"]:
            self.assertIn(script["file"], expected_files)
            file_path = Settings.root_path / script["file"]
            self.assertTrue(file_path.exists())
            content = file_path.read_text(encoding="utf-8")
            self.assertIn("import shared", content)

    def test_to_snake_case(self):
        m = Migration015({})
        self.assertEqual(m.to_snake_case("Hello World!"), "hello_world")
        self.assertEqual(m.to_snake_case("áéíóú çã"), "aeiou_ca")
        self.assertEqual(m.to_snake_case("Already_Snake_Case"), "already_snake_case")
        self.assertEqual(m.to_snake_case("!!!"), "")
        self.assertEqual(m.to_snake_case("a   b"), "a_b")
        self.assertEqual(m.to_snake_case("  spaced  out  "), "spaced_out")
        self.assertEqual(m.to_snake_case("foo-bar-baz"), "foo_bar_baz")
        self.assertEqual(m.to_snake_case("foo/bar/baz"), "foo_bar_baz")
        self.assertEqual(m.to_snake_case("foo123bar"), "foo123bar")
        self.assertEqual(m.to_snake_case("ÁbÇd_éF"), "abcd_ef")
        self.assertEqual(m.to_snake_case("a__b__c"), "a_b_c")
        self.assertEqual(m.to_snake_case(""), "")
        self.assertEqual(m.to_snake_case("___"), "")
