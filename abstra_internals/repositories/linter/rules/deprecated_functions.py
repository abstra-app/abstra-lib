import ast
import webbrowser
from typing import Dict, List

from abstra_internals.constants import (
    get_project_url,
)
from abstra_internals.repositories.linter.models import (
    LinterFix,
    LinterIssue,
    LinterRule,
)
from abstra_internals.repositories.project.project import LocalProjectRepository
from abstra_internals.utils.ast_cache import ASTCache

DEPRECATED_FUNCTIONS = {
    "run": {"from": "abstra.tables", "new_function": "run_sql"},
}


class ReplaceDeprecatedFunction(LinterFix):
    def __init__(self, stage_type: str, stage_id: str):
        self.label = "Go to the file"
        self.stage_type = stage_type
        self.stage_id = stage_id

    def fix(self):
        project_url = get_project_url()
        webbrowser.open(f"{project_url}/_editor/{self.stage_type}/{self.stage_id}")


class DeprecatedFunctionFound(LinterIssue):
    def __init__(
        self,
        function_name: str,
        new_function_name: str,
        stage_type: str,
        stage_id: str,
        module: str,
    ):
        self.label = f"The function '{function_name}' from '{module}' is deprecated. Please use '{new_function_name}' instead."
        self.fixes = [ReplaceDeprecatedFunction(stage_type, stage_id)]


class DeprecatedFunctionUsage(LinterRule):
    label: str = "Deprecated function usage"
    type: str = "warning"

    def find_issues(self) -> List[LinterIssue]:
        project = LocalProjectRepository().load()
        issues = []

        for entrypoint, stage in project.iter_entrypointed_stages():
            try:
                tree = ASTCache.get(entrypoint)
                import_map = self.track_imports(tree)

                for node in ast.walk(tree):
                    if isinstance(node, ast.Call):
                        if isinstance(node.func, ast.Name):
                            function_name = node.func.id
                            if (
                                function_name in DEPRECATED_FUNCTIONS
                                and DEPRECATED_FUNCTIONS[function_name]["from"]
                                == import_map.get(function_name)
                            ):
                                new_function_name = DEPRECATED_FUNCTIONS[function_name][
                                    "new_function"
                                ]
                                module = DEPRECATED_FUNCTIONS[function_name]["from"]
                                issues.append(
                                    DeprecatedFunctionFound(
                                        function_name,
                                        new_function_name,
                                        stage_type=stage.type_name,
                                        stage_id=stage.id,
                                        module=module,
                                    )
                                )

            except Exception as e:
                print(f"Error while processing {entrypoint}: {e}")

        return issues

    def track_imports(self, tree: ast.AST) -> Dict[str, str]:
        import_map = {}

        for node in ast.walk(tree):
            if isinstance(node, ast.Import):
                for alias in node.names:
                    import_map[alias.asname or alias.name.split(".")[-1]] = alias.name

            elif isinstance(node, ast.ImportFrom):
                module_name = node.module
                for alias in node.names:
                    import_map[alias.asname or alias.name] = module_name

        return import_map
