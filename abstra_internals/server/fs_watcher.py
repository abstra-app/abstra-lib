import threading, os, time
from datetime import datetime

from ..repositories.json.classes import AbstraJSON, AbstraJSONRepository
from ..execution.live_execution import LiveExecution
from ..contract.common import FilesChangedMessage
from ..modules import reload_project_local_modules


def _has_local_dependencies_changed(
    abstra_json: AbstraJSON, last_change: float
) -> bool:
    for file in abstra_json.project_local_dependencies:
        if not file.exists():
            continue

        st_mtime = os.stat(file).st_mtime
        if st_mtime > last_change:
            return True
    return False


def reload_files_on_change(abstra_json: AbstraJSON, last_change: float):
    if _has_local_dependencies_changed(abstra_json, last_change):
        reload_project_local_modules()
        LiveExecution.broadcast(FilesChangedMessage())
        return True
    else:
        return False


def __files_changed_polling_loop():
    last_change = datetime.now().timestamp()
    abstra_json = AbstraJSONRepository.load()

    while True:
        has_reloaded = reload_files_on_change(abstra_json, last_change)
        if has_reloaded:
            last_change = datetime.now().timestamp()

        time.sleep(1)


def watch_py_root_files():
    threading.Thread(target=lambda: __files_changed_polling_loop()).start()
