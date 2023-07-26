import unittest
from abstra_server.api import API
from .fixtures import init_dir, clear_dir


class TestSidebar(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_starts_empty(self):
        api = API(root=self.root)

        workspace = api.get_workspace()
        self.assertEqual(workspace.__dict__["sidebar"], [])

    def test_auto_add_forms(self):
        # given
        api = API(root=self.root)

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
        api = API(root=self.root)

        # when
        dash = api.create_dash()
        workspace = api.get_workspace()

        # then
        sidebar_json = workspace.__dict__["sidebar"]
        self.assertEqual(len(sidebar_json), 1)
        item = {"name": dash.title, "path": dash.path, "type": "dash", "visible": False}
        self.assertEqual({**sidebar_json[0], **item}, sidebar_json[0])
