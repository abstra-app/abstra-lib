from unittest import TestCase
from abstra_internals.repositories.requirements import Requirement, Requirements


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
