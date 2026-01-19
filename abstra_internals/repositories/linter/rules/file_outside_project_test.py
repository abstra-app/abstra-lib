import unittest

from abstra_internals.repositories.linter.rules.file_outside_project import (
    FileOutsideProjectRoot,
    MoveFileToProjectRoot,
    is_path_inside_root,
)
from abstra_internals.repositories.project.project import (
    FormStage,
    HookStage,
    JobStage,
    LocalProjectRepository,
    ScriptStage,
)
from abstra_internals.settings import Settings
from tests.fixtures import clear_dir, init_dir


class FileOutsideProjectTest(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.project_repository = LocalProjectRepository()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_no_issues_with_empty_project(self):
        rule = FileOutsideProjectRoot()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_no_issues_with_valid_form(self):
        project = self.project_repository.load()
        form = FormStage.create(
            id="test-form",
            title="Test Form",
            file="form.py",
        )
        project.add_stage(form)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_no_issues_with_valid_hook(self):
        project = self.project_repository.load()
        hook = HookStage.create(
            id="test-hook",
            title="Test Hook",
            file="hook.py",
        )
        project.add_stage(hook)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_no_issues_with_valid_job(self):
        project = self.project_repository.load()
        job = JobStage.create(
            id="test-job",
            title="Test Job",
            file="job.py",
        )
        project.add_stage(job)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_no_issues_with_valid_script(self):
        project = self.project_repository.load()
        script = ScriptStage.create(
            id="test-script",
            title="Test Script",
            file="script.py",
        )
        project.add_stage(script)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_no_issues_with_nested_valid_path(self):
        project = self.project_repository.load()
        form = FormStage.create(
            id="test-form",
            title="Test Form",
            file="subdir/nested/form.py",
        )
        project.add_stage(form)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        self.assertEqual(len(rule.find_issues()), 0)

    def test_issue_with_parent_directory_traversal_form(self):
        project = self.project_repository.load()
        form = FormStage.create(
            id="test-form",
            title="Test Form",
            file="../outside_project.py",
        )
        project.add_stage(form)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)
        self.assertIn("outside the project directory", issues[0].label)
        self.assertIn("Test Form", issues[0].label)
        self.assertEqual(len(issues[0].fixes), 1)
        self.assertIsInstance(issues[0].fixes[0], MoveFileToProjectRoot)

    def test_issue_with_parent_directory_traversal_hook(self):
        project = self.project_repository.load()
        hook = HookStage.create(
            id="test-hook",
            title="Test Hook",
            file="../outside_hook.py",
        )
        project.add_stage(hook)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)
        self.assertIn("Test Hook", issues[0].label)

    def test_issue_with_parent_directory_traversal_job(self):
        project = self.project_repository.load()
        job = JobStage.create(
            id="test-job",
            title="Test Job",
            file="../outside_job.py",
        )
        project.add_stage(job)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)
        self.assertIn("Test Job", issues[0].label)

    def test_issue_with_parent_directory_traversal_script(self):
        project = self.project_repository.load()
        script = ScriptStage.create(
            id="test-script",
            title="Test Script",
            file="../outside_script.py",
        )
        project.add_stage(script)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)
        self.assertIn("Test Script", issues[0].label)

    def test_issue_with_deeply_nested_parent_traversal(self):
        project = self.project_repository.load()
        form = FormStage.create(
            id="test-form",
            title="Test Form",
            file="../../deeply/outside.py",
        )
        project.add_stage(form)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)

    def test_multiple_issues_with_multiple_invalid_stages(self):
        project = self.project_repository.load()

        form = FormStage.create(
            id="test-form",
            title="Bad Form",
            file="../bad_form.py",
        )
        project.add_stage(form)

        hook = HookStage.create(
            id="test-hook",
            title="Bad Hook",
            file="../bad_hook.py",
        )
        project.add_stage(hook)

        # Valid stage should not create an issue
        job = JobStage.create(
            id="test-job",
            title="Good Job",
            file="good_job.py",
        )
        project.add_stage(job)

        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 2)

    def test_no_issue_with_normalized_path_staying_inside(self):
        # A path like "subdir/../form.py" should resolve to "form.py" which is inside
        project = self.project_repository.load()
        form = FormStage.create(
            id="test-form",
            title="Test Form",
            file="subdir/../form.py",
        )
        project.add_stage(form)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)


class FixTest(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()
        self.project_repository = LocalProjectRepository()
        # Create parent directory for outside files
        self.parent_dir = self.root.parent

    def tearDown(self) -> None:
        # Clean up any files created in parent directory
        outside_file = self.parent_dir / "outside_form.py"
        if outside_file.exists():
            outside_file.unlink()
        clear_dir(self.root)

    def test_fix_moves_file_and_updates_project(self):
        # Create a file outside the project
        outside_file = self.parent_dir / "outside_form.py"
        outside_file.write_text("# test content")

        project = self.project_repository.load()
        form = FormStage.create(
            id="test-form",
            title="Test Form",
            file="../outside_form.py",
        )
        project.add_stage(form)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)

        # Apply the fix
        fix = issues[0].fixes[0]
        self.assertEqual(fix.make_label(), "Move outside_form.py to project root")
        fix.fix()

        # Verify the file was moved
        new_file = Settings.root_path / "outside_form.py"
        self.assertTrue(new_file.exists())
        self.assertFalse(outside_file.exists())
        self.assertEqual(new_file.read_text(), "# test content")

        # Verify the project was updated
        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)

        # Verify the stage file attribute was updated
        updated_project = self.project_repository.load()
        updated_form = updated_project.get_form("test-form")
        assert updated_form is not None
        self.assertEqual(updated_form.file, "outside_form.py")

    def test_fix_updates_project_even_if_file_does_not_exist(self):
        # Create a stage pointing to a non-existent file outside
        project = self.project_repository.load()
        form = FormStage.create(
            id="test-form",
            title="Test Form",
            file="../nonexistent.py",
        )
        project.add_stage(form)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)

        # Apply the fix
        fix = issues[0].fixes[0]
        fix.fix()

        # Verify the project was updated even though the file didn't exist
        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)

        # Verify the stage file attribute was updated
        updated_project = self.project_repository.load()
        updated_form = updated_project.get_form("test-form")
        assert updated_form is not None
        self.assertEqual(updated_form.file, "nonexistent.py")

    def test_fix_extracts_filename_from_nested_path(self):
        # Create a file outside the project with nested path
        outside_file = self.parent_dir / "outside_form.py"
        outside_file.write_text("# nested content")

        project = self.project_repository.load()
        form = FormStage.create(
            id="test-form",
            title="Test Form",
            file="../../some/path/outside_form.py",
        )
        project.add_stage(form)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)

        # Check the fix label extracts just the filename
        fix = issues[0].fixes[0]
        self.assertEqual(fix.make_label(), "Move outside_form.py to project root")

    def test_fix_preserves_existing_file_in_root_and_updates_reference(self):
        # File already exists in project root with correct content
        existing_file = Settings.root_path / "form.py"
        existing_file.write_text("# correct content in root")

        # abstra.json wrongly references a file outside the project
        project = self.project_repository.load()
        form = FormStage.create(
            id="test-form",
            title="Test Form",
            file="../form.py",
        )
        project.add_stage(form)
        self.project_repository.save(project)

        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 1)

        # Apply the fix
        fix = issues[0].fixes[0]
        fix.fix()

        # Verify the existing file in root was NOT overwritten
        self.assertTrue(existing_file.exists())
        self.assertEqual(existing_file.read_text(), "# correct content in root")

        # Verify the project reference was updated
        rule = FileOutsideProjectRoot()
        issues = rule.find_issues()
        self.assertEqual(len(issues), 0)

        # Verify the stage file attribute was updated
        updated_project = self.project_repository.load()
        updated_form = updated_project.get_form("test-form")
        assert updated_form is not None
        self.assertEqual(updated_form.file, "form.py")


class IsPathInsideRootTest(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_simple_file_inside(self):
        file_path = self.root / "file.py"
        self.assertTrue(is_path_inside_root(file_path, self.root))

    def test_nested_file_inside(self):
        file_path = self.root / "subdir" / "nested" / "file.py"
        self.assertTrue(is_path_inside_root(file_path, self.root))

    def test_parent_traversal_outside(self):
        file_path = self.root / ".." / "outside.py"
        self.assertFalse(is_path_inside_root(file_path, self.root))

    def test_double_parent_traversal_outside(self):
        file_path = self.root / ".." / ".." / "outside.py"
        self.assertFalse(is_path_inside_root(file_path, self.root))

    def test_traversal_that_stays_inside(self):
        file_path = self.root / "subdir" / ".." / "file.py"
        self.assertTrue(is_path_inside_root(file_path, self.root))

    def test_root_path_itself(self):
        self.assertTrue(is_path_inside_root(self.root, self.root))
