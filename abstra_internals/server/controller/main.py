import flask, shutil, pkgutil, webbrowser, concurrent.futures as futures
from pkg_resources import get_distribution
from werkzeug.datastructures import FileStorage
from typing import Any, Dict, List, Optional
from pathlib import Path

from ...utils import random_id, path2module, module2path, files_from_directory
from ...cloud_api import get_ai_messages, get_auth_info, get_project_info
from ...repositories.requirements import RequirementsRepository
from ...widgets.apis import get_random_filepath, internal_path
from ...execution.script_execution import ScriptExecution
from ...execution.execution import Execution
from ...linter.rules import rules
from ...cli.deploy import deploy
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
    StageNotFoundError,
    WorkflowTransition,
    ProjectRepository,
    StyleSettings,
    WorkflowStage,
    ScriptStage,
    WorkflowStage,
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
        self.executor = futures.ThreadPoolExecutor()
        if not ProjectRepository.exists():
            ProjectRepository.initialize()
        requirements = RequirementsRepository.load()
        requirements.ensure("abstra", get_distribution("abstra").version)
        RequirementsRepository.save(requirements)
        ensure_abstraignore(Settings.root_path)

    def deploy(self):
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
        stage = project.get_stage(id)
        if not stage:
            raise Exception(f"Stage {id} not found")
        return project.is_initial(stage)

    def run_script(self, script: ScriptStage):
        execution = ScriptExecution(script, True)

        execution.run_sync()

        return {
            "stdout": "".join(execution.stdout if execution else []),
            "stderr": "".join(execution.stderr if execution else []),
        }

    def create_script(self) -> ScriptStage:
        project = ProjectRepository.load()
        script = ScriptStage.create()
        self.init_code_file(script.file, new_script_code)
        project.add_stage(script)
        ProjectRepository.save(project)

        return script

    def get_scripts(self) -> List[ScriptStage]:
        project = ProjectRepository.load()
        return project.scripts

    def get_script(self, path: str) -> Optional[ScriptStage]:
        project = ProjectRepository.load()
        return project.get_script(path)

    def delete_script(self, id: str, remove_file: bool = False):
        project = ProjectRepository.load()
        project.delete_stage(id, remove_file)
        ProjectRepository.save(project)

    def create_form(self) -> FormStage:
        project = ProjectRepository.load()
        form = FormStage.create()
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

    def update_transition(self, id: str, changes: Dict[str, Any]):
        project = ProjectRepository.load()
        transition = project.update_transition(id, changes)
        ProjectRepository.save(project)
        return transition.as_dict

    def get_form_by_path(self, path: str) -> Optional[FormStage]:
        project = ProjectRepository.load()
        return project.get_form_by_path(path)

    def delete_form(self, id: str, remove_file: bool = False):
        project = ProjectRepository.load()
        project.delete_stage(id, remove_file)
        ProjectRepository.save(project)

    def create_hook(self) -> HookStage:
        project = ProjectRepository.load()
        hook = HookStage.create()
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

    def create_job(self) -> JobStage:
        project = ProjectRepository.load()
        job = JobStage.create()
        self.init_code_file(job.file, new_job_code)
        project.add_stage(job)
        ProjectRepository.save(project)
        return job

    def update_stage(self, id: str, changes: Dict[str, Any]) -> WorkflowStage:
        project = ProjectRepository.load()
        runtime = project.update_stage(id, changes)
        ProjectRepository.save(project)
        return runtime

    def delete_job(self, id: str, remove_file: bool = False):
        project = ProjectRepository.load()
        project.delete_stage(id, remove_file)
        ProjectRepository.save(project)

    # workflow visual editor

    def get_workflow_editor_data(self):
        project = ProjectRepository.load()
        result = []
        for job in project.jobs:
            result.append(
                {
                    "id": job.id,
                    "type": "jobs",
                    "label": job.title,
                    "position": job.workflow_position,
                    "transitions": [
                        {
                            "id": t.id,
                            "label": t.label,
                            "targetPath": t.target_id,
                            "targetType": t.target_type,
                        }
                        for t in job.workflow_transitions
                    ],
                }
            )
        for form in project.forms:
            result.append(
                {
                    "id": form.id,
                    "path": form.path,
                    "type": "forms",
                    "label": form.title,
                    "position": form.workflow_position,
                    "transitions": [
                        {
                            "id": t.id,
                            "label": t.label,
                            "targetPath": t.target_id,
                            "targetType": t.target_type,
                        }
                        for t in form.workflow_transitions
                    ],
                }
            )
        for hook in project.hooks:
            result.append(
                {
                    "id": hook.id,
                    "path": hook.path,
                    "type": "hooks",
                    "label": hook.title,
                    "position": hook.workflow_position,
                    "transitions": [
                        {
                            "id": t.id,
                            "label": t.label,
                            "targetPath": t.target_id,
                            "targetType": t.target_type,
                        }
                        for t in hook.workflow_transitions
                    ],
                }
            )
        for script in project.scripts:
            result.append(
                {
                    "id": script.id,
                    "type": "scripts",
                    "label": script.title,
                    "position": script.workflow_position,
                    "transitions": [
                        {
                            "id": t.id,
                            "label": t.label,
                            "targetPath": t.target_id,
                            "targetType": t.target_type,
                        }
                        for t in script.workflow_transitions
                    ],
                }
            )

        return result

    def workflow_move(self, payload):
        project = ProjectRepository.load()
        for move in payload:
            node = project.get_stage(move["id"])
            if not node:
                raise StageNotFoundError(f"Stage {move['id']} not found")
            node.workflow_position = move["position"]
        ProjectRepository.save(project)

    def bulk_duplicate_stages(self, payload):
        project = ProjectRepository.load()
        for item in payload:
            stage = project.get_stage(item["original_id"])

            if not stage:
                raise StageNotFoundError(f"Stage {item['original_id']} not found")
            duplicated = stage.duplicate(
                new_id=item["new_id"], new_position=item["position"]
            )
            project.add_stage(duplicated)

            duplicated.workflow_transitions = [
                WorkflowTransition(
                    target_id=p["new_id"],
                    id=random_id(),
                    label=t.label,
                    target_type=p["type"],
                )
                for t in stage.workflow_transitions
                for p in payload
                if t.target_id == p["original_id"] and t.target_type == p["type"]
            ]

            duplicated.title = item["title"]
            duplicated.workflow_position = item["position"]
            base_file_name = ".".join(stage.file.split(".")[:-1])
            duplicated.file = f"{base_file_name}-copy.py"
            original_file_path = Settings.root_path.joinpath(stage.file)
            duplicated_file_path = Settings.root_path.joinpath(duplicated.file)
            if original_file_path.exists() and not duplicated_file_path.exists():
                shutil.copy(
                    Settings.root_path.joinpath(stage.file),
                    Settings.root_path.joinpath(duplicated.file),
                )

        ProjectRepository.save(project)

    def bulk_create_stages(self, payload):
        project = ProjectRepository.load()

        for node in payload:
            node_type = node["type"]
            node_id = node["id"]
            node_position = node["position"]
            node_title = node["title"]

            if node_type == "jobs":
                job = JobStage.create(
                    id=node_id, workflow_position=node_position, title=node_title
                )
                project.add_stage(job)
                self.init_code_file(job.file, new_job_code)
            elif node_type == "forms":
                form = FormStage.create(
                    id=node_id, workflow_position=node_position, title=node_title
                )
                project.add_stage(form)
                self.init_code_file(form.file, new_form_code)
            elif node_type == "hooks":
                hook = HookStage.create(
                    id=node_id, workflow_position=node_position, title=node_title
                )
                project.add_stage(hook)
                self.init_code_file(hook.file, new_hook_code)
            elif node_type == "scripts":
                script = ScriptStage.create(
                    id=node_id, workflow_position=node_position, title=node_title
                )
                project.add_stage(script)
                self.init_code_file(script.file, new_script_code)
            else:
                raise UnknownNodeTypeError(node_type)

        ProjectRepository.save(project)

    def bulk_delete(self, payload, remove_file: bool = False):
        project = ProjectRepository.load()

        for item in payload:
            if item["type"] == "transitions":
                transition = project.get_transition(item["id"])
                project.delete_transition(transition.id)
            else:
                stage = project.get_stage(item["id"])
                if not stage:
                    raise StageNotFoundError(f"Stage {item['id']} not found")

                if Settings.root_path.joinpath(stage.file).exists():
                    Settings.root_path.joinpath(stage.file).unlink()

                project.delete_stage(stage.id, remove_file)

        ProjectRepository.save(project)

    def bulk_create_transitions(self, payload):
        if len(payload) == 0:
            return

        project = ProjectRepository.load()

        for transition in payload:
            double_transition = project.find_transition(
                transition["source"]["id"],
                transition["target"]["id"],
            )
            if double_transition:
                raise DoubleTransitionError(
                    transition["source"]["type"],
                    transition["source"]["id"],
                    transition["target"]["type"],
                    transition["target"]["id"],
                )

            if transition["target"]["type"] == "jobs":
                raise TransitionToJobError(
                    transition["source"]["type"],
                    transition["source"]["id"],
                    transition["target"]["type"],
                    transition["target"]["id"],
                )
            if (
                transition["source"]["type"] == transition["target"]["type"]
                and transition["source"]["id"] == transition["target"]["id"]
            ):
                raise SelfTransitionError(
                    transition["source"]["type"], transition["source"]["id"]
                )

            source = project.get_stage(transition["source"]["id"])
            target = project.get_stage(transition["target"]["id"])

            if not source:
                raise Exception(f"Source {transition['source']['id']} not found")

            if not target:
                raise Exception(f"Target {transition['target']['id']} not found")

            source.workflow_transitions.append(
                WorkflowTransition(
                    target_id=transition["target"]["id"],
                    id=transition["id"],
                    label=transition["label"],
                    target_type=transition["target"]["type"],
                )
            )
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
            execution.stop()

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
    def check_linters(self):
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
