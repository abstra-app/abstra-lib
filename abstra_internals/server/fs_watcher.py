import os
import threading
import time
from datetime import datetime

from abstra_internals.modules import reload_project_local_modules
from abstra_internals.repositories.project.project import Project, ProjectRepository


def has_local_dependencies_changed(project: Project, last_change: float) -> bool:
    for file in project.project_local_dependencies:
        if not file.exists():
            continue

        st_mtime = os.stat(file).st_mtime
        if st_mtime > last_change:
            return True
    return False


def reload_files_on_change(project: Project, last_change: float):
    if not has_local_dependencies_changed(project, last_change):
        return False

    try:
        reload_project_local_modules()
        return True
    except Exception:
        return False


def files_changed_polling_loop():
    last_change = datetime.now().timestamp()

    while True:
        try:
            project = ProjectRepository.load()
            has_reloaded = reload_files_on_change(project, last_change)
            if has_reloaded:
                last_change = datetime.now().timestamp()
        except Exception:
            pass
        time.sleep(1)


def watch_py_root_files():
    threading.Thread(
        name="file_watcher", target=files_changed_polling_loop, daemon=True
    ).start()
