from ..linter import LinterRule, LinterIssue
from typing import Set, List, Dict, Tuple
import ast
from pathlib import Path
from ...repositories.project.project import ProjectRepository
from ...utils.code import function_called_args


class UnsetDataFound(LinterIssue):
    def __init__(self, key: str, path: Path, lineno: int):
        self.label = f"There is a call to get_data('{key}') in {path}:{lineno}, but no corresponding set_data call was found."
        self.fixes = []


class UnsetGetData(LinterRule):
    label: str = "Possibly undefined get data"
    type: str = "info"

    def find_issues(self) -> List[LinterIssue]:
        project = ProjectRepository.load()
        data_gets: Dict[str, Set[Tuple[Path, int]]] = {}
        data_sets: Dict[str, Set[Tuple[Path, int]]] = {}
        for python_file in project.project_files:
            try:
                get_data_calls = function_called_args(
                    python_file.read_text(encoding="utf-8"),
                    ["abstra", "workflows"],
                    "get_data",
                )
                set_data_calls = function_called_args(
                    python_file.read_text(encoding="utf-8"),
                    ["abstra", "workflows"],
                    "set_data",
                )

                if get_data_calls is not None:
                    for function_call in get_data_calls:
                        if len(function_call) > 0:
                            key_arg = function_call[0]
                            if isinstance(key_arg, ast.Constant) and isinstance(
                                key_arg.value, str
                            ):
                                data_gets.setdefault(key_arg.value, set()).add(
                                    (python_file, key_arg.lineno)
                                )
                if set_data_calls is not None:
                    for function_call in set_data_calls:
                        if len(function_call) > 0:
                            key_arg = function_call[0]
                            if isinstance(key_arg, ast.Constant) and isinstance(
                                key_arg.value, str
                            ):
                                data_sets.setdefault(key_arg.value, set()).add(
                                    (python_file, key_arg.lineno)
                                )
            except SyntaxError:
                continue
            except FileNotFoundError:
                continue

        issues = []
        for data_get_key, data_get_path in data_gets.items():
            if data_get_key not in data_sets:
                for path, lineno in data_get_path:
                    issues.append(UnsetDataFound(data_get_key, path, lineno))

        return issues
