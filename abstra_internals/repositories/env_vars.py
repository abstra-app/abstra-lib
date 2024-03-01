from typing import List, Set, Dict, Tuple
from dotenv import dotenv_values, set_key, unset_key, parser
from ..contracts_generated import AbstraLibApiEditorEnvVarsModel
from ..settings import Settings
from .project.project import ProjectRepository
from ..utils.code import function_called_args, subscript_called_args
import ast
from pathlib import Path


class EnvVarsRepository:
    @staticmethod
    def get_env_var_path() -> Path:
        return Settings.root_path / ".env"

    @staticmethod
    def list() -> List[AbstraLibApiEditorEnvVarsModel]:
        values = dotenv_values(EnvVarsRepository.get_env_var_path())
        return [
            AbstraLibApiEditorEnvVarsModel.from_dict(
                {
                    "key": k,
                    "value": v,
                }
            )
            for k, v in values.items()
        ]

    @staticmethod
    def set(env_var: AbstraLibApiEditorEnvVarsModel) -> AbstraLibApiEditorEnvVarsModel:
        set_key(EnvVarsRepository.get_env_var_path(), env_var.key, env_var.value)
        return env_var

    @staticmethod
    def unset(
        env_var: AbstraLibApiEditorEnvVarsModel,
    ) -> AbstraLibApiEditorEnvVarsModel:
        unset_key(EnvVarsRepository.get_env_var_path(), env_var.key)
        return env_var

    @staticmethod
    def check() -> bool:
        env_file_path = EnvVarsRepository.get_env_var_path()
        if not env_file_path.exists():
            return True
        with open(env_file_path) as f:
            try:
                for it in parser.parse_stream(f):
                    if it.error:
                        return False
                return True
            except parser.Error as e:
                print(e)
                return False

    @classmethod
    def get_env_vars_in_code(cls) -> Dict[str, Set[Tuple[Path, ast.expr]]]:
        used_env_vars: Dict[str, Set[Tuple[Path, ast.expr]]] = {}
        project = ProjectRepository.load()

        for python_file in project.project_files:
            try:
                function_calls = function_called_args(
                    python_file.read_text(encoding="utf-8"), ["os"], "getenv"
                )
                subscript_calls = subscript_called_args(
                    python_file.read_text(encoding="utf-8"), ["os"], "environ"
                )

                if function_calls is not None:
                    for function_call in function_calls:
                        for arg in function_call:
                            if isinstance(arg, ast.Constant) and isinstance(
                                arg.value, str
                            ):
                                used_env_vars.setdefault(arg.value, set()).add(
                                    (python_file, arg)
                                )
                if subscript_calls is not None:
                    for subscript_call in subscript_calls:
                        for arg in subscript_call:
                            if isinstance(arg, ast.Constant) and isinstance(
                                arg.value, str
                            ):
                                used_env_vars.setdefault(arg.value, set()).add(
                                    (python_file, arg)
                                )
            except SyntaxError:
                continue
            except FileNotFoundError:
                continue

        return used_env_vars


def env_vars_repository_factory() -> EnvVarsRepository:
    return EnvVarsRepository()
