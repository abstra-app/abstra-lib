import threading, os, time
from datetime import datetime

from ..contract.forms import FilesChangedMessage
from ..modules import reload_project_local_modules
from ..execution.form_execution import FormExecution
from ..repositories.project.project import ProjectRepository, Project


def _has_local_dependencies_changed(project: Project, last_change: float) -> bool:
    for file in project.project_local_dependencies:
        if not file.exists():
            continue

        st_mtime = os.stat(file).st_mtime
        if st_mtime > last_change:
            return True
    return False


def reload_files_on_change(project: Project, last_change: float):
    if _has_local_dependencies_changed(project, last_change):
        reload_project_local_modules()
        FormExecution.broadcast(FilesChangedMessage())
        return True
    else:
        return False


def __files_changed_polling_loop():
    last_change = datetime.now().timestamp()
    project = ProjectRepository.load()

    while True:
        has_reloaded = reload_files_on_change(project, last_change)
        if has_reloaded:
            last_change = datetime.now().timestamp()

        time.sleep(1)


def watch_py_root_files():
    threading.Thread(target=lambda: __files_changed_polling_loop()).start()
