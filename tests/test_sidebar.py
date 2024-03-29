import unittest

from .fixtures import init_dir, clear_dir

from abstra_internals.server.controller import MainController


class TestSidebar(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_starts_empty(self):
        controller = MainController()

        workspace = controller.get_workspace()
        self.assertEqual(workspace.as_dict["sidebar"], [])

    def test_auto_add_forms(self):
        # given
        controller = MainController()

        # when
        form = controller.create_form("New form", "form.py")
        workspace = controller.get_workspace()

        # then
        sidebar_json = workspace.as_dict["sidebar"]
        self.assertEqual(len(sidebar_json), 1)
        item = dict(name=form.title, path=form.path, type="form", visible=False)
        self.assertEqual({**sidebar_json[0], **item}, sidebar_json[0])
