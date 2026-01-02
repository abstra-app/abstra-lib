import unittest
from unittest.mock import MagicMock

import flask

from abstra_internals.controllers.main import MainController
from abstra_internals.repositories.project.project import FormStage
from abstra_internals.server.routes.forms import get_editor_bp


class TestFormsRoutes(unittest.TestCase):
    def setUp(self):
        self.controller = MagicMock(spec=MainController)
        self.bp = get_editor_bp(self.controller)
        self.app = flask.Flask(__name__)
        self.app.register_blueprint(self.bp, url_prefix="/forms")
        self.client = self.app.test_client()

    def test_get_forms(self):
        mock_form = MagicMock()
        mock_form.editor_dto = {"id": "form1", "title": "My Form"}
        self.controller.get_forms.return_value = [mock_form]

        resp = self.client.get("/forms/")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.json, [{"id": "form1", "title": "My Form"}])

    def test_create_form(self):
        mock_form = MagicMock()
        mock_form.editor_dto = {"id": "form2", "title": "New Form"}
        self.controller.create_form.return_value = mock_form

        payload = {"title": "New Form", "file": "new_form.py"}
        resp = self.client.post("/forms/", json=payload)

        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.json, {"id": "form2", "title": "New Form"})
        self.controller.create_form.assert_called_with(
            "New Form", "new_form.py", (0, 0), None
        )

    def test_create_form_missing_data(self):
        resp = self.client.post("/forms/", json={"title": "Missing File"})
        self.assertEqual(resp.status_code, 400)

    def test_update_form(self):
        # Create a real FormStage or a Mock that passes isinstance
        # If I use MagicMock(spec=FormStage), isinstance returns True.
        mock_form = MagicMock(spec=FormStage)
        mock_form.editor_dto = {"id": "form1", "title": "Updated"}

        self.controller.update_stage.return_value = mock_form

        resp = self.client.put("/forms/form1", json={"title": "Updated"})

        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.json, {"id": "form1", "title": "Updated"})
        self.controller.update_stage.assert_called_with("form1", {"title": "Updated"})

    def test_delete_form(self):
        self.controller.delete_stage.return_value = None

        resp = self.client.delete("/forms/form1?remove_file=true")

        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.json, {"success": True})
        self.controller.delete_stage.assert_called_with("form1", True)


if __name__ == "__main__":
    unittest.main()
