from ..linter import LinterRule
from typing import List
from .no_env_in_bundle import NoEnvInBundle
from .no_missing_packages_in_requirements import NoMissingPackagesInRequirements
from .no_syntax_errors import NoSyntaxErrors

rules: List[LinterRule] = [
    NoEnvInBundle(),
    NoMissingPackagesInRequirements(),
    NoSyntaxErrors(),
]
