import io

from abstra_internals.utils.b64 import is_base_64, to_base64


class TestB64Check:
    def test_is_base_64_png(self):
        assert is_base_64(
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        )

    def test_is_base_64_webp(self):
        assert is_base_64(
            "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="
        )

    def test_is_base_64_jpeg(self):
        assert is_base_64(
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QA6RXhpZgAATU0AKgAAAAgAA1IBAAAB"
        )

    def test_is_base_64_gif(self):
        assert is_base_64(
            "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
        )

    def test_is_base_64_fail(self):
        assert not is_base_64("data:image/jpeg;base64,invalid")


class TestB64Conversion:
    def test_to_base64_path(self, tmp_path):
        file = tmp_path / "test.png"
        file.write_bytes(b"hello world")

        base64_str = to_base64(file)
        assert base64_str is not None
        assert base64_str.startswith("data:image/png;base64,")
        assert base64_str.endswith("aGVsbG8gd29ybGQ=")

    def test_to_base64_io(self):
        base64_str = to_base64(io.BytesIO(b"hello world"))
        assert base64_str is not None
        assert base64_str.startswith("data:image/png;base64,")
        assert base64_str.endswith("aGVsbG8gd29ybGQ=")

    def test_to_base64_str_already_base64(self):
        base64_str = to_base64(
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        )
        assert base64_str is not None
        assert base64_str.startswith("data:image/png;base64,")
        assert base64_str.endswith(
            "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        )

    def test_to_base64_str_http(self):
        base64_str = to_base64("http://example.com/image.png")
        assert base64_str == "http://example.com/image.png"
