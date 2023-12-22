from werkzeug.datastructures import FileStorage
from typing import Any, Dict, List, Optional, Tuple
from pkg_resources import get_distribution
import flask, pkgutil, webbrowser
from pathlib import Path

from ...cloud_api import get_ai_messages, get_auth_info, get_project_info
from ...utils import path2module, module2path, files_from_directory
from ...repositories.requirements import RequirementsRepository
from ...widgets.apis import get_random_filepath, internal_path
from ...execution.execution import Execution
from ...linter.rules import rules
from ...interface.cli.deploy import deploy
from ...settings import Settings

from ...debugger.vscode import (
    is_launch_json_configured,
    configure_launch_json,
    is_client_connected,
    start_debugger,
)

from ...credentials import (
    delete_credentials,
    get_credentials,
    resolve_headers,
    set_credentials,
)

from ...templates import (
    ensure_abstraignore,
    new_script_code,
    new_form_code,
    new_hook_code,
    new_job_code,
)

from ...repositories.project.project import (
    ProjectRepository,
    StyleSettings,
    ActionStage,
    ScriptStage,
    ScriptStage,
    ScriptStage,
    FormStage,
    HookStage,
    JobStage,
)


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
        return f"You can't add a transition to itself."


class TransitionToJobError(Exception):
    def __init__(
        self, source_type: str, source_id: str, target_type: str, target_id: str
    ):
        self.source_type = source_type
        self.source_id = source_id
        self.target_type = target_type
        self.target_id = target_id

    def __str__(self):
        return f"You can't add a transition to a job. Use a script instead."


class DoubleTransitionError(Exception):
    def __init__(
        self, source_type: str, source_id: str, target_type: str, target_id: str
    ):
        self.source_type = source_type
        self.source_id = source_id
        self.target_type = target_type
        self.target_id = target_id

    def __str__(self):
        return f"You can't add the same transition twice."


class MainController:
    def __init__(self):
        if not ProjectRepository.exists():
            ProjectRepository.initialize()
        requirements = RequirementsRepository.load()
        requirements.ensure("abstra", get_distribution("abstra").version)
        RequirementsRepository.save(requirements)
        ensure_abstraignore(Settings.root_path)

    def deploy(self):
        rules = self.check_linters()

        issues = []
        for rule in rules:
            if type(rule["issues"]) == list:
                issues += rule["issues"]

        if len(issues) > 0:
            raise Exception(
                "Please fix all linter issues before deploying your project."
            )

        deploy()

    def get_workspace(self) -> StyleSettings:
        project = ProjectRepository.load()
        return project.workspace

    def init_code_file(self, path: str, code: str):
        Settings.root_path.joinpath(path).write_text(code, encoding="utf-8")

    def get_page_runtime(self, path) -> Optional[FormStage]:
        project = ProjectRepository.load()
        return project.get_form_by_path(path)

    def open_file(self, file_path: str, mode: str, create_if_not_exists: bool = False):
        if mode == "module" or mode == "package":
            file_path = str(module2path(file_path, mode == "package"))
        complete_file_path = Settings.root_path.joinpath(file_path)

        if (
            create_if_not_exists
            and file_path.endswith(".py")
            and not complete_file_path.is_file()
        ):
            complete_file_path.touch()

        webbrowser.open(complete_file_path.absolute().as_uri())

    def read_file(self, file: str):
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
        project.workspace.update(changes, project.forms)
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
        runtime = project.update_stage(id, changes)
        ProjectRepository.save(project)
        return runtime

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
        return get_auth_info(headers)

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

    # AI
    def send_ai_message(self, messages, runtime):
        headers = resolve_headers() or {}
        yield from get_ai_messages(messages, runtime, headers)

    # files
    def save_file(self, file: FileStorage, filename: str):
        name, path = get_random_filepath(filename)
        file.save(path)
        return name

    def get_file(self, path: str):
        return internal_path(path)

    # Requirements

    def get_requirements(self):
        return RequirementsRepository.load().to_dict()

    def create_requirement(self, name: str, version: Optional[str]):
        requirements = RequirementsRepository.load()
        requirements.add(name, version)
        RequirementsRepository.save(requirements)
        return requirements.to_dict()

    def delete_requirement(self, name: str):
        requirements = RequirementsRepository.load()
        requirements.delete(name)
        RequirementsRepository.save(requirements)
        return requirements.to_dict()

    def get_requirements_recommendations(self):
        return [r.to_dict() for r in RequirementsRepository.get_recommendation()]

    def abort_execution(self, id: str):
        execution = Execution.get_execution_by_id(id)
        if execution:
            # execution.stop()
            pass

    # Debugger
    def get_debugger_status(self):
        return dict(
            port=start_debugger(),
            connected=is_client_connected(),
            is_launch_json_configured=is_launch_json_configured(),
        )

    def create_vscode_launch(self):
        return configure_launch_json()

    # Linters
    def check_linters(self) -> List[Dict[str, Any]]:
        return [rule.to_dict() for rule in rules]

    def fix_linter(self, rule_name: str, fix_name: str):
        for rule in rules:
            if rule.name == rule_name:
                for issue in rule.find_issues():
                    for fix in issue.fixes:
                        if fix.name == fix_name:
                            fix.fix()
                            return True
        raise Exception(f"Could not find fix {fix_name} for rule {rule_name}")
