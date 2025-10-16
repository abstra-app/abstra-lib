from unittest import TestCase

from abstra_internals.repositories.project.json_migrations.migration_016 import (
    Migration016,
)


class TestMigration016(TestCase):
    def test_removes_deprecated_form_fields(self):
        data = {
            "forms": [
                {
                    "id": "f1",
                    "title": "Form A",
                    "file": "form_a.py",
                    "path": "/form-a",
                    "is_initial": True,
                    "auto_start": False,
                    "allow_restart": True,
                    "restart_button_text": "Start Over",
                    "welcome_title": "Welcome!",
                    "end_message": None,
                    "start_message": None,
                    "error_message": None,
                    "timeout_message": None,
                    "start_button_text": "Begin",
                    "notification_trigger": {
                        "variable_name": "notify",
                        "enabled": False,
                    },
                    "access_control": {"is_public": True, "required_roles": []},
                    "other_field": "should remain",
                }
            ],
            "scripts": [],
            "jobs": [],
            "hooks": [],
            "version": "15.0",
        }
        m = Migration016(data)
        m.apply()

        self.assertEqual(m.data["version"], "16.0")

        form = m.data["forms"][0]
        self.assertNotIn("allow_restart", form)
        self.assertNotIn("restart_button_text", form)
        self.assertNotIn("welcome_title", form)

        self.assertEqual(form["other_field"], "should remain")
        self.assertEqual(form["title"], "Form A")
        self.assertEqual(form["path"], "/form-a")
        self.assertEqual(form["is_initial"], True)
        self.assertEqual(form["auto_start"], False)

    def test_handles_multiple_forms(self):
        data = {
            "forms": [
                {
                    "id": "f1",
                    "title": "Form 1",
                    "file": "form_1.py",
                    "path": "/form-1",
                    "is_initial": True,
                    "auto_start": False,
                    "allow_restart": True,
                    "restart_button_text": "Restart 1",
                    "welcome_title": "Welcome 1",
                    "end_message": None,
                    "start_message": None,
                    "error_message": None,
                    "timeout_message": None,
                    "start_button_text": None,
                    "notification_trigger": {"variable_name": "n", "enabled": False},
                    "access_control": {"is_public": True, "required_roles": []},
                },
                {
                    "id": "f2",
                    "title": "Form 2",
                    "file": "form_2.py",
                    "path": "/form-2",
                    "is_initial": False,
                    "auto_start": True,
                    "allow_restart": False,
                    "restart_button_text": None,
                    "welcome_title": "Hello",
                    "end_message": None,
                    "start_message": None,
                    "error_message": None,
                    "timeout_message": None,
                    "start_button_text": None,
                    "notification_trigger": {"variable_name": "n", "enabled": False},
                    "access_control": {"is_public": False, "required_roles": ["admin"]},
                },
            ],
            "scripts": [],
            "jobs": [],
            "hooks": [],
            "version": "15.0",
        }
        m = Migration016(data)
        m.apply()

        for form in m.data["forms"]:
            self.assertNotIn("allow_restart", form)
            self.assertNotIn("restart_button_text", form)
            self.assertNotIn("welcome_title", form)

            self.assertIn("path", form)
            self.assertIn("is_initial", form)
            self.assertIn("auto_start", form)

    def test_handles_forms_without_deprecated_fields(self):
        data = {
            "forms": [
                {
                    "id": "f1",
                    "title": "Form Without Deprecated Fields",
                    "file": "form.py",
                    "path": "/form",
                    "is_initial": True,
                    "auto_start": False,
                    "end_message": None,
                    "start_message": None,
                    "error_message": None,
                    "timeout_message": None,
                    "start_button_text": None,
                    "notification_trigger": {"variable_name": "n", "enabled": False},
                    "access_control": {"is_public": True, "required_roles": []},
                }
            ],
            "scripts": [],
            "jobs": [],
            "hooks": [],
            "version": "15.0",
        }
        m = Migration016(data)
        m.apply()

        self.assertEqual(m.data["version"], "16.0")
        self.assertEqual(len(m.data["forms"]), 1)
