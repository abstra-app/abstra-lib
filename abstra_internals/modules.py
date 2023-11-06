import uuid, sys, importlib, importlib.util as imp_util
from pathlib import Path


def import_as_new(name: str):
    module_spec = imp_util.spec_from_file_location(uuid.uuid4().__str__(), name)
    if module_spec is None or module_spec.loader is None:
        raise Exception(f"Could not load module {name}")

    module = imp_util.module_from_spec(module_spec)
    if module is None:
        raise Exception(f"Could not load module {name}")

    module_spec.loader.exec_module(module)


# TODO: make this work with virtualenv
def reload_modules_from_path(path: Path):
    for module in list(sys.modules.values()):
        if not (hasattr(module, "__file__") and module.__file__):
            continue

        module_path = Path(module.__file__)
        if not module_path.is_file():
            continue

        if module.__file__.startswith(str(path)):
            importlib.reload(module)
