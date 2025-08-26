from ast import Attribute, NodeVisitor, keyword, parse
from pathlib import Path


# For each node, checks if it's a .write_text(...) call and if it has an encoding='utf-8' kwarg
# raises an error if it doesn't
class WriteTextVisitor(NodeVisitor):
    file: Path
    content: str

    def __init__(self, file, content) -> None:
        self.file = file
        self.content = content

    def visit_Call(self, node):
        code = "\n".join(self.content.splitlines()[node.lineno - 1 : node.end_lineno])
        error_msg = "\n".join(
            [
                "Error: .write_text(...) call without encoding='utf-8'",
                str(self.file),
                code,
            ]
        )

        if isinstance(node.func, Attribute) and node.func.attr == "write_text":
            # Only check encoding if provided
            encoding_found = False
            # kwarg check
            for kw in node.keywords:
                if isinstance(kw, keyword) and kw.arg == "encoding":
                    encoding_found = True
                    kw_encoding_value = getattr(
                        kw.value, "value", getattr(kw.value, "s", None)
                    )
                    if kw_encoding_value == "utf-8":
                        return
                    else:
                        raise AssertionError(error_msg)
            # arg check (positional)
            if not encoding_found and len(node.args) > 1:
                encoding_arg = node.args[1]
                encoding_value = getattr(
                    encoding_arg, "value", getattr(encoding_arg, "s", None)
                )
                encoding_found = True
                if encoding_value == "utf-8":
                    return
                else:
                    raise AssertionError(error_msg)
            # If encoding is provided but not utf-8, error. If not provided, pass.
            if encoding_found:
                raise AssertionError(error_msg)
            return
        self.generic_visit(node)


class ReadTextVisitor(NodeVisitor):
    file: Path
    content: str

    def __init__(self, file, content) -> None:
        self.file = file
        self.content = content

    def visit_Call(self, node):
        code = "\n".join(self.content.splitlines()[node.lineno - 1 : node.end_lineno])
        error_msg = "\n".join(
            [
                "Error: .read_text(...) call without encoding='utf-8'",
                str(self.file),
                code,
            ]
        )

        if isinstance(node.func, Attribute) and node.func.attr == "read_text":
            encoding_found = False
            # kwarg check
            for kw in node.keywords:
                if isinstance(kw, keyword) and kw.arg == "encoding":
                    encoding_found = True
                    kw_encoding_value = getattr(
                        kw.value, "value", getattr(kw.value, "s", None)
                    )
                    if kw_encoding_value == "utf-8":
                        return
                    else:
                        raise AssertionError(error_msg)
            # arg check (positional)
            if not encoding_found and len(node.args) > 0:
                encoding_arg = node.args[0]
                encoding_value = getattr(
                    encoding_arg, "value", getattr(encoding_arg, "s", None)
                )
                encoding_found = True
                if encoding_value == "utf-8":
                    return
                else:
                    raise AssertionError(error_msg)
            # If encoding is provided but not utf-8, error. If not provided, pass.
            if encoding_found:
                raise AssertionError(error_msg)
            return
        self.generic_visit(node)


class TestEncoding:
    def test_write_file(self):
        # Find every .py file in __file__'s directory recursively
        for file in [
            *Path(__file__).parent.parent.joinpath("abstra").rglob("*.py"),
            *Path(__file__).parent.parent.joinpath("abstra_internals").rglob("*.py"),
        ]:
            # ignore _test and test_ files
            if file.name.endswith("_test.py") or file.name.startswith("test_"):
                continue
            # Read the file's content with UTF-8 encoding to handle international characters
            content = file.read_text(encoding="utf-8")
            # Parse the content
            parsed = parse(content)
            # ensure every .write_text(...) attr call has encoding='utf-8'
            write_visitor = WriteTextVisitor(file, content)
            write_visitor.visit(parsed)

            # ensure every .read_text(...) attr call has encoding='utf-8'
            read_visitor = ReadTextVisitor(file, content)
            read_visitor.visit(parsed)
