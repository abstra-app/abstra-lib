import shutil
import subprocess
from pathlib import Path
from typing import List, Optional, Tuple

from abstra_internals.environment import REMOTE_NAME

from .types import GitCommit, GitFileChange, GitRepositoryInterface, GitStatus

TEMP_ABSTRA_EMAIL = "abstra@abstra.app"
TEMP_ABSTRA_NAME = "Abstra"


class NativeGitRepository(GitRepositoryInterface):
    """Repository for Git operations using system git command"""

    def __init__(self, working_directory: Path):
        super().__init__(working_directory)
        self._git_available = None

    def _run_git_command(
        self, command: List[str], cwd: Optional[Path] = None
    ) -> Tuple[bool, str, str]:
        """Run a git command and return success, stdout, stderr"""
        try:
            if cwd is None:
                cwd = self.working_directory

            result = subprocess.run(
                ["git"] + command, cwd=cwd, capture_output=True, text=True, timeout=30
            )
            return result.returncode == 0, result.stdout.strip(), result.stderr.strip()
        except (
            subprocess.TimeoutExpired,
            subprocess.CalledProcessError,
            FileNotFoundError,
        ) as e:
            return False, "", str(e)

    def is_git_available(self) -> bool:
        """Check if git is installed and available"""
        if self._git_available is None:
            self._git_available = shutil.which("git") is not None
        return self._git_available

    def find_git_root(self, start_path: Optional[Path] = None) -> Optional[Path]:
        """Find the root directory of the git repository"""
        if not self.is_git_available():
            return None

        if start_path is None:
            start_path = self.working_directory

        try:
            success, stdout, _ = self._run_git_command(
                ["rev-parse", "--show-toplevel"], cwd=start_path
            )
            if success and stdout:
                return Path(stdout.strip()).resolve()
        except Exception:
            return None

    def is_git_repository(self) -> bool:
        """Check if current directory is a git repository"""
        if not self.is_git_available():
            return False

        success, _, _ = self._run_git_command(["rev-parse", "--git-dir"])
        return success

    def get_current_branch(self) -> Optional[str]:
        """Get the current branch name"""
        if not self.is_git_repository():
            return None

        success, stdout, _ = self._run_git_command(["branch", "--show-current"])
        if success and stdout:
            return stdout

        success, stdout, _ = self._run_git_command(["symbolic-ref", "--short", "HEAD"])
        if success and stdout:
            return stdout

        return None

    def get_all_branches(self) -> List[str]:
        """Get all local branches"""
        if not self.is_git_repository():
            return []

        success, stdout, _ = self._run_git_command(
            ["branch", "--format=%(refname:short)"]
        )
        if success and stdout:
            return [branch.strip() for branch in stdout.split("\n") if branch.strip()]

        # Fallback for repositories without commits: check if HEAD points to a branch
        # This handles the case where a repository was initialized but no commits were made yet
        head_success, head_output, _ = self._run_git_command(
            ["symbolic-ref", "--short", "HEAD"]
        )
        if head_success and head_output.strip():
            return [head_output.strip()]

        return []

    def get_last_commit(self) -> Optional[GitCommit]:
        """Get information about the last commit"""
        commits = self.get_commit_history(limit=1)
        return commits[0] if commits else None

    def get_commit_history(
        self, limit: int = 10, offset: int = 0, branch: Optional[str] = None
    ) -> List[GitCommit]:
        """Get commit history with pagination"""
        if not self.is_git_repository():
            return []

        if branch:
            git_args = ["log", branch]
        else:
            git_args = ["log", "--all"]

        git_args.extend(
            [
                f"--skip={offset}",
                f"--max-count={limit}",
                "--format=%H|%s|%an|%ad",
                "--date=iso",
            ]
        )

        success, stdout, _ = self._run_git_command(git_args)

        if success and stdout:
            commits = []
            for line in stdout.strip().split("\n"):
                if line.strip():
                    parts = line.split("|", 3)
                    if len(parts) == 4:
                        commits.append(
                            GitCommit(
                                hash=parts[0],
                                message=parts[1],
                                author=parts[2],
                                date=parts[3],
                            )
                        )
            return commits
        return []

    def get_changed_files(self) -> List[str]:
        """Get list of changed files"""
        if not self.is_git_repository():
            return []

        success, stdout, _ = self._run_git_command(["status", "--porcelain"])
        if success and stdout:
            files = []
            for line in stdout.split("\n"):
                if line.strip():
                    filename = line[2:].lstrip() if len(line) > 2 else ""
                    if filename:
                        files.append(filename)
            return files
        return []

    def get_changed_files_with_status(self) -> List[GitFileChange]:
        """Get list of changed files with their git status"""
        if not self.is_git_repository():
            return []

        success, stdout, _ = self._run_git_command(["status", "--porcelain"])
        if success and stdout:
            files = []
            for line in stdout.split("\n"):
                if line.strip():
                    if len(line) < 3:
                        continue

                    status_code = line[:2]
                    filename = line[2:].lstrip() if len(line) > 2 else ""

                    if not filename:
                        continue

                    if status_code[0] == "A" or status_code[1] == "A":
                        status = "added"
                    elif status_code[0] == "D" or status_code[1] == "D":
                        status = "deleted"
                    elif status_code[0] == "M" or status_code[1] == "M":
                        status = "modified"
                    elif status_code[0] == "R" or status_code[1] == "R":
                        status = "renamed"
                    elif status_code[0] == "?" and status_code[1] == "?":
                        status = "untracked"
                    else:
                        status = "modified"

                    files.append(
                        GitFileChange(
                            path=filename, status=status, status_code=status_code
                        )
                    )
            return files
        return []

    def has_uncommitted_changes(self) -> bool:
        """Check if there are uncommitted changes"""
        return len(self.get_changed_files()) > 0

    def init_repository(self) -> bool:
        """Initialize a new git repository in the working directory"""
        if not self.is_git_available():
            return False

        # Initialize repository with main as default branch
        success, _, _ = self._run_git_command(["init", "-b", "main"])
        if not success:
            # Fallback for older git versions that don't support -b flag
            success, _, _ = self._run_git_command(["init"])
            if not success:
                return False
            # Set main as default branch
            self._run_git_command(["symbolic-ref", "HEAD", "refs/heads/main"])

        self.configure_git_user(TEMP_ABSTRA_EMAIL, TEMP_ABSTRA_NAME)

        add_success, _, _ = self._run_git_command(["add", "."])
        if add_success:
            status_success, status_output, _ = self._run_git_command(
                ["status", "--porcelain", "--cached"]
            )
            if status_success and status_output.strip():
                commit_success, _, _ = self._run_git_command(
                    ["commit", "-m", "First commit"]
                )
                if commit_success:
                    return True

        # If no files to commit or commit failed, create an empty initial commit
        # This ensures we have a branch with at least one commit
        empty_commit_success, err, out = self._run_git_command(
            ["commit", "--allow-empty", "-m", "First commit"]
        )
        print("Created empty initial commit AAAA.", empty_commit_success, err, out)
        return empty_commit_success

    def configure_git_user(self, fallback_email: str, fallback_name: str):
        """Ensure git user is configured for commits (required in CI environments)"""
        name_success, name_stdout, _ = self._run_git_command(["config", "user.name"])
        if not name_success or name_stdout == TEMP_ABSTRA_NAME:
            self._run_git_command(["config", "user.name", fallback_name])

        email_success, email_stdout, _ = self._run_git_command(["config", "user.email"])
        if not email_success or email_stdout == TEMP_ABSTRA_EMAIL:
            self._run_git_command(["config", "user.email", fallback_email])

    def get_repository_status(self) -> GitStatus:
        """Get comprehensive repository status"""
        if not self.is_git_available():
            return GitStatus(available=False, git_installed=False)

        git_root = self.find_git_root()
        if (
            git_root is not None
            and git_root.resolve() != self.working_directory.resolve()
        ):
            return GitStatus(available=False, is_monorepo=True)

        if self.is_git_repository():
            git_root = self.working_directory
            original_working_dir = None
        elif git_root := self.find_git_root():
            original_working_dir = self.working_directory
            self.working_directory = git_root
        elif self.init_repository():
            git_root = self.working_directory
            original_working_dir = None
        else:
            return GitStatus(available=False)

        try:
            branch = self.get_current_branch()
            if not branch:
                success, stdout, _ = self._run_git_command(["rev-parse", "HEAD"])
                if success and stdout:
                    branch = f"detached-{stdout[:8]}"
                else:
                    return GitStatus(available=False)

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
            if "original_working_dir" in locals() and original_working_dir is not None:
                self.working_directory = original_working_dir

    def checkout_branch(self, branch_name: str) -> bool:
        """Switch to a different branch"""
        if not self.is_git_repository():
            return False

        success, _, stderr = self._run_git_command(["checkout", branch_name])
        if not success and "did not match any file(s) known to git" in stderr:
            success, _, _ = self._run_git_command(
                ["checkout", "-b", branch_name, f"origin/{branch_name}"]
            )

        return success

    def checkout_commit(self, commit_hash: str) -> bool:
        """Switch to a specific commit (detached HEAD state)"""
        if not self.is_git_repository():
            return False

        success, _, _ = self._run_git_command(["checkout", commit_hash])
        return success

    def pull_changes(
        self,
        strategy: str = "merge",
        allow_unrelated: bool = True,
        conflict_resolution: Optional[str] = "theirs",
    ) -> bool:
        """Pull changes from abstra remote repository

        Args:
            strategy: How to reconcile divergent branches. Options:
                - "merge": Create a merge commit (git pull --no-rebase)
                - "rebase": Rebase local commits on top of remote (git pull --rebase)
                - "ff-only": Only allow fast-forward merges (git pull --ff-only)
            allow_unrelated: Allow merging unrelated histories (git pull --allow-unrelated-histories)
            conflict_resolution: How to resolve conflicts automatically. Options:
                - "theirs": Accept all incoming changes (git pull -X theirs)
                - "ours": Keep all local changes (git pull -X ours)
                - None: Handle conflicts manually (default)
        """
        if not self.is_git_repository():
            return False

        pull_cmd = ["pull"]

        if strategy == "merge":
            pull_cmd.append("--no-rebase")
        elif strategy == "rebase":
            pull_cmd.append("--rebase")
        elif strategy == "ff-only":
            pull_cmd.append("--ff-only")
        else:
            pull_cmd.append("--no-rebase")

        if allow_unrelated:
            pull_cmd.append("--allow-unrelated-histories")

        if conflict_resolution == "theirs":
            pull_cmd.extend(["-X", "theirs"])
        elif conflict_resolution == "ours":
            pull_cmd.extend(["-X", "ours"])

        pull_cmd.extend([REMOTE_NAME, "main"])

        success, _, e = self._run_git_command(pull_cmd)
        if not success:
            print("There was an error during git pull:", e)

        return success

    def commit_changes(self, message: str, add_all: bool = True) -> bool:
        """Commit changes with a message"""
        if not self.is_git_repository():
            return False

        if add_all:
            success, _, _ = self._run_git_command(["add", "."])
            if not success:
                return False

        success, _, _ = self._run_git_command(["commit", "-m", message])
        return success

    def stash_changes(self, message: str = "WIP") -> bool:
        """Stash uncommitted changes"""
        if not self.is_git_repository():
            return False

        success, _, _ = self._run_git_command(
            ["stash", "push", "-m", message, "--include-untracked"]
        )
        return success

    def get_remotes(self) -> List[str]:
        """Get list of remote names"""
        if not self.is_git_repository():
            return []

        success, stdout, _ = self._run_git_command(["remote"])
        if success and stdout:
            return [remote.strip() for remote in stdout.split("\n") if remote.strip()]
        return []

    def has_remote(self, remote_name: str) -> bool:
        """Check if a remote exists"""
        return remote_name in self.get_remotes()

    def add_remote(self, remote_name: str, remote_url: str) -> bool:
        """Add a remote to the repository"""
        if not self.is_git_repository():
            return False

        success, _, _ = self._run_git_command(
            ["remote", "add", remote_name, remote_url]
        )
        return success

    def set_remote_url(self, remote_name: str, remote_url: str) -> bool:
        """Set/update the URL for a remote"""
        if not self.is_git_repository():
            return False

        success, _, _ = self._run_git_command(
            ["remote", "set-url", remote_name, remote_url]
        )
        return success

    def set_git_config(self, key: str, value: str, local: bool = True) -> bool:
        """Set a git configuration value"""
        if not self.is_git_repository():
            return False

        config_flag = "--local" if local else "--global"
        success, _, _ = self._run_git_command(["config", config_flag, key, value])
        return success

    def get_git_config(self, key: str, local: bool = True) -> Optional[str]:
        """Get a git configuration value"""
        if not self.is_git_repository():
            return None

        config_flag = "--local" if local else "--global"
        success, stdout, _ = self._run_git_command(["config", config_flag, key])
        return stdout.strip() if success and stdout else None

    def get_ahead_behind_count(
        self, local_commit: str, remote_commit: str
    ) -> Tuple[int, int]:
        if not self.is_git_repository():
            return (0, 0)

        remote_exists_success, _, _ = self._run_git_command(
            ["cat-file", "-e", remote_commit]
        )

        # If remote commit doesn't exist locally, we need to fetch first (we're behind)
        if not remote_exists_success:
            # We can't calculate exact counts without fetching, but we know:
            # - We have local changes (since commits are different)
            # - Remote has changes we don't have (since remote commit doesn't exist locally)
            # This indicates divergent branches - both ahead and behind
            return (1, 1)  # Simplified: indicates divergence requiring merge/rebase

        # If remote commit exists locally, we can calculate normal ahead/behind
        # Count commits that local has but remote doesn't (ahead)
        ahead_success, ahead_stdout, _ = self._run_git_command(
            ["rev-list", "--count", f"{remote_commit}..{local_commit}"]
        )
        ahead_count = (
            int(ahead_stdout.strip()) if ahead_success and ahead_stdout.strip() else 0
        )

        # Count commits that remote has but local doesn't (behind)
        behind_success, behind_stdout, _ = self._run_git_command(
            ["rev-list", "--count", f"{local_commit}..{remote_commit}"]
        )
        behind_count = (
            int(behind_stdout.strip())
            if behind_success and behind_stdout.strip()
            else 0
        )

        return (ahead_count, behind_count)

    def push_and_deploy(self, branch: str = "main") -> bool:
        """Deploy to Abstra remote (push to abstra remote)"""
        if not self.is_git_repository():
            return False

        if not self.has_remote(REMOTE_NAME):
            return False

        success, _, _ = self._run_git_command(["push", REMOTE_NAME, branch])

        return success

    def revert_commit(self, commit_hash: str) -> bool:
        """Reset working directory to match a previous commit and create a new commit with that content"""
        if not self.is_git_repository():
            return False

        if not commit_hash.strip():
            return False

        if self.has_uncommitted_changes():
            return False

        try:
            # Step 1: Reset the working directory and index to match the target commit
            # This will replace all files with their state from the target commit
            success_reset, _, _ = self._run_git_command(
                ["reset", "--hard", commit_hash]
            )
            if not success_reset:
                return False

            # Step 2: Reset HEAD back to the original position (soft reset)
            # This keeps the files from target commit but moves HEAD back
            success_soft, _, _ = self._run_git_command(["reset", "--soft", "HEAD@{1}"])
            if not success_soft:
                return False

            # Step 3: Create a new commit with the restored content
            commit_message = f"Restore content from commit {commit_hash[:8]}"
            success_commit, _, _ = self._run_git_command(
                ["commit", "-m", commit_message]
            )

            return success_commit

        except Exception:
            self._run_git_command(["reset", "--hard", "HEAD"])
            return False

    def check_merge_conflicts(self, remote_commit: str) -> bool:
        """Check if merging with remote commit would cause conflicts"""
        if not self.is_git_repository():
            return False

        if not remote_commit:
            return False

        # Get current commit
        success, current_commit, _ = self._run_git_command(["rev-parse", "HEAD"])
        if not success:
            return False

        # Use git merge-tree to detect potential conflicts without actually merging
        # git merge-tree <base> <branch1> <branch2>
        # We need to find the merge base first
        success, merge_base, _ = self._run_git_command(
            ["merge-base", current_commit.strip(), remote_commit]
        )
        if not success:
            # If no merge base, assume potential conflicts
            return True

        # Check if merge would have conflicts
        success, output, _ = self._run_git_command(
            ["merge-tree", merge_base.strip(), current_commit.strip(), remote_commit]
        )

        # If merge-tree succeeds and output contains conflict markers, there are conflicts
        if success and output:
            # Look for conflict markers in the output
            return "<<<<<<< " in output or "=======" in output or ">>>>>>> " in output

        return False
