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
    return NativeGitRepository(working_directory)


__all__ = [
    "GitCommit",
    "GitStatus",
    "RemoteGitStatus",
    "GitStatusResponse",
    "GitRepositoryInterface",
    "NativeGitRepository",
    "create_git_repository",
    "AheadBehindInfo",
]
