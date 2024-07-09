import pkgutil
import webbrowser
from pathlib import Path
from typing import Any, Dict, Generator, List, Optional, Tuple

import flask
import pkg_resources
from werkzeug.datastructures import FileStorage

from abstra_internals.cloud_api import (
    get_api_key_info,
    get_project_info,
)
from abstra_internals.controllers.workflow_engine import WorkflowEngine
from abstra_internals.controllers.workflow_interface import IWorkflowEngine
from abstra_internals.credentials import (
    delete_credentials,
    get_credentials,
    resolve_headers,
    set_credentials,
)
from abstra_internals.interface.cli.deploy import deploy
from abstra_internals.repositories import (
    authn_repository,
    env_vars_repository,
    execution_logs_repository,
    execution_repository,
    notification_repository,
    requirements_repository,
    roles_repository,
    stage_run_repository,
    users_repository,
)
from abstra_internals.repositories.authn import AuthnRepository
from abstra_internals.repositories.env_vars import EnvVarsRepository
from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.execution_logs import ExecutionLogsRepository
from abstra_internals.repositories.notifications import NotificationRepository
from abstra_internals.repositories.project.project import (
    ActionStage,
    FormStage,
    HookStage,
    JobStage,
    ProjectRepository,
    ScriptStage,
    StyleSettingsWithSidebar,
    WorkflowStage,
)
from abstra_internals.repositories.requirements import RequirementsRepository
from abstra_internals.repositories.roles import RolesRepository
from abstra_internals.repositories.stage_run import StageRunRepository
from abstra_internals.repositories.users import UsersRepository
from abstra_internals.server.controller.linters import check_linters
from abstra_internals.settings import Settings
from abstra_internals.templates import (
    ensure_abstraignore,
    ensure_gitignore,
    new_form_code,
    new_hook_code,
    new_job_code,
    new_script_code,
)
from abstra_internals.utils.dot_abstra import TEST_DATA_FILE
from abstra_internals.utils.file import (
    files_from_directory,
    get_random_filepath,
    internal_path,
    module2path,
    path2module,
)
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
    workflow_engine: IWorkflowEngine
    users_repository: UsersRepository
    roles_repository: RolesRepository
    authn_repository: AuthnRepository
    env_vars_repository: EnvVarsRepository
    stage_run_repository: StageRunRepository
    execution_repository: ExecutionRepository
    requirements_repository: RequirementsRepository
    notification_repository: NotificationRepository
    execution_logs_repository: ExecutionLogsRepository

    def __init__(self):
        ProjectRepository.initialize_or_migrate()

        requirements = requirements_repository.load()
        requirements.ensure("abstra", pkg_resources.get_distribution("abstra").version)
        requirements_repository.save(requirements)
        ensure_abstraignore(Settings.root_path)
        ensure_gitignore(Settings.root_path)

        self.workflow_engine = WorkflowEngine(
            stage_run_repository=stage_run_repository,
            execution_repository=execution_repository,
            notification_repository=notification_repository,
            execution_logs_repository=execution_logs_repository,
        )

        self.users_repository = users_repository
        self.roles_repository = roles_repository
        self.authn_repository = authn_repository
        self.env_vars_repository = env_vars_repository
        self.stage_run_repository = stage_run_repository
        self.execution_repository = execution_repository
        self.requirements_repository = requirements_repository
        self.notification_repository = notification_repository
        self.execution_logs_repository = execution_logs_repository

    def deploy(self):
        rules = check_linters()

        issues = []
        for rule in rules:
            if rule.type in ["error", "security", "bug"]:
                issues += rule.issues

        if len(issues) > 0:
            raise Exception(
                "Please fix all linter issues before deploying your project."
            )

        deploy()

    def reset_repositories(self):
        self.stage_run_repository.clear()
        self.execution_repository.clear()

    def _ensure_abstra_in_requirements(self):
        requirements = self.requirements_repository.load()
        requirements.ensure("abstra", pkg_resources.get_distribution("abstra").version)
        self.requirements_repository.save(requirements)

    def get_workspace(self) -> StyleSettingsWithSidebar:
        project = ProjectRepository.load()
        return project.get_workspace()

    def get_stage(self, id: str) -> Optional[WorkflowStage]:
        project = ProjectRepository.load()
        return project.get_stage(id)

    def get_action(self, id: str) -> Optional[ActionStage]:
        project = ProjectRepository.load()
        return project.get_action(id)

    def get_project_local_dependencies(self) -> Generator[Path, None, None]:
        project = ProjectRepository.load()
        yield from project.project_local_dependencies

    def get_async_stage_ids(self):
        project = ProjectRepository.load()
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
        if Settings.root_path.joinpath(path).is_file():
            self.__ensure_case(path)
            return
        Settings.root_path.joinpath(path).write_text(code, encoding="utf-8")

    def open_file(self, file_path: str, mode: str, create_if_not_exists: bool = False):
        if mode == "module" or mode == "package":
            file_path = str(module2path(file_path, mode == "package"))
        complete_file_path = Settings.root_path.joinpath(file_path)

        if create_if_not_exists and not complete_file_path.is_file():
            complete_file_path.touch()

        webbrowser.open(complete_file_path.absolute().as_uri())

    def read_file(self, file: str):
        file_path = Settings.root_path.joinpath(file)
        if not file_path.is_file():
            return None
        return Settings.root_path.joinpath(file).read_text(encoding="utf-8")

    def check_file(self, file_path: str):
        return Settings.root_path.joinpath(file_path).is_file()

    def list_files(self, path: str = ".", mode: str = "file"):
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
                for file in files_from_directory(parent_path)
                if file.is_dir()
                or not allowed_suffixes
                or file.suffix in allowed_suffixes
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

    def update_workspace(self, changes: Dict[str, Any]):
        project = ProjectRepository.load()
        project.workspace.update(changes)
        ProjectRepository.save(project)
        return project.workspace

    def is_initial(self, id: str):
        project = ProjectRepository.load()
        stage = project.get_action(id)
        if not stage:
            raise Exception(f"Stage {id} not found")
        return project.is_initial(stage)

    def create_script(
        self, title: str, file: str, workflow_position: Tuple[int, int] = (0, 0)
    ) -> ScriptStage:
        project = ProjectRepository.load()
        script = ScriptStage.create(title, file, workflow_position=workflow_position)
        self.init_code_file(script.file, new_script_code)
        project.add_stage(script)
        ProjectRepository.save(project)

        return script

    def get_scripts(self) -> List[ScriptStage]:
        project = ProjectRepository.load()
        return project.scripts

    def get_script(self, id: str) -> Optional[ScriptStage]:
        project = ProjectRepository.load()
        return project.get_script(id)

    def delete_script(self, id: str, remove_file: bool = False):
        project = ProjectRepository.load()
        project.delete_stage(id, remove_file)
        ProjectRepository.save(project)

    def create_form(
        self, title: str, file: str, workflow_position: Tuple[int, int] = (0, 0)
    ) -> FormStage:
        project = ProjectRepository.load()
        form = FormStage.create(title, file, workflow_position=workflow_position)
        self.init_code_file(form.file, new_form_code)
        project.add_stage(form)
        ProjectRepository.save(project)
        return form

    def get_forms(self) -> List[FormStage]:
        project = ProjectRepository.load()
        return project.forms

    def get_form(self, id: str) -> Optional[FormStage]:
        project = ProjectRepository.load()
        return project.get_form(id)

    def get_form_by_path(self, path: str) -> Optional[FormStage]:
        project = ProjectRepository.load()
        return project.get_form_by_path(path)

    def write_test_data(self, data: str) -> None:
        if not validate_json(data):
            raise Exception("Invalid JSON")
        test_file = Settings.root_path / TEST_DATA_FILE
        test_file.write_text(data, encoding="utf-8")

    def read_test_data(self) -> str:
        test_file = Settings.root_path / TEST_DATA_FILE
        if not test_file.is_file():
            return "{}"
        return test_file.read_text(encoding="utf-8")

    def delete_form(self, id: str, remove_file: bool = False):
        project = ProjectRepository.load()
        project.delete_stage(id, remove_file)
        ProjectRepository.save(project)

    def create_hook(
        self, title: str, file: str, workflow_position: Tuple[int, int] = (0, 0)
    ) -> HookStage:
        project = ProjectRepository.load()
        hook = HookStage.create(title, file, workflow_position=workflow_position)
        self.init_code_file(hook.file, new_hook_code)
        project.add_stage(hook)
        ProjectRepository.save(project)
        return hook

    def get_hook(self, id: str) -> Optional[HookStage]:
        project = ProjectRepository.load()
        return project.get_hook(id)

    def get_hooks(self) -> List[HookStage]:
        project = ProjectRepository.load()
        return project.hooks

    def get_hook_by_path(self, path: str) -> Optional[HookStage]:
        project = ProjectRepository.load()
        return project.get_hook_by_path(path)

    def delete_hook(self, id: str, remove_file: bool = False) -> None:
        project = ProjectRepository.load()
        project.delete_stage(id, remove_file)
        ProjectRepository.save(project)

    def get_jobs(self) -> List[JobStage]:
        project = ProjectRepository.load()
        return project.jobs

    def get_job(self, id: str) -> Optional[JobStage]:
        project = ProjectRepository.load()
        stage = project.get_stage(id)

        if isinstance(stage, JobStage):
            return stage

        return None

    def create_job(
        self, title: str, file: str, workflow_position: Tuple[int, int] = (0, 0)
    ) -> JobStage:
        project = ProjectRepository.load()
        job = JobStage.create(title, file, workflow_position=workflow_position)
        self.init_code_file(job.file, new_job_code)
        project.add_stage(job)
        ProjectRepository.save(project)
        return job

    def update_stage(self, id: str, changes: Dict[str, Any]) -> ActionStage:
        project = ProjectRepository.load()
        stage = project.get_action(id)

        if not stage:
            raise Exception(f"Stage with id {id} not found")

        code_content = changes.get("code_content")
        if code_content:
            Settings.root_path.joinpath(stage.file_path).write_text(
                code_content, encoding="utf-8"
            )
            del changes["code_content"]

        test_data = changes.get("test_data")
        if test_data:
            self.write_test_data(test_data)
            del changes["test_data"]

        stage = project.update_stage(stage, changes)
        ProjectRepository.save(project)
        return stage

    def delete_job(self, id: str, remove_file: bool = False):
        project = ProjectRepository.load()
        project.delete_stage(id, remove_file)
        ProjectRepository.save(project)

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
        project = ProjectRepository.load()
        return [
            s.to_access_dto()
            for s in project.list_accessible_stages(initial_forms_only=False)
        ]

    def update_access_controls(self, changes: List[Dict[str, Any]]):
        project = ProjectRepository.load()
        response = project.update_access_controls(changes)
        ProjectRepository.save(project)
        return response

    def get_access_control_by_stage_id(self, id):
        project = ProjectRepository.load()
        return project.get_access_control_by_stage_id(id)

    # files
    def save_file(self, file: FileStorage, filename: str):
        name, path = get_random_filepath(filename)
        file.save(path)
        return name

    def get_file(self, path: str):
        return internal_path(path)
