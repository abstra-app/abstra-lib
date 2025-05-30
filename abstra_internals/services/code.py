import ast
import typing
from dataclasses import dataclass
from pathlib import Path


@dataclass
class PythonCode:
    path: Path
    tree: ast.AST
    syntax_error: typing.Optional[SyntaxError]
    imports: typing.Set[str]
    env_vars: typing.Set[str]
