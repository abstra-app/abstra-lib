"""
Git types and data structures shared across implementations.
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple


@dataclass
class GitCommit:
    hash: str
    message: str
    author: str
    date: str


@dataclass
class AheadBehindInfo:
    ahead: int = 0
    behind: int = 0


@dataclass
class RemoteGitStatus:
    success: bool
    remote_commit: Optional[str] = None
    branch: str = "main"
    has_commits: bool = False
    available_branches: List[str] = field(default_factory=list)
    message: Optional[str] = None
    ahead_behind: Optional[AheadBehindInfo] = None
    has_remote_changes: Optional[bool] = None
    has_conflicts: Optional[bool] = None


@dataclass
class GitFileChange:
    path: str
    status: str  # added, deleted, modified, renamed, untracked
    status_code: str  # Git porcelain status code (e.g., "M ", "A ", "??")


@dataclass
class GitStatusResponse:
    available: bool
    git_installed: bool
    is_monorepo: bool
    branch: str
    branches: List[str]
    last_commit: Optional[GitCommit]
    has_changes: bool
    changed_files: List[str]
    changed_files_with_status: List[GitFileChange]
    remote_status: Optional[RemoteGitStatus] = None

    def to_dict(self) -> Dict[str, Any]:
        result = {
            "available": self.available,
            "gitInstalled": self.git_installed,
            "isMonorepo": self.is_monorepo,
            "branch": self.branch,
            "branches": self.branches,
            "lastCommit": {
                "hash": self.last_commit.hash,
                "message": self.last_commit.message,
                "author": self.last_commit.author,
                "date": self.last_commit.date,
            }
            if self.last_commit
            else None,
            "hasChanges": self.has_changes,
            "changedFiles": self.changed_files,
            "changedFilesWithStatus": [
                {
                    "path": file_change.path,
                    "status": file_change.status,
                    "statusCode": file_change.status_code,
                }
                for file_change in self.changed_files_with_status
            ],
        }

        if self.remote_status:
            result["remoteStatus"] = {
                "success": self.remote_status.success,
                "remoteCommit": self.remote_status.remote_commit,
                "hasRemoteChanges": self.remote_status.has_remote_changes or False,
                "hasConflicts": self.remote_status.has_conflicts or False,
                "message": self.remote_status.message,
                "availableBranches": self.remote_status.available_branches,
                "aheadBehind": {
                    "ahead": self.remote_status.ahead_behind.ahead,
                    "behind": self.remote_status.ahead_behind.behind,
                }
                if self.remote_status.ahead_behind
                else None,
            }
        else:
            result["remoteStatus"] = None

        return result


@dataclass
class GitStatus:
    available: bool
    git_installed: bool = True
    is_monorepo: bool = False
    branch: str = ""
    branches: List[str] = field(default_factory=list)
    last_commit: Optional[GitCommit] = None
    has_changes: bool = False
    changed_files: List[str] = field(default_factory=list)
    changed_files_with_status: List[GitFileChange] = field(default_factory=list)
    remote_status: Optional[RemoteGitStatus] = None


class GitRepositoryInterface(ABC):
    """Abstract interface for Git repository implementations"""

    def __init__(self, working_directory: Path):
        self.working_directory = working_directory

    @abstractmethod
    def is_git_available(self) -> bool:
        """Check if git functionality is available"""
        pass

    @abstractmethod
    def is_git_repository(self) -> bool:
        """Check if current directory is a git repository"""
        pass

    @abstractmethod
    def find_git_root(self, start_path: Optional[Path] = None) -> Optional[Path]:
        """Find the root directory of the git repository"""
        pass

    @abstractmethod
    def configure_git_user(self, fallback_email: str, fallback_name: str):
        """Ensure git user is configured for commits (required in CI environments)"""
        pass

    @abstractmethod
    def get_current_branch(self) -> Optional[str]:
        """Get the current branch name"""
        pass

    @abstractmethod
    def get_all_branches(self) -> List[str]:
        """Get all local branches"""
        pass

    @abstractmethod
    def get_last_commit(self) -> Optional[GitCommit]:
        """Get information about the last commit"""
        pass

    @abstractmethod
    def get_commit_history(
        self, limit: int = 10, offset: int = 0, branch: Optional[str] = None
    ) -> List[GitCommit]:
        """Get commit history with pagination"""
        pass

    @abstractmethod
    def get_changed_files(self) -> List[str]:
        """Get list of changed files"""
        pass

    @abstractmethod
    def get_changed_files_with_status(self) -> List[GitFileChange]:
        """Get list of changed files with their git status"""
        pass

    @abstractmethod
    def has_uncommitted_changes(self) -> bool:
        """Check if there are uncommitted changes"""
        pass

    @abstractmethod
    def init_repository(self) -> bool:
        """Initialize a new git repository"""
        pass

    @abstractmethod
    def get_repository_status(self) -> GitStatus:
        """Get comprehensive repository status"""
        pass

    @abstractmethod
    def checkout_branch(self, branch_name: str) -> Tuple[bool, Optional[str]]:
        """Switch to a different branch"""
        pass

    @abstractmethod
    def checkout_commit(self, commit_hash: str) -> Tuple[bool, Optional[str]]:
        """Switch to a specific commit (detached HEAD state)"""
        pass

    @abstractmethod
    def pull_changes(
        self,
        strategy: str = "merge",
        allow_unrelated: bool = True,
        conflict_resolution: Optional[str] = "theirs",
    ) -> Tuple[bool, Optional[str]]:
        """Pull changes from remote repository"""
        pass

    @abstractmethod
    def commit_changes(
        self, message: str, author: Optional[str] = None
    ) -> Tuple[bool, Optional[str]]:
        """Commit changes with a message"""
        pass

    @abstractmethod
    def stash_changes(self, message: str = "WIP") -> Tuple[bool, Optional[str]]:
        """Stash uncommitted changes"""
        pass

    @abstractmethod
    def get_remotes(self) -> List[str]:
        """Get list of remote names"""
        pass

    @abstractmethod
    def has_remote(self, remote_name: str) -> bool:
        """Check if a remote exists"""
        pass

    @abstractmethod
    def add_remote(self, remote_name: str, remote_url: str) -> bool:
        """Add a remote to the repository"""
        pass

    @abstractmethod
    def set_remote_url(self, remote_name: str, remote_url: str) -> bool:
        """Set/update the URL for a remote"""
        pass

    @abstractmethod
    def set_git_config(self, key: str, value: str, local: bool = True) -> bool:
        """Set a git configuration value"""
        pass

    @abstractmethod
    def get_git_config(self, key: str, local: bool = True) -> Optional[str]:
        """Get a git configuration value"""
        pass

    @abstractmethod
    def push_and_deploy(self, branch: str = "main") -> Tuple[bool, Optional[str]]:
        """Deploy to Abstra remote (push to abstra remote)"""
        pass

    @abstractmethod
    def revert_commit(self, commit_hash: str) -> Tuple[bool, Optional[str]]:
        """Restore content from a previous commit by creating a new commit with that content"""
        pass

    @abstractmethod
    def check_merge_conflicts(self, remote_commit: str) -> bool:
        """Check if merging with remote commit would cause conflicts"""
        pass

    @abstractmethod
    def get_ahead_behind_count(
        self, local_commit: str, remote_commit: str
    ) -> Tuple[int, int]:
        """Calculate ahead/behind count between local and remote commits"""
        pass

    @abstractmethod
    def check_ignore(self, path: Path) -> bool:
        """Check if a path should be ignored according to .gitignore rules"""
        pass

    @abstractmethod
    def check_ignore_batch(self, paths: List[Path]) -> Dict[Path, bool]:
        """Check multiple paths at once for better performance"""
        pass

    @abstractmethod
    def untrack_path(self, path: Path):
        """Untrack a path from git (git rm --cached)"""
        pass
