import datetime
import pkgutil
import webbrowser
from pathlib import Path
from shutil import move
from tempfile import mkdtemp
from typing import Any, Dict, List, Literal, Optional, Tuple

import flask

from abstra_internals.cloud_api import get_api_key_info, get_project_info
from abstra_internals.consts.filepaths import TEST_DATA_FILEPATH
from abstra_internals.controllers.execution.execution import ExecutionController
from abstra_internals.controllers.execution.execution_client_form import FormClient
from abstra_internals.controllers.execution.execution_client_hook import HookClient
from abstra_internals.credentials import (
    delete_credentials,
    get_credentials,
    resolve_headers,
    set_credentials,
)
from abstra_internals.entities.execution_context import (
    FormContext,
    HookContext,
    JobContext,
    Request,
    Response,
    ScriptContext,
)
from abstra_internals.interface.cli.deploy import deploy
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
    ensure_abstraignore,
    ensure_dotenv,
    ensure_gitignore,
    new_form_code,
    new_hook_code,
    new_job_code,
    new_script_code,
)
from abstra_internals.utils.ai import AiWs
from abstra_internals.utils.file import module2path, path2module
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
        ensure_abstraignore(Settings.root_path)
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

    def deploy(self):
        self.linter_repository.update_checks()
        issues = self.linter_repository.get_blocking_checks()

        if len(issues) > 0:
            raise Exception(
                "Please fix all linter issues before deploying your project."
            )

        deploy()

    def reset_repositories(self):
        self.execution_repository.clear()
        self.tasks_repository.clear()

    def get_workspace(self) -> StyleSettingsWithSidebar:
        project = self.repositories.project.load()
        return project.get_workspace()

    def get_stage(self, id: str) -> Optional[Stage]:
        """
        Retrieve a specific workflow stage by its unique identifier.

        This method looks up and returns a single stage from the project
        based on the provided ID. The stage can be of any type (form, hook,
        job, or script).

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
                    print("This is a script stage")
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

    def read_stage_file(self, id: str) -> Optional[str]:
        """
        Read the source code of a stage's file.

        This method retrieves the content of the file associated with a specific
        workflow stage by its ID. It returns the file content as a string if the
        stage exists and has an associated file.

        Args:
            id (str): Unique identifier of the stage whose file to read.

        Returns:
            Optional[str]: The content of the stage's file if it exists, None otherwise.

        Example:
            ```python
            controller = MainController(repositories)

            # Read the source code of a specific stage
            code = controller.read_stage_file("script-456")
            if code:
                print("Stage file content:")
                print(code)
            else:
                print("Stage file not found or has no associated file")
            ```

        Note:
            - Returns None if the stage does not exist or has no file
            - The ID is case-sensitive and must match exactly

        Copywritings:
            Read the source code of a stage's file
            Reading the source code of a stage's file...
        """
        stage = self.get_stage(id)
        if isinstance(stage, StageWithFile):
            return stage.file_path.read_text()
        return None

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

    def open_file(self, file_path: str, mode: str, create_if_not_exists: bool = False):
        if mode == "module" or mode == "package":
            file_path = str(module2path(file_path, mode == "package"))
        complete_file_path = Settings.root_path.joinpath(file_path)

        if create_if_not_exists and not complete_file_path.is_file():
            complete_file_path.touch()

        webbrowser.open(complete_file_path.absolute().as_uri())

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

            # Read a Python script file
            script_content = controller.read_file("scripts/data_processor.py")
            if script_content:
                print("Script content:")
                print(script_content)
            else:
                print("Script file not found")

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

    def write_file(self, file: str, content: str):
        """
        Write content to a file in the project workspace.

        This method writes the provided text content to a specified file within the
        project directory. If the file does not exist, it will be created. If it does
        exist, its contents will be overwritten.

        Args:
            file (str): Relative path to the file from the project root directory.
                Should include the file extension.
            content (str): The text content to write to the file.

        Example:
            ```python
            controller = MainController(repositories)

            # Write a new script file
            controller.write_file("scripts/data_processor.py", "print('Hello, World!')")

            # Update an existing configuration file
            controller.write_file("config.json", '{"key": "value"}')
            ```

        Note:
            - The file will be created if it does not exist
            - Existing files will be overwritten with new content
            - Path should be relative to the project root directory

        Copywritings:
            Write content to a file
            Writing content to a file...
        """
        Settings.root_path.joinpath(file).write_text(content, encoding="utf-8")

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

            # Check script files before reading
            script_path = "scripts/data_processor.py"
            if controller.check_file(script_path):
                content = controller.read_file(script_path)
                print("Script loaded successfully")
            else:
                print(f"Script {script_path} not found")

            # Check configuration files
            config_files = ["config.json", "settings.yaml", ".env"]
            for config_file in config_files:
                if controller.check_file(config_file):
                    print(f"Found config: {config_file}")
                    break
            else:
                print("No configuration files found")

            # Directories return False
            is_file = controller.check_file("scripts")  # Returns False (directory)
            is_file = controller.check_file("scripts/")  # Returns False (directory)
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
        ignore patterns defined in .abstraignore and .gitignore files.

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

            # List only Python files in scripts directory
            python_files = controller.list_files("scripts", mode="python-file")
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
            - Respects .abstraignore and .gitignore patterns when use_ignore=True
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
        Create a new script stage in the project workflow.

        Scripts are programmatic workflow stages that execute Python code
        without user interaction. They are used for data processing, business
        logic, integrations, and automation tasks within workflows.

        Args:
            title (str): Display name for the script stage.
            file (str): Relative path where the script's Python code will be stored.
                Must end with .py extension.
            workflow_position (Tuple[int, int], optional): X, Y coordinates for the
                script's position in the visual workflow editor. Defaults to (0, 0).
            id (Optional[str], optional): Custom identifier for the script. If None,
                a unique ID will be automatically generated.

        Returns:
            ScriptStage: The newly created script stage object containing all script metadata.

        Example:
            ```python
            controller = MainController(repositories)

            # Create a data processing script
            processor = controller.create_script(
                title="Data Processor",
                file="scripts/process_data.py"
            )
            print(f"Created script: {processor.id}")

            # Create script with custom positioning
            validator = controller.create_script(
                title="Input Validator",
                file="scripts/validate_input.py",
                workflow_position=(200, 300),
                id="input-validator"
            )
            ```

        Note:
            - The script file will be initialized with default script template code
            - Scripts can receive data from previous workflow stages
            - Scripts can send tasks to trigger subsequent workflow stages
            - Scripts run without user interaction and are ideal for automation

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
        return project.scripts

    def get_script(self, id: str) -> Optional[ScriptStage]:
        project = self.repositories.project.load()
        return project.get_script(id)

    def delete_tasklet(self, id: str, remove_file: bool = False):
        """
        Delete a script stage from the project workflow.

        This method removes a script stage from the project configuration and
        optionally deletes the associated Python file from the filesystem.

        Args:
            id (str): Unique identifier of the script stage to delete.
            remove_file (bool, optional): Whether to also delete the associated
                Python file from the filesystem. Defaults to False.

        Example:
            ```python
            controller = MainController(repositories)

            # Delete script but preserve the file
            controller.delete_script("data-processor")

            # Delete script and its file completely
            controller.delete_script("validator-script", remove_file=True)
            ```

        Warning:
            - Deleting a script that is referenced by workflow transitions may
              break the workflow flow
            - If remove_file=True, the Python file will be permanently deleted
            - This operation cannot be undone

        Copywritings:
            Delete a tasklet stage
            Deleting a tasklet stage...
        """
        project = self.repositories.project.load()
        project.delete_stage(id, remove_file)
        self.repositories.project.save(project)

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
                file="forms/registration.py"
            )
            print(f"Created form with ID: {form.id}")

            # Create form with custom position and ID
            custom_form = controller.create_form(
                title="Data Input Form",
                file="forms/data_input.py",
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
        return project.forms

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

    def delete_form(self, id: str, remove_file: bool = False):
        """
        Delete a form stage from the project workflow.

        This method removes a form stage from the project configuration and
        optionally deletes the associated Python file from the filesystem.

        Args:
            id (str): Unique identifier of the form stage to delete.
            remove_file (bool, optional): Whether to also delete the associated
                Python file from the filesystem. Defaults to False.

        Example:
            ```python
            controller = MainController(repositories)

            # Delete form but keep the file
            controller.delete_form("form-123")

            # Delete form and its file completely
            controller.delete_form("form-456", remove_file=True)
            ```

        Warning:
            - Deleting a form that is referenced by workflow transitions may
              break the workflow flow
            - If remove_file=True, the Python file will be permanently deleted
            - This operation cannot be undone

        Copywritings:
            Delete a form stage
            Deleting a form stage...
        """
        project = self.repositories.project.load()
        project.delete_stage(id, remove_file)
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
                file="hooks/payment_webhook.py"
            )
            print(f"Webhook URL: /hooks/{webhook.id}")

            # Create hook with custom positioning
            api_hook = controller.create_hook(
                title="User API Endpoint",
                file="hooks/user_api.py",
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
        return project.hooks

    def get_hook_by_path(self, path: str) -> Optional[HookStage]:
        project = self.repositories.project.load()
        return project.get_hook_by_path(path)

    def delete_hook(self, id: str, remove_file: bool = False) -> None:
        """
        Delete a hook stage from the project workflow.

        This method removes a hook stage from the project configuration and
        optionally deletes the associated Python file from the filesystem.
        The hook endpoint will no longer be available after deletion.

        Args:
            id (str): Unique identifier of the hook stage to delete.
            remove_file (bool, optional): Whether to also delete the associated
                Python file from the filesystem. Defaults to False.

        Example:
            ```python
            controller = MainController(repositories)

            # Delete hook but preserve the file
            controller.delete_hook("webhook-123")

            # Delete hook and its file completely
            controller.delete_hook("api-hook-456", remove_file=True)
            ```

        Warning:
            - The hook endpoint will become inaccessible immediately
            - External systems calling this hook will receive 404 errors
            - If remove_file=True, the Python file will be permanently deleted
            - This operation cannot be undone

        Copywritings:
            Delete a hook stage
            Deleting a hook stage...
        """
        project = self.repositories.project.load()
        project.delete_stage(id, remove_file)
        self.repositories.project.save(project)

    def get_jobs(self, include_disabled_jobs: bool = False) -> List[JobStage]:
        project = self.repositories.project.load(
            include_disabled_stages=include_disabled_jobs
        )
        return project.jobs

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
                file="jobs/daily_sync.py"
            )
            print(f"Created job: {daily_job.title}")

            # Create job with custom position and ID
            cleanup_job = controller.create_job(
                title="Weekly Cleanup",
                file="jobs/cleanup.py",
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

        This method allows modification of stage properties, including metadata
        updates and code content changes. Special handling is provided for
        code content updates and test data modifications.

        Args:
            id (str): Unique identifier of the stage to update.
            changes (Dict[str, Any]): Dictionary containing the properties to update.
                Special keys:
                - 'code_content': Updates the stage's Python code file. (Always check abstra modules before creating any file)
                - 'test_data': Updates the project's test data
                - Other keys update stage metadata (title, position, etc.)

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

            # Update stage code content
            new_code = '''
            import abstra.forms as af
            af.display("Updated form content")
            '''
            controller.update_stage("form-123", {
                "code_content": new_code,
                "title": "Updated Form"
            })

            # Update test data for the project
            controller.update_stage("any-stage-id", {
                "test_data": '{"user": "test", "email": "test@example.com"}'
            })
            ```

        Note:
            - Code content updates are handled atomically using temporary files
            - Test data updates apply globally to the project
            - Stage metadata updates are validated before being applied
            - The stage file is updated only if code_content is provided

        Copywritings:
            Update properties of an existing stage
            Updating properties of an existing stage...
        """
        project = self.repositories.project.load()
        stage = project.get_stage(id)

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

    def delete_job(self, id: str, remove_file: bool = False):
        """
        Delete a job stage from the project workflow.

        This method removes a job stage from the project configuration and
        optionally deletes the associated Python file from the filesystem.
        Any scheduled executions of this job will be stopped.

        Args:
            id (str): Unique identifier of the job stage to delete.
            remove_file (bool, optional): Whether to also delete the associated
                Python file from the filesystem. Defaults to False.

        Example:
            ```python
            controller = MainController(repositories)

            # Delete job but keep the file for reference
            controller.delete_job("daily-sync-job")

            # Delete job and its file completely
            controller.delete_job("cleanup-job", remove_file=True)
            ```

        Warning:
            - The job will no longer execute on its schedule after deletion
            - Any pending job executions will be cancelled
            - If remove_file=True, the Python file will be permanently deleted
            - This operation cannot be undone

        Copywritings:
            Delete a job stage
            Deleting a job stage...
        """
        project = self.repositories.project.load()
        project.delete_stage(id, remove_file)
        self.repositories.project.save(project)

    def list_all_stages(self) -> List[Stage]:
        """
        Retrieve all workflow stages in the current project.

        This method returns a complete list of all stages (forms, hooks, jobs,
        and scripts) that are part of the project workflow.

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

    # Login
    def get_credentials(self):
        return get_credentials()

    def get_login(self):
        headers = resolve_headers()
        if not headers:
            return {"logged": False, "reason": "NO_API_TOKEN"}
        return get_api_key_info(headers)

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

    def debug_run_job(self, id: str):
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
        job = self.get_job(id)
        if not job:
            raise Exception(f"Job with id {id} not found")

        print(f"Running job {job.id} ({job.title})")

        return ExecutionController(
            repositories=self.repositories,
            stage=job,
            context=JobContext(),
        ).run()

    def debug_run_hook(self, id: str, request: Request):
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
            response=Response(
                body="",
                headers={},
                status=200,
            ),
        )

        client = HookClient(context=context)

        run_data = ExecutionController(
            repositories=self.repositories,
            stage=hook,
            client=client,
            context=context,
        ).run()

        if context.response is None or client.context.response is None:
            flask.abort(500)

        return {
            "body": client.context.response.body,
            "status": context.response.status,
            "headers": context.response.headers,
            **run_data,
        }

    def debug_run_tasklet(self, id: str, task_id: str):
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

        if not task_id:
            raise Exception(f"Tasklet with id {id} not found")

        return ExecutionController(
            repositories=self.repositories,
            stage=script,
            context=ScriptContext(task_id=task_id),
        ).run()

    def debug_run_form_with_ai(self, id, prompt: str, url_params: Dict[str, str] = {}):
        """
        Run a form stage immediately by its ID.

        This method triggers the execution of a form stage, allowing it to run
        immediately in response to user input. It is useful for testing or
        manually triggering forms.

        Args:
            id (str): Unique identifier of the form stage to run.
            url_params (dict): URL parameters to pass to the form.
            prompt (str): Prompt message to instruct the AI to fill the form.
        """

        ws = AiWs(repos=self.repositories, prompt_text=prompt, url_params=url_params)
        context = FormContext(
            request=Request(query_params=url_params, headers={}, method="GET", body=""),
        )
        form = self.get_form(id)
        if not form:
            raise Exception(f"Form with id {id} not found")

        client = FormClient(
            ws=ws,  # type: ignore
            context=context,
            production_mode=False,
        )

        return ExecutionController(
            repositories=self.repositories,
            stage=form,
            client=client,
            context=context,
        ).run()
