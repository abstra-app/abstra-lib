from unittest import TestCase

from abstra_internals.repositories.project.project import (
    LocalProjectRepository,
    ScriptStage,
)
from tests.fixtures import clear_dir, init_dir

from .conflicting_name import ConflictingName


class ConflictingNameTest(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.project_repository = LocalProjectRepository()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_conflicting_paths_valid(self):
        ok_file = self.root / "util_email.py"
        ok_file.write_text("ok content")

        rule = ConflictingName()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_conflicting_paths_invalid(self):
        bad_file = self.root / "email.py"
        bad_file.write_text("bad content")

        rule = ConflictingName()
        self.assertEqual(len(rule.find_issues()), 1)

        fix = rule.find_issues()[0].fixes[0]
        fix.fix()

        self.assertEqual(len(rule.find_issues()), 0)

        self.assertFalse(bad_file.exists())
        self.assertTrue((self.root / "util_email.py").exists())

    def test_conflicting_paths_entrypoint(self):
        bad_file = self.root / "email.py"
        bad_file.write_text("bad content")

        project = self.project_repository.load()
        script = ScriptStage.create(
            title="Email",
            file="email.py",
        )
        project.add_stage(script)
        self.project_repository.save(project)

        rule = ConflictingName()
        self.assertEqual(len(rule.find_issues()), 1)

        fix = rule.find_issues()[0].fixes[0]
        fix.fix()

        self.assertEqual(len(rule.find_issues()), 0)

        self.assertFalse(bad_file.exists())
        self.assertTrue((self.root / "util_email.py").exists())

        new_script = self.project_repository.load().get_script(script.id)
        assert new_script is not None
        self.assertEqual(new_script.file, "util_email.py")
