import importlib
import importlib.util as imp_util
import sys
from pathlib import Path

from abstra_internals.logger import AbstraLogger
from abstra_internals.settings import Settings


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


def reload_module(filepath: Path):
    module_name = Path(filepath).stem
    module = sys.modules.get(module_name)

    try:
        relative_path = filepath.resolve().relative_to(Settings.root_path.resolve())
        if relative_path.suffix != ".py":
            return

        module_name = ".".join(relative_path.with_suffix("").parts)

        AbstraLogger.debug(f"Reloading module: {module_name}")

        module = sys.modules.get(module_name)

        if module is None:
            importlib.import_module(module_name)
        else:
            if module.__spec__ is not None and module.__spec__.cached is not None:
                Path(module.__spec__.cached).unlink(missing_ok=True)
            importlib.reload(module)

    except Exception as e:
        AbstraLogger.error(
            f"Could not reload module from {filepath} with the following error: {e}"
        )
