import importlib.util as imp_util
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
