from ..linter import LinterRule, LinterIssue
from typing import Set, List, Dict, Tuple
import ast
from pathlib import Path
from ...repositories.project.project import ProjectRepository
from ...utils.code import function_called_args


class UnsetMatchFound(LinterIssue):
    def __init__(self, key: str, path: Path, lineno: int):
        self.label = f"Unset key found: '{key}' in {path}:{lineno}"
        self.fixes = []


class UnsetMatchThread(LinterRule):
    label: str = "Undefined data to be matched"
    type: str = "bug"

    def find_issues(self) -> List[LinterIssue]:
        project = ProjectRepository.load()
        match_threads: Dict[str, Set[Tuple[Path, int]]] = {}
        data_sets: Dict[str, Set[Tuple[Path, int]]] = {}
        for python_file in project.project_files:
            try:
                match_thread_calls = function_called_args(
                    python_file.read_text(encoding="utf-8"),
                    ["abstra", "workflows"],
                    "match_thread",
                )
                set_data_calls = function_called_args(
                    python_file.read_text(encoding="utf-8"),
                    ["abstra", "workflows"],
                    "set_data",
                )

                if match_thread_calls is not None:
                    for function_call in match_thread_calls:
                        for arg in function_call:
                            if isinstance(arg, ast.Dict):
                                for key in arg.keys:
                                    if isinstance(key, ast.Constant) and isinstance(
                                        key.value, str
                                    ):
                                        match_threads.setdefault(key.value, set()).add(
                                            (python_file, key.lineno)
                                        )

                if set_data_calls is not None:
                    for function_call in set_data_calls:
                        for arg in function_call:
                            if isinstance(arg, ast.Constant) and isinstance(
                                arg.value, str
                            ):
                                data_sets.setdefault(arg.value, set()).add(
                                    (python_file, arg.lineno)
                                )
            except SyntaxError:
                continue
            except FileNotFoundError:
                continue

        issues = []
        for key, match_path in match_threads.items():
            if key not in data_sets:
                for path, lineno in match_path:
                    issues.append(UnsetMatchFound(key, path, lineno))

        return issues
