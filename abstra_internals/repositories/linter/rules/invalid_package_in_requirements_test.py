from unittest.mock import patch

from abstra_internals.repositories.linter.rules.invalid_package_in_requirements import (
    InvalidPackageInRequirements,
)
from abstra_internals.services.pypi_cache import PyPIVerificationCache
from abstra_internals.services.requirements import RequirementsRepository
from tests.fixtures import BaseTest


class TestInvalidPackageInRequirements(BaseTest):
    def setUp(self):
        super().setUp()
        # Clear the cache before each test
        PyPIVerificationCache.clear_cache()

    def test_default_valid(self):
        with patch.object(PyPIVerificationCache, "_query_pypi", return_value=True):
            issues = InvalidPackageInRequirements().find_issues()
            self.assertEqual(len(issues), 0)

    def test_valid_with_no_requirements_file(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.unlink()
        issues = InvalidPackageInRequirements().find_issues()
        self.assertEqual(len(issues), 0)

    def test_valid_with_existing_packages(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("requests==2.28.0\nflask==2.0.0")

        with patch.object(PyPIVerificationCache, "_query_pypi", return_value=True):
            issues = InvalidPackageInRequirements().find_issues()
            self.assertEqual(len(issues), 0)

    def test_invalid_with_nonexistent_package(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("nonexistent-package-xyz==1.0.0")

        with patch.object(PyPIVerificationCache, "_query_pypi", return_value=False):
            issues = InvalidPackageInRequirements().find_issues()
            self.assertEqual(len(issues), 1)
            self.assertIn("nonexistent-package-xyz", issues[0].label)

    def test_fix_removes_invalid_package(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("valid-package==1.0.0\ninvalid-package==1.0.0")

        def mock_query(package_name):
            return package_name != "invalid-package"

        with patch.object(PyPIVerificationCache, "_query_pypi", side_effect=mock_query):
            issues = InvalidPackageInRequirements().find_issues()
            self.assertEqual(len(issues), 1)

            # Apply the fix
            issues[0].fixes[0].fix()

            # Clear cache to re-check
            PyPIVerificationCache.clear_cache()

            # Verify the package was removed
            requirements = RequirementsRepository.load()
            package_names = [lib.name for lib in requirements.libraries]
            self.assertNotIn("invalid-package", package_names)
            self.assertIn("valid-package", package_names)

    def test_skips_packages_with_urls(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("mypackage @ https://example.com/mypackage.tar.gz")

        with patch.object(PyPIVerificationCache, "_query_pypi", return_value=False):
            issues = InvalidPackageInRequirements().find_issues()
            # Should not report issue for URL-based packages
            self.assertEqual(len(issues), 0)

    def test_cache_prevents_duplicate_queries(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("cached-package==1.0.0")

        query_count = 0

        def mock_query(package_name):
            nonlocal query_count
            query_count += 1
            return True

        with patch.object(PyPIVerificationCache, "_query_pypi", side_effect=mock_query):
            # First call should query PyPI
            InvalidPackageInRequirements().find_issues()
            self.assertEqual(query_count, 1)

            # Second call should use cache
            InvalidPackageInRequirements().find_issues()
            self.assertEqual(query_count, 1)  # Still 1, used cache
