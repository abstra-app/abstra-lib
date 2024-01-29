from unittest import TestCase

from tests.fixtures import clear_dir, init_dir

from ...server.controller import MainController
from .missing_entrypoint import AddEntrypoint, MissingEntrypoint


class MissingEntrypointTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_missing_entrypoint_valid_default(self):
        rule = MissingEntrypoint()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_entrypoint_valid_with_entrypoint(self):
        controller = MainController()
        controller.create_script("New script", "script.py")
        controller.create_form("New form", "form.py")
        controller.create_hook("New hook", "hook.py")
        controller.create_job("New job", "job.py")
        rule = MissingEntrypoint()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_entrypoint_invalid_without_entrypoint(self):
        controller = MainController()
        script = controller.create_script("New script", "script.py")
        script.file_path.unlink()
        rule = MissingEntrypoint()
        self.assertEqual(len(rule.find_issues()), 1)

        self.assertEqual(rule.find_issues()[0].fixes[0], AddEntrypoint(script))

        rule.find_issues()[0].fixes[0].fix()

        self.assertEqual(len(rule.find_issues()), 0)
