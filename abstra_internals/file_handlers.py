from pathlib import Path

from dotenv import load_dotenv

from abstra_internals.controllers.main import MainController
from abstra_internals.logger import AbstraLogger
from abstra_internals.modules import reload
from abstra_internals.repositories.project.project import ProjectRepository


class FileHandler:
    def __init__(self, controller: MainController):
        self.controller = controller

    def env_var_handler(self, filepath: Path):
        if filepath.name == ".env":
            AbstraLogger.info("Reloading .env and all modules")
            load_dotenv(filepath, override=True)
            for dep in ProjectRepository.load().get_local_dependencies():
                reload(str(dep))
            return

    def python_files_handler(self, filepath: Path):
        if filepath.suffix == ".py":
            resolved_deps = [
                dep.resolve()
                for dep in ProjectRepository.load().get_local_dependencies()
            ]

            if filepath.resolve() in resolved_deps:
                AbstraLogger.info(f"Reloading modified module: {filepath}")
                reload(str(filepath))
                return

    def all_files_handler(self, _: Path):
        self.controller.linter_repository.update_checks()
