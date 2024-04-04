import sys
import importlib
import importlib.util as imp_util
from .repositories.project.project import ProjectRepository
from .utils.file import path2module
from pathlib import Path


def import_as_new(filepath: str):
    module_spec = imp_util.spec_from_file_location(filepath, filepath)
    if module_spec is None or module_spec.loader is None:
        raise Exception(f"Could not load module {filepath}")

    module = imp_util.module_from_spec(module_spec)
    if module is None:
        raise Exception(f"Could not load module {filepath}")

    if module_spec.cached is not None:
        Path(module_spec.cached).unlink(missing_ok=True)

    module_spec.loader.exec_module(module)

    return module


def reload_project_local_modules():
    project = ProjectRepository.load()

    for file in project.project_local_dependencies:
        try:
            if not file.exists():
                continue

            module_name = path2module(file)
            module = sys.modules.get(module_name)

            if module is None:
                importlib.import_module(module_name)
            else:
                if module.__spec__ is not None and module.__spec__.cached is not None:
                    Path(module.__spec__.cached).unlink(missing_ok=True)
                importlib.reload(module)
        except Exception as e:
            print(f"Could not reload module from {file} with the following error:")
            print(e)
            continue
