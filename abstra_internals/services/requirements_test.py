from pathlib import Path
from unittest import TestCase

from packaging.requirements import Requirement

from abstra_internals.services.requirements import (
    RequirementRecommendation,
    Requirements,
    RequirementsRepository,
    create_requirement,
    requirement_from_dict,
    requirement_from_text,
    requirement_to_dict,
    requirement_to_text,
)
from tests.fixtures import BaseTest


class TestRequirementHelperFunctions(TestCase):
    def test_requirement_to_text(self):
        req = Requirement("requests>=2.0.0")
        self.assertEqual(requirement_to_text(req), "requests>=2.0.0")

    def test_requirement_from_text_simple(self):
        req = requirement_from_text("requests")
        self.assertIsNotNone(req)
        if req:
            self.assertEqual(req.name, "requests")

    def test_requirement_from_text_with_version(self):
        req = requirement_from_text("requests>=2.0.0")
        self.assertIsNotNone(req)
        if req:
            self.assertEqual(req.name, "requests")
            self.assertEqual(str(req.specifier), ">=2.0.0")

    def test_requirement_from_text_with_extras(self):
        req = requirement_from_text("requests[security]>=2.0.0")
        self.assertIsNotNone(req)
        if req:
            self.assertEqual(req.name, "requests")
            self.assertEqual(list(req.extras), ["security"])

    def test_requirement_from_text_with_marker(self):
        req = requirement_from_text('requests>=2.0.0; python_version>="3.8"')
        self.assertIsNotNone(req)
        if req:
            self.assertEqual(req.name, "requests")
            self.assertIsNotNone(req.marker)

    def test_requirement_from_text_with_url(self):
        req = requirement_from_text("package @ https://example.com/package.zip")
        self.assertIsNotNone(req)
        if req:
            self.assertEqual(req.name, "package")
            self.assertEqual(req.url, "https://example.com/package.zip")

    def test_requirement_from_text_empty(self):
        req = requirement_from_text("")
        self.assertIsNone(req)

    def test_requirement_from_text_whitespace(self):
        req = requirement_from_text("   ")
        self.assertIsNone(req)

    def test_requirement_from_text_invalid(self):
        req = requirement_from_text("invalid@#$%requirement")
        # This actually parses as a weird requirement, so let's use a truly invalid one
        req = requirement_from_text("@@invalid@@")
        self.assertIsNone(req)

    def test_requirement_to_dict_simple(self):
        req = Requirement("requests")
        result = requirement_to_dict(req)
        expected = {
            "name": "requests",
            "specifiers": [],
            "extras": [],
            "marker": None,
            "url": None,
            "raw_requirement": "requests",
            "installed_version": None,  # Assuming not installed in test
        }
        # Remove installed_version for comparison as it may vary
        result_copy = result.copy()
        result_copy.pop("installed_version")
        expected.pop("installed_version")
        self.assertEqual(result_copy, expected)

    def test_requirement_to_dict_complex(self):
        req = Requirement('requests[security]>=2.0.0,<3.0.0; python_version>="3.8"')
        result = requirement_to_dict(req)

        self.assertEqual(result["name"], "requests")
        self.assertEqual(len(result["specifiers"]), 2)
        self.assertIn({"operator": ">=", "version": "2.0.0"}, result["specifiers"])
        self.assertIn({"operator": "<", "version": "3.0.0"}, result["specifiers"])
        self.assertEqual(result["extras"], ["security"])
        self.assertEqual(result["marker"], 'python_version >= "3.8"')
        self.assertIsNone(result["url"])

    def test_requirement_to_dict_with_url(self):
        req = Requirement("package @ https://example.com/package.zip")
        result = requirement_to_dict(req)

        self.assertEqual(result["name"], "package")
        self.assertEqual(result["url"], "https://example.com/package.zip")

    def test_requirement_from_dict_simple(self):
        data = {
            "name": "requests",
            "specifiers": [],
            "extras": [],
            "marker": None,
            "url": None,
            "raw_requirement": "requests",
        }
        req = requirement_from_dict(data)
        self.assertEqual(req.name, "requests")
        self.assertEqual(str(req.specifier), "")

    def test_requirement_from_dict_with_specifiers(self):
        data = {
            "name": "requests",
            "specifiers": [
                {"operator": ">=", "version": "2.0.0"},
                {"operator": "<", "version": "3.0.0"},
            ],
            "extras": [],
            "marker": None,
            "url": None,
            "raw_requirement": "requests>=2.0.0,<3.0.0",
        }
        req = requirement_from_dict(data)
        self.assertEqual(req.name, "requests")
        # Order of specifiers may vary, so check if it contains both
        spec_str = str(req.specifier)
        self.assertIn(">=2.0.0", spec_str)
        self.assertIn("<3.0.0", spec_str)

    def test_requirement_from_dict_with_extras(self):
        data = {
            "name": "requests",
            "specifiers": [],
            "extras": ["security"],
            "marker": None,
            "url": None,
            "raw_requirement": "requests[security]",
        }
        req = requirement_from_dict(data)
        self.assertEqual(req.name, "requests")
        self.assertEqual(list(req.extras), ["security"])

    def test_requirement_from_dict_backward_compatibility(self):
        # Test old format with version field
        data = {
            "name": "requests",
            "version": "2.0.0",
        }
        req = requirement_from_dict(data)
        self.assertEqual(req.name, "requests")
        self.assertEqual(str(req.specifier), "==2.0.0")

    def test_create_requirement_simple(self):
        req = create_requirement("requests")
        self.assertEqual(req.name, "requests")
        self.assertEqual(str(req.specifier), "")

    def test_create_requirement_with_version(self):
        req = create_requirement("requests", "2.0.0")
        self.assertEqual(req.name, "requests")
        self.assertEqual(str(req.specifier), "==2.0.0")


class TestRequirements(TestCase):
    def test_from_text_simple(self):
        text = "requests==2.0.0\nflask>=1.0.0"
        reqs = Requirements.from_text(text)

        self.assertEqual(len(reqs.libraries), 2)
        self.assertEqual(reqs.libraries[0].name, "requests")
        self.assertEqual(reqs.libraries[1].name, "flask")

    def test_from_text_with_comments(self):
        text = """# This is a comment
requests==2.0.0  # inline comment
# Another comment
flask>=1.0.0"""
        reqs = Requirements.from_text(text)

        self.assertEqual(len(reqs.libraries), 2)
        self.assertEqual(reqs.libraries[0].name, "requests")
        self.assertEqual(reqs.libraries[1].name, "flask")

    def test_from_text_with_empty_lines(self):
        text = """requests==2.0.0

flask>=1.0.0

"""
        reqs = Requirements.from_text(text)

        self.assertEqual(len(reqs.libraries), 2)

    def test_from_text_with_pip_options(self):
        text = """-r other-requirements.txt
--find-links https://example.com
requests==2.0.0
-e git+https://github.com/user/repo.git#egg=package
flask>=1.0.0"""
        reqs = Requirements.from_text(text)

        self.assertEqual(len(reqs.libraries), 2)
        self.assertEqual(reqs.libraries[0].name, "requests")
        self.assertEqual(reqs.libraries[1].name, "flask")

    def test_from_text_with_url_requirement(self):
        # Test the case mentioned in the issue
        text = """discord.py==2.4.0
plotly==5.18.0
pandas==2.2.2
abstra==0.0.0
https://releases.abstra.cloud/abstra/git-client/latest.zip"""

        reqs = Requirements.from_text(text)

        # Should now have 5 requirements (including the URL)
        self.assertEqual(len(reqs.libraries), 5)
        names = [req.name for req in reqs.libraries]
        self.assertIn("discord.py", names)
        self.assertIn("plotly", names)
        self.assertIn("pandas", names)
        self.assertIn("abstra", names)

        # Check that URL requirement was parsed
        url_reqs = [req for req in reqs.libraries if req.url]
        self.assertEqual(len(url_reqs), 1)
        url_req = url_reqs[0]
        self.assertEqual(
            url_req.url, "https://releases.abstra.cloud/abstra/git-client/latest.zip"
        )
        # The extracted name should be something reasonable
        self.assertTrue(
            url_req.name.startswith("latest")
            or "abstra" in url_req.name
            or "git-client" in url_req.name
        )

    def test_from_text_with_proper_url_format(self):
        text = """requests==2.0.0
package @ https://example.com/package.zip"""

        reqs = Requirements.from_text(text)

        self.assertEqual(len(reqs.libraries), 2)
        self.assertEqual(reqs.libraries[0].name, "requests")
        self.assertEqual(reqs.libraries[1].name, "package")
        self.assertEqual(reqs.libraries[1].url, "https://example.com/package.zip")

    def test_from_text_with_invalid_lines(self):
        text = """requests==2.0.0
invalid@#$%line
flask>=1.0.0
another invalid line!!!"""

        reqs = Requirements.from_text(text)

        # Should skip invalid lines and continue
        self.assertEqual(len(reqs.libraries), 2)
        self.assertEqual(reqs.libraries[0].name, "requests")
        self.assertEqual(reqs.libraries[1].name, "flask")

    def test_to_text(self):
        req1 = Requirement("requests==2.0.0")
        req2 = Requirement("flask>=1.0.0")
        reqs = Requirements(libraries=[req1, req2])

        text = reqs.to_text()
        lines = text.split("\n")

        self.assertEqual(len(lines), 2)
        self.assertIn("requests==2.0.0", lines)
        self.assertIn("flask>=1.0.0", lines)

    def test_to_dict(self):
        req1 = Requirement("requests==2.0.0")
        req2 = Requirement("flask>=1.0.0")
        reqs = Requirements(libraries=[req1, req2])

        result = reqs.to_dict()

        self.assertEqual(len(result), 2)
        self.assertEqual(result[0]["name"], "requests")
        self.assertEqual(result[1]["name"], "flask")

    def test_from_dict(self):
        data = [
            {
                "name": "requests",
                "specifiers": [{"operator": "==", "version": "2.0.0"}],
                "extras": [],
                "marker": None,
                "url": None,
                "raw_requirement": "requests==2.0.0",
            },
            {
                "name": "flask",
                "specifiers": [{"operator": ">=", "version": "1.0.0"}],
                "extras": [],
                "marker": None,
                "url": None,
                "raw_requirement": "flask>=1.0.0",
            },
        ]

        reqs = Requirements.from_dict(data)

        self.assertEqual(len(reqs.libraries), 2)
        self.assertEqual(reqs.libraries[0].name, "requests")
        self.assertEqual(reqs.libraries[1].name, "flask")

    def test_add(self):
        reqs = Requirements(libraries=[])
        reqs.add("requests", "2.0.0")

        self.assertEqual(len(reqs.libraries), 1)
        self.assertEqual(reqs.libraries[0].name, "requests")

    def test_add_duplicate(self):
        req1 = Requirement("requests==2.0.0")
        reqs = Requirements(libraries=[req1])
        reqs.add("requests", "2.0.0")

        # Should not add duplicate
        self.assertEqual(len(reqs.libraries), 1)

    def test_update(self):
        req1 = Requirement("requests==1.0.0")
        reqs = Requirements(libraries=[req1])
        reqs.update("requests", "2.0.0")

        self.assertEqual(len(reqs.libraries), 1)
        self.assertEqual(str(reqs.libraries[0].specifier), "==2.0.0")

    def test_delete(self):
        req1 = Requirement("requests==2.0.0")
        req2 = Requirement("flask>=1.0.0")
        reqs = Requirements(libraries=[req1, req2])
        reqs.delete("requests")

        self.assertEqual(len(reqs.libraries), 1)
        self.assertEqual(reqs.libraries[0].name, "flask")

    def test_has_simple(self):
        req1 = Requirement("requests==2.0.0")
        reqs = Requirements(libraries=[req1])

        self.assertTrue(reqs.has("requests"))
        self.assertFalse(reqs.has("flask"))

    def test_has_with_version(self):
        req1 = Requirement("requests==2.0.0")
        reqs = Requirements(libraries=[req1])

        self.assertTrue(reqs.has("requests", "2.0.0"))
        self.assertFalse(reqs.has("requests", "1.0.0"))

    def test_get_duplicates(self):
        req1 = Requirement("requests==1.0.0")
        req2 = Requirement("requests==2.0.0")
        req3 = Requirement("flask>=1.0.0")
        reqs = Requirements(libraries=[req1, req2, req3])

        duplicates = reqs.get_duplicates()

        self.assertEqual(len(duplicates), 1)
        self.assertIn("requests", duplicates)
        self.assertEqual(len(duplicates["requests"]), 2)

    def test_ensure_new_package(self):
        reqs = Requirements(libraries=[])
        reqs.ensure("requests", "2.0.0")

        self.assertEqual(len(reqs.libraries), 1)
        self.assertEqual(reqs.libraries[0].name, "requests")

    def test_ensure_existing_package_different_version(self):
        req1 = Requirement("requests==1.0.0")
        reqs = Requirements(libraries=[req1])
        reqs.ensure("requests", "2.0.0")

        self.assertEqual(len(reqs.libraries), 1)
        self.assertEqual(str(reqs.libraries[0].specifier), "==2.0.0")

    def test_ensure_existing_package_same_version(self):
        req1 = Requirement("requests==2.0.0")
        reqs = Requirements(libraries=[req1])
        reqs.ensure("requests", "2.0.0")

        # Should not change anything
        self.assertEqual(len(reqs.libraries), 1)
        self.assertEqual(str(reqs.libraries[0].specifier), "==2.0.0")


class TestRequirementRecommendation(TestCase):
    def test_to_dict(self):
        req = Requirement("requests==2.0.0")
        recommendation = RequirementRecommendation(
            requirement=req,
            reason_file=Path("test.py"),
            reason_line=10,
            reason_code="import requests",
        )

        result = recommendation.to_dict()

        self.assertEqual(result["name"], "requests")
        self.assertEqual(result["reason_file"], "test.py")
        self.assertEqual(result["reason_line"], 10)
        self.assertEqual(result["reason_code"], "import requests")

    def test_hash(self):
        req = Requirement("requests==2.0.0")
        recommendation1 = RequirementRecommendation(
            requirement=req,
            reason_file=Path("test.py"),
            reason_line=10,
            reason_code="import requests",
        )
        recommendation2 = RequirementRecommendation(
            requirement=req,
            reason_file=Path("test.py"),
            reason_line=10,
            reason_code="import requests",
        )

        # Should have same hash for same data
        self.assertEqual(hash(recommendation1), hash(recommendation2))


class TestRequirementsRepository(BaseTest):
    def test_load_nonexistent_file(self):
        # Ensure requirements.txt doesn't exist in test environment
        requirements_txt = self.root / "requirements.txt"
        if requirements_txt.exists():
            requirements_txt.unlink()

        reqs = RequirementsRepository.load()
        self.assertEqual(len(reqs.libraries), 0)

    def test_load_existing_file(self):
        requirements_txt = self.root / "requirements.txt"
        requirements_txt.write_text("requests==2.0.0\nflask>=1.0.0")

        reqs = RequirementsRepository.load()

        self.assertEqual(len(reqs.libraries), 2)
        names = [req.name for req in reqs.libraries]
        self.assertIn("requests", names)
        self.assertIn("flask", names)

    def test_save_and_load(self):
        req1 = Requirement("requests==2.0.0")
        req2 = Requirement("flask>=1.0.0")
        reqs = Requirements(libraries=[req1, req2])

        RequirementsRepository.save(reqs)
        loaded_reqs = RequirementsRepository.load()

        self.assertEqual(len(loaded_reqs.libraries), 2)
        names = [req.name for req in loaded_reqs.libraries]
        self.assertIn("requests", names)
        self.assertIn("flask", names)

    def test_get_file_path(self):
        file_path = RequirementsRepository.get_file_path()
        self.assertTrue(str(file_path).endswith("requirements.txt"))


class TestUrlRequirements(TestCase):
    """Special test class for URL requirement handling."""

    def test_url_formats_that_should_work(self):
        """Test URL formats that packaging.requirements.Requirement supports."""
        valid_urls = [
            "package @ https://github.com/user/repo/archive/main.zip",
            "package @ git+https://github.com/user/repo.git",
            "package @ git+ssh://git@github.com/user/repo.git",
            "package @ file:///absolute/path/to/package",
        ]

        for url_format in valid_urls:
            with self.subTest(url_format=url_format):
                req = requirement_from_text(url_format)
                self.assertIsNotNone(req, f"Failed to parse: {url_format}")
                if req:
                    self.assertIsNotNone(req.url, f"No URL found in: {url_format}")

    def test_url_formats_that_currently_fail(self):
        """Test URL formats that should now work with auto-conversion."""
        # These are common formats found in requirements.txt files
        problematic_urls = [
            "https://github.com/user/repo/archive/main.zip",
            "git+https://github.com/user/repo.git",
            "https://files.pythonhosted.org/packages/source/p/package/package-1.0.tar.gz",
        ]

        for url_format in problematic_urls:
            with self.subTest(url_format=url_format):
                # These should now work when parsed through Requirements.from_text
                reqs = Requirements.from_text(url_format)
                self.assertEqual(
                    len(reqs.libraries), 1, f"Failed to parse: {url_format}"
                )
                req = reqs.libraries[0]
                self.assertEqual(
                    req.url, url_format, f"URL not preserved: {url_format}"
                )
                self.assertIsNotNone(req.name, f"No name extracted: {url_format}")

    def test_requirements_from_text_with_mixed_formats(self):
        """Test parsing requirements.txt with mixed URL formats."""
        text = """# Regular packages
requests==2.0.0
flask>=1.0.0

# Proper URL format (should work)
custom-package @ https://github.com/user/repo/archive/main.zip

# Raw URL (currently doesn't work)
https://github.com/another/repo/archive/main.zip

# Git URL (currently doesn't work)  
git+https://github.com/third/repo.git
"""

        reqs = Requirements.from_text(text)

        # Should now find 5 requirements (2 regular + 3 URL formats)
        # All URL formats should now be supported
        self.assertEqual(len(reqs.libraries), 5)

        names = [req.name for req in reqs.libraries]
        self.assertIn("requests", names)
        self.assertIn("flask", names)
        self.assertIn("custom-package", names)

        # Check that all URL requirements were parsed
        url_reqs = [req for req in reqs.libraries if req.url]
        self.assertEqual(len(url_reqs), 3)

        # Find the specific URL requirement
        custom_package_req = next(
            (req for req in reqs.libraries if req.name == "custom-package"), None
        )
        self.assertIsNotNone(custom_package_req)
        if custom_package_req:
            self.assertEqual(
                custom_package_req.url, "https://github.com/user/repo/archive/main.zip"
            )

        # Check that auto-converted URLs are present
        urls = [req.url for req in url_reqs]
        self.assertIn("https://github.com/another/repo/archive/main.zip", urls)
        self.assertIn("git+https://github.com/third/repo.git", urls)
