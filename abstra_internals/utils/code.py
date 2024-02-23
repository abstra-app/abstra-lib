import ast
from typing import List, Optional


class UsageVisitor(ast.NodeVisitor):
    def __init__(self, package_path: List[str], object_name: str):
        self.package_path = package_path
        self.object_name = object_name
        self.alias = None
        # To accommodate multiple calls, store arguments in a list of lists
        self.args: List[List[ast.expr]] = []

    def visit_Import(self, node: ast.Import):
        for alias in node.names:
            if alias.name == ".".join(self.package_path) and self.object_name:
                self.alias = alias.asname or alias.name
        self.generic_visit(node)

    def visit_ImportFrom(self, node: ast.ImportFrom):
        if node.module is None:
            return
        if self.object_name in [alias.name for alias in node.names]:
            for alias in node.names:
                if alias.name == self.object_name:
                    self.alias = alias.asname or self.object_name
        self.generic_visit(node)


# import os; os.getenv("FOO_BAR")
class FunctionCallVisitor(UsageVisitor):
    def visit_Call(self, node: ast.Call):
        # Check if the call matches either a direct or an aliased import
        is_direct_call = isinstance(node.func, ast.Name) and (
            self.alias is None
            and node.func.id == self.object_name
            or node.func.id == self.alias
        )
        is_attr_call = (
            isinstance(node.func, ast.Attribute)
            and node.func.attr == self.object_name
            and isinstance(node.func.value, ast.Name)
            and node.func.value.id == self.alias
        )

        if is_direct_call or is_attr_call:
            # Extract the call arguments
            self.args.append(node.args)
        self.generic_visit(node)


# import os; os.environ["FOO_BAR"]
class SubscriptVisitor(UsageVisitor):
    def visit_Subscript(self, node: ast.Subscript):
        is_direct_call = isinstance(node.value, ast.Name) and (
            self.alias is None
            and node.value.id == self.object_name
            or node.value.id == self.alias
        )
        is_attr_call = (
            isinstance(node.value, ast.Attribute)
            and node.value.attr == self.object_name
            and isinstance(node.value.value, ast.Name)
            and node.value.value.id == self.alias
        )
        if is_direct_call or is_attr_call:
            if isinstance(node.slice, ast.expr):
                self.args.append([node.slice])
            elif isinstance(node.slice, ast.Index):
                self.args.append([node.slice.value])

        self.generic_visit(node)


def function_called_args(
    code: str, package_path: List[str], function_name: str
) -> Optional[List[List[ast.expr]]]:
    tree = ast.parse(code)
    visitor = FunctionCallVisitor(package_path, function_name)
    visitor.visit(tree)
    return visitor.args if visitor.args else None


def subscript_called_args(
    code: str, package_path: List[str], object_name: str
) -> Optional[List[List[ast.expr]]]:
    tree = ast.parse(code)
    visitor = SubscriptVisitor(package_path, object_name)
    visitor.visit(tree)
    return visitor.args if visitor.args else None
