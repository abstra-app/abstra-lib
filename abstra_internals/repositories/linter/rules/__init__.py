import os
from typing import List

from abstra_internals.repositories.linter.models import LinterRule

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

core_rules: List[LinterRule] = [
    EnvInBundle(),
    VenvInBundle(),
    MissingPackagesInRequirements(),
    SyntaxErrors(),
    MissingEntrypoint(),
    MissingAbstraInRequirements(),
    DuplicatePackagesInRequirements(),
    MissingEnv(),
    ConflictingPath(),
    Psycopg2MustBeBinary(),
    ConflictingName(),
    DeprecatedFunctionUsage(),
]

conditional_rules: List[LinterRule] = []

if not os.getenv("ABSTRA_RUNNING_IN_BUNDLED_APP"):
    conditional_rules = [NewVersionOfAbstraAvailable()]

rules: List[LinterRule] = core_rules + conditional_rules
