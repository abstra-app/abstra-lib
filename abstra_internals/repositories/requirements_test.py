from unittest import TestCase
from .requirements import Requirement, Requirements


class TestRequirementsRepository(TestCase):
    def test_parse_requirement(self):
        self.assertEqual(Requirement.from_text("foo"), Requirement(name="foo"))
        self.assertEqual(
            Requirement.from_text("foo==1.0.0"),
            Requirement(name="foo", version="1.0.0"),
        )

    def test_serialize_requirement(self):
        self.assertEqual(Requirement(name="foo").to_text(), "foo")
        self.assertEqual(
            Requirement(name="foo", version="1.0.0").to_text(), "foo==1.0.0"
        )

    def test_parse_requirements(self):
        self.assertEqual(
            Requirements.from_text("foo\nbar==1.0.0"),
            Requirements(
                libraries=[
                    Requirement(name="foo"),
                    Requirement(name="bar", version="1.0.0"),
                ]
            ),
        )

    def test_serialize_requirements(self):
        self.assertEqual(
            Requirements(
                libraries=[
                    Requirement(name="foo"),
                    Requirement(name="bar", version="1.0.0"),
                ]
            ).to_text(),
            "foo\nbar==1.0.0",
        )

    def test_parse_empty_requirements(self):
        self.assertEqual(Requirements.from_text(""), Requirements(libraries=[]))

    def test_parse_requirements_with_comments(self):
        self.assertEqual(
            Requirements.from_text("# foo\nfoo\n# bar\nbar==1.0.0"),
            Requirements(
                libraries=[
                    Requirement(name="foo"),
                    Requirement(name="bar", version="1.0.0"),
                ]
            ),
        )

    def test_parse_requirements_with_empty_lines(self):
        self.assertEqual(
            Requirements.from_text("\nfoo\n\nbar==1.0.0\n"),
            Requirements(
                libraries=[
                    Requirement(name="foo"),
                    Requirement(name="bar", version="1.0.0"),
                ]
            ),
        )

    def test_to_dict(self):
        self.assertEqual(
            Requirements(
                libraries=[
                    Requirement(name="foo"),
                    Requirement(name="bar", version="1.0.0"),
                ]
            ).to_dict(),
            [{"name": "foo", "version": None}, {"name": "bar", "version": "1.0.0"}],
        )

    def test_from_dict(self):
        self.assertEqual(
            Requirements.from_dict(
                [{"name": "foo", "version": None}, {"name": "bar", "version": "1.0.0"}]
            ),
            Requirements(
                libraries=[
                    Requirement(name="foo"),
                    Requirement(name="bar", version="1.0.0"),
                ]
            ),
        )

    def test_add(self):
        requirements = Requirements(libraries=[])
        requirements.add("foo")
        self.assertEqual(requirements.libraries, [Requirement(name="foo")])
        requirements.add("bar", "1.0.0")
        self.assertEqual(
            requirements.libraries,
            [Requirement(name="foo"), Requirement(name="bar", version="1.0.0")],
        )

    def test_valid_has_without_version(self):
        requirements = Requirements(libraries=[Requirement(name="foo")])
        self.assertTrue(requirements.has("foo"))

    def test_valid_has_with_version(self):
        requirements = Requirements(
            libraries=[Requirement(name="foo", version="1.0.0")]
        )
        self.assertTrue(requirements.has("foo", "1.0.0"))

    def test_invalid_has_without_lib(self):
        requirements = Requirements(libraries=[Requirement(name="foo")])
        self.assertFalse(requirements.has("bar"))

    def test_invalid_has_with_wrong_version(self):
        requirements = Requirements(
            libraries=[Requirement(name="foo", version="1.0.0")]
        )
        self.assertFalse(requirements.has("foo", "1.0.1"))

    def test_valid_ensure_with_version_from_specified_version(self):
        requirements = Requirements(
            libraries=[Requirement(name="foo", version="1.0.0")]
        )
        requirements.ensure("foo", "1.0.0")
        self.assertEqual(
            requirements.libraries, [Requirement(name="foo", version="1.0.0")]
        )

    def test_valid_ensure_with_version_from_non_specified_version(self):
        requirements = Requirements(libraries=[Requirement(name="foo")])
        requirements.ensure("foo", "1.0.1")
        self.assertEqual(
            requirements.libraries, [Requirement(name="foo", version="1.0.1")]
        )

    def test_valid_ensure_without_version_from_specified_version(self):
        requirements = Requirements(
            libraries=[Requirement(name="foo", version="1.0.0")]
        )
        requirements.ensure("foo")
        self.assertEqual(
            requirements.libraries, [Requirement(name="foo", version="1.0.0")]
        )

    def test_valid_ensure_without_version_from_non_specified_version(self):
        requirements = Requirements(libraries=[Requirement(name="foo")])
        requirements.ensure("foo")
        self.assertEqual(requirements.libraries, [Requirement(name="foo")])

    def test_valid_update_with_specified_version(self):
        requirements = Requirements(
            libraries=[Requirement(name="foo", version="0.0.0")]
        )
        requirements.update("foo", "0.0.1")
        self.assertEqual(
            requirements.libraries, [Requirement(name="foo", version="0.0.1")]
        )

    def test_valid_update_without_specified_version(self):
        requirements = Requirements(libraries=[Requirement(name="foo")])
        requirements.update("foo", "0.0.1")
        self.assertEqual(
            requirements.libraries, [Requirement(name="foo", version="0.0.1")]
        )

    def test_invalid_update_when_not_found(self):
        requirements = Requirements(libraries=[Requirement(name="foo")])
        requirements.update("bar", "0.0.1")
        self.assertEqual(requirements.libraries, [Requirement(name="foo")])
