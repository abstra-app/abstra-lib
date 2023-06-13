from abstra_cli.utils import (
    format_digits,
    parse_env_var,
    parse_package,
    digits,
    remove_prefix,
)


class TestUtils:
    def test_remove_prefix(self):
        assert remove_prefix("foo", "foo") == ""
        assert remove_prefix("foo", "bar") == "foo"
        assert remove_prefix("foo", "") == "foo"
        assert remove_prefix("", "") == ""

    def test_digits(self):
        assert digits(123) == 3
        assert digits(0) == 1

    def test_format_digits(self):
        assert format_digits(123, 4) == " 123"
        assert format_digits(0, 6) == "     0"

    def test_parse_env_var(self):
        assert parse_env_var("FOO=bar") == ("FOO", "bar")
        assert parse_env_var("FOO=bar=baz") == ("FOO", "bar=baz")
        assert parse_env_var("FOO") == (None, None)
        assert parse_env_var("FOO=") == (None, None)

    def test_parse_package(self):
        assert parse_package("foo~=1.0") == ("foo", "1.0")
        assert parse_package("foo==1.0") == ("foo", "1.0")
        assert parse_package("foo>=1.0") == ("foo", "1.0")
        assert parse_package("foo<=1.0") == ("foo", "1.0")
        assert parse_package("foo===1.0") == ("foo", "1.0")

        assert parse_package("foo>1.0") == (None, None)
        assert parse_package("foo<1.0") == (None, None)
        assert parse_package("SomeProject == 5.4 ; python_version < '3.8'") == (
            None,
            None,
        )
        assert parse_package("SomeProject >= 1.2, < 2.0") == (None, None)
        assert parse_package("SomeProject[foo, bar]") == (None, None)

        assert parse_package("foo") == ("foo", None)
        assert parse_package("git+https://github.com/abstra.app/abstra-cli.git") == (
            "git+https://github.com/abstra.app/abstra-cli.git",
            None,
        )
