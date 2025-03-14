from typing import List

from abstra_internals.linter.linter import LinterRule

from .conflicting_name import ConflictingName
from .conflicting_path import ConflictingPath
from .deprecated_functions import DeprecatedFunctionUsage
from .duplicate_package_in_requirements import DuplicatePackagesInRequirements
from .env_in_bundle import EnvInBundle
from .missing_abstra_in_requirements import MissingAbstraInRequirements
from .missing_entrypoint import MissingEntrypoint
from .missing_env import MissingEnv
from .missing_packages_in_requirements import MissingPackagesInRequirements
from .new_version_of_abstra_available import NewVersionOfAbstraAvailable
from .psycopg2 import Psycopg2MustBeBinary
from .syntax_errors import SyntaxErrors
from .venv_in_bundle import VenvInBundle

rules: List[LinterRule] = [
    EnvInBundle(),
    VenvInBundle(),
    MissingPackagesInRequirements(),
    SyntaxErrors(),
    MissingEntrypoint(),
    MissingAbstraInRequirements(),
    DuplicatePackagesInRequirements(),
    MissingEnv(),
    NewVersionOfAbstraAvailable(),
    ConflictingPath(),
    Psycopg2MustBeBinary(),
    ConflictingName(),
    DeprecatedFunctionUsage(),
]
