import sys, importlib
from pathlib import Path


def reload_modules_from_path(path: Path):
    for module in sys.modules.values():
        if hasattr(module, "__file__") and module.__file__:
            module_path = Path(module.__file__)
            if module_path.is_file() and module_path.parent == path:
                importlib.reload(module)
