import uuid, sys, importlib, importlib.util as imp_util

from .repositories.project.project import ProjectRepository
from .utils.file import path2module


def import_as_new(name: str):
    module_spec = imp_util.spec_from_file_location(uuid.uuid4().__str__(), name)
    if module_spec is None or module_spec.loader is None:
        raise Exception(f"Could not load module {name}")

    module = imp_util.module_from_spec(module_spec)
    if module is None:
        raise Exception(f"Could not load module {name}")

    module_spec.loader.exec_module(module)


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
                importlib.reload(module)
        except Exception as e:
            print(f"Could not reload module from {file} with the following error:")
            print(e)
            continue
