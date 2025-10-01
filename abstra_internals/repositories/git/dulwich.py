import datetime
import os
from pathlib import Path
from typing import TYPE_CHECKING, List, Optional, Tuple
from urllib.parse import urlparse

import urllib3

from abstra_internals.environment import REMOTE_NAME
from abstra_internals.logger import AbstraLogger

from .types import GitCommit, GitFileChange, GitRepositoryInterface, GitStatus

try:
    from dulwich import porcelain
    from dulwich.client import HttpGitClient
    from dulwich.errors import NotGitRepository
    from dulwich.index import build_index_from_tree
    from dulwich.objects import Commit
    from dulwich.porcelain import reset
    from dulwich.repo import Repo
    from dulwich.stash import Stash

    DULWICH_AVAILABLE = True
except ImportError:
    DULWICH_AVAILABLE = False
    if TYPE_CHECKING:
        from dulwich import porcelain
        from dulwich.client import HttpGitClient
        from dulwich.errors import NotGitRepository
        from dulwich.index import build_index_from_tree
        from dulwich.objects import Commit
        from dulwich.porcelain import reset
        from dulwich.repo import Repo
        from dulwich.stash import Stash


class DulwichGitRepository(GitRepositoryInterface):
    """Repository for Git operations using Dulwich library"""

    def __init__(self, working_directory: Path):
        super().__init__(working_directory)

        self._repo: Optional["Repo"] = None  # type: ignore
        self._try_load_repo()

    def _try_load_repo(self):
        """Try to load existing repository"""
        try:
            if self.is_git_repository():
                self._repo = Repo(str(self.working_directory))  # type: ignore
        except Exception:
            self._repo = None

    def configure_git_user(self, fallback_email: str, fallback_name: str):
        """Ensure git user is configured for commits (required in CI environments)"""
        if not self._repo:
            return
        try:
            config = self._repo.get_config()
            try:
                config.get((b"user",), b"name")
            except KeyError:
                config.set((b"user",), b"name", fallback_name.encode())
            try:
                config.get((b"user",), b"email")
            except KeyError:
                config.set((b"user",), b"email", fallback_email.encode())
            config.write_to_path()
        except Exception:
            pass

    def is_git_available(self) -> bool:
        """Check if dulwich is available"""
        return DULWICH_AVAILABLE

    def find_git_root(self, start_path: Optional[Path] = None) -> Optional[Path]:
        """Find the root directory of the git repository"""
        if start_path is None:
            start_path = self.working_directory

        if start_path is None:
            start_path = Path.cwd()

        current = start_path.resolve()
        while current != current.parent:
            if (current / ".git").exists():
                return current
            current = current.parent
        return None

    def is_git_repository(self) -> bool:
        """Check if current directory is a git repository"""
        if not self.is_git_available():
            return False

        try:
            pass  # Ensure try block has at least one except clause
            Repo(str(self.working_directory))  # type: ignore
            return True
        except (NotGitRepository, Exception):  # type: ignore
            return False

    def init_repository(self) -> bool:
        """Initialize a new git repository in the working directory"""
        if not self.is_git_available():
            return False

        try:
            self._repo = porcelain.init(str(self.working_directory))

            # Set HEAD to point to main branch instead of master BEFORE any commits
            # This ensures the first commit goes to main branch
            self._repo.refs.set_symbolic_ref(b"HEAD", b"refs/heads/main")

            add_success = True
            try:
                porcelain.add(
                    str(self.working_directory), [str(self.working_directory)]
                )
            except Exception:
                add_success = False

            commit_success = False

            if add_success:
                try:
                    status = porcelain.status(str(self.working_directory))
                    has_staged_files = (
                        len(status.staged["add"]) > 0
                        or len(status.staged["modify"]) > 0
                        or len(status.staged["delete"]) > 0
                    )

                    if has_staged_files:
                        # Commit staged files
                        porcelain.commit(str(self.working_directory), b"First commit")
                        commit_success = True
                except Exception:
                    pass

            # If we haven't created a commit yet, create an empty one
            if not commit_success:
                try:
                    # Create empty commit using porcelain - this should work even with no files
                    # We need to ensure the index exists first
                    index_path = os.path.join(
                        str(self.working_directory), ".git", "index"
                    )
                    if not os.path.exists(index_path):
                        # Touch the index file to create it
                        Path(index_path).touch()

                    porcelain.commit(str(self.working_directory), b"First commit")
                    commit_success = True
                except Exception:
                    # Last resort: create commit manually
                    try:
                        import time

                        from dulwich.objects import Commit as DulwichCommit
                        from dulwich.objects import Tree

                        # Create empty tree
                        empty_tree = Tree()
                        tree_id = self._repo.object_store.add_object(empty_tree)

                        # Create commit object
                        commit = DulwichCommit()
                        commit.tree = tree_id
                        commit.author = commit.committer = (
                            b"Abstra <no-reply@abstra.app>"
                        )
                        commit.commit_time = commit.author_time = int(time.time())
                        commit.commit_timezone = commit.author_timezone = 0
                        commit.message = b"First commit"

                        commit_id = self._repo.object_store.add_object(commit)
                        # commit_id may be None per dulwich typing; only set if present
                        if commit_id is not None:
                            self._repo.refs[b"refs/heads/main"] = commit_id
                        commit_success = True
                    except Exception:
                        pass

            if commit_success:
                # After commit, remove the master branch reference if it was created
                try:
                    if b"refs/heads/master" in self._repo.refs:
                        del self._repo.refs[b"refs/heads/master"]
                except Exception:
                    pass

            return True
        except Exception:
            return False

    def get_current_branch(self) -> Optional[str]:
        """Get the current branch name"""
        if not self._repo:
            return None

        try:
            # Get HEAD reference from dulwich refs (more reliable than file system)
            head_ref = self._repo.refs[b"HEAD"]  # type: ignore
            if head_ref.startswith(b"ref: "):
                ref_path = head_ref[5:].decode("utf-8")
                if ref_path.startswith("refs/heads/"):
                    return ref_path[11:]  # Remove "refs/heads/"

            # For repositories without commits, fallback to reading HEAD file directly
            try:
                head_file = os.path.join(self._repo.path, ".git", "HEAD")
                with open(head_file, "r", encoding="utf-8") as f:
                    head_content = f.read().strip()
                    if head_content.startswith("ref: refs/heads/"):
                        return head_content[16:]  # Remove "ref: refs/heads/"
            except Exception:
                pass

            return None
        except Exception:
            return None

    def get_all_branches(self) -> List[str]:
        """Get all local branches"""
        if not self._repo:
            return []

        if not self._repo:
            return []
        try:
            branches = []
            for ref_name, _ in self._repo.refs.as_dict().items():  # type: ignore
                if ref_name.startswith(b"refs/heads/"):
                    branch_name = ref_name[11:].decode("utf-8")  # Remove "refs/heads/"
                    branches.append(branch_name)
            return branches
        except Exception:
            return []

    def get_last_commit(self) -> Optional[GitCommit]:
        """Get information about the last commit"""
        commits = self.get_commit_history(limit=1)
        return commits[0] if commits else None

    def get_commit_history(
        self, limit: int = 10, offset: int = 0, branch: Optional[str] = None
    ) -> List[GitCommit]:
        """Get commit history with pagination"""
        if not self._repo:
            return []

        try:
            commits = []

            if branch:
                # Get commits from specific branch only
                try:
                    branch_ref = f"refs/heads/{branch}".encode()
                    if branch_ref in self._repo.refs:
                        ref_sha = self._repo.refs[branch_ref]
                        all_refs = [ref_sha]
                    else:
                        # Try remote branch
                        remote_ref = f"refs/remotes/origin/{branch}".encode()
                        if remote_ref in self._repo.refs:
                            ref_sha = self._repo.refs[remote_ref]
                            all_refs = [ref_sha]
                        else:
                            return []
                except Exception:
                    return []
            else:
                # Get all branch refs to include commits from all branches
                all_refs = []
                for ref_name, ref_sha in self._repo.refs.as_dict().items():
                    if ref_name.startswith(b"refs/heads/") or ref_name.startswith(
                        b"refs/remotes/"
                    ):
                        all_refs.append(ref_sha)

                # If no refs found, fallback to HEAD
                if not all_refs:
                    all_refs = [self._repo.head()]

            walker = self._repo.get_walker(include=all_refs, max_entries=limit + offset)  # type: ignore

            # Skip offset entries
            for i, entry in enumerate(walker):
                if i < offset:
                    continue
                if len(commits) >= limit:
                    break

                commit = entry.commit
                # Convert timestamp to date string to match native format
                date_obj = datetime.datetime.fromtimestamp(commit.commit_time)
                # Use ISO format with time, matching native implementation
                date_str = date_obj.strftime("%Y-%m-%d %H:%M:%S")

                commits.append(
                    GitCommit(
                        hash=commit.id.decode("ascii"),
                        message=commit.message.decode("utf-8", errors="ignore").strip(),
                        author=commit.author.decode("utf-8", errors="ignore")
                        .split("<")[0]
                        .strip(),
                        date=date_str,
                    )
                )

            return commits
        except Exception:
            return []

    def get_changed_files(self) -> List[str]:
        """Get list of changed files"""
        if not self._repo:
            return []

        try:
            # Get status using dulwich - porcelain.status expects repo path
            status = porcelain.status(str(self.working_directory))  # type: ignore

            changed_files = []

            # Add staged files
            for file_path in status.staged["add"]:  # type: ignore
                if isinstance(file_path, bytes):
                    changed_files.append(file_path.decode("utf-8"))
                else:
                    changed_files.append(file_path)
            for file_path in status.staged["delete"]:  # type: ignore
                if isinstance(file_path, bytes):
                    changed_files.append(file_path.decode("utf-8"))
                else:
                    changed_files.append(file_path)
            for file_path in status.staged["modify"]:  # type: ignore
                if isinstance(file_path, bytes):
                    changed_files.append(file_path.decode("utf-8"))
                else:
                    changed_files.append(file_path)

            # Add unstaged files
            for file_path in status.unstaged:  # type: ignore
                if isinstance(file_path, bytes):
                    changed_files.append(file_path.decode("utf-8"))
                else:
                    changed_files.append(file_path)

            # Add untracked files
            for file_path in status.untracked:  # type: ignore
                if isinstance(file_path, bytes):
                    changed_files.append(file_path.decode("utf-8"))
                else:
                    changed_files.append(file_path)

            return sorted(list(set(changed_files)))
        except Exception:
            return []

    def get_changed_files_with_status(self) -> List[GitFileChange]:
        """Get list of changed files with their git status"""
        if not self._repo:
            return []

        try:
            # Get status using dulwich - porcelain.status expects repo path
            status = porcelain.status(str(self.working_directory))  # type: ignore

            files = []

            # Add staged files
            for file_path in status.staged["add"]:  # type: ignore
                filename = (
                    file_path.decode("utf-8")
                    if isinstance(file_path, bytes)
                    else str(file_path)
                )
                files.append(
                    GitFileChange(path=filename, status="added", status_code="A ")
                )

            for file_path in status.staged["delete"]:  # type: ignore
                filename = (
                    file_path.decode("utf-8")
                    if isinstance(file_path, bytes)
                    else str(file_path)
                )
                files.append(
                    GitFileChange(path=filename, status="deleted", status_code="D ")
                )

            for file_path in status.staged["modify"]:  # type: ignore
                filename = (
                    file_path.decode("utf-8")
                    if isinstance(file_path, bytes)
                    else str(file_path)
                )
                files.append(
                    GitFileChange(path=filename, status="modified", status_code="M ")
                )

            # Add unstaged files
            for file_path in status.unstaged:  # type: ignore
                filename = (
                    file_path.decode("utf-8")
                    if isinstance(file_path, bytes)
                    else str(file_path)
                )
                files.append(
                    GitFileChange(path=filename, status="modified", status_code=" M")
                )

            # Add untracked files
            for file_path in status.untracked:  # type: ignore
                filename = (
                    file_path.decode("utf-8")
                    if isinstance(file_path, bytes)
                    else str(file_path)
                )
                files.append(
                    GitFileChange(path=filename, status="untracked", status_code="??")
                )

            return files
        except Exception:
            return []

    def has_uncommitted_changes(self) -> bool:
        """Check if there are uncommitted changes"""
        return len(self.get_changed_files()) > 0

    def get_repository_status(self) -> GitStatus:
        """Get comprehensive repository status"""
        if not self.is_git_available():
            return GitStatus(available=False)

        git_root = self.find_git_root()
        if (
            git_root is not None
            and git_root.resolve() != self.working_directory.resolve()  # type: ignore
        ):
            return GitStatus(available=False)

        original_working_dir = None
        if self.is_git_repository():
            git_root = self.working_directory
        elif self.find_git_root():
            git_root = self.find_git_root()
            original_working_dir = self.working_directory
            self.working_directory = git_root
            self._try_load_repo()
        elif self.init_repository():
            git_root = self.working_directory
        else:
            return GitStatus(available=False)

        try:
            branch = self.get_current_branch()
            if not branch:
                # Check if we're in detached HEAD state or new repo
                try:
                    head_ref = self._repo.refs[b"HEAD"]  # type: ignore
                    if isinstance(head_ref, bytes) and len(head_ref) == 40:  # SHA hash
                        branch = f"detached-{head_ref[:8].decode('ascii')}"
                    else:
                        # For new repositories without commits, default to "main"
                        branch = "main"
                except Exception:
                    # For new repositories without commits, default to "main"
                    branch = "main"

            branches = self.get_all_branches()
            last_commit = self.get_last_commit()
            changed_files = self.get_changed_files()
            changed_files_with_status = self.get_changed_files_with_status()
            has_changes = len(changed_files) > 0

            return GitStatus(
                available=True,
                branch=branch,
                branches=branches,
                last_commit=last_commit,
                has_changes=has_changes,
                changed_files=changed_files,
                changed_files_with_status=changed_files_with_status,
            )
        finally:
            if original_working_dir is not None:
                self.working_directory = original_working_dir

    def checkout_branch(self, branch_name: str) -> bool:
        """Switch to a different branch"""
        if not self._repo:
            return False

        try:
            # First try to checkout existing local branch
            local_branch_ref = f"refs/heads/{branch_name}".encode()
            if local_branch_ref in self._repo.refs:
                porcelain.checkout_branch(
                    str(self.working_directory), branch_name.encode("utf-8")
                )  # type: ignore
                return True

            # If local branch doesn't exist, try to create from remote
            remote_branch_ref = f"refs/remotes/origin/{branch_name}".encode()
            if remote_branch_ref in self._repo.refs:
                # Create local branch tracking remote
                remote_commit = self._repo.refs[remote_branch_ref]
                self._repo.refs[local_branch_ref] = remote_commit
                porcelain.checkout_branch(
                    str(self.working_directory), branch_name.encode("utf-8")
                )  # type: ignore
                return True

            return False
        except Exception:
            return False

    def checkout_commit(self, commit_hash: str) -> bool:
        """Switch to a specific commit (detached HEAD state)"""
        if not self._repo:
            return False

        try:
            # Set HEAD to point directly to the commit (detached HEAD)
            self._repo.refs[b"HEAD"] = commit_hash.encode("utf-8")  # type: ignore
            # Reset working directory to match the commit using dulwich's reset_hard equivalent
            porcelain.reset(
                str(self.working_directory), "hard", commit_hash.encode("utf-8")
            )  # type: ignore
            return True
        except Exception:
            return False

    def pull_changes(
        self,
        strategy: str = "merge",
        allow_unrelated: bool = True,
        conflict_resolution: Optional[str] = "theirs",
    ) -> bool:
        """Pull changes from abstra remote repository"""
        if not self._repo:
            return False

        if not self.has_remote(REMOTE_NAME):
            return False

        try:
            try:
                if not self._needs_auth():
                    porcelain.pull(
                        self._repo,
                        REMOTE_NAME,
                        # Add strategy flags similar to native
                    )
                    return True
            except Exception:
                pass  # Fall through to custom implementation

            # Custom fetch with auth
            remote_url = self._get_remote_url(REMOTE_NAME)
            if not remote_url:
                return False

            client = self._create_authenticated_client(remote_url)
            if not client:
                return False

            try:
                # Perform fetch
                parsed_url = urlparse(remote_url)
                repo_path = parsed_url.path.lstrip("/") if parsed_url.path else ""

                result = client.fetch(
                    repo_path,
                    self._repo,
                    determine_wants=lambda refs, depth=None: list(refs.values()),
                )

                # Update remote tracking branches properly
                self._update_remote_tracking_refs(result, REMOTE_NAME)

                # Get the remote branch we want to merge
                remote_branch_ref = f"refs/remotes/{REMOTE_NAME}/main".encode()
                if remote_branch_ref not in self._repo.refs:
                    AbstraLogger.warning("No remote main branch found after fetch")
                    return False

                remote_commit_sha = self._repo.refs[remote_branch_ref]
                current_head = self._repo.head()

                # Check if we're already up to date
                if current_head == remote_commit_sha:
                    AbstraLogger.debug("Already up to date")
                    return True

                # Perform the merge/pull based on conflict resolution
                if conflict_resolution == "theirs":
                    # Simply move HEAD to remote commit (equivalent to git reset --hard origin/main)
                    self._repo.refs[b"HEAD"] = remote_commit_sha
                    self._reset_working_tree_to_head()

                    # Also update the local main branch to track remote
                    self._repo.refs[b"refs/heads/main"] = remote_commit_sha

                    AbstraLogger.info(
                        f"Successfully pulled changes from {REMOTE_NAME} (using theirs)"
                    )
                    return True

                elif conflict_resolution == "ours":
                    # Keep local changes, just update remote tracking
                    AbstraLogger.info("Kept local changes (using ours)")
                    return True

                else:
                    # Default behavior - try fast-forward, otherwise use "theirs"
                    if self._is_ancestor(current_head, remote_commit_sha):
                        # Fast-forward merge
                        self._repo.refs[b"HEAD"] = remote_commit_sha
                        self._repo.refs[b"refs/heads/main"] = remote_commit_sha
                        self._reset_working_tree_to_head()
                        AbstraLogger.info(
                            f"Successfully pulled changes from {REMOTE_NAME} (fast-forward)"
                        )
                        return True
                    else:
                        # Non-fast-forward, default to "theirs" strategy
                        self._repo.refs[b"HEAD"] = remote_commit_sha
                        self._repo.refs[b"refs/heads/main"] = remote_commit_sha
                        self._reset_working_tree_to_head()
                        AbstraLogger.info(
                            f"Successfully pulled changes from {REMOTE_NAME}"
                        )
                        return True

            except Exception as e:
                AbstraLogger.error(f"Error during fetch/merge: {e}")
                return False

        except Exception as e:
            AbstraLogger.error(f"Error during git pull: {e}")
            return False

    def _needs_auth(self) -> bool:
        """Check if authentication is needed"""
        try:
            remote_url = self._get_remote_url(REMOTE_NAME)
            if not remote_url:
                return False
            config_key = f"http.{remote_url}.extraHeader"
            auth_header = self.get_git_config(config_key)
            return bool(auth_header)
        except Exception:
            return False

    def _get_remote_url(self, remote_name: str) -> Optional[str]:
        """Get remote URL"""
        try:
            if not self._repo or not hasattr(self._repo, "get_config"):
                return None
            config = self._repo.get_config()
            remote_url = config.get((b"remote", remote_name.encode("utf-8")), b"url")
            return remote_url.decode("utf-8") if remote_url else None
        except Exception:
            return None

    def _create_authenticated_client(self, remote_url: str):
        """Create HTTP client with authentication"""
        try:
            auth_header = None
            config_key = f"http.{remote_url}.extraHeader"
            auth_header = self.get_git_config(config_key)

            if not auth_header:
                return None

            parsed_url = urlparse(remote_url)
            base_url = f"{parsed_url.scheme}://{parsed_url.netloc}"

            # Parse auth header
            if ":" not in auth_header:
                return None

            header_name, header_value = auth_header.split(":", 1)
            custom_headers = {
                header_name.strip(): header_value.strip(),
                "User-Agent": "dulwich/0.24.1",
            }

            # Create client with custom headers
            pool_manager = urllib3.PoolManager(headers=custom_headers)
            client = HttpGitClient(base_url)
            client.pool_manager = pool_manager

            return client
        except Exception:
            return None

    def _update_remote_tracking_refs(self, fetch_result, remote_name: str):
        """Update remote tracking references after fetch"""
        try:
            if not self._repo or not hasattr(self._repo, "refs"):
                return
            for ref_name, ref_sha in fetch_result.refs.items():
                if ref_name.startswith(b"refs/heads/"):
                    branch_name = ref_name[11:]
                    remote_ref = f"refs/remotes/{remote_name}/".encode() + branch_name
                    self._repo.refs[remote_ref] = ref_sha

            for symref_name, symref_target in fetch_result.symrefs.items():
                if symref_name == b"HEAD" and symref_target.startswith(b"refs/heads/"):
                    branch_name = symref_target[11:]
                    remote_head_ref = f"refs/remotes/{remote_name}/HEAD".encode()
                    remote_branch_ref = (
                        f"refs/remotes/{remote_name}/".encode() + branch_name
                    )
                    if remote_branch_ref in self._repo.refs:
                        self._repo.refs.set_symbolic_ref(
                            remote_head_ref, remote_branch_ref
                        )
        except Exception as e:
            AbstraLogger.debug(f"Error updating remote tracking refs: {e}")

    # Remove duplicate _reset_working_tree_to_head method

    def _is_ancestor(self, ancestor_sha: bytes, descendant_sha: bytes) -> bool:
        """Check if ancestor_sha is an ancestor of descendant_sha"""
        if not self._repo:
            return False

        try:
            # Simple check: if we can walk from descendant back to ancestor
            walker = self._repo.get_walker(include=[descendant_sha])
            for entry in walker:
                if entry.commit.id == ancestor_sha:
                    return True
            return False
        except Exception:
            return False

    def _reset_working_tree_to_head(self) -> bool:
        """Reset working tree to match HEAD"""
        if not self._repo:
            return False
        try:
            # Use dulwich's porcelain reset function for a proper hard reset
            reset(str(self.working_directory), "hard", "HEAD")
            AbstraLogger.debug("Successfully reset working tree to HEAD")
            return True
        except Exception as e:
            AbstraLogger.debug(f"Failed to reset working tree: {e}")
            # Try alternative approach
            try:
                # Get current HEAD commit
                head_sha = self._repo.head() if self._repo else None
                if not head_sha:
                    return False
                commit_obj = self._repo[head_sha] if self._repo else None
                if not commit_obj or not isinstance(commit_obj, Commit):
                    AbstraLogger.debug("HEAD does not point to a valid commit")
                    return False
                # Get the tree object
                tree = (
                    self._repo[commit_obj.tree]
                    if self._repo and hasattr(commit_obj, "tree")
                    else None
                )
                if not tree:
                    return False
                # Update index to match tree
                index_path = (
                    os.path.join(self._repo.path, "index") if self._repo else "index"
                )
                if (
                    self._repo
                    and hasattr(self._repo, "object_store")
                    and self._repo.object_store is not None
                ):
                    build_index_from_tree(
                        self._repo.path, index_path, self._repo.object_store, tree.id
                    )
                else:
                    AbstraLogger.debug(
                        "object_store is None, cannot build index from tree"
                    )
                    return False
                AbstraLogger.debug("Successfully updated index")
                return True
            except Exception as e2:
                AbstraLogger.debug(f"Alternative reset also failed: {e2}")
                return False

    def commit_changes(self, message: str, add_all: bool = True) -> bool:
        """Commit changes with a message"""
        if not self._repo:
            return False

        try:
            if add_all:
                # Add all files - porcelain.add expects repo path, not Repo object
                porcelain.add(
                    str(self.working_directory), [str(self.working_directory)]
                )  # type: ignore

            # Commit changes - porcelain.commit expects repo path, not Repo object
            porcelain.commit(str(self.working_directory), message.encode("utf-8"))  # type: ignore
            return True
        except Exception:
            return False

    def stash_changes(self, message: str = "WIP") -> bool:
        """Stash uncommitted changes using Dulwich Stash"""
        if not self._repo:
            return False

        try:
            # Use Dulwich Stash class
            stash = Stash.from_repo(self._repo)  # type: ignore
            stash.push(message=message.encode("utf-8"))  # type: ignore
            return True
        except Exception:
            return False

    def get_remotes(self) -> List[str]:
        """Get list of remote names"""
        if not self._repo:
            return []

        if not self._repo:
            return []
        try:
            config = self._repo.get_config()  # type: ignore
            remotes = []
            for section_name in config.sections():
                if len(section_name) >= 2 and section_name[0] == b"remote":
                    remote_name = section_name[1].decode("utf-8")
                    remotes.append(remote_name)
            return remotes
        except Exception as e:
            AbstraLogger.error(f"Error getting remotes: {e}")
            return []

    def has_remote(self, remote_name: str) -> bool:
        """Check if a remote exists"""
        remotes = self.get_remotes()
        if not remotes:
            return False
        return remote_name in remotes

    def add_remote(self, remote_name: str, remote_url: str) -> bool:
        """Add a remote to the repository"""
        if not self._repo:
            return False
        try:
            config = self._repo.get_config()  # type: ignore
            config.set(
                (b"remote", remote_name.encode("utf-8")),
                b"url",
                remote_url.encode("utf-8"),
            )
            config.write_to_path()
            return True
        except Exception as e:
            AbstraLogger.error(f"Error adding remote {remote_name}: {e}")
            return False

    def set_remote_url(self, remote_name: str, remote_url: str) -> bool:
        """Set/update the URL for a remote"""
        if not self._repo:
            return False

        try:
            config = self._repo.get_config()  # type: ignore
            config.set(
                (b"remote", remote_name.encode("utf-8")),
                b"url",
                remote_url.encode("utf-8"),
            )
            config.write_to_path()
            return True
        except Exception as e:
            AbstraLogger.error(f"Error setting remote URL for {remote_name}: {e}")
            return False

    def set_git_config(self, key: str, value: str, local: bool = True) -> bool:
        """Set a git configuration value"""
        if not self._repo:
            return False

        try:
            config = self._repo.get_config()  # type: ignore

            # Handle special case for http.<url>.* configs
            if key.startswith("http.") and key.count(".") >= 2:
                # For keys like "http.https://example.com/repo.git.extraHeader"
                # We need to find the last dot that separates the option from the URL
                # Split from the right to separate option from URL
                http_prefix = "http."
                remaining = key[len(http_prefix) :]  # Remove "http." prefix

                # Find the last dot to separate option from URL
                last_dot_index = remaining.rfind(".")
                if last_dot_index > 0:
                    url_part = remaining[:last_dot_index]
                    option_part = remaining[last_dot_index + 1 :]

                    config.set(
                        (b"http", url_part.encode("utf-8")),
                        option_part.encode("utf-8"),
                        value.encode("utf-8"),
                    )
                    config.write_to_path()
                    return True

            # Handle normal config keys like "user.name", "core.editor"
            parts = key.split(".", 1)
            if len(parts) == 2:
                section, option = parts
                config.set(
                    (section.encode("utf-8"),),
                    option.encode("utf-8"),
                    value.encode("utf-8"),
                )
                config.write_to_path()
                return True
            return False
        except Exception as e:
            AbstraLogger.error(f"Error setting git config {key}: {e}")
            return False

    def get_git_config(self, key: str, local: bool = True) -> Optional[str]:
        """Get a git configuration value"""
        if not self._repo:
            return None

        try:
            config = self._repo.get_config()  # type: ignore

            # Handle special case for http.<url>.* configs
            if key.startswith("http.") and key.count(".") >= 2:
                # For keys like "http.https://example.com/repo.git.extraHeader"
                # We need to find the last dot that separates the option from the URL
                # Split from the right to separate option from URL
                http_prefix = "http."
                remaining = key[len(http_prefix) :]  # Remove "http." prefix

                # Find the last dot to separate option from URL
                last_dot_index = remaining.rfind(".")
                if last_dot_index > 0:
                    url_part = remaining[:last_dot_index]
                    option_part = remaining[last_dot_index + 1 :]

                    try:
                        value = config.get(
                            (b"http", url_part.encode("utf-8")),
                            option_part.encode("utf-8"),
                        )
                        return value.decode("utf-8") if value else None
                    except KeyError:
                        return None

            # Handle normal config keys like "user.name", "core.editor"
            parts = key.split(".", 1)
            if len(parts) == 2:
                section, option = parts
                try:
                    value = config.get(
                        (section.encode("utf-8"),), option.encode("utf-8")
                    )
                    return value.decode("utf-8") if value else None
                except KeyError:
                    return None
            return None
        except Exception:
            return None

    def push_and_deploy(self, branch: str = "main") -> bool:
        """Deploy to Abstra remote (push to abstra remote)"""
        if not self._repo:
            return False
        if not self.has_remote(REMOTE_NAME):
            return False
        try:
            branch_name = branch if branch else "main"
            branch_ref = f"refs/heads/{branch_name}".encode()
            if not hasattr(self._repo, "refs") or branch_ref not in self._repo.refs:
                return False
            porcelain.push(
                str(self.working_directory),
                REMOTE_NAME,
                refspecs=[f"{branch_name}:{branch_name}"],
            )
            return True
        except Exception:
            return False

    def revert_commit(self, commit_hash: str) -> bool:
        """Reset working directory to match a previous commit and create a new commit with that content"""
        if not self._repo:
            return False
        if not commit_hash or not commit_hash.strip():
            return False
        if self.has_uncommitted_changes():
            return False
        try:
            # Verify the commit exists
            try:
                if not hasattr(self._repo, "__getitem__"):
                    return False
                self._repo[commit_hash.encode()]
            except KeyError:
                return False
            # Get current HEAD
            try:
                current_head = (
                    self._repo.head() if hasattr(self._repo, "head") else None
                )
                if not current_head:
                    return False
                self._repo[current_head]
            except Exception:
                return False
            # Step 1: Reset working directory to target commit state
            porcelain.reset(str(self.working_directory), "hard", commit_hash.encode())
            # Step 2: Reset HEAD back to original position (but keep working directory)
            if hasattr(self._repo, "refs"):
                self._repo.refs[b"HEAD"] = current_head
            # Step 3: Add all changes and create new commit
            porcelain.add(str(self.working_directory), [str(self.working_directory)])
            commit_message = f"Restore content from commit {commit_hash[:8]}"
            porcelain.commit(
                str(self.working_directory), commit_message.encode("utf-8")
            )
            return True
        except Exception:
            try:
                porcelain.reset(str(self.working_directory), "hard")
            except Exception:
                pass
            return False

    def check_merge_conflicts(self, remote_commit: str) -> bool:
        """Check if merging with remote commit would cause conflicts"""
        if not self._repo:
            return False

        if not remote_commit:
            return False

        try:
            try:
                current_commit_id = self._repo.head()
            except Exception:
                return False

            try:
                if isinstance(remote_commit, str):
                    remote_commit_bytes = remote_commit.encode()
                else:
                    remote_commit_bytes = remote_commit
            except KeyError:
                # If remote commit doesn't exist locally, this is equivalent to merge-base failing
                # Native git returns True (conflicts) in this case
                return True

            # Try to find merge base (equivalent to git merge-base)
            try:
                merge_base_id = self._find_merge_base_dulwich(
                    current_commit_id, remote_commit_bytes
                )
                if merge_base_id is None:
                    return True
            except Exception:
                return True

            # Now run merge-tree equivalent (equivalent to git merge-tree)
            try:
                has_conflicts = self._simulate_merge_tree_dulwich(
                    merge_base_id, current_commit_id, remote_commit_bytes
                )
                return has_conflicts
            except Exception:
                return False

        except Exception:
            return False

    def _find_merge_base_dulwich(self, commit1_id, commit2_id):
        """Find merge base between two commits - equivalent to git merge-base"""
        try:
            if not self._repo:
                return None
            if isinstance(commit2_id, str):
                commit2_id = commit2_id.encode()
            from collections import deque

            visited1 = set()
            queue1 = deque([commit1_id])
            while queue1:
                commit_id = queue1.popleft()
                if commit_id in visited1:
                    continue
                visited1.add(commit_id)
                try:
                    commit_obj = (
                        self._repo[commit_id]
                        if hasattr(self._repo, "__getitem__")
                        else None
                    )
                    if (
                        commit_obj
                        and isinstance(commit_obj, Commit)
                        and hasattr(commit_obj, "parents")
                    ):
                        queue1.extend(commit_obj.parents)
                except Exception as e:
                    print(f"Error accessing commit {commit_id}: {e}")
                    continue
            visited2 = set()
            queue2 = deque([commit2_id])
            while queue2:
                commit_id = queue2.popleft()
                if commit_id in visited2:
                    continue
                visited2.add(commit_id)
                if commit_id in visited1:
                    return commit_id
                try:
                    commit_obj = (
                        self._repo[commit_id]
                        if hasattr(self._repo, "__getitem__")
                        else None
                    )
                    if (
                        commit_obj
                        and isinstance(commit_obj, Commit)
                        and hasattr(commit_obj, "parents")
                    ):
                        queue2.extend(commit_obj.parents)
                except Exception as e:
                    print(f"Error accessing commit {commit_id}: {e}")
                    continue
            return None
        except Exception as e:
            print(f"Error in _find_merge_base_dulwich: {e}")
            return None

    def _simulate_merge_tree_dulwich(self, merge_base_id, current_id, remote_id):
        """Simulate git merge-tree to detect conflicts"""
        try:
            if not self._repo:
                return False
            if isinstance(remote_id, str):
                remote_id = remote_id.encode()
            base_commit = (
                self._repo[merge_base_id]
                if hasattr(self._repo, "__getitem__")
                else None
            )
            current_commit = (
                self._repo[current_id] if hasattr(self._repo, "__getitem__") else None
            )
            remote_commit = (
                self._repo[remote_id] if hasattr(self._repo, "__getitem__") else None
            )
            if not base_commit or not current_commit or not remote_commit:
                return False
            base_tree = (
                self._repo[base_commit.tree]
                if base_commit
                and isinstance(base_commit, Commit)
                and hasattr(base_commit, "tree")
                and hasattr(self._repo, "__getitem__")
                else None
            )
            current_tree = (
                self._repo[current_commit.tree]
                if current_commit
                and isinstance(current_commit, Commit)
                and hasattr(current_commit, "tree")
                and hasattr(self._repo, "__getitem__")
                else None
            )
            remote_tree = (
                self._repo[remote_commit.tree]
                if remote_commit
                and isinstance(remote_commit, Commit)
                and hasattr(remote_commit, "tree")
                and hasattr(self._repo, "__getitem__")
                else None
            )
            if not base_tree or not current_tree or not remote_tree:
                return False
            if base_tree.id == current_tree.id == remote_tree.id:
                return False
            if current_tree.id == base_tree.id:
                return False
            if remote_tree.id == base_tree.id:
                return False
            if current_tree.id == remote_tree.id:
                return False
            return self._analyze_tree_conflicts(base_tree, current_tree, remote_tree)
        except Exception as e:
            print(f"Error in _simulate_merge_tree_dulwich: {e}")
            return False

    def _analyze_tree_conflicts(self, base_tree, current_tree, remote_tree):
        """Analyze trees for conflicts like git merge-tree does"""
        try:
            # Get all file entries from all three trees
            base_entries = self._get_tree_entries(base_tree)
            current_entries = self._get_tree_entries(current_tree)
            remote_entries = self._get_tree_entries(remote_tree)

            # Get all unique file paths
            all_paths = (
                set(base_entries.keys())
                | set(current_entries.keys())
                | set(remote_entries.keys())
            )

            for path in all_paths:
                base_entry = base_entries.get(path)
                current_entry = current_entries.get(path)
                remote_entry = remote_entries.get(path)
                # Only check for conflicts if all entries are not None and are tuples
                if (
                    (base_entry is not None and isinstance(base_entry, tuple))
                    or (current_entry is not None and isinstance(current_entry, tuple))
                    or (remote_entry is not None and isinstance(remote_entry, tuple))
                ):
                    try:
                        if self._has_file_conflict(
                            base_entry, current_entry, remote_entry
                        ):
                            return True
                    except TypeError:
                        continue

            return False

        except Exception as e:
            print(f"Error in _analyze_tree_conflicts: {e}")
            return True  # Conservative: assume conflicts on error

    def _get_tree_entries(self, tree):
        """Get all file entries from a tree recursively"""
        entries = {}

        def walk_tree(tree_obj, prefix=""):
            try:
                if not tree_obj or not hasattr(tree_obj, "items"):
                    return
                for name, mode, sha in tree_obj.items():
                    path = prefix + name.decode("utf-8", errors="replace")
                    if mode & 0o040000:  # Directory
                        try:
                            subtree = (
                                self._repo[sha]
                                if self._repo and hasattr(self._repo, "__getitem__")
                                else None
                            )
                            if subtree is not None:
                                walk_tree(subtree, path + "/")
                        except Exception as e:
                            print(f"DEBUG: Error accessing subtree {sha}: {e}")
                    else:  # File
                        entries[path] = (mode, sha)
            except Exception as e:
                print(f"DEBUG: Error accessing tree {tree_obj}: {e}")

        walk_tree(tree)
        return entries

    def _has_file_conflict(self, base_entry, current_entry, remote_entry):
        """Check if a file has conflicts between the three versions"""
        # If all three are identical or missing, no conflict
        if base_entry == current_entry == remote_entry:
            return False

        # If file doesn't exist in base
        if base_entry is None:
            if current_entry is None or remote_entry is None:
                return False  # One side didn't add the file
            # Both sides added - conflict if different content
            return current_entry[1] != remote_entry[1]  # Compare SHA

        # File exists in base
        if current_entry is None and remote_entry is None:
            return False  # Both sides deleted - no conflict

        if current_entry is None:
            return False  # Only remote changed - no conflict

        if remote_entry is None:
            return False  # Only current changed - no conflict

        # All three versions exist - check for conflicts
        current_changed = current_entry[1] != base_entry[1]
        remote_changed = remote_entry[1] != base_entry[1]

        if not current_changed or not remote_changed:
            return False  # At most one side changed

        # Both sides changed - conflict if they changed differently
        return current_entry[1] != remote_entry[1]

    def get_ahead_behind_count(
        self, local_commit: str, remote_commit: str
    ) -> Tuple[int, int]:
        """Calculate ahead/behind count between local and remote commits"""
        if not self._repo:
            return (0, 0)

        try:
            # Verify both commits exist
            try:
                self._repo[local_commit.encode()]
                self._repo[remote_commit.encode()]
            except KeyError:
                # If remote commit doesn't exist locally, we're behind
                # This matches the native implementation behavior
                return (1, 1)  # Indicates divergence requiring merge/rebase

            # Count commits that local has but remote doesn't (ahead)
            try:
                # Get commits reachable from local but not from remote
                ahead_walker = self._repo.get_walker(
                    include=[local_commit.encode()], exclude=[remote_commit.encode()]
                )
                ahead_count = len(list(ahead_walker))
            except Exception:
                ahead_count = 0

            # Count commits that remote has but local doesn't (behind)
            try:
                # Get commits reachable from remote but not from local
                behind_walker = self._repo.get_walker(
                    include=[remote_commit.encode()], exclude=[local_commit.encode()]
                )
                behind_count = len(list(behind_walker))
            except Exception:
                behind_count = 0

            return (ahead_count, behind_count)

        except Exception:
            return (0, 0)
