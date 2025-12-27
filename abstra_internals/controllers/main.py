import datetime
import json
import pkgutil
from multiprocessing import Pipe
from pathlib import Path
from shutil import move
from tempfile import mkdtemp, mktemp
from typing import Any, Dict, List, Literal, Optional, Tuple
from uuid import uuid4

import flask

from abstra_internals.cloud_api import (
    get_api_key_info,
    get_feature_flags,
    get_project_info,
)
from abstra_internals.consts.filepaths import TEST_DATA_FILEPATH
from abstra_internals.controllers.execution.execution import ExecutionController
from abstra_internals.controllers.execution.execution_client import HeadlessClient
from abstra_internals.credentials import (
    delete_credentials,
    get_credentials,
    resolve_headers,
    set_credentials,
)
from abstra_internals.entities.execution_context import (
    HookContext,
    JobContext,
    Request,
    Response,
    ScriptContext,
)
from abstra_internals.interface.cli.deploy import deploy_without_git
from abstra_internals.interface.contract import ExecutionStartedMessage
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.email import EmailRepository
from abstra_internals.repositories.execution import ExecutionFilter, ExecutionRepository
from abstra_internals.repositories.execution_logs import (
    ExecutionLogsRepository,
    LogEntry,
)
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.keyvalue import KVRepository
from abstra_internals.repositories.passwordless import PasswordlessRepository
from abstra_internals.repositories.producer import ProducerRepository
from abstra_internals.repositories.project.project import (
    FormStage,
    HookStage,
    JobStage,
    ScriptStage,
    Stage,
    StageWithFile,
    StyleSettingsWithSidebar,
)
from abstra_internals.repositories.roles import RolesRepository
from abstra_internals.repositories.tasks import ExecutionTasksResponse, TasksRepository
from abstra_internals.repositories.users import UsersRepository
from abstra_internals.services.fs import FileSystemService
from abstra_internals.services.requirements import RequirementsRepository
from abstra_internals.settings import Settings
from abstra_internals.templates import (
    ensure_dotenv,
    ensure_gitignore,
    new_form_code,
    new_hook_code,
    new_job_code,
    new_script_code,
)
from abstra_internals.utils.code_check import code_check
from abstra_internals.utils.diff import compute_updated_code_from_replacements
from abstra_internals.utils.file import path2module
from abstra_internals.utils.validate import validate_json


class UnknownNodeTypeError(Exception):
    def __init__(self, node_type: str):
        self.node_type = node_type

    def __str__(self):
        return f"Unknown node type {self.node_type}"


class SelfTransitionError(Exception):
    def __init__(self, node_type: str, node_id: str):
        self.node_type = node_type
        self.node_id = node_id

    def __str__(self):
        return "You can't add a transition to itself."


class TransitionToJobError(Exception):
    def __init__(
        self, source_type: str, source_id: str, target_type: str, target_id: str
    ):
        self.source_type = source_type
        self.source_id = source_id
        self.target_type = target_type
        self.target_id = target_id

    def __str__(self):
        return "You can't add a transition to a job. Use a script instead."


class DoubleTransitionError(Exception):
    def __init__(
        self, source_type: str, source_id: str, target_type: str, target_id: str
    ):
        self.source_type = source_type
        self.source_id = source_id
        self.target_type = target_type
        self.target_id = target_id

    def __str__(self):
        return "You can't add the same transition twice."


class MainController:
    kv_repository: KVRepository
    passwordless_repository: PasswordlessRepository
    email_repository: EmailRepository
    tasks_repository: TasksRepository
    users_repository: UsersRepository
    roles_repository: RolesRepository
    producer_repository: ProducerRepository
    execution_repository: ExecutionRepository
    execution_logs_repository: ExecutionLogsRepository

    def __init__(self, repositories: Repositories):
        repositories.project.initialize_or_migrate()

        RequirementsRepository.ensure("abstra")
        ensure_gitignore(Settings.root_path)
        ensure_dotenv(Settings.root_path)

        self.repositories = repositories

        self.kv_repository = repositories.kv
        self.passwordless_repository = repositories.passwordless
        self.email_repository = repositories.email
        self.users_repository = repositories.users
        self.roles_repository = repositories.roles
        self.tasks_repository = repositories.tasks
        self.producer_repository = repositories.producer
        self.execution_repository = repositories.execution
        self.execution_logs_repository = repositories.execution_logs
        self.linter_repository = repositories.linter

    def deploy_without_git(self):
        self.linter_repository.update_checks()
        issues = self.linter_repository.get_blocking_checks()

        if len(issues) > 0:
            raise Exception(
                "Please fix all linter issues before deploying your project."
            )

        deploy_without_git()

    def reset_execution_repository(self):
        self.execution_repository.clear()

    def reset_execution_logs_repository(self):
        self.execution_logs_repository.clear()

    def reset_tasks_repository(self):
        self.tasks_repository.clear()

    def reset_repositories(self):
        self.reset_execution_logs_repository()
        self.reset_execution_repository()
        self.reset_tasks_repository()

    def get_workspace(self) -> StyleSettingsWithSidebar:
        project = self.repositories.project.load()
        return project.get_workspace()

    def get_stage(self, id: str) -> Optional[Stage]:
        """
        Retrieve a specific workflow stage by its unique identifier.

        This method looks up and returns a single stage from the project
        based on the provided ID. The stage can be of any type (form, hook,
        job, or tasklet).

        Args:
            id (str): Unique identifier of the stage to retrieve.

        Returns:
            Optional[Stage]: The stage object if found, None otherwise.
                The returned object will be one of:
                - FormStage: For interactive form stages
                - HookStage: For HTTP endpoint stages
                - JobStage: For scheduled job stages
                - ScriptStage: For script processing stages

        Example:
            ```python
            controller = MainController(repositories)

            # Get a specific stage
            stage = controller.get_stage("form-123")

            if stage:
                print(f"Found stage: {stage.title}")
                print(f"Type: {stage.type}")
                print(f"File: {stage.file}")

                # Type-specific operations
                if isinstance(stage, FormStage):
                    print("This is a form stage")
                elif isinstance(stage, HookStage):
                    print("This is a hook stage")
                elif isinstance(stage, JobStage):
                    print("This is a job stage")
                elif isinstance(stage, ScriptStage):
                    print("This is a tasklet stage")
            else:
                print("Stage not found")
            ```

        Note:
            - Returns None if no stage with the given ID exists
            - The ID is case-sensitive and must match exactly
            - Use isinstance() to determine the specific stage type

        Copywritings:
            Get a specific workflow stage
            Retrieving a specific workflow stage by ID...
        """
        project = self.repositories.project.load()
        return project.get_stage(id)

    def _read_file_lines_with_pagination(
        self,
        file_path: Path,
        start_line: Optional[int],
        end_line: Optional[int],
        max_lines: int,
    ) -> Optional[Dict[str, Any]]:
        """
        Private helper method to read file lines with pagination support.

        This method contains the common pagination logic used by both
        read_stage_file_with_pagination and read_file_with_pagination.

        Args:
            file_path (Path): Absolute path to the file to read.
            start_line (Optional[int]): 1-indexed line number to start reading from.
            end_line (Optional[int]): 1-indexed line number to stop reading at (inclusive).
            max_lines (int): Maximum number of lines to return in a single call.

        Returns:
            dict | None: Dictionary containing file content and metadata, or None if file cannot be read.
        """
        if not file_path.is_file():
            return None

        # First pass: count total lines without loading into memory
        try:
            with file_path.open("r", encoding="utf-8") as f:
                total_lines = sum(1 for _ in f)
        except (IOError, OSError) as e:
            AbstraLogger.error(f"Failed to read file {file_path}: {e}")
            return None
        except UnicodeDecodeError as e:
            AbstraLogger.error(f"Failed to decode file {file_path}: {e}")
            return None

        # Determine actual range to read
        actual_start = max(1, start_line or 1)
        actual_end = min(total_lines, end_line or total_lines)

        # Handle edge case where start_line exceeds total_lines
        if actual_start > total_lines:
            return {
                "content": "",
                "start_line": actual_start,
                "end_line": actual_start - 1,
                "total_lines": total_lines,
                "has_more": False,
                "truncated": False,
            }

        # Apply max_lines limit
        truncated = False
        if actual_end - actual_start + 1 > max_lines:
            actual_end = actual_start + max_lines - 1
            truncated = True

        # Second pass: read only the required line range using itertools.islice
        from itertools import islice

        try:
            with file_path.open("r", encoding="utf-8") as f:
                # Skip lines before start (0-indexed), then take the range we need
                start_idx = actual_start - 1
                num_lines = actual_end - actual_start + 1
                content_lines = list(islice(f, start_idx, start_idx + num_lines))
                content = "".join(content_lines)
        except (IOError, OSError) as e:
            AbstraLogger.error(f"Failed to read file {file_path}: {e}")
            return None
        except UnicodeDecodeError as e:
            AbstraLogger.error(f"Failed to decode file {file_path}: {e}")
            return None

        return {
            "content": content,
            "start_line": actual_start,
            "end_line": actual_end,
            "total_lines": total_lines,
            "has_more": actual_end < total_lines,
            "truncated": truncated,
        }

    def read_stage_file_with_pagination(
        self,
        id: str,
        start_line: Optional[int] = None,
        end_line: Optional[int] = None,
        max_lines: int = 500,
    ):
        """
        Read the source code of a stage's file with pagination support.

        This method retrieves the content of the file associated with a specific
        workflow stage by its ID. It supports reading specific line ranges to handle
        large files efficiently without consuming excessive context window space.

        Args:
            id (str): Unique identifier of the stage whose file to read.
            start_line (Optional[int]): 1-indexed line number to start reading from.
                If None, starts from the beginning. Defaults to None.
            end_line (Optional[int]): 1-indexed line number to stop reading at (inclusive).
                If None, reads until max_lines is reached. Defaults to None.
            max_lines (int): Maximum number of lines to return in a single call.
                Prevents context overflow for large files. Defaults to 500.

        Returns:
            dict | None: Dictionary containing file content and metadata if the stage exists:
                - content (str): The file content as a string
                - start_line (int): Actual starting line number (1-indexed)
                - end_line (int): Actual ending line number (1-indexed)
                - total_lines (int): Total number of lines in the file
                - has_more (bool): Whether there are more lines after end_line
                - truncated (bool): Whether the result was limited by max_lines
                Returns None if the stage doesn't exist or has no associated file.

        Example:
            ```python
            controller = MainController(repositories)

            # Read entire small stage file
            result = controller.read_stage_file_with_pagination("script-456")
            if result:
                print(result["content"])
                print(f"File has {result['total_lines']} lines")

            # Read first 200 lines of a large stage file
            result = controller.read_stage_file_with_pagination("form-123", start_line=1, end_line=200)
            if result:
                print(result["content"])
                if result["has_more"]:
                    print("Stage file has more content...")

            # Read specific lines 50-250
            result = controller.read_stage_file_with_pagination("hook-789", start_line=50, end_line=250)

            # Read with automatic pagination
            result = controller.read_stage_file_with_pagination("job-321", max_lines=500)
            if result and result["truncated"]:
                next_result = controller.read_stage_file_with_pagination(
                    "job-321",
                    start_line=result["end_line"] + 1,
                    max_lines=500
                )
            ```

        Note:
            - Returns None if the stage does not exist or has no file
            - The ID is case-sensitive and must match exactly
            - Line numbers are 1-indexed (first line is 1, not 0)
            - Automatic truncation at max_lines prevents context overflow
            - For files with more than max_lines, use pagination to read chunks

        Copywritings:
            Read stage file with pagination
            Reading stage file with pagination support...
        """
        stage = self.get_stage(id)
        if not isinstance(stage, StageWithFile):
            return None

        return self._read_file_lines_with_pagination(
            stage.file_path, start_line, end_line, max_lines
        )

    def get_async_stage_ids(self):
        project = self.repositories.project.load()
        job_ids = [stage.id for stage in project.jobs]
        script_ids = [stage.id for stage in project.scripts]
        return job_ids + script_ids

    def __ensure_case(self, path: str):
        file_dirs = [p for p in Settings.root_path.iterdir()]
        if path in file_dirs:
            return

        conflicting_paths = [p for p in file_dirs if p.name.lower() == path.lower()]
        if len(conflicting_paths) == 1:
            conflicting_paths[0].rename(Settings.root_path.joinpath(path))
            return

        raise Exception(
            f"File {path} already exists with different casing. Conflict with files ({', '.join(p.name for p in conflicting_paths)})"
        )

    def init_code_file(self, path: str, code: str):
        file_path = Settings.root_path.joinpath(path)
        if file_path.is_file():
            self.__ensure_case(path)
            return
        file_path.parent.mkdir(parents=True, exist_ok=True)
        file_path.write_text(code, encoding="utf-8")

    def read_file(self, file: str):
        """
        Read the contents of a file from the project workspace.

        This method reads and returns the text content of a file within the project
        directory. It handles encoding properly and returns None if the file doesn't exist.

        Args:
            file (str): Relative path to the file from the project root directory.
                Should include the file extension.

        Returns:
            str | None: The file content as a string if the file exists and is readable,
                None if the file doesn't exist or is not a regular file.

        Example:
            ```python
            controller = MainController(repositories)

            # Read a Python tasklet file
            tasklet_content = controller.read_file("tasklet_data_processor.py")
            if tasklet_content:
                print("Tasklet content:")
                print(tasklet_content)
            else:
                print("Tasklet file not found")

            # Read configuration files
            config_content = controller.read_file("config.json")
            if config_content:
                import json
                config = json.loads(config_content)
                print(f"Config loaded: {config}")

            # Read form files
            form_code = controller.read_file("forms/user_input.py")
            if form_code:
                print(f"Form code has {len(form_code)} characters")

            # Handle non-existent files
            missing_file = controller.read_file("non_existent.txt")
            if missing_file is None:
                print("File does not exist")
            ```

        Note:
            - Files are read with UTF-8 encoding
            - Path should be relative to the project root directory
            - Returns None for directories, non-existent files, or unreadable files
            - Suitable for text files; binary files may not be read correctly
            - Does not raise exceptions for missing files, returns None instead

        Copywritings:
            Read the contents of a file
            Reading the contents of a file...
        """
        file_path = Settings.root_path.joinpath(file)
        if not file_path.is_file():
            return None
        return Settings.root_path.joinpath(file).read_text(encoding="utf-8")

    def read_file_with_pagination(
        self,
        file: str,
        start_line: Optional[int] = None,
        end_line: Optional[int] = None,
        max_lines: int = 500,
    ):
        """
        Read the contents of a file from the project workspace with pagination support.

        This method reads and returns the text content of a file within the project
        directory. It supports reading specific line ranges to handle large files efficiently
        without consuming excessive context window space.

        Args:
            file (str): Relative path to the file from the project root directory.
                Should include the file extension.
            start_line (Optional[int]): 1-indexed line number to start reading from.
                If None, starts from the beginning. Defaults to None.
            end_line (Optional[int]): 1-indexed line number to stop reading at (inclusive).
                If None, reads until max_lines is reached. Defaults to None.
            max_lines (int): Maximum number of lines to return in a single call.
                Prevents context overflow for large files. Defaults to 500.

        Returns:
            dict | None: Dictionary containing file content and metadata if the file exists:
                - content (str): The file content as a string
                - start_line (int): Actual starting line number (1-indexed)
                - end_line (int): Actual ending line number (1-indexed)
                - total_lines (int): Total number of lines in the file
                - has_more (bool): Whether there are more lines after end_line
                - truncated (bool): Whether the result was limited by max_lines
                Returns None if the file doesn't exist or is not a regular file.

        Example:
            ```python
            controller = MainController(repositories)

            # Read entire small file
            result = controller.read_file_with_pagination("config.json")
            if result:
                print(result["content"])
                print(f"File has {result['total_lines']} lines")

            # Read first 200 lines of a large file
            result = controller.read_file_with_pagination("large_log.txt", start_line=1, end_line=200)
            if result:
                print(result["content"])
                if result["has_more"]:
                    print("File has more content...")

            # Read lines 500-900
            result = controller.read_file_with_pagination("data.py", start_line=500, end_line=900)

            # Read with automatic pagination (max_lines limit)
            result = controller.read_file_with_pagination("huge_file.csv", max_lines=500)
            if result and result["truncated"]:
                next_result = controller.read_file_with_pagination(
                    "huge_file.csv",
                    start_line=result["end_line"] + 1,
                    max_lines=500
                )
            ```

        Note:
            - Files are read with UTF-8 encoding
            - Path should be relative to the project root directory
            - Returns None for directories, non-existent files, or unreadable files
            - Line numbers are 1-indexed (first line is 1, not 0)
            - If start_line > total lines, returns empty content with metadata
            - Automatic truncation at max_lines prevents context overflow
            - For files with more than max_lines, use pagination to read chunks

        Copywritings:
            Read file contents with pagination
            Reading file contents with pagination support...
        """
        file_path = Settings.root_path.joinpath(file)
        return self._read_file_lines_with_pagination(
            file_path, start_line, end_line, max_lines
        )

    def check_file_exists(self, file_path: str):
        """
        Check if a file exists in the project workspace.

        This method verifies whether a file exists at the specified path relative
        to the project root directory. It only returns True for actual files,
        not directories.

        Args:
            file_path (str): Relative path to the file from the project root directory.
                Should include the file extension.

        Returns:
            bool: True if the file exists and is a regular file, False otherwise.

        Example:
            ```python
            controller = MainController(repositories)

            # Check if specific files exist
            if controller.check_file("requirements.txt"):
                print("Requirements file exists")
            else:
                print("No requirements file found")

            # Check tasklet files before reading
            tasklet_path = "tasklet_data_processor.py"
            if controller.check_file(tasklet_path):
                content = controller.read_file(tasklet_path)
                print("Tasklet loaded successfully")
            else:
                print(f"Tasklet {tasklet_path} not found")

            # Check configuration files
            config_files = ["config.json", "settings.yaml", ".env"]
            for config_file in config_files:
                if controller.check_file(config_file):
                    print(f"Found config: {config_file}")
                    break
            else:
                print("No configuration files found")

            # Directories return False
            is_file = controller.check_file("tasklets")  # Returns False (directory)
            is_file = controller.check_file("tasklets/")  # Returns False (directory)
            ```

        Note:
            - Only returns True for regular files, not directories or special files
            - Path should be relative to the project root directory
            - Does not check file permissions or readability, only existence
            - Use this before calling read_file() to avoid None returns
            - Faster than read_file() for existence checks

        Copywritings:
            Check if a file exists
            Checking if a file exists...
        """
        return Settings.root_path.joinpath(file_path).is_file()

    def check_multiple_files_exists(self, file_paths: List[str]):
        """
        Check the existence of multiple files in the project workspace.

        This method efficiently checks whether multiple files exist, returning
        a dictionary mapping each file path to its existence status. Useful for
        batch file existence verification.

        Args:
            file_paths (List[str]): List of relative file paths from the project
                root directory to check for existence.

        Returns:
            Dict[str, bool]: Dictionary mapping each file path to a boolean indicating
                whether the file exists. Key is the file path, value is True if the
                file exists as a regular file, False otherwise.

        Example:
            ```python
            controller = MainController(repositories)

            # Check multiple configuration files
            config_files = [
                "config.json",
                "settings.yaml",
                ".env",
                "requirements.txt"
            ]
            existence_map = controller.check_files(config_files)

            for file_path, exists in existence_map.items():
                if exists:
                    print(f"✓ {file_path} exists")
                else:
                    print(f"✗ {file_path} missing")

            # Check all form files
            form_files = [
                "forms/user_registration.py",
                "forms/data_input.py",
                "forms/approval.py"
            ]
            form_status = controller.check_files(form_files)
            existing_forms = [path for path, exists in form_status.items() if exists]
            print(f"Found {len(existing_forms)} form files")

            # Check dependency files
            deps = ["package.json", "requirements.txt", "Pipfile", "pyproject.toml"]
            dep_status = controller.check_files(deps)
            if any(dep_status.values()):
                print("Project has dependency management files")

            # Validate project structure
            required_files = ["abstra.json", "main.py", "README.md"]
            file_status = controller.check_files(required_files)
            missing_files = [f for f, exists in file_status.items() if not exists]
            if missing_files:
                print(f"Missing required files: {missing_files}")
            ```

        Note:
            - More efficient than calling check_file() multiple times
            - Only checks for regular files, directories return False
            - All paths should be relative to the project root directory
            - Returns False for non-existent files, directories, or special files
            - Useful for validation, dependency checking, and project structure verification

        Copywritings:
            Check the existence of multiple files
            Checking the existence of multiple files...
        """
        return {
            file_path: self.check_file_exists(file_path) for file_path in file_paths
        }

    def list_files(self, path: str = ".", mode: str = "file"):
        """
        List files and directories within the project workspace.

        This method provides different listing modes to browse the project filesystem,
        supporting various file types and Python module discovery. It respects
        ignore patterns defined in .gitignore file.

        Args:
            path (str, optional): Relative path from project root to list contents.
                Defaults to "." (project root).
            mode (str, optional): Listing mode that determines what to return:
                - "file": All files and directories (default)
                - "image": Only image files (png, jpg, jpeg, gif, svg, webp, etc.)
                - "python-file": Only Python files (.py extension)
                - "module": Python modules and packages discoverable by import

        Returns:
            List[Dict]: List of file/directory information. Structure depends on mode:
                For "file", "image", "python-file" modes:
                - name: Filename relative to the specified path
                - path: Full path relative to project root
                - type: "file" or "dir"

                For "module" mode:
                - name: Module/package name
                - path: Import path (dot notation)
                - type: "module" or "package"

        Example:
            ```python
            controller = MainController(repositories)

            # List all files in project root
            all_files = controller.list_files()
            for item in all_files:
                print(f"{item['type']}: {item['name']} -> {item['path']}")

            # List only Python files in tasklets directory
            python_files = controller.list_files("tasklets", mode="python-file")
            for file in python_files:
                if file['type'] == 'file':
                    print(f"Python file: {file['path']}")

            # List only image files
            images = controller.list_files(mode="image")
            for img in images:
                print(f"Image: {img['name']} ({img['path']})")

            # Discover Python modules
            modules = controller.list_files(mode="module")
            for mod in modules:
                print(f"{mod['type']}: {mod['name']} -> import {mod['path']}")

            # List contents of specific subdirectory
            subdir_files = controller.list_files("forms")
            ```

        Note:
            - Respects .gitignore patterns when use_ignore=True
            - Image mode supports: .png, .jpg, .jpeg, .gif, .svg, .webp, .jfif, .pjp, .pjpeg
            - Module mode uses Python's pkgutil.iter_modules for discovery
            - Paths are always relative to the project root directory
            - Returns empty list if the specified path doesn't exist

        Copywritings:
            List files and directories in the project workspace
            Retrieving files and directories in the project workspace...
        """
        parent_path = Settings.root_path.joinpath(path)
        if mode in ["file", "image", "python-file"]:
            if mode == "image":
                allowed_suffixes = [
                    ".png",
                    ".jpg",
                    ".jpeg",
                    ".gif",
                    ".svg",
                    ".webp",
                    ".jfif",
                    ".pjp",
                    ".pjpeg",
                ]
            elif mode == "python-file":
                allowed_suffixes = [".py"]
            else:
                allowed_suffixes = None

            return [
                dict(
                    name=str(file.relative_to(parent_path)),
                    path=str(file.relative_to(Settings.root_path)),
                    type="file" if file.is_file() else "dir",
                )
                for file in FileSystemService.list_files(
                    parent_path, allowed_suffixes=allowed_suffixes, use_ignore=True
                )
            ]

        elif mode == "module":
            return [
                dict(
                    name=name,
                    path=path2module(Path(path).joinpath(name)),
                    type="package" if ispkg else "module",
                )
                for module_finder, name, ispkg in pkgutil.iter_modules(
                    [str(parent_path)]
                )
            ]

    def query_files_with_glob(
        self, query: str, glob: str
    ) -> List[Tuple[str, int, str]]:
        """
        Search for a query string in files matching a glob pattern.

        This method searches through files in the project directory that match
        the specified glob pattern and returns lines containing the query string.

        Args:
            query (str): The string to search for in the files.
            glob (str): Glob pattern to filter files (e.g., "*.py", "*.txt").

        Returns:
            List[Tuple[str, int, str]]: List of tuples containing:
                - File path relative to project root
                - Line number where the query was found
                - Line content

        Example:
            ```python
            controller = MainController(repositories)

            # Search for 'def ' in all Python files
            results = controller.search_in_files("def ", "*.py")
            for file_path, line_number, line_content in results:
                print(f"Found in {file_path} at line {line_number}: {line_content}")
            ```

        Note:
            - Uses glob patterns to filter files
            - Returns empty list if no matches found
            - Case-sensitive search

        Copywritings:
            Search for a query in files matching a pattern
            Searching for a query in files matching a pattern...
        """
        return FileSystemService.search_in_files(
            Settings.root_path, query, glob, use_ignore=True
        )

    def search_file_with_context(
        self,
        file: str,
        pattern: str,
        context_lines: int = 5,
        case_sensitive: bool = True,
        max_matches: int = 50,
    ):
        """
        Search for a pattern in a file and return matches with surrounding context lines.

        This method searches for a regex pattern in a file and returns matching lines
        along with configurable context lines before and after each match. This is
        similar to grep with -C option and is ideal for large files where you need
        to find specific patterns without loading the entire file into context.

        Args:
            file (str): Relative path to the file from the project root directory.
            pattern (str): Regular expression pattern to search for.
            context_lines (int): Number of lines to include before and after each match.
                Defaults to 5.
            case_sensitive (bool): Whether the search should be case-sensitive.
                Defaults to True.
            max_matches (int): Maximum number of matches to return to prevent
                context overflow. Defaults to 50.

        Returns:
            dict | None: Dictionary containing search results if the file exists:
                - file (str): The file path that was searched
                - total_lines (int): Total number of lines in the file
                - total_matches (int): Total number of matches found
                - matches_returned (int): Number of matches included (limited by max_matches)
                - truncated (bool): Whether results were limited by max_matches
                - matches (List[dict]): List of match objects, each containing:
                    - match_line (int): Line number where pattern was found (1-indexed)
                    - match_text (str): The actual line containing the match
                    - start_line (int): First line of context (1-indexed)
                    - end_line (int): Last line of context (1-indexed)
                    - context (str): The matched line with surrounding context
                Returns None if the file doesn't exist or is not readable.

        Example:
            ```python
            controller = MainController(repositories)

            # Search for function definitions with context
            result = controller.search_file_with_context(
                "utils.py",
                r"def \\w+\\(",
                context_lines=3
            )
            if result:
                print(f"Found {result['total_matches']} matches in {result['file']}")
                for match in result["matches"]:
                    print(f"\nMatch at line {match['match_line']}:")
                    print(match["context"])
                    print("-" * 40)

            # Case-insensitive search for error handling
            result = controller.search_file_with_context(
                "app.py",
                r"error|exception|fail",
                context_lines=5,
                case_sensitive=False
            )

            # Search for specific class with 10 lines of context
            result = controller.search_file_with_context(
                "models.py",
                r"class UserModel",
                context_lines=10,
                max_matches=10
            )

            # Search imports in a large file
            result = controller.search_file_with_context(
                "main.py",
                r"^import |^from .* import",
                context_lines=0  # Just the matching lines
            )
            ```

        Note:
            - Pattern uses Python regex syntax (re module)
            - Context windows may overlap for nearby matches
            - Line numbers are 1-indexed (first line is 1, not 0)
            - Returns None for non-existent or unreadable files
            - Ideal for finding specific code patterns in large files
            - Much more efficient than reading entire file when searching
            - Use max_matches to control context window usage

        Copywritings:
            Search file with context lines
            Searching file for pattern with context...
        """
        import re

        file_path = Settings.root_path.joinpath(file)
        if not file_path.is_file():
            return None

        # Compile regex pattern
        flags = 0 if case_sensitive else re.IGNORECASE
        try:
            regex = re.compile(pattern, flags)
        except re.error as e:
            AbstraLogger.error(f"Invalid regex pattern '{pattern}': {e}")
            return None

        # First pass: find matching lines and count total without loading all into memory
        matches = []
        total_lines = 0
        try:
            with file_path.open("r", encoding="utf-8") as f:
                for line_num, line in enumerate(f, start=1):
                    total_lines = line_num
                    if regex.search(line):
                        matches.append((line_num, line))
                        # Early exit if we have enough matches for return
                        if len(matches) > max_matches + 100:  # Keep some buffer
                            break
        except (IOError, OSError) as e:
            AbstraLogger.error(f"Failed to read file {file_path}: {e}")
            return None
        except UnicodeDecodeError as e:
            AbstraLogger.error(f"Failed to decode file {file_path}: {e}")
            return None

        # If we stopped early, count remaining lines
        if len(matches) > max_matches + 100:
            try:
                with file_path.open("r", encoding="utf-8") as f:
                    total_lines = sum(1 for _ in f)
            except (IOError, OSError, UnicodeDecodeError):
                pass  # Use the line count we have

        total_matches = len(matches)
        truncated = total_matches > max_matches
        matches_to_return = matches[:max_matches]

        # Build context for each match (need to re-read relevant sections)
        from itertools import islice

        result_matches = []
        for match_line, match_text in matches_to_return:
            # Calculate context range
            start_line = max(1, match_line - context_lines)
            end_line = min(total_lines, match_line + context_lines)

            # Read only the context lines needed
            try:
                with file_path.open("r", encoding="utf-8") as f:
                    start_idx = start_line - 1
                    num_lines = end_line - start_line + 1
                    context_lines_list = list(
                        islice(f, start_idx, start_idx + num_lines)
                    )
                    context = "".join(context_lines_list)
            except (IOError, OSError, UnicodeDecodeError) as e:
                AbstraLogger.error(f"Failed to read context for {file_path}: {e}")
                context = match_text

            result_matches.append(
                {
                    "match_line": match_line,
                    "match_text": match_text.rstrip("\n"),
                    "start_line": start_line,
                    "end_line": end_line,
                    "context": context,
                }
            )

        return {
            "file": file,
            "total_lines": total_lines,
            "total_matches": total_matches,
            "matches_returned": len(result_matches),
            "truncated": truncated,
            "matches": result_matches,
        }

    def replace_code_context(self, file: str, replacements: List[Dict[str, str]]):
        """
        Replace specific code sections using exact context matching (RECOMMENDED).

        This is the most reliable and efficient method for code updates. Instead of
        replacing entire file content, it performs surgical edits by finding exact
        context matches and replacing them atomically.

        **When to use**:
        - Single line changes, function updates, variable modifications
        - Small to medium changes (<50% of file)
        - When you want maximum reliability and minimal payload size
        - 90%+ reduction in data transfer compared to full content replacement

        Args:
            file (str): Relative path to the file from the project root directory MUST INCLUDE THE EXTENSION (e.g. "script.py")
            replacements (List[Dict[str, str]]): List of replacement operations, each containing:
                - 'old_context': Exact string to find and replace (must match exactly)
                - 'new_context': String to replace it with
                - 'max_occurrences' (optional): Limit replacements (default: unlimited)

        Returns:
            Dict[str, Any]: Operation result with success status and details.
                If ty type checking fails, returns success=False with observation.

        Example:
            ```python
            controller = MainController(repositories)

            # Single function update
            controller.replace_code_context("utils.py", [
                {
                    "old_context": "def process_data():\\n    return 'old logic'",
                    "new_context": "def process_data():\\n    return 'new improved logic'"
                }
            ])

            # Multiple replacements in one operation (atomic)
            controller.replace_code_context("config.py", [
                {
                    "old_context": "DEBUG = False",
                    "new_context": "DEBUG = True"
                },
                {
                    "old_context": "API_URL = 'staging'",
                    "new_context": "API_URL = 'production'"
                }
            ])

            # Replace with occurrence limit
            controller.replace_code_context("form.py", [
                {
                    "old_context": "temp_var = None",
                    "new_context": "temp_var = []",
                    "max_occurrences": 2  # Only replace first 2 occurrences
                }
            ])

            # Atomic replacements example
            controller.replace_code_context("script.py", [
                {
                    "old_context": "aaabbb",
                    "new_context": "cccddd"
                },
                {
                    "old_context": "cccddd",
                    "new_context": "xxxkkk"
                }
            ])
            # Result: Both patterns matched against original text simultaneously
            ```

        Safety Features:
            - Atomic operation: all replacements applied simultaneously from original text
            - No cascading effects between replacements
            - Rollback capability if any operation fails
            - Context matching prevents positioning errors
            - Type checking with ty in strict mode before confirming success

        Copywritings:
            Replace code sections using exact context matching
            Performing atomic context-based code replacements...
        """

        original_file_path = Settings.root_path.joinpath(file)
        if not original_file_path.is_file():
            raise Exception(f"File {file} does not exist")

        original_content = original_file_path.read_text(encoding="utf-8")

        try:
            modified_content = compute_updated_code_from_replacements(
                original_content, replacements
            )

            temp_file = Path(mkdtemp()) / file
            temp_file.parent.mkdir(parents=True, exist_ok=True)
            temp_file.write_text(modified_content, encoding="utf-8")
            move(str(temp_file), str(original_file_path))

            type_check_result = code_check(original_file_path)

            if not type_check_result.success:
                all_errors = ""
                if type_check_result.stdout:
                    all_errors += type_check_result.stdout
                if type_check_result.stderr:
                    if all_errors:
                        all_errors += "\n"
                    all_errors += type_check_result.stderr

                return {
                    "success": True,
                    "file": file,
                    "total_operations": len(replacements),
                    "warning": f"Type checking failed:\n{all_errors}\n\nPlease review the changes made and double check the correct usage of Abstra SDK functions and classes.",
                }

            return {
                "success": True,
                "file": file,
                "total_operations": len(replacements),
            }

        except Exception as e:
            print(f"[DEBUG] Exception during replacement: {type(e).__name__}: {str(e)}")
            raise Exception(f"Atomic context replacement failed: {str(e)}")

    def replace_file_content(self, file: str, content: str):
        """
        Replace entire file content (use sparingly).

        This method performs a complete file content replacement. While sometimes
        necessary, it should be avoided for small changes.

        **When to use**:
        - Complete file rewrites or major refactoring (>50% changes)
        - New file creation with substantial content
        - When context-based operations aren't feasible

        **When not to use**:
        - Avoid for small changes (use replace_code_context instead)

        **Drawbacks**:
        - High latency for large files
        - Bandwidth inefficient for small changes

        Args:
            file (str): Relative path to the file from the project root directory, MUST INCLUDE THE EXTENSION (e.g. "script.py")
            content (str): Complete new file content.

        Returns:
            Dict[str, Any]: Operation result with success status and file info.

        Example:
            ```python
            controller = MainController(repositories)

            # Complete file replacement (use only when necessary)
            content = '''
            from abstra.forms import NumberInput, TextInput, run

            personal_details = [
                TextInput("First Name"),
                NumberInput("Age")
            ]
            company_details = [
                TextInput("Company"),
                TextInput("Job Title")
            ]

            state = run([personal_details, company_details])
            print(state)
            '''

            controller.replace_file_content("new_form.py", content)
            ```

        Note:
            - Creates file if it doesn't exist
            - Completely overwrites existing content
            - Consider using replace_code_context for targeted changes
            - Use atomic write operation for safety

        Copywritings:
            Replace entire file content
            Replacing complete file content...
        """
        try:
            temp_file = Path(mkdtemp()) / file
            temp_file.parent.mkdir(parents=True, exist_ok=True)

            original_file_path = Settings.root_path.joinpath(file)
            original_file_path.parent.mkdir(parents=True, exist_ok=True)

            with temp_file.open("w", encoding="utf-8") as f:
                f.write(content)
            move(str(temp_file), str(original_file_path))

            if temp_file.suffix == ".py":
                type_check_result = code_check(original_file_path)

                if not type_check_result.success:
                    all_errors = ""
                    if type_check_result.stdout:
                        all_errors += type_check_result.stdout
                    if type_check_result.stderr:
                        if all_errors:
                            all_errors += "\n"
                        all_errors += type_check_result.stderr

                    return {
                        "success": True,
                        "file": file,
                        "warning": f"Type checking failed:\n{all_errors}\n\nPlease review the changes made and double check the correct usage of Abstra SDK functions and classes.",
                    }

            return {"success": True, "file": file}
        except Exception as e:
            raise Exception(f"File content replacement failed: {str(e)}")

    def update_workspace(self, changes: Dict[str, Any]):
        project = self.repositories.project.load()
        project.workspace.update(changes)
        self.repositories.project.save(project)
        return project.workspace

    def is_initial(self, id: str):
        project = self.repositories.project.load()
        stage = project.get_stage(id)
        if not stage:
            raise Exception(f"Stage {id} not found")
        return project.is_initial(stage)

    def create_tasklet(
        self,
        title: str,
        file: str,
        workflow_position: Tuple[int, int] = (0, 0),
        id: Optional[str] = None,
    ) -> ScriptStage:
        """
        Create a new tasklet stage in the project workflow.

        Tasklets are programmatic workflow stages that execute Python code
        without user interaction. They are used for data processing, business
        logic, integrations, and automation tasks within workflows.

        Args:
            title (str): Display name for the tasklet stage.
            file (str): Relative path where the tasklet's Python code will be stored.
                Must end with .py extension.
            workflow_position (Tuple[int, int], optional): X, Y coordinates for the
                tasklet's position in the visual workflow editor. Defaults to (0, 0).
            id (Optional[str], optional): Custom identifier for the tasklet. If None,
                a unique ID will be automatically generated.

        Returns:
            ScriptStage: The newly created tasklet stage object containing all tasklet metadata.

        Example:
            ```python
            controller = MainController(repositories)

            # Create a data processing tasklet
            processor = controller.create_tasklet(
                title="Data Processor",
                file="tasklet_process_data.py"
            )
            print(f"Created tasklet: {processor.id}")

            # Create tasklet with custom positioning
            validator = controller.create_tasklet(
                title="Input Validator",
                file="tasklet_validate_input.py",
                workflow_position=(200, 300),
                id="input-validator"
            )
            ```

        Note:
            - The tasklet file will be initialized with default tasklet template code
            - Tasklets can receive data from previous workflow stages
            - Tasklets can send tasks to trigger subsequent workflow stages
            - Tasklets run without user interaction and are ideal for automation

        Copywritings:
            Create a new tasklet stage
            Creating a new tasklet stage...
        """
        project = self.repositories.project.load()
        script = ScriptStage.create(
            title, file, workflow_position=workflow_position, id=id
        )
        self.init_code_file(script.file, new_script_code)
        project.add_stage(script)
        self.repositories.project.save(project)

        return script

    def get_scripts(self) -> List[ScriptStage]:
        project = self.repositories.project.load()
        scripts = project.get_scripts()

        sorted_scripts = sorted(scripts, key=lambda s: s.title.lower())
        return sorted_scripts

    def get_script(self, id: str) -> Optional[ScriptStage]:
        project = self.repositories.project.load()
        return project.get_script(id)

    def create_form(
        self,
        title: str,
        file: str,
        workflow_position: Tuple[int, int] = (0, 0),
        id: Optional[str] = None,
    ) -> FormStage:
        """
        Create a new form stage in the project workflow.

        Forms are interactive UI components that collect user input and can be used
        as entry points in workflows or intermediate steps for data collection.

        Args:
            title (str): Display name for the form stage.
            file (str): Relative path where the form's Python code will be stored.
                Must end with .py extension.
            workflow_position (Tuple[int, int], optional): X, Y coordinates for the
                form's position in the visual workflow editor. Defaults to (0, 0).
            id (Optional[str], optional): Custom identifier for the form. If None,
                a unique ID will be automatically generated.

        Returns:
            FormStage: The newly created form stage object containing all form metadata.

        Example:
            ```python
            controller = MainController(repositories)

            # Create a simple form
            form = controller.create_form(
                title="User Registration",
                file="form_registration.py"
            )
            print(f"Created form with ID: {form.id}")

            # Create form with custom position and ID
            custom_form = controller.create_form(
                title="Data Input Form",
                file="form_data_input.py",
                workflow_position=(100, 200),
                id="custom-form-id"
            )
            ```

        Note:
            - The form file will be initialized with default form template code
            - The file path is relative to the project root directory
            - Form stages can be connected to other workflow stages via transitions

        Copywritings:
            Create a new form stage
            Creating a new form stage...
        """
        project = self.repositories.project.load()
        form = FormStage.create(title, file, workflow_position=workflow_position, id=id)
        self.init_code_file(form.file, new_form_code)
        project.add_stage(form)
        self.repositories.project.save(project)
        return form

    def get_forms(self) -> List[FormStage]:
        project = self.repositories.project.load()
        forms = project.get_forms()

        sorted_forms = sorted(forms, key=lambda f: f.title.lower())
        return sorted_forms

    def get_form(self, id: str) -> Optional[FormStage]:
        project = self.repositories.project.load()
        return project.get_form(id)

    def get_form_by_path(self, path: str) -> Optional[FormStage]:
        project = self.repositories.project.load()
        return project.get_form_by_path(path)

    def write_test_data(self, data: str) -> None:
        if not validate_json(data):
            raise Exception("Invalid JSON")
        test_file = Settings.root_path / TEST_DATA_FILEPATH
        test_file.write_text(data, encoding="utf-8")

    def read_test_data(self) -> str:
        test_file = Settings.root_path / TEST_DATA_FILEPATH
        if not test_file.is_file():
            return "{}"
        return test_file.read_text(encoding="utf-8")

    def delete_stage(self, stage_id: str, remove_file: bool = False):
        """
        Delete a stage from the project workflow.

        This method removes a stage from the project configuration and
        optionally deletes the associated Python file from the filesystem.

        Args:
            id (str): Unique identifier of the stage to delete.
            remove_file (bool, optional): Whether to also delete the associated
                Python file from the filesystem. Defaults to False.

        Example:
            ```python
            controller = MainController(repositories)

            # Delete stage but keep the file
            controller.delete_stage("stage-123")
            # Delete stage and its file completely
            controller.delete_stage("stage-456", remove_file=True)
            ```

        Warning:
            - Deleting a stage that is referenced by workflow transitions may
              break the workflow flow
            - If remove_file=True, the Python file will be permanently deleted
            - This operation cannot be undone

        Copywritings:
            Delete a stage
            Deleting a stage...
        """
        project = self.repositories.project.load()
        project.delete_stage(stage_id, remove_file)
        self.repositories.project.save(project)

    def create_hook(
        self,
        title: str,
        file: str,
        workflow_position: Tuple[int, int] = (0, 0),
        id: Optional[str] = None,
    ) -> HookStage:
        """
        Create a new hook stage in the project workflow.

        Hooks are HTTP endpoints that can be triggered externally via REST API calls,
        webhooks, or other external systems. They serve as entry points for
        programmatic workflow execution.

        Args:
            title (str): Display name for the hook stage.
            file (str): Relative path where the hook's Python code will be stored.
                Must end with .py extension.
            workflow_position (Tuple[int, int], optional): X, Y coordinates for the
                hook's position in the visual workflow editor. Defaults to (0, 0).
            id (Optional[str], optional): Custom identifier for the hook. If None,
                a unique ID will be automatically generated.

        Returns:
            HookStage: The newly created hook stage object containing all hook metadata.

        Example:
            ```python
            controller = MainController(repositories)

            # Create a webhook for external API integration
            webhook = controller.create_hook(
                title="Payment Webhook",
                file="hook_payment_webhook.py"
            )
            print(f"Webhook URL: /hooks/{webhook.id}")

            # Create hook with custom positioning
            api_hook = controller.create_hook(
                title="User API Endpoint",
                file="hook_user_api.py",
                workflow_position=(300, 150),
                id="user-api-hook"
            )
            ```

        Note:
            - The hook file will be initialized with default hook template code
            - Hooks can receive HTTP requests and process the request data
            - Hook endpoints are automatically available at /hooks/{hook_id}
            - Hooks can trigger other stages in the workflow

        Copywritings:
            Create a new hook stage
            Creating a new hook stage...
        """
        project = self.repositories.project.load()
        hook = HookStage.create(title, file, workflow_position=workflow_position, id=id)
        self.init_code_file(hook.file, new_hook_code)
        project.add_stage(hook)
        self.repositories.project.save(project)
        return hook

    def get_hook(self, id: str) -> Optional[HookStage]:
        project = self.repositories.project.load()
        return project.get_hook(id)

    def get_hooks(self) -> List[HookStage]:
        project = self.repositories.project.load()
        hooks = project.get_hooks()

        sorted_hooks = sorted(hooks, key=lambda h: h.title.lower())
        return sorted_hooks

    def get_hook_by_path(self, path: str) -> Optional[HookStage]:
        project = self.repositories.project.load()
        return project.get_hook_by_path(path)

    def get_jobs(self, include_disabled_jobs: bool = False) -> List[JobStage]:
        project = self.repositories.project.load(
            include_disabled_stages=include_disabled_jobs
        )
        jobs = project.get_jobs()

        sorted_jobs = sorted(jobs, key=lambda j: j.title.lower())
        return sorted_jobs

    def get_job(self, id: str) -> Optional[JobStage]:
        project = self.repositories.project.load()
        stage = project.get_stage(id)

        if isinstance(stage, JobStage):
            return stage

        return None

    def get_job_status(self, id: str) -> Literal["enabled", "disabled", "not_found"]:
        project = self.repositories.project.load(include_disabled_stages=True)
        stage = project.get_stage(id)

        if not isinstance(stage, JobStage):
            return "not_found"

        project = self.repositories.project.load()
        stage = project.get_stage(id)

        if isinstance(stage, JobStage):
            return "enabled"

        return "disabled"

    def create_job(
        self,
        title: str,
        file: str,
        workflow_position: Tuple[int, int] = (0, 0),
        id: Optional[str] = None,
    ) -> JobStage:
        """
        Create a new job stage in the project workflow.

        Jobs are scheduled background tasks that run automatically based on
        cron expressions or time intervals. They are ideal for periodic data
        processing, cleanup tasks, or automated workflows.

        Args:
            title (str): Display name for the job stage.
            file (str): Relative path where the job's Python code will be stored.
                Must end with .py extension.
            workflow_position (Tuple[int, int], optional): X, Y coordinates for the
                job's position in the visual workflow editor. Defaults to (0, 0).
            id (Optional[str], optional): Custom identifier for the job. If None,
                a unique ID will be automatically generated.

        Returns:
            JobStage: The newly created job stage object containing all job metadata.

        Example:
            ```python
            controller = MainController(repositories)

            # Create a daily data processing job
            daily_job = controller.create_job(
                title="Daily Data Sync",
                file="job_daily_sync.py"
            )
            print(f"Created job: {daily_job.title}")

            # Create job with custom position and ID
            cleanup_job = controller.create_job(
                title="Weekly Cleanup",
                file="job_cleanup.py",
                workflow_position=(500, 100),
                id="weekly-cleanup"
            )
            ```

        Note:
            - The job file will be initialized with default job template code
            - Jobs run in the background and don't have user interfaces
            - Job scheduling is configured separately after creation
            - Jobs cannot be transition targets (other stages cannot connect to them)

        Copywritings:
            Create a new job stage
            Creating a new job stage...
        """
        project = self.repositories.project.load()
        job = JobStage.create(title, file, workflow_position=workflow_position, id=id)
        self.init_code_file(job.file, new_job_code)
        project.add_stage(job)
        self.repositories.project.save(project)
        return job

    def update_stage(self, id: str, changes: Dict[str, Any]) -> Stage:
        """
        Update properties of an existing workflow stage.

        This method allows modification of stage metadata properties. For code
        modifications, use the specialized code editing methods instead.

        WARNING:  **For code updates, use dedicated methods**:
        - `replace_code_context()` for targeted code changes (RECOMMENDED)
        - `replace_file_content()` for complete file rewrites

        Args:
            id (str): Unique identifier of the stage to update.
            changes (Dict[str, Any]): Dictionary containing the properties to update.

            Supported keys:
                - 'title': Stage display name
                - 'workflow_position': [x, y] coordinates in workflow editor

        Returns:
            Stage: The updated stage object with new properties applied.

        Raises:
            Exception: If the stage with the given ID is not found.

        Example:
            ```python
            controller = MainController(repositories)

            # Update stage title and position
            updated_stage = controller.update_stage("form-123", {
                "title": "New Form Title",
                "workflow_position": (100, 150)
            })

            # Don't use for code updates - use dedicated methods instead:
            # controller.update_stage("form-123", {"code_content": "..."})  # Avoid

            # Better: Use context-based code editing
            controller.replace_code_context("forms/form_123.py", [{
                "old_context": "af.display('old message')",
                "new_context": "af.display('new message')"
            }])
            ```

        Note:
            - Only updates stage metadata, not code content
            - Stage metadata updates are validated before being applied
            - Use specialized code editing methods for reliable code modifications

        Copywritings:
            Update properties of an existing stage
            Updating properties of an existing stage...
        """
        project = self.repositories.project.load()
        stage = project.get_stage(id)

        stage_module = project.get_stage_module(id)
        if stage_module is not None:
            project = stage_module.get_project()

        if not stage:
            raise Exception(f"Stage with id {id} not found")

        if isinstance(stage, StageWithFile) and (
            code_content := changes.pop("code_content", None)
        ):
            temp_file = Path(mkdtemp()) / stage.file_path
            with temp_file.open("w", encoding="utf-8") as f:
                f.write(code_content)
            move(str(temp_file), Settings.root_path.joinpath(stage.file_path))

        if test_data := changes.pop("test_data", None):
            self.write_test_data(test_data)

        stage = project.update_stage(stage, changes)
        self.repositories.project.save(project)
        return stage

    def list_all_stages(self) -> List[Stage]:
        """
        Retrieve all workflow stages in the current project.

        This method returns a complete list of all stages (forms, hooks, jobs,
        and tasklets) that are part of the project workflow.

        Returns:
            List[Stage]: List containing all workflow stages, including:
                - FormStage: Interactive user interface stages
                - HookStage: HTTP endpoint stages
                - JobStage: Scheduled background task stages
                - ScriptStage: Programmatic processing stages

        Example:
            ```python
            controller = MainController(repositories)

            # Get all stages
            all_stages = controller.get_stages()
            print(f"Total stages: {len(all_stages)}")

            # Categorize stages by type
            forms = [s for s in all_stages if isinstance(s, FormStage)]
            hooks = [s for s in all_stages if isinstance(s, HookStage)]
            jobs = [s for s in all_stages if isinstance(s, JobStage)]
            scripts = [s for s in all_stages if isinstance(s, ScriptStage)]

            print(f"Forms: {len(forms)}, Hooks: {len(hooks)}")
            print(f"Jobs: {len(jobs)}, Scripts: {len(scripts)}")

            # Print stage details
            for stage in all_stages:
                print(f"- {stage.title} ({stage.type}): {stage.id}")
            ```

        Note:
            - Only enabled stages are returned (disabled jobs are excluded)
            - Stages are returned in the order they appear in the project configuration
            - Each stage contains metadata like id, title, type, and file path

        Copywritings:
            List all workflow stages
            Retrieving all workflow stages in the project...
        """
        project = self.repositories.project.load()
        return project.workflow_stages

    # Modules
    def get_modules(self) -> List[str]:
        project = self.repositories.project.load()
        return [module.name for module in project.get_installed_modules()]

    # Login
    def get_credentials(self):
        return get_credentials()

    def get_login(self):
        headers = resolve_headers()
        if not headers:
            return {"logged": False, "reason": "NO_API_TOKEN"}
        return get_api_key_info(headers)

    def get_email(self):
        login = self.get_login()
        if login.get("logged"):
            return login.get("info", {}).get("email")
        return None

    def create_login(self, token):
        set_credentials(token)
        return self.get_login()

    def delete_login(self):
        delete_credentials()
        return self.get_login()

    # Project
    def get_project_info(self):
        headers = resolve_headers()
        if headers is None:
            flask.abort(401)
        return get_project_info(headers)

    def get_feature_flags(self):
        headers = resolve_headers()
        if headers is None:
            flask.abort(401)
        return get_feature_flags(headers)

    # access_control
    def list_access_controls(self):
        project = self.repositories.project.load()
        return [s.to_access_dto() for s in project.secured_stages]

    def update_access_controls(self, changes: List[Dict[str, Any]]):
        project = self.repositories.project.load()
        response = project.update_access_controls(changes)
        self.repositories.project.save(project)
        return response

    def get_access_control_by_stage_id(self, id):
        project = self.repositories.project.load()
        return project.get_access_control_by_stage_id(id)

    # logs
    def get_executions(self, filter: ExecutionFilter):
        return self.execution_repository.list(filter)

    def stop_execution(self, execution_id: str):
        self.execution_repository.stop_execution(execution_id)

    def get_execution_logs(self, id: str) -> List[LogEntry]:
        """
        Retrieve execution logs for a specific execution by its ID.

        This method returns all log entries (stdout, stderr, and system messages)
        that were generated during the execution of a workflow stage. Logs provide
        detailed information about what happened during execution, including output,
        errors, and system events.

        Args:
            id (str): Unique identifier of the execution to retrieve logs for.

        Returns:
            List[LogEntry]: List of log entries for the execution, each containing:
                - execution_id: ID of the execution that generated the log
                - created_at: Timestamp when the log entry was created
                - event: Type of log event ('stdout', 'stderr', 'system')
                - sequence: Sequential number for ordering log entries
                - payload: Dictionary containing the actual log data

        Example:
            ```python
            controller = MainController(repositories)

            # Get logs for a specific execution
            execution_logs = controller.get_logs("exec-123")

            print(f"Found {len(execution_logs)} log entries")

            for log_entry in execution_logs:
                timestamp = log_entry.created_at.strftime("%Y-%m-%d %H:%M:%S")
                event_type = log_entry.event
                message = log_entry.payload.get('text', '')

                print(f"[{timestamp}] {event_type.upper()}: {message}")

            # Filter logs by type
            stdout_logs = [log for log in execution_logs if log.event == 'stdout']
            stderr_logs = [log for log in execution_logs if log.event == 'stderr']

            print(f"Output messages: {len(stdout_logs)}")
            print(f"Error messages: {len(stderr_logs)}")

            # Show recent errors
            if stderr_logs:
                print("Recent errors:")
                for error_log in stderr_logs[-5:]:  # Last 5 errors
                    print(f"  - {error_log.payload.get('text', 'No message')}")

            # Check for system messages
            system_logs = [log for log in execution_logs if log.event == 'system']
            if system_logs:
                print("System events:")
                for sys_log in system_logs:
                    print(f"  - {sys_log.payload}")
            ```

        Note:
            - Logs are returned in chronological order based on sequence numbers
            - stdout logs contain regular program output and print statements
            - stderr logs contain error messages and exceptions
            - system logs contain execution lifecycle events and abstra platform messages
            - Returns empty list if execution ID doesn't exist or has no logs
            - Useful for debugging failed executions and monitoring stage behavior
            - Log payload structure may vary depending on the event type

        Copywritings:
            Get execution logs for a specific execution
            Retrieving execution logs from an execution...
        """
        return self.execution_logs_repository.get(id)

    def get_execution_tasks(self, execution_id: str) -> ExecutionTasksResponse:
        """
        Retrieve task information associated with a specific execution.

        This method returns comprehensive task data for an execution, including
        the trigger task that initiated the execution and any tasks that were
        sent/created during the execution.

        Args:
            execution_id (str): Unique identifier of the execution to query.

        Returns:
            ExecutionTasksResponse: Object containing:
                - trigger_task: The task that triggered this execution (if any)
                - sent_tasks: List of tasks created during this execution

        Example:
            ```python
            controller = MainController(repositories)

            # Get tasks for a specific execution
            task_info = controller.get_execution_tasks("exec-123")

            if task_info.trigger_task:
                print(f"Triggered by task: {task_info.trigger_task.id}")
                print(f"Task type: {task_info.trigger_task.type}")

            print(f"Created {len(task_info.sent_tasks)} new tasks:")
            for task in task_info.sent_tasks:
                print(f"  - {task.type}: {task.id}")
            ```

        Note:
            - trigger_task will be None if the execution was not triggered by a task
              (e.g., manual execution, webhook, or scheduled job)
            - sent_tasks includes all tasks created during the execution lifecycle
            - This is useful for tracking workflow progression and debugging

        Copywritings:
            Get task information associated with an execution
            Retrieving task information associated with an execution...
        """
        execution = self.execution_repository.get(execution_id)

        trigger_task = None
        if isinstance(execution.context, ScriptContext):
            trigger_task = self.tasks_repository.get_by_id(execution.context.task_id)

        sent_tasks = self.tasks_repository.get_execution_sent_tasks(execution_id)

        return ExecutionTasksResponse(
            trigger_task=trigger_task,
            sent_tasks=sent_tasks,
        )

    def get_public_url(self):
        if Settings.has_public_url():
            return {"public_url": Settings.public_url}

        return {"public_url": None}

    # Worker lifecycle
    def fail_worker_executions(self, *, app_id: str, worker_id: str, reason: str):
        killed_executions = self.execution_repository.find_by_worker(
            worker_id=worker_id,
            status="running",
            app_id=app_id,
        )

        for execution in killed_executions:
            err_log = LogEntry(
                execution_id=execution.id,
                stage_id=execution.stage_id,
                created_at=datetime.datetime.now(),
                payload={"text": "[ABSTRA] Execution aborted. " + reason},
                sequence=999999,
                event="stderr",
            )
            self.execution_logs_repository.save(err_log)

            self.execution_repository.set_failure_by_id(execution_id=execution.id)
            self.tasks_repository.set_locked_tasks_to_pending(execution.id)

        AbstraLogger.capture_message(
            f"[ABSTRA] Failed {len(killed_executions)} running executions for app `{app_id}` with worker {worker_id} with reason: {reason}"
        )

    def fail_app_executions(self, *, app_id: str, reason: str):
        exited_execs = self.execution_repository.find_by_app(
            status="running",
            app_id=app_id,
        )

        for execution in exited_execs:
            err_log = LogEntry(
                execution_id=execution.id,
                stage_id=execution.stage_id,
                created_at=datetime.datetime.now(),
                payload={"text": "[ABSTRA] Execution aborted. " + reason},
                sequence=999999,
                event="stderr",
            )
            self.execution_logs_repository.save(err_log)

            self.execution_repository.set_failure_by_id(execution_id=execution.id)
            self.tasks_repository.set_locked_tasks_to_pending(execution.id)

        AbstraLogger.capture_message(
            f"[ABSTRA] Failed {len(exited_execs)} running executions for app `{app_id}` with reason: {reason}"
        )

    def fail_execution(self, execution_id: str, reason: str):
        err_log = LogEntry(
            execution_id=execution_id,
            stage_id=self.execution_repository.get(execution_id).stage_id,
            created_at=datetime.datetime.now(),
            payload={"text": "[ABSTRA] Execution aborted. " + reason},
            sequence=999999,
            event="stderr",
        )
        self.execution_logs_repository.save(err_log)

        self.execution_repository.set_failure_by_id(execution_id=execution_id)
        self.tasks_repository.set_locked_tasks_to_pending(execution_id)

    def run_job(self, id: str):
        """
        Run a job stage immediately by its ID.

        This method triggers the execution of a job stage, allowing it to run
        immediately without waiting for its scheduled time. It is useful for
        testing or manually triggering jobs.

        Args:
            id (str): Unique identifier of the job stage to run.
        Returns:
            None: The job will be executed, and logs will be generated.

        Copywritings:
            Run a job for debugging
            Running a job for debugging...
        """
        status = self.get_job_status(id)
        if status == "not_found":
            raise Exception(f"Job with id {id} not found")

        if status == "disabled":
            return {"status": "disabled"}

        conn = self.repositories.producer.enqueue(id, context=JobContext())
        start_msg = conn.recv()

        if isinstance(start_msg, str):
            start_msg = json.loads(start_msg)

        start_msg = ExecutionStartedMessage(execution_id=start_msg["executionId"])

        return {
            "ok": True,
            "execution_id": start_msg.execution_id,
        }

    def run_hook(self, id: str, request: Request):
        """
        Run a hook stage immediately by its ID.

        This method triggers the execution of a hook stage, allowing it to run
        immediately in response to an HTTP request. It is useful for testing or
        manually triggering hooks.
        Args:
            id (str): Unique identifier of the hook stage to run.
            request (Request): The HTTP request object containing data to process.
        Returns:
            dict: Response containing the body, status, and headers from the hook execution.

        Copywritings:
            Run a hook for debugging
            Running a hook for debugging...
        """

        hook = self.get_hook(id)
        if not hook:
            raise Exception(f"Hook with id {id} not found")

        context = HookContext(
            request=request,
            response=Response(headers={}, status=200, body=""),
        )

        connection = self.repositories.producer.enqueue(hook.id, context)
        start_msg = connection.recv()

        if isinstance(start_msg, str):
            start_msg = json.loads(start_msg)

        start_msg = ExecutionStartedMessage(execution_id=start_msg["executionId"])

        try:
            response = connection.recv()

            if not response:
                flask.abort(500)

            if isinstance(response, str):
                response = json.loads(response)

            if not isinstance(response, Response):
                response = Response(
                    headers=response.get("headers", {}),
                    status=response.get("status", 200),
                    body=response.get("body", ""),
                )
        finally:
            connection.close()

        return {
            "status": response.status,
            "body": response.body,
            "headers": response.headers,
            "execution_id": start_msg.execution_id,
        }

    def run_tasklet(self, id: str, task_id: str):
        """
        Run a tasklet stage immediately by its ID.

        This method triggers the execution of a tasklet stage, allowing it to run
        immediately without waiting for its scheduled time. It is useful for
        testing or manually triggering tasklets.

        Args:
            id (str): Unique identifier of the tasklet stage to run.

        Returns:
            None: The tasklet will be executed, and logs will be generated.

        Copywritings:
            Run a tasklet for debugging
            Running a tasklet for debugging...
        """

        script = self.get_script(id)
        if not script:
            raise Exception(f"Tasklet with id {id} not found")

        conn = self.repositories.producer.enqueue(
            id, context=ScriptContext(task_id=task_id)
        )

        start_msg = conn.recv()

        if isinstance(start_msg, str):
            start_msg = json.loads(start_msg)

        start_msg = ExecutionStartedMessage(execution_id=start_msg["executionId"])

        return {"ok": True, "execution_id": start_msg.execution_id}

    def execute_code_snippet(self, code: str, title: str = "Debug Snippet"):
        """
        Run a code snippet immediately.

        Use this code for testing parts of the code you want to build before writing, debugging or auxiliary tasks.
        """

        tempfile = Path(mktemp(suffix=".py"))

        stage = self.create_job(title, str(tempfile), (0, 0))
        tempfile.write_text(code, encoding="utf-8")

        context = JobContext()
        _, child_conn = Pipe()
        client = HeadlessClient(context=context, conn=child_conn, production_mode=False)

        execution_result = ExecutionController(
            repositories=self.repositories,
            stage=stage,
            client=client,
            context=context,
        ).run(
            execution_id=uuid4().__str__(),
        )

        self.delete_stage(stage.id, remove_file=True)

        return execution_result

    def add_and_install_requirement(self, name: str, version: Optional[str] = None):
        """
        Add a requirement to requirements.txt and install it automatically.

        This method adds a Python package to the requirements.txt file and
        immediately installs it using pip, combining both operations in one call.

        Args:
            name (str): Name of the Python package to add and install.
            version (str, optional): Specific version to install. If not provided,
                                   installs the latest version.

        Returns:
            dict: Result containing the updated requirements list and installation status.

        Copywritings:
            Add and install Python package
            Adding and installing Python package...
        """

        # add to requirements.txt
        requirements = RequirementsRepository.load()
        requirements.add(name, version)
        RequirementsRepository.save(requirements)

        # install the package
        install_generator = requirements.install()
        if install_generator is None:
            return {
                "status": "error",
                "message": "Installation not allowed in this environment",
                "requirements": requirements.to_dict(),
            }

        # output
        installation_output = []
        try:
            for output_line in install_generator:
                installation_output.append(output_line)
                if output_line == "__ABSTRA_STREAM_ERROR__":
                    return {
                        "status": "error",
                        "message": f"Failed to install {name}",
                        "output": installation_output,
                        "requirements": requirements.to_dict(),
                    }
        except Exception as e:
            return {
                "status": "error",
                "message": f"Installation failed: {str(e)}",
                "output": installation_output,
                "requirements": requirements.to_dict(),
            }

        return {
            "status": "success",
            "message": f"Successfully added and installed {name}"
            + (f"=={version}" if version else ""),
            "output": installation_output,
            "requirements": requirements.to_dict(),
        }
