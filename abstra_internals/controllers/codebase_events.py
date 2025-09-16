import json
import threading
from pathlib import Path
from typing import List, Optional

import flask_sock
from dotenv import load_dotenv

from abstra_internals.contracts_generated import AbstraLibApiEditorCodebaseEventsMessage
from abstra_internals.logger import AbstraLogger
from abstra_internals.modules import reload_module
from abstra_internals.repositories.factory import Repositories
from abstra_internals.services.file_watcher import FSEventType
from abstra_internals.settings import Settings


class CodebaseEventController:
    listeners: List[flask_sock.Server] = []

    _lock = threading.Lock()

    @classmethod
    def register(cls, listener: flask_sock.Server):
        with cls._lock:
            cls.listeners.append(listener)

    @classmethod
    def unregister(cls, listener: flask_sock.Server):
        with cls._lock:
            try:
                cls.listeners.remove(listener)
            except ValueError:
                pass

    @classmethod
    def broadcast_changes(
        cls, filepath: Path, event: FSEventType, content: Optional[str]
    ):
        absolute_root_path = Settings.root_path.resolve()
        message = AbstraLibApiEditorCodebaseEventsMessage(
            filepath=str(filepath.relative_to(absolute_root_path)),
            event=event,
            content=content,
        )
        for listener in cls.listeners:
            try:
                listener.send(json.dumps(message.to_dict()))
            except Exception:
                cls.unregister(listener)

    def __init__(self, repositories: Repositories):
        self.repositories = repositories

    def reload_env(self, filepath: Path, event: FSEventType, content: Optional[str]):
        if filepath.name == ".env":
            AbstraLogger.info("Reloading .env and all modules")
            load_dotenv(filepath, override=True)
            for dep in self.repositories.project.load().get_local_dependencies():
                reload_module(dep)
            return

    def reload_modules(
        self, filepath: Path, event: FSEventType, content: Optional[str]
    ):
        if filepath.suffix == ".py":
            resolved_deps = [
                dep.resolve()
                for dep in self.repositories.project.load().get_local_dependencies()
            ]

            if filepath.resolve() in resolved_deps:
                AbstraLogger.info(f"Reloading modified module: {filepath}")
                reload_module(filepath)
                return

    def lint_files(self, filepath: Path, event: FSEventType, content: Optional[str]):
        self.repositories.linter.update_checks()
