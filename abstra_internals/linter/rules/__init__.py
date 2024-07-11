from typing import List

from abstra_internals.linter.linter import LinterRule
from abstra_internals.linter.rules.conflicting_path import ConflictingPath
from abstra_internals.linter.rules.duplicate_package_in_requirements import (
    DuplicatePackagesInRequirements,
)
from abstra_internals.linter.rules.env_file_changed import EnvFileChanged
from abstra_internals.linter.rules.env_in_bundle import EnvInBundle
from abstra_internals.linter.rules.missing_abstra_in_requirements import (
    MissingAbstraInRequirements,
)
from abstra_internals.linter.rules.missing_entrypoint import MissingEntrypoint
from abstra_internals.linter.rules.missing_env import MissingEnv
from abstra_internals.linter.rules.missing_packages_in_requirements import (
    MissingPackagesInRequirements,
)
from abstra_internals.linter.rules.new_version_of_abstra_available import (
    NewVersionOfAbstraAvailable,
)
from abstra_internals.linter.rules.syntax_errors import SyntaxErrors
from abstra_internals.linter.rules.unset_get_data import UnsetGetData
from abstra_internals.linter.rules.venv_in_bundle import VenvInBundle

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
    UnsetGetData(),
    EnvFileChanged(),
    ConflictingPath(),
]
