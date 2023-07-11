import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra_server.api import API

from .fixtures import init_dir


class TestSidebar(unittest.TestCase):
    def test_starts_empty(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)
        api = API(root=workspace_root_path)

        workspace = api.get_workspace()
        self.assertEqual(workspace.__dict__["sidebar"], [])

    def test_auto_add_forms(self):
        # given
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)
        api = API(root=workspace_root_path)

        # when
        form = api.create_form()
        workspace = api.get_workspace()

        # then
        sidebar_json = workspace.__dict__["sidebar"]
        self.assertEqual(len(sidebar_json), 1)
        item = dict(name=form.title, path=form.path, type="form", visible=False)
        self.assertEqual({**sidebar_json[0], **item}, sidebar_json[0])

    def test_auto_add_dashes(self):
        # given
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)
        api = API(root=workspace_root_path)

        # when
        dash = api.create_dash()
        workspace = api.get_workspace()

        # then
        sidebar_json = workspace.__dict__["sidebar"]
        self.assertEqual(len(sidebar_json), 1)
        item = {"name": dash.title, "path": dash.path, "type": "dash", "visible": False}
        self.assertEqual({**sidebar_json[0], **item}, sidebar_json[0])
