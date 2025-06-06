from ast import Attribute, NodeVisitor, keyword, parse
from pathlib import Path

from abstra_internals.utils.file import iterate_files


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
            # arg check
            if len(node.args) > 1:
                encoding_arg = node.args[1]
                if encoding_arg.s == "utf-8":  # type: ignore
                    return
                else:
                    raise AssertionError(error_msg)
            # kwarg check
            for kw in node.keywords:
                if isinstance(kw, keyword) and kw.arg == "encoding":
                    if kw.value.s == "utf-8":  # type: ignore
                        return
                    else:
                        raise AssertionError(error_msg)

            raise AssertionError(error_msg)

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
            # arg check
            if len(node.args) > 0:
                encoding_arg = node.args[0]
                if encoding_arg.s == "utf-8":  # type: ignore
                    return
                else:
                    raise AssertionError(error_msg)
            # kwarg check
            for kw in node.keywords:
                if isinstance(kw, keyword) and kw.arg == "encoding":
                    if kw.value.s == "utf-8":  # type: ignore
                        return
                    else:
                        raise AssertionError(error_msg)

            raise AssertionError(error_msg)

        self.generic_visit(node)


class TestEncoding:
    def test_write_file(self):
        # Find every .py file in __file__'s directory recursively
        parent_path = Path(__file__).parent.parent
        abstra_path = parent_path / "abstra"
        abstra_internals_path = parent_path / "abstra_internals"

        for file in [
            *iterate_files(abstra_path, ".py"),
            *iterate_files(abstra_internals_path, ".py"),
        ]:
            # ignore _test and test_ files
            if file.name.endswith("_test.py") or file.name.startswith("test_"):
                continue
            # Read the file's content
            content = file.read_text()
            # Parse the content
            parsed = parse(content)
            # ensure every .write_text(...) attr call has encoding='utf-8'
            write_visitor = WriteTextVisitor(file, content)
            write_visitor.visit(parsed)

            # ensure every .read_text(...) attr call has encoding='utf-8'
            read_visitor = ReadTextVisitor(file, content)
            read_visitor.visit(parsed)
