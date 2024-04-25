from typing import List

from ..linter import LinterRule
from .duplicate_package_in_requirements import DuplicatePackagesInRequirements
from .env_file_changed import EnvFileChanged
from .env_in_bundle import EnvInBundle
from .missing_abstra_in_requirements import MissingAbstraInRequirements
from .missing_entrypoint import MissingEntrypoint
from .missing_env import MissingEnv
from .missing_packages_in_requirements import MissingPackagesInRequirements
from .new_version_of_abstra_available import NewVersionOfAbstraAvailable
from .syntax_errors import SyntaxErrors
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
    EnvFileChanged(),
]
