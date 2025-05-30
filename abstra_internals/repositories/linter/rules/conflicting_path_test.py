import unittest

from abstra_internals.repositories.linter.rules.conflicting_path import ConflictingPath
from abstra_internals.repositories.project.project import (
    FormStage,
    LocalProjectRepository,
)
from tests.fixtures import clear_dir, init_dir


class ConflictingPathTest(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.project_repository = LocalProjectRepository()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_conflicting_path_valid_default(self):
        rule = ConflictingPath()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_conflicting_path_without_conflict(self):
        project = self.project_repository.load()
        form = FormStage.create(
            id="test",
            title="test",
            file="test.py",
        )
        form.path = "not_conflicting_path"
        project.add_stage(form)
        self.project_repository.save(project)

        rule = ConflictingPath()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_conflicting_path_with_conflict(self):
        project = self.project_repository.load()
        form = FormStage.create(
            id="login",
            title="login",
            file="login.py",
        )
        form.path = "login"
        project.add_stage(form)
        self.project_repository.save(project)

        rule = ConflictingPath()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)

        issue = issues[0]
        self.assertEqual(len(issue.fixes), 1)

        fix = issue.fixes[0]
        fix.fix()
        self.assertEqual(len(rule.find_issues()), 0)
