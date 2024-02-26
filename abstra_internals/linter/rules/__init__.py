from ..linter import LinterRule
from typing import List
from .env_in_bundle import EnvInBundle
from .missing_packages_in_requirements import MissingPackagesInRequirements
from .syntax_errors import SyntaxErrors
from .missing_entrypoint import MissingEntrypoint
from .missing_abstra_in_requirements import MissingAbstraInRequirements
from .duplicate_package_in_requirements import DuplicatePackagesInRequirements
from .missing_env import MissingEnv
from .new_version_of_abstra_available import NewVersionOfAbstraAvailable
from .unset_get_data import UnsetGetData
from .unset_match_thread import UnsetMatchThread

rules: List[LinterRule] = [
    EnvInBundle(),
    MissingPackagesInRequirements(),
    SyntaxErrors(),
    MissingEntrypoint(),
    MissingAbstraInRequirements(),
    DuplicatePackagesInRequirements(),
    MissingEnv(),
    NewVersionOfAbstraAvailable(),
    UnsetGetData(),
    UnsetMatchThread(),
]
