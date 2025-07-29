from abstra_internals.repositories.linter.rules.missing_entrypoint import (
    AddEntrypoint,
    MissingEntrypoint,
)
from tests.fixtures import BaseTest


class MissingEntrypointTest(BaseTest):
    def test_missing_entrypoint_valid_default(self):
        rule = MissingEntrypoint()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_entrypoint_valid_with_entrypoint(self):
        self.controller.create_tasklet("New script", "script.py")
        self.controller.create_form("New form", "form.py")
        self.controller.create_hook("New hook", "hook.py")
        self.controller.create_job("New job", "job.py")
        rule = MissingEntrypoint()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_missing_entrypoint_invalid_without_entrypoint(self):
        script = self.controller.create_tasklet("New script", "script.py")
        script.file_path.unlink()
        rule = MissingEntrypoint()
        self.assertEqual(len(rule.find_issues()), 1)

        self.assertEqual(rule.find_issues()[0].fixes[0], AddEntrypoint(script))

        rule.find_issues()[0].fixes[0].fix()

        self.assertEqual(len(rule.find_issues()), 0)
