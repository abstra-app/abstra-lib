import threading, os, time, sys, importlib
from datetime import datetime
from pathlib import Path

from ..settings import Settings
from ..execution.live_execution import LiveExecution
from ..contract.common import FilesChangedMessage


def __reload_modules_from_path(path: Path):
    for module in list(sys.modules.values()):
        if not (hasattr(module, "__file__") and module.__file__):
            continue

        module_path = Path(module.__file__)
        if not module_path.is_file():
            continue

        if module.__file__.startswith(str(path)):
            importlib.reload(module)
            # print(f"Reloaded {module.__name__}")


def __files_changed_polling_loop(path: Path):
    last_change = datetime.now().timestamp()
    while True:
        something_changed = False
        for _, _, files in list(os.walk(path)):
            for file in files:
                if not Path(file).exists() or Path(file).name == "abstra.json":
                    continue
                st_mtime = os.stat(file).st_mtime
                if st_mtime > last_change:
                    last_change = st_mtime
                    something_changed = True

        if something_changed:
            __reload_modules_from_path(path)
            LiveExecution.broadcast(FilesChangedMessage())

        time.sleep(1)


def watch_py_root_files():
    threading.Thread(
        target=lambda: __files_changed_polling_loop(Settings.root_path)
    ).start()
