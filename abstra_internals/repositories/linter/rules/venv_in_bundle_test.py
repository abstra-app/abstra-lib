import os
from unittest import TestCase
from unittest.mock import patch

from abstra_internals.repositories.linter.rules.venv_in_bundle import (
    VenvInBundle,
    virtualenv_ignored,
)
from tests.fixtures import clear_dir, init_dir


class TestVenvInBundle(TestCase):
    def setUp(self):
        self.root = init_dir()
        # Initialize git repo for gitignore checks to work
        os.system(f"git init {self.root} --quiet")

    def tearDown(self):
        clear_dir(self.root)

    def test_venv_ignored_when_in_gitignore_without_slash(self):
        """Test that venv is detected as ignored when .gitignore contains 'venv'"""
        venv_path = self.root / "venv"
        venv_path.mkdir()

        gitignore = self.root / ".gitignore"
        gitignore.write_text("venv\n")

        with patch(
            "abstra_internals.repositories.linter.rules.venv_in_bundle.get_root_and_prefix_path"
        ) as mock_paths:
            mock_paths.return_value = (
                self.root.resolve().as_posix(),
                (self.root / "venv").resolve().as_posix(),
            )

            self.assertTrue(virtualenv_ignored())

    def test_venv_ignored_when_in_gitignore_with_trailing_slash(self):
        """Test that venv is detected as ignored when .gitignore contains 'venv/'"""
        venv_path = self.root / "venv"
        venv_path.mkdir()

        gitignore = self.root / ".gitignore"
        gitignore.write_text("venv/\n")

        with patch(
            "abstra_internals.repositories.linter.rules.venv_in_bundle.get_root_and_prefix_path"
        ) as mock_paths:
            mock_paths.return_value = (
                self.root.resolve().as_posix(),
                (self.root / "venv").resolve().as_posix(),
            )

            self.assertTrue(virtualenv_ignored())

    def test_venv_ignored_when_in_gitignore_with_wildcard(self):
        """Test that venv is detected as ignored when .gitignore contains '**/venv'"""
        venv_path = self.root / "venv"
        venv_path.mkdir()

        gitignore = self.root / ".gitignore"
        gitignore.write_text("**/venv\n")

        with patch(
            "abstra_internals.repositories.linter.rules.venv_in_bundle.get_root_and_prefix_path"
        ) as mock_paths:
            mock_paths.return_value = (
                self.root.resolve().as_posix(),
                (self.root / "venv").resolve().as_posix(),
            )

            self.assertTrue(virtualenv_ignored())

    def test_dot_venv_ignored_when_in_gitignore(self):
        """Test that .venv is detected as ignored when .gitignore contains '.venv'"""
        venv_path = self.root / ".venv"
        venv_path.mkdir()

        gitignore = self.root / ".gitignore"
        gitignore.write_text(".venv\n")

        with patch(
            "abstra_internals.repositories.linter.rules.venv_in_bundle.get_root_and_prefix_path"
        ) as mock_paths:
            mock_paths.return_value = (
                self.root.resolve().as_posix(),
                (self.root / ".venv").resolve().as_posix(),
            )

            self.assertTrue(virtualenv_ignored())

    def test_venv_not_ignored_when_not_in_gitignore(self):
        """Test that venv is not detected as ignored when not in .gitignore"""
        venv_path = self.root / "venv"
        venv_path.mkdir()

        gitignore = self.root / ".gitignore"
        gitignore.write_text("other_folder\n")

        with patch(
            "abstra_internals.repositories.linter.rules.venv_in_bundle.get_root_and_prefix_path"
        ) as mock_paths:
            mock_paths.return_value = (
                self.root.resolve().as_posix(),
                (self.root / "venv").resolve().as_posix(),
            )

            self.assertFalse(virtualenv_ignored())

    def test_no_issues_when_venv_in_gitignore(self):
        """Test that VenvInBundle returns no issues when venv is in .gitignore"""
        venv_path = self.root / "venv"
        venv_path.mkdir()

        gitignore = self.root / ".gitignore"
        gitignore.write_text("venv\n")

        with (
            patch(
                "abstra_internals.repositories.linter.rules.venv_in_bundle.running_under_virtualenv",
                return_value=True,
            ),
            patch(
                "abstra_internals.repositories.linter.rules.venv_in_bundle.virtualenv_inside_project",
                return_value=True,
            ),
            patch(
                "abstra_internals.repositories.linter.rules.venv_in_bundle.get_root_and_prefix_path"
            ) as mock_paths,
        ):
            mock_paths.return_value = (
                self.root.resolve().as_posix(),
                (self.root / "venv").resolve().as_posix(),
            )

            rule = VenvInBundle()
            issues = rule.find_issues()
            self.assertEqual(issues, [])

    def test_issues_when_venv_not_in_gitignore(self):
        """Test that VenvInBundle returns issues when venv is not in .gitignore"""
        venv_path = self.root / "venv"
        venv_path.mkdir()

        gitignore = self.root / ".gitignore"
        gitignore.write_text("other_folder\n")

        with (
            patch(
                "abstra_internals.repositories.linter.rules.venv_in_bundle.running_under_virtualenv",
                return_value=True,
            ),
            patch(
                "abstra_internals.repositories.linter.rules.venv_in_bundle.virtualenv_inside_project",
                return_value=True,
            ),
            patch(
                "abstra_internals.repositories.linter.rules.venv_in_bundle.get_root_and_prefix_path"
            ) as mock_paths,
        ):
            mock_paths.return_value = (
                self.root.resolve().as_posix(),
                (self.root / "venv").resolve().as_posix(),
            )

            rule = VenvInBundle()
            issues = rule.find_issues()
            self.assertEqual(len(issues), 1)
