import ast
from pathlib import Path
from typing import Dict, List, Set, Tuple

from abstra_internals.linter.linter import LinterIssue, LinterRule
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.utils.code import function_called_args

# We must check if every get_data is preceded by a set_data in the topological sort of the graph
# Also, check when ignoring those iterator keys if the current get_data is actually preceded by that iterator


class UnsetDataFound(LinterIssue):
    def __init__(self, key: str, path: Path, lineno: int):
        self.label = f"There is a call to get_data('{key}') in {path}:{lineno}, but no corresponding set_data call was found."
        self.fixes = []


class UnsetGetData(LinterRule):
    label: str = "Possibly undefined get data"
    type: str = "info"

    def find_issues(self) -> List[LinterIssue]:
        project = ProjectRepository.load()
        iterators_item_names = list(set(map(lambda x: x.item_name, project.iterators)))
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
            if (
                data_get_key not in data_sets
                and data_get_key not in iterators_item_names
            ):
                for path, lineno in data_get_path:
                    issues.append(UnsetDataFound(data_get_key, path, lineno))

        return issues
