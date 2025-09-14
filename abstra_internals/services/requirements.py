import ast
import importlib.util
import os
import subprocess
import sys
import threading
from dataclasses import dataclass
from importlib.metadata import PackageNotFoundError, distribution
from pathlib import Path
from shutil import move
from tempfile import mkdtemp
from typing import Dict, List, Literal, Optional, Set

from importlib_metadata import packages_distributions
from packaging.requirements import Requirement
from pip._internal.cli.main import main as pip_main

from abstra_internals.repositories.project.project import LocalProjectRepository
from abstra_internals.settings import Settings
from abstra_internals.utils.ast_cache import ASTCache
from abstra_internals.utils.format import pip_name

install_lock = threading.Lock()


def stream_output(cmd: List[str]):
    process = subprocess.Popen(
        cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True
    )
    if process.stdout is None:
        return
    for line in iter(process.stdout.readline, ""):
        yield line
    code = process.wait()
    if code != 0:
        yield "__ABSTRA_STREAM_ERROR__"


def check_package(package_name) -> Literal["builtin", "installed", "unknown"]:
    if package_name in sys.builtin_module_names:
        return "builtin"

    spec = importlib.util.find_spec(package_name)
    if spec is not None and spec.origin is not None:
        if "site-packages" in spec.origin:
            return "installed"
        return "builtin"

    return "unknown"


# Helper functions to extend packaging.requirements.Requirement functionality
def requirement_to_text(req: Requirement) -> str:
    """Convert a Requirement to text format."""
    return str(req)


def requirement_from_text(text: str) -> Optional[Requirement]:
    """Create a Requirement from text, handling simple cases gracefully."""
    try:
        text = text.strip()
        if not text:
            return None
        return Requirement(text)
    except Exception:
        return None


def requirement_to_dict(req: Requirement) -> dict:
    """Convert a Requirement to comprehensive dictionary format."""
    # Parse specifiers into a more detailed format
    specifiers = []

    if req.specifier:
        for spec in req.specifier:
            specifiers.append({"operator": spec.operator, "version": spec.version})

    return {
        "name": req.name,
        "specifiers": specifiers,
        "extras": list(req.extras) if req.extras else [],
        "marker": str(req.marker) if req.marker else None,
        "url": req.url,
        "raw_requirement": str(req),
        "installed_version": get_installed_version(req.name),
    }


def requirement_from_dict(data: dict) -> Requirement:
    """Create a Requirement from dictionary format."""
    # Check if we have the raw requirement string (preferred)
    if "raw_requirement" in data and data["raw_requirement"]:
        return Requirement(data["raw_requirement"])

    # Fallback: reconstruct from components
    name = data["name"]

    # Check for new specifiers format
    if "specifiers" in data and data["specifiers"]:
        spec_parts = []
        for spec in data["specifiers"]:
            spec_parts.append(f"{spec['operator']}{spec['version']}")
        spec_string = ",".join(spec_parts)
        req_string = f"{name}{spec_string}"
    # Fallback to old version format for backward compatibility
    elif "version" in data and data["version"]:
        req_string = f"{name}=={data['version']}"
    else:
        req_string = name

    # Add extras if present
    if "extras" in data and data["extras"]:
        extras_str = ",".join(data["extras"])
        req_string = f"{name}[{extras_str}]{req_string[len(name) :]}"

    # Add marker if present
    if "marker" in data and data["marker"]:
        req_string = f"{req_string}; {data['marker']}"

    return Requirement(req_string)


def get_installed_version(package_name: str) -> Optional[str]:
    """Get the installed version of a package."""
    try:
        return distribution(package_name).version
    except PackageNotFoundError:
        return None


def create_requirement(name: str, version: Optional[str] = None) -> Requirement:
    """Create a Requirement with optional version specification."""
    if version:
        return Requirement(f"{name}=={version}")
    else:
        return Requirement(name)


def uninstall_requirement(req: Requirement):
    """Uninstall a requirement package."""
    installed_version = get_installed_version(req.name)
    if not installed_version:
        return

    if os.getenv("ABSTRA_RUNNING_IN_WINDOWS_APP"):
        yield from __uninstall_from_standalone(req)
    else:
        yield from __uninstall_from_lib(req)


def __uninstall_from_standalone(req: Requirement):
    cmd = [
        "uninstall",
        "-y",
        requirement_to_text(req),
        "--target",
        os.environ["ABSTRA_BUNDLED_APP_PACKAGES_FOLDER"],
    ]

    if pip_main(cmd) != 0:
        yield f"Failed to uninstall {requirement_to_text(req)} from standalone\n"
    else:
        yield "Uninstallation finished successfully\n\n"


def __uninstall_from_lib(req: Requirement):
    yield from stream_output([sys.executable, "-m", "pip", "uninstall", "-y", req.name])


@dataclass
class RequirementRecommendation:
    requirement: Requirement
    reason_file: Path
    reason_line: int
    reason_code: str

    def to_dict(self):
        """Convert to comprehensive dictionary format."""
        return {
            **requirement_to_dict(self.requirement),
            "reason_file": str(self.reason_file),
            "reason_line": self.reason_line,
            "reason_code": self.reason_code,
        }

    def __hash__(self) -> int:
        return hash(
            f"{requirement_to_text(self.requirement)}/{self.reason_file}/{self.reason_line}"
        )


@dataclass
class Requirements:
    libraries: List[Requirement]

    def to_text(self):
        return "\n".join([requirement_to_text(lib) for lib in self.libraries])

    @staticmethod
    def from_text(text: str):
        libraries = []
        for line_num, line in enumerate(text.splitlines(), 1):
            # Remove inline comments
            if "#" in line:
                line = line.split("#")[0]

            line = line.strip()

            # Skip empty lines and comments
            if not line or line.startswith("#"):
                continue

            # Skip -r, -c, --find-links, etc. (pip options)
            if line.startswith(("-r", "-c", "--", "-f", "-i", "-e")):
                continue

            try:
                requirement = requirement_from_text(line)
                if requirement is not None:
                    libraries.append(requirement)
                else:
                    # Check if this is a standalone URL that needs to be converted
                    if line.startswith(("http://", "https://", "git+", "file:///")):
                        try:
                            # Try to extract package name from URL
                            package_name = Requirements._extract_package_name_from_url(
                                line
                            )
                            if package_name:
                                # Convert to proper format: package @ url
                                proper_format = f"{package_name} @ {line}"
                                requirement = requirement_from_text(proper_format)
                                if requirement is not None:
                                    libraries.append(requirement)
                                    continue
                        except Exception:
                            pass

                    # Log parsing error but continue
                    print(
                        f"Warning: Could not parse requirement on line {line_num}: '{line}'"
                    )
            except Exception as e:
                # Check if this is a standalone URL that needs to be converted
                if line.startswith(("http://", "https://", "git+", "file:///")):
                    try:
                        # Try to extract package name from URL
                        package_name = Requirements._extract_package_name_from_url(line)
                        if package_name:
                            # Convert to proper format: package @ url
                            proper_format = f"{package_name} @ {line}"
                            requirement = requirement_from_text(proper_format)
                            if requirement is not None:
                                libraries.append(requirement)
                                continue
                    except Exception:
                        pass

                # Log parsing error but continue
                print(
                    f"Warning: Could not parse requirement on line {line_num}: '{line}' - {e}"
                )
                continue

        return Requirements(libraries=libraries)

    @staticmethod
    def _extract_package_name_from_url(url: str) -> Optional[str]:
        """Extract a reasonable package name from a URL.

        This is a heuristic approach since URLs don't inherently contain package names.
        """
        import re
        from urllib.parse import urlparse

        # Remove common URL prefixes
        clean_url = url
        if clean_url.startswith("git+"):
            clean_url = clean_url[4:]

        parsed = urlparse(clean_url)
        path = parsed.path

        # Try to extract from common patterns
        patterns = [
            r"/([^/]+)\.git$",  # git repos: /package.git
            r"/([^/]+)\.zip$",  # zip files: /package.zip
            r"/([^/]+)\.tar\.gz$",  # tar.gz files: /package.tar.gz
            r"/([^/]+)[-_][\d\.]",  # versioned packages: /package-1.0.0
            r"/([^/]+)$",  # last path component
        ]

        for pattern in patterns:
            match = re.search(pattern, path)
            if match:
                name = match.group(1)
                # Clean up the name
                name = re.sub(r"[-_]", "-", name)  # normalize separators
                name = re.sub(r"[^a-zA-Z0-9\-\.]", "", name)  # remove invalid chars
                if name and not name.startswith("."):
                    return name

        # Fallback: use hostname
        if parsed.hostname:
            return f"package-from-{parsed.hostname.replace('.', '-')}"

        return None

    def to_dict(self):
        """Convert to comprehensive dictionary format."""
        return [requirement_to_dict(lib) for lib in self.libraries]

    @staticmethod
    def from_dict(data: list):
        return Requirements(libraries=[requirement_from_dict(lib) for lib in data])

    def add(self, name: str, version: Optional[str] = None):
        if self.has(name, version):
            return
        self.libraries.append(create_requirement(name, version))

    def update(self, name: str, version: str):
        self.libraries = [
            lib if lib.name != name else create_requirement(name, version)
            for lib in self.libraries
        ]

    def delete(self, name: str):
        self.libraries = [lib for lib in self.libraries if lib.name != name]

    def delete_duplicates(self, name: str, version: Optional[str]):
        # For packaging.requirements.Requirement, we need to extract version from specifier
        self.libraries = [
            lib
            for lib in self.libraries
            if not (
                lib.name == name and self._get_version_from_requirement(lib) == version
            )
        ]

    def _get_version_from_requirement(self, req: Requirement) -> Optional[str]:
        """Extract exact version from a Requirement's specifier.

        Returns the exact version if the requirement has an == specifier,
        otherwise returns None.
        """
        if req.specifier:
            for spec in req.specifier:
                if spec.operator == "==":
                    return spec.version
        return None

    def _get_requirement_signature(self, req: Requirement) -> str:
        """Get a unique signature for a requirement that includes all specifiers.

        This is used for more accurate duplicate detection.
        """
        return str(req)

    def has(self, lib_name: str, version: Optional[str] = None):
        """Check if a requirement is present.

        If version is None, checks for any requirement with the given name.
        If version is provided, checks for exact version match (== specifier).
        """
        for lib in self.libraries:
            if lib.name == lib_name:
                if version is None:
                    return True
                req_version = self._get_version_from_requirement(lib)
                if req_version == version:
                    return True
        return False

    def has_requirement_like(self, req: Requirement) -> bool:
        """Check if a requirement with the same signature already exists."""
        req_signature = self._get_requirement_signature(req)
        for lib in self.libraries:
            if self._get_requirement_signature(lib) == req_signature:
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
                return self._get_version_from_requirement(lib)
        return None

    def get_duplicates(self) -> Dict[str, List[Requirement]]:
        """Get requirements that have duplicate package names.

        Groups requirements by package name, returns only groups with more than one requirement.
        This allows for sophisticated duplicate detection that considers different version specifiers.
        """
        duplicates = {}
        for lib in self.libraries:
            if not isinstance(duplicates.get(lib.name), list):
                duplicates[lib.name] = [lib]
            else:
                duplicates[lib.name].append(lib)
        return {k: v for k, v in duplicates.items() if len(v) > 1}

    def __install_from_lib(self):
        cmd = [sys.executable, "-m", "pip", "install"]

        for lib in self.libraries:
            if lib.name == "abstra":
                continue

            cmd.append(requirement_to_text(lib))

        yield from stream_output(cmd)

    def __install_from_standalone(self):
        # pip is not thread safe, but we can use a lock to avoid conflicts
        print("Installing from standalone")
        with install_lock:
            for lib in self.libraries:
                if lib.name == "abstra":
                    continue

                cmd = [
                    "install",
                    requirement_to_text(lib),
                    "--target",
                    os.environ["ABSTRA_BUNDLED_APP_PACKAGES_FOLDER"],
                ]

                yield f"Installing {requirement_to_text(lib)} in abstra standalone...\n"

                res = pip_main(cmd)
                req_version = self._get_version_from_requirement(lib)
                if res != 0:
                    yield f"Failed to install {lib.name}=={req_version}\n"
                else:
                    yield "Installation finished successfully\n\n"

    def install(self):
        if os.getenv("ABSTRA_RUNNING_IN_BUNDLED_APP"):
            yield from self.__install_from_standalone()
        else:
            yield from self.__install_from_lib()


@dataclass
class RequirementsRepository:
    @classmethod
    def get_file_path(cls):
        return Settings.root_path / "requirements.txt"

    @classmethod
    def get_recommendation(cls) -> List[RequirementRecommendation]:
        imported_modules: Set[RequirementRecommendation] = set()

        project = LocalProjectRepository().load()
        visited_set = set()
        already_added = {pip_name(lib.name) for lib in cls.load().libraries}
        package_dist_cache = packages_distributions()

        for python_file in project.project_files:
            if not python_file.exists():
                continue

            try:
                parsed = ASTCache.get(python_file)
                if parsed is None:
                    continue

                file_lines = python_file.read_text(encoding="utf-8").splitlines()

                for node in ast.walk(parsed):
                    if isinstance(node, (ast.Import, ast.ImportFrom)):
                        pkg_names = []

                        if isinstance(node, ast.Import):
                            pkg_names.extend(
                                alias.name.split(".")[0] for alias in node.names
                            )
                        elif (
                            isinstance(node, ast.ImportFrom) and node.module is not None
                        ):
                            pkg_names.append(node.module.split(".")[0])

                        for pkg_name in pkg_names:
                            if pkg_name in visited_set:
                                continue

                            visited_set.add(pkg_name)
                            kind = check_package(pkg_name)

                            if kind != "installed":
                                continue

                            lib_names = package_dist_cache.get(pkg_name, [])
                            for lib_name in lib_names:
                                if pip_name(lib_name) in already_added:
                                    continue

                                try:
                                    version = distribution(lib_name).version
                                    if version is None:
                                        continue

                                    imported_modules.add(
                                        RequirementRecommendation(
                                            requirement=create_requirement(
                                                lib_name,
                                                version,
                                            ),
                                            reason_file=python_file,
                                            reason_line=node.lineno,
                                            reason_code=file_lines[node.lineno - 1],
                                        )
                                    )
                                except PackageNotFoundError:
                                    continue

            except (SyntaxError, UnicodeDecodeError):
                continue

        modules_in_requirements = set(
            [pip_name(lib.name) for lib in cls.load().libraries]
        )

        return [
            module
            for module in imported_modules
            if pip_name(module.requirement.name) not in modules_in_requirements
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

    @classmethod
    def ensure(cls, lib_name: str):
        requirements = cls.load()
        try:
            requirements.ensure(lib_name, distribution(lib_name).version)
        except PackageNotFoundError:
            # Package not found, skip
            pass
        cls.save(requirements)
