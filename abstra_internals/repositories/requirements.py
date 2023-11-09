from dataclasses import dataclass
from typing import List, Optional
from pathlib import Path
from tempfile import mkdtemp
from shutil import move

from .json.classes import AbstraJSONRepository
from ..settings import Settings
from importlib_metadata import packages_distributions
from pkg_resources import get_distribution
import ast


@dataclass
class Requirement:
    name: str
    version: Optional[str] = None

    def to_text(self):
        if self.version is None:
            return self.name
        else:
            return f"{self.name}=={self.version}"

    @staticmethod
    def from_text(text: str):
        if "==" in text:
            name, version = text.split("==")
            return Requirement(name=name, version=version)
        else:
            return Requirement(name=text)

    def to_dict(self):
        return {"name": self.name, "version": self.version}

    @staticmethod
    def from_dict(data: dict):
        return Requirement(name=data["name"], version=data["version"])


@dataclass
class Requirements:
    libraries: List[Requirement]

    def to_text(self):
        return "\n".join([lib.to_text() for lib in self.libraries])

    @staticmethod
    def from_text(text: str):
        libraries = []
        for line in text.splitlines():
            if line.startswith("#"):
                continue
            if line.strip() == "":
                continue
            libraries.append(Requirement.from_text(line))
        return Requirements(libraries=libraries)

    def to_dict(self):
        return [lib.to_dict() for lib in self.libraries]

    @staticmethod
    def from_dict(data: list):
        return Requirements(libraries=[Requirement.from_dict(lib) for lib in data])

    def add(self, name: str, version: Optional[str] = None):
        self.libraries.append(Requirement(name=name, version=version))

    def delete(self, name: str):
        self.libraries = [lib for lib in self.libraries if lib.name != name]


@dataclass
class RequirementsRepository:
    @classmethod
    def get_file_path(cls):
        return Settings.root_path / "requirements.txt"

    @classmethod
    def get_recommendation(cls) -> List[Requirement]:
        imported_modules = set()

        abstra_json = AbstraJSONRepository.load()

        for python_file in abstra_json.project_files:
            try:
                if not python_file.exists():
                    continue
                code = python_file.read_text(encoding="utf-8")
                parsed = ast.parse(code)
                for node in parsed.body:
                    if isinstance(node, ast.Import):
                        for alias in node.names:
                            lib_name = packages_distributions().get(alias.name)
                            if lib_name is None:
                                continue
                            for l in lib_name:
                                imported_modules.add(l)
                    elif isinstance(node, ast.ImportFrom):
                        if node.module is None:
                            continue
                        lib_name = packages_distributions().get(node.module)
                        if lib_name is None:
                            continue
                        for l in lib_name:
                            imported_modules.add(l)
            except SyntaxError:
                continue

        already_added = set([lib.name for lib in cls.load().libraries])

        return [
            Requirement(name=module, version=get_distribution(module).version)
            for module in imported_modules
            if module not in already_added
        ]

    @classmethod
    def save(cls, requirements: Requirements):
        temp_file = Path(mkdtemp()) / "requirements.txt"

        with temp_file.open("w") as f:
            f.write(requirements.to_text())
        move(str(temp_file), cls.get_file_path())

    @classmethod
    def load(cls) -> Requirements:
        file = cls.get_file_path()
        if file.exists():
            requirements_content = file.read_text(encoding="utf-8")
            return Requirements.from_text(requirements_content)
        else:
            return Requirements(libraries=[])
