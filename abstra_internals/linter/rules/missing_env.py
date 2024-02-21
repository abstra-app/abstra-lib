from ..linter import LinterRule, LinterIssue, LinterFix
from ...repositories.env_vars import EnvVarsRepository
from typing import Set, List
import webbrowser
from ...contracts_generated import AbstraLibApiEditorEnvVarsModel
from pathlib import Path


class AddEnvToEnvFile(LinterFix):
    def __init__(self, env_var: str):
        self.label = f"Add {env_var} to .env file"
        self.env_var = env_var

    def fix(self):
        env_var = self.env_var
        EnvVarsRepository.set(
            AbstraLibApiEditorEnvVarsModel(key=env_var, value=">> REPLACE ME <<")
        )
        env_uri = EnvVarsRepository.get_env_var_path().absolute().as_uri()
        webbrowser.open(env_uri)


class EnvInCodeNotInEnvFile(LinterIssue):
    def __init__(self, filename: Path, lineno: int, env_var: str):
        self.label = f"Env var {env_var} is used in {filename}:{lineno} but not defined in .env file"
        self.fixes = [AddEnvToEnvFile(env_var)]


class MissingEnv(LinterRule):
    label: str = "Missing env vars"
    type: str = "bug"

    def find_issues(self) -> List[LinterIssue]:
        env_vars_in_code_dict = EnvVarsRepository.get_env_vars_in_code()
        env_vars_in_code: Set[str] = set(env_vars_in_code_dict.keys())
        env_vars_in_env_file: Set[str] = set(
            [ev.key for ev in EnvVarsRepository.list()]
        )
        missing_env_vars = env_vars_in_code - env_vars_in_env_file

        issues = []

        for missing_env_var in missing_env_vars:
            code_paths: Set[str] = set()
            for filename, expr in env_vars_in_code_dict[missing_env_var]:
                code_path = f"{filename}:{expr.lineno}"
                if code_path not in code_paths:
                    code_paths.add(code_path)
                    issues.append(
                        EnvInCodeNotInEnvFile(filename, expr.lineno, missing_env_var)
                    )
        return issues
