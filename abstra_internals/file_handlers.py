from pathlib import Path

from dotenv import load_dotenv

from abstra_internals.controllers.main import MainController
from abstra_internals.logger import AbstraLogger
from abstra_internals.modules import reload_module


class FileHandler:
    def __init__(self, controller: MainController):
        self.controller = controller

    def env_var_handler(self, filepath: Path):
        if filepath.name == ".env":
            AbstraLogger.info("Reloading .env and all modules")
            load_dotenv(filepath, override=True)
            for (
                dep
            ) in self.controller.repositories.project.load().get_local_dependencies():
                reload_module(dep)
            return

    def python_files_handler(self, filepath: Path):
        if filepath.suffix == ".py":
            resolved_deps = [
                dep.resolve()
                for dep in self.controller.repositories.project.load().get_local_dependencies()
            ]

            if filepath.resolve() in resolved_deps:
                AbstraLogger.info(f"Reloading modified module: {filepath}")
                reload_module(filepath)
                return

    def all_files_handler(self, _: Path):
        self.controller.linter_repository.update_checks()
