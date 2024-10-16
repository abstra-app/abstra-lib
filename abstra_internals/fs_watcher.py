import os
import time
from datetime import datetime

from abstra_internals.controllers.main import MainController
from abstra_internals.modules import reload_project_local_modules


def has_local_dependencies_changed(
    controller: MainController, last_change: float
) -> bool:
    for file in controller.get_project_local_dependencies():
        if not file.exists():
            continue

        st_mtime = os.stat(file).st_mtime
        if st_mtime > last_change:
            return True
    return False


def reload_files_on_change(controller: MainController, last_change: float):
    if not has_local_dependencies_changed(controller, last_change):
        return False

    try:
        reload_project_local_modules()
        return True
    except Exception:
        return False


def files_changed_polling_loop(*, controller: MainController):
    last_change = datetime.now().timestamp()

    while True:
        try:
            has_reloaded = reload_files_on_change(controller, last_change)
            if has_reloaded:
                last_change = datetime.now().timestamp()
        except Exception:
            pass
        time.sleep(1)
