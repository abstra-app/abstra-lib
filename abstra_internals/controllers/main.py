import datetime
import pkgutil
import webbrowser
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import flask

from abstra_internals.cloud_api import get_api_key_info, get_project_info
from abstra_internals.credentials import (
    delete_credentials,
    get_credentials,
    resolve_headers,
    set_credentials,
)
from abstra_internals.entities.execution_context import ScriptContext
from abstra_internals.interface.cli.deploy import deploy
from abstra_internals.repositories.email import EmailRepository
from abstra_internals.repositories.execution import ExecutionFilter, ExecutionRepository
from abstra_internals.repositories.execution_logs import (
    ExecutionLogsRepository,
    LogEntry,
)
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.jwt_signer import EditorJWTRepository, JWTRepository
from abstra_internals.repositories.keyvalue import KVRepository
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
from abstra_internals.services.requirements import RequirementsRepository
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
from abstra_internals.utils.file import files_from_directory, module2path, path2module
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
    jwt_repository: JWTRepository
    email_repository: EmailRepository
    tasks_repository: TasksRepository
    users_repository: UsersRepository
    roles_repository: RolesRepository
    producer_repository: ProducerRepository
    execution_repository: ExecutionRepository
    web_editor_repository: EditorJWTRepository
    execution_logs_repository: ExecutionLogsRepository

    def __init__(self, repositories: Repositories):
        repositories.project.initialize_or_migrate()

        RequirementsRepository.ensure("abstra")
        ensure_abstraignore(Settings.root_path)
        ensure_gitignore(Settings.root_path)

        self.repositories = repositories

        self.kv_repository = repositories.kv
        self.jwt_repository = repositories.jwt
        self.email_repository = repositories.email
        self.users_repository = repositories.users
        self.roles_repository = repositories.roles
        self.tasks_repository = repositories.tasks
        self.producer_repository = repositories.producer
        self.execution_repository = repositories.execution
        self.web_editor_repository = repositories.editor_jwt
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
        project = self.repositories.project.load()
        return project.get_stage(id)

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

    def check_files(self, file_paths: List[str]):
        return {file_path: self.check_file(file_path) for file_path in file_paths}

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

    def create_script(
        self,
        title: str,
        file: str,
        workflow_position: Tuple[int, int] = (0, 0),
        id: Optional[str] = None,
    ) -> ScriptStage:
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

    def delete_script(self, id: str, remove_file: bool = False):
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
        test_file = Settings.root_path / TEST_DATA_FILE
        test_file.write_text(data, encoding="utf-8")

    def read_test_data(self) -> str:
        test_file = Settings.root_path / TEST_DATA_FILE
        if not test_file.is_file():
            return "{}"
        return test_file.read_text(encoding="utf-8")

    def delete_form(self, id: str, remove_file: bool = False):
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

    def create_job(
        self,
        title: str,
        file: str,
        workflow_position: Tuple[int, int] = (0, 0),
        id: Optional[str] = None,
    ) -> JobStage:
        project = self.repositories.project.load()
        job = JobStage.create(title, file, workflow_position=workflow_position, id=id)
        self.init_code_file(job.file, new_job_code)
        project.add_stage(job)
        self.repositories.project.save(project)
        return job

    def update_stage(self, id: str, changes: Dict[str, Any]) -> Stage:
        project = self.repositories.project.load()
        stage = project.get_stage(id)

        if not stage:
            raise Exception(f"Stage with id {id} not found")

        if isinstance(stage, StageWithFile) and (
            code_content := changes.pop("code_content", None)
        ):
            Settings.root_path.joinpath(stage.file_path).write_text(
                code_content, encoding="utf-8"
            )

        if test_data := changes.pop("test_data", None):
            self.write_test_data(test_data)

        stage = project.update_stage(stage, changes)
        self.repositories.project.save(project)
        return stage

    def delete_job(self, id: str, remove_file: bool = False):
        project = self.repositories.project.load()
        project.delete_stage(id, remove_file)
        self.repositories.project.save(project)

    def get_stages(self) -> List[Stage]:
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

    def get_logs(self, id: str):
        return self.execution_logs_repository.get(id)

    def get_execution_tasks(self, execution_id: str) -> ExecutionTasksResponse:
        execution = self.execution_repository.get(execution_id)

        trigger_task = None
        if isinstance(execution.context, ScriptContext):
            trigger_task = self.tasks_repository.get_by_id(execution.context.task_id)

        sent_tasks = self.tasks_repository.get_execution_sent_tasks(execution_id)

        return ExecutionTasksResponse(
            trigger_task=trigger_task,
            sent_tasks=sent_tasks,
        )

    # Worker lifecycle
    def worker_exit(self, *, app_id: str, worker_id: str, err_msg: str):
        killed_executions = self.execution_repository.find_by_worker(
            worker_id=worker_id,
            status="running",
            app_id=app_id,
        )

        # update executions
        for execution in killed_executions:
            # Add log entry
            err_log = LogEntry(
                execution_id=execution.id,
                created_at=datetime.datetime.now(),
                payload={"text": err_msg},
                sequence=999999,
                event="stderr",
            )
            self.execution_logs_repository.save(err_log)

            # Update execution status
            self.execution_repository.set_failure_by_id(execution_id=execution.id)

            self.tasks_repository.set_locked_tasks_to_pending(execution.id)

    def app_exit(self, *, app_id: str, err_msg: str):
        exited_execs = self.execution_repository.find_by_app(
            status="running",
            app_id=app_id,
        )

        # update executions
        for execution in exited_execs:
            # Add log entry
            err_log = LogEntry(
                execution_id=execution.id,
                created_at=datetime.datetime.now(),
                payload={"text": err_msg},
                sequence=999999,
                event="stderr",
            )
            self.execution_logs_repository.save(err_log)

            # Update execution status
            self.execution_repository.set_failure_by_id(execution_id=execution.id)

            self.tasks_repository.set_locked_tasks_to_pending(execution.id)

    def get_public_url(self):
        if Settings.has_public_url():
            return {"public_url": Settings.public_url}

        return {"public_url": None}
