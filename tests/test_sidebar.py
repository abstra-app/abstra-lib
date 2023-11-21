import unittest
from abstra_internals.server.controller import MainController
from .fixtures import init_dir, clear_dir


class TestSidebar(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_starts_empty(self):
        controller = MainController()

        workspace = controller.get_workspace()
        self.assertEqual(workspace.__dict__["sidebar"], [])

    def test_auto_add_forms(self):
        # given
        controller = MainController()

        # when
        form = controller.create_form()
        workspace = controller.get_workspace()

        # then
        sidebar_json = workspace.__dict__["sidebar"]
        self.assertEqual(len(sidebar_json), 1)
        item = dict(name=form.title, path=form.path, type="form", visible=False)
        self.assertEqual({**sidebar_json[0], **item}, sidebar_json[0])
