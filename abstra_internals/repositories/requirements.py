import ast
from shutil import move
from pathlib import Path
from tempfile import mkdtemp
from dataclasses import dataclass
from typing import List, Optional, Set, Dict
from pkg_resources import get_distribution
from importlib_metadata import packages_distributions
from ..settings import Settings
from .project.project import ProjectRepository


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

    def __hash__(self) -> int:
        return hash(f"{self.name}/{self.version}")


@dataclass
class RequirementRecommendation:
    requirement: Requirement
    reason_file: Path
    reason_line: int
    reason_code: str

    def to_dict(self):
        return {
            **self.requirement.to_dict(),
            "reason_file": str(self.reason_file),
            "reason_line": self.reason_line,
            "reason_code": self.reason_code,
        }

    def __hash__(self) -> int:
        return hash(
            f"{self.requirement.to_text()}/{self.reason_file}/{self.reason_line}"
        )


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

    def update(self, name: str, version: str):
        self.libraries = [
            lib if lib.name != name else Requirement(name=name, version=version)
            for lib in self.libraries
        ]

    def delete(self, name: str):
        self.libraries = [lib for lib in self.libraries if lib.name != name]

    def delete_duplicates(self, name: str, version: Optional[str]):
        self.libraries = [
            lib for lib in self.libraries if lib.name != name or lib.version != version
        ]

    def has(self, lib_name: str, version: Optional[str] = None):
        for lib in self.libraries:
            if lib.name == lib_name and (lib.version == version or version is None):
                return True
        return False

    def ensure(self, lib_name: str, version: Optional[str] = None):
        if (
            self.has(lib_name)
            and version is not None
            and not self.has(lib_name, version)
        ):
            self.update(lib_name, version)
        elif not self.has(lib_name):
            self.add(lib_name, version)

    def get(self, lib_name: str):
        for lib in self.libraries:
            if lib.name == lib_name:
                return lib.version
        return None

    def get_duplicates(self) -> Dict[str, List[Requirement]]:
        duplicates = {}
        for lib in self.libraries:
            if not isinstance(duplicates.get(lib.name), list):
                duplicates[lib.name] = [lib]
            else:
                duplicates[lib.name].append(lib)
        return {k: v for k, v in duplicates.items() if len(v) > 1}


@dataclass
class RequirementsRepository:
    @classmethod
    def get_file_path(cls):
        return Settings.root_path / "requirements.txt"

    @classmethod
    def get_recommendation(cls) -> List[RequirementRecommendation]:
        imported_modules: Set[RequirementRecommendation] = set()

        project = ProjectRepository.load()
        package_dist = packages_distributions()
        visited_set = set()

        for python_file in project.project_files:
            try:
                if not python_file.exists():
                    continue
                code = python_file.read_text(encoding="utf-8")
                parsed = ast.parse(code)
                for node in parsed.body:
                    if isinstance(node, ast.Import):
                        for alias in node.names:
                            if alias.name in visited_set:
                                continue
                            visited_set.add(alias.name)
                            lib_name = package_dist.get(alias.name)
                            if lib_name is None:
                                continue
                            for l in lib_name:
                                imported_modules.add(
                                    RequirementRecommendation(
                                        requirement=Requirement(
                                            name=l, version=get_distribution(l).version
                                        ),
                                        reason_file=python_file,
                                        reason_line=node.lineno,
                                        reason_code=python_file.read_text(
                                            encoding="utf-8"
                                        ).splitlines()[node.lineno - 1],
                                    )
                                )
                    if isinstance(node, ast.ImportFrom):
                        if node.module is None or node.module in visited_set:
                            continue
                        visited_set.add(node.module)
                        lib_name = package_dist.get(node.module)
                        if lib_name is None:
                            continue
                        for l in lib_name:
                            imported_modules.add(
                                RequirementRecommendation(
                                    requirement=Requirement(
                                        name=l, version=get_distribution(l).version
                                    ),
                                    reason_file=python_file,
                                    reason_line=node.lineno,
                                    reason_code=python_file.read_text(
                                        encoding="utf-8"
                                    ).splitlines()[node.lineno - 1],
                                )
                            )
            except SyntaxError:
                continue

        already_added = set([lib.name for lib in cls.load().libraries])

        return [
            module
            for module in imported_modules
            if module.requirement.name not in already_added
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


def requirements_repository_factory() -> RequirementsRepository:
    return RequirementsRepository()
