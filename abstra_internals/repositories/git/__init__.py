import shutil

from abstra_internals.environment import FORCE_GIT_CLIENT

from .dulwich import DulwichGitRepository
from .native import NativeGitRepository
from .types import (
    AheadBehindInfo,
    GitCommit,
    GitRepositoryInterface,
    GitStatus,
    GitStatusResponse,
    RemoteGitStatus,
)


def create_git_repository(working_directory) -> GitRepositoryInterface:
    if FORCE_GIT_CLIENT == "native":
        return NativeGitRepository(working_directory)
    elif FORCE_GIT_CLIENT == "dulwich":
        return DulwichGitRepository(working_directory)
    elif shutil.which("git") is not None:
        return NativeGitRepository(working_directory)
    else:
        return DulwichGitRepository(working_directory)


__all__ = [
    "GitCommit",
    "GitStatus",
    "RemoteGitStatus",
    "GitStatusResponse",
    "GitRepositoryInterface",
    "NativeGitRepository",
    "DulwichGitRepository",
    "create_git_repository",
    "AheadBehindInfo",
]
