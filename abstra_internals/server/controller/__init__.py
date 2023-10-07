import uuid
import flask
import shutil
import webbrowser
import concurrent.futures as futures
from werkzeug.datastructures import FileStorage
from typing import Any, Dict, List, Optional, Union

from ...widgets.apis import get_random_filepath, internal_path
from ...execution.script_execution import ScriptExecution
from ...cloud_api import get_ai_messages, get_auth_info, get_project_info
from ...repositories.stage_run import StageRun
from ...repositories import StageRunRepository
from ...cli.deploy import deploy
from ...settings import Settings
from ...utils import random_id

from ...credentials import (
    delete_credentials,
    get_credentials,
    resolve_headers,
    set_credentials,
)

from ...templates import (
    new_script_code,
    new_dash_layout,
    new_dash_code,
    new_form_code,
    new_hook_code,
    new_job_code,
)

from ...repositories.json.classes import (
    WorkflowTransitionJSON,
    WorkspaceJSON,
    RuntimeJSON,
    ScriptJSON,
    AbstraJSON,
    LayoutJSON,
    ScriptJSON,
    DashJSON,
    FormJSON,
    HookJSON,
    JobJSON,
    AbstraJSONRepository,
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
        return f"You can't add a transition to a job."


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


## TODO: rename to controller
class MainController:
    def __init__(self):
        self.executor = futures.ThreadPoolExecutor()
        AbstraJSONRepository.initialize_on_empty()

    def deploy(self):
        deploy()

    def get_workspace(self) -> WorkspaceJSON:
        abstra_json = AbstraJSONRepository.load()
        return abstra_json.workspace

    def get_page_runtime(self, path) -> Union[DashJSON, FormJSON, None]:
        abstra_json = AbstraJSONRepository.load()
        return abstra_json.get_page_by_path(path)

    def open_file(self, file_path: str, create_if_not_exists: bool = False):
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

    def update_workspace(self, changes: Dict[str, Any]):
        abstra_json = AbstraJSONRepository.load()
        abstra_json.workspace.update(changes, abstra_json.dashes, abstra_json.forms)
        AbstraJSONRepository.save(abstra_json)
        return abstra_json.workspace

    def run_initial_script(self, script: ScriptJSON):
        # This was added to allow script to run without a stage run while testing
        execution = ScriptExecution(script, True)

        execution.run_sync()

        self.run_waiting_scripts(execution.stage_run)

        return {
            "stdout": "".join(execution.stdout if execution else []),
            "stderr": "".join(execution.stderr if execution else []),
        }

    def run_waiting_scripts(self, parent_stage_run: Optional[StageRun]):
        if not parent_stage_run:
            return

        next_stage_runs = StageRunRepository.find(
            {"parent_id": parent_stage_run.id, "status": "waiting"}
        )

        if len(next_stage_runs) == 0:
            return

        for next_stage_run in next_stage_runs:
            script = self.get_script(next_stage_run.stage)

            if not script:
                continue

            def run_next(script: ScriptJSON, api: MainController):
                execution = ScriptExecution.create_with_stage_run(
                    script, next_stage_run.id
                )
                execution.run_sync()
                api.run_waiting_scripts(execution.stage_run)

            self.executor.submit(run_next, script, self)

    def create_script(self) -> ScriptJSON:
        abstra_json = AbstraJSONRepository.load()

        file_name = f"new_script_{random_id()}"
        file = f"{file_name}.py"
        Settings.root_path.joinpath(file).write_text("", encoding="utf-8")

        script = ScriptJSON(
            path=str(uuid.uuid4()),
            file=file,
            title="Untitled Form",
            workflow_transitions=[],
            workflow_position=(0, 0),
        )

        abstra_json.scripts.append(script)

        AbstraJSONRepository.save(abstra_json)

        return script

    def get_scripts(self) -> List[ScriptJSON]:
        abstra_json = AbstraJSONRepository.load()
        return abstra_json.scripts

    def get_script(self, path: str) -> Optional[ScriptJSON]:
        abstra_json = AbstraJSONRepository.load()

        for script in abstra_json.scripts:
            if path == script.path:
                return script

        return None

    def delete_script(self, path: str):
        abstra_json = AbstraJSONRepository.load()
        scripts = abstra_json.scripts
        abstra_json.scripts = [f for f in scripts if f.path != path]

        AbstraJSONRepository.save(abstra_json)

    def create_form(self) -> FormJSON:
        abstra_json = AbstraJSONRepository.load()

        file_name = f"new_form_{random_id()}"
        file = f"{file_name}.py"
        Settings.root_path.joinpath(file).write_text(new_form_code, encoding="utf-8")
        form = FormJSON(
            file=file, path=file_name, title="Untitled Form", workflow_transitions=[]
        )

        abstra_json.forms.append(form)

        AbstraJSONRepository.save(abstra_json)

        return form

    def get_forms(self) -> List[FormJSON]:
        abstra_json = AbstraJSONRepository.load()
        return abstra_json.forms

    def get_form(self, path: str) -> Optional[FormJSON]:
        abstra_json = AbstraJSONRepository.load()

        for form in abstra_json.forms:
            if path == form.path:
                return form

        return None

    def delete_form(self, path: str):
        abstra_json = AbstraJSONRepository.load()
        abstra_json.delete_runtime(path)
        AbstraJSONRepository.save(abstra_json)

    def create_dash(self) -> DashJSON:
        abstra_json = AbstraJSONRepository.load()

        file_name = f"new_dash_{random_id()}"
        file = f"{file_name}.py"

        Settings.root_path.joinpath(file).write_text(
            encoding="utf-8", data=new_dash_code
        )
        dash = DashJSON(
            file=file,
            path=f"new-dash_{random_id()}",
            title="Untitled Dash",
            layout=LayoutJSON.from_dict(new_dash_layout),
        )

        abstra_json.dashes.append(dash)

        AbstraJSONRepository.save(abstra_json)

        return dash

    def get_dashes(self) -> List[DashJSON]:
        abstra_json = AbstraJSONRepository.load()
        return abstra_json.dashes

    def get_dash(self, path: str) -> Optional[DashJSON]:
        abstra_json = AbstraJSONRepository.load()

        for dash in abstra_json.dashes:
            if path == dash.path:
                return dash

        return None

    def delete_dash(self, path: str):
        abstra_json = AbstraJSONRepository.load()
        abstra_json.delete_runtime(path)
        AbstraJSONRepository.save(abstra_json)

    def create_hook(self) -> HookJSON:
        abstract_json = AbstraJSONRepository.load()

        file_name = f"new_hook_{random_id()}"
        file = f"{file_name}.py"
        Settings.root_path.joinpath(file).write_text(new_hook_code, encoding="utf-8")
        hook = HookJSON(
            file=file, path=file_name, title="Untitled Hook", workflow_transitions=[]
        )

        abstract_json.hooks.append(hook)

        AbstraJSONRepository.save(abstract_json)

        return hook

    def get_hooks(self) -> List[HookJSON]:
        abstra_json = AbstraJSONRepository.load()
        return abstra_json.hooks

    def get_hook(self, path: str) -> Optional[HookJSON]:
        abstra_json = AbstraJSONRepository.load()

        for hook in abstra_json.hooks:
            if path == hook.path:
                return hook

        return None

    def delete_hook(self, path: str):
        abstra_json = AbstraJSONRepository.load()
        abstra_json.delete_runtime(path)
        AbstraJSONRepository.save(abstra_json)

    def get_jobs(self):
        abstra_json = AbstraJSONRepository.load()
        return abstra_json.jobs

    def get_job(self, identifier: str):
        abstra_json = AbstraJSONRepository.load()
        for job in abstra_json.jobs:
            if identifier == job.identifier:
                return job
        return None

    def create_job(self):
        abstra_json = AbstraJSONRepository.load()

        file_name = f"new_job_{random_id()}"
        file = f"{file_name}.py"
        Settings.root_path.joinpath(file).write_text(new_job_code, encoding="utf-8")
        job = JobJSON(
            file=file,
            identifier=random_id(),
            schedule="0 * * * *",
            title="Untitled Job",
            workflow_position=(0, 0),
            workflow_transitions=[],
        )

        abstra_json.jobs.append(job)

        AbstraJSONRepository.save(abstra_json)

        return job

    def update_runtime(self, path: str, changes: Dict[str, Any]) -> RuntimeJSON:
        abstra_json = AbstraJSONRepository.load()
        runtime = abstra_json.update_runtime(path, changes)
        AbstraJSONRepository.save(abstra_json)

        return runtime

    def delete_job(self, identifier: str):
        abstra_json = AbstraJSONRepository.load()
        abstra_json.delete_runtime(identifier)
        AbstraJSONRepository.save(abstra_json)

    def get_stage_runs(self):
        stage = flask.request.args.get("stage")
        return [
            stage_run.to_dto()
            for stage_run in StageRunRepository.find(dict(stage=stage))
        ]

    # workflow visual editor

    def workflow_initial_data(self):
        abstra_json = AbstraJSONRepository.load()
        result = []
        for job in abstra_json.jobs:
            result.append(
                {
                    "id": job.identifier,
                    "type": "jobs",
                    "label": job.title,
                    "position": job.workflow_position,
                    "transitions": [
                        {
                            "id": t.id,
                            "label": t.label,
                            "targetPath": t.target_path,
                            "targetType": t.target_type,
                        }
                        for t in job.workflow_transitions
                    ],
                }
            )
        for form in abstra_json.forms:
            result.append(
                {
                    "id": form.path,
                    "type": "forms",
                    "label": form.title,
                    "position": form.workflow_position,
                    "transitions": [
                        {
                            "id": t.id,
                            "label": t.label,
                            "targetPath": t.target_path,
                            "targetType": t.target_type,
                        }
                        for t in form.workflow_transitions
                    ],
                }
            )
        for hook in abstra_json.hooks:
            result.append(
                {
                    "id": hook.path,
                    "type": "hooks",
                    "label": hook.title,
                    "position": hook.workflow_position,
                    "transitions": [
                        {
                            "id": t.id,
                            "label": t.label,
                            "targetPath": t.target_path,
                            "targetType": t.target_type,
                        }
                        for t in hook.workflow_transitions
                    ],
                }
            )
        for script in abstra_json.scripts:
            result.append(
                {
                    "id": script.path,
                    "path": script.path,
                    "type": "scripts",
                    "label": script.title,
                    "position": script.workflow_position,
                    "transitions": [
                        {
                            "id": t.id,
                            "label": t.label,
                            "targetPath": t.target_path,
                            "targetType": t.target_type,
                        }
                        for t in script.workflow_transitions
                    ],
                }
            )

        return result

    def workflow_move(self, payload):
        abstra_json = AbstraJSONRepository.load()
        for move in payload:
            node = abstra_json.get_workflow_runtime_by_path(move["id"])
            node.workflow_position = move["position"]
        AbstraJSONRepository.save(abstra_json)

    def workflow_duplicate_nodes(self, payload):
        abstra_json = AbstraJSONRepository.load()
        for item in payload:
            node = abstra_json.get_workflow_runtime_by_path(item["original_id"])
            duplicated = node.duplicate()
            if isinstance(duplicated, FormJSON):
                duplicated.path = item["new_id"]
                abstra_json.forms.append(duplicated)
            elif isinstance(duplicated, JobJSON):
                duplicated.identifier = item["new_id"]
                abstra_json.jobs.append(duplicated)
            elif isinstance(duplicated, HookJSON):
                duplicated.path = item["new_id"]
                abstra_json.hooks.append(duplicated)

            duplicated.workflow_transitions = [
                WorkflowTransitionJSON(
                    target_path=p["new_id"],
                    id=random_id(),
                    label=t.label,
                    target_type=p["type"],
                )
                for t in duplicated.workflow_transitions
                for p in payload
                if t.target_path == p["original_id"] and t.target_type == p["type"]
            ]
            duplicated.title = item["title"]
            duplicated.workflow_position = item["position"]
            base_file_name = ".".join(node.file.split(".")[:-1])
            duplicated.file = f"{base_file_name}-copy.py"
            original_file_path = Settings.root_path.joinpath(node.file)
            duplicated_file_path = Settings.root_path.joinpath(duplicated.file)
            if original_file_path.exists() and not duplicated_file_path.exists():
                shutil.copy(
                    Settings.root_path.joinpath(node.file),
                    Settings.root_path.joinpath(duplicated.file),
                )

        AbstraJSONRepository.save(abstra_json)

    def workflow_add_nodes(self, payload):
        abstra_json = AbstraJSONRepository.load()
        for node in payload:
            node_type = node["type"]
            node_id = node["id"]
            node_position = node["position"]
            node_title = node["title"]

            if node_type == "jobs":
                job = JobJSON(
                    file=f"new_job_{node_id}.py",
                    identifier=node_id,
                    schedule="0 * * * *",
                    title=node["title"],
                    workflow_position=node_position,
                    workflow_transitions=[],
                )
                abstra_json.jobs.append(job)
                Settings.root_path.joinpath(job.file).write_text(new_job_code)
            elif node_type == "forms":
                form = FormJSON(
                    file=f"new_form_{node_id}.py",
                    path=node_id,
                    title=node["title"],
                    workflow_position=node_position,
                    workflow_transitions=[],
                )
                abstra_json.forms.append(form)
                Settings.root_path.joinpath(form.file).write_text(new_form_code)
            elif node_type == "hooks":
                hook = HookJSON(
                    file=f"new_hook_{node_id}.py",
                    path=node_id,
                    title=node["title"],
                    workflow_position=node_position,
                    workflow_transitions=[],
                )
                abstra_json.hooks.append(hook)
                Settings.root_path.joinpath(hook.file).write_text(new_hook_code)
            elif node_type == "scripts":
                script = ScriptJSON(
                    file=f"new_script_{node_id}.py",
                    path=node_id,
                    title=node["title"],
                    workflow_position=node_position,
                    workflow_transitions=[],
                )
                abstra_json.scripts.append(script)
                Settings.root_path.joinpath(script.file).write_text(new_script_code)
            else:
                raise UnknownNodeTypeError(node_type)
        AbstraJSONRepository.save(abstra_json)

    def workflow_delete(self, payload):
        abstra_json = AbstraJSONRepository.load()

        for item in payload:
            if item["type"] == "transitions":
                transition = abstra_json.get_transition(item["id"])
                abstra_json.delete_transition(transition.id)
            else:
                node = abstra_json.get_workflow_runtime_by_path(item["id"])
                if Settings.root_path.joinpath(node.file).exists():
                    Settings.root_path.joinpath(node.file).unlink()
                abstra_json.delete_runtime(node.path)
        AbstraJSONRepository.save(abstra_json)

    def workflow_add_transition(self, payload):
        if len(payload) == 0:
            return
        abstra_json = AbstraJSONRepository.load()
        for transition in payload:
            double_transition = abstra_json.find_transition(
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

            source = abstra_json.get_workflow_runtime_by_path(
                transition["source"]["id"]
            )
            abstra_json.get_workflow_runtime_by_path(transition["target"]["id"])
            source.workflow_transitions.append(
                WorkflowTransitionJSON(
                    target_path=transition["target"]["id"],
                    id=transition["id"],
                    label="",
                    target_type=transition["target"]["type"],
                )
            )
        AbstraJSONRepository.save(abstra_json)

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
