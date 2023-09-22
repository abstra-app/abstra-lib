import json
import os
import shutil
import tempfile
import webbrowser
from pathlib import Path
from typing import Any, Dict, List, Optional, Union

import flask
from werkzeug.datastructures import FileStorage

from ...cli.deploy import deploy
from ...cloud_api import get_ai_messages, get_auth_info
from ...credentials import (
    delete_credentials,
    get_credentials,
    resolve_headers,
    set_credentials,
)
from ...repositories import StageRunRepository
from ...settings import Settings
from ...templates import (
    new_dash_code,
    new_dash_layout,
    new_form_code,
    new_hook_code,
    new_job_code,
)
from ...utils import random_id
from ...widgets.apis import get_random_filepath, internal_path
from .classes import (
    DashJSON,
    FormJSON,
    HookJSON,
    JobJSON,
    AbstraJSON,
    WorkflowTransitionJSON,
    WorkspaceJSON,
    LayoutJSON,
)

CLOUD_API_ENDPOINT = os.getenv("CLOUD_API_ENDPOINT", "https://cloud-api.abstra.cloud")
ABSTRA_DATABASE_URL = os.environ.get("ABSTRA_DATABASE_URL")


class NodeNotFoundError(Exception):
    def __init__(self, node_type: str, node_id: str):
        self.node_type = node_type
        self.node_id = node_id

    def __str__(self):
        return f"Node of type {self.node_type} with id {self.node_id} not found"


class TransitionNotFoundError(Exception):
    def __init__(
        self, source_type: str, source_id: str, target_type: str, target_id: str
    ):
        self.source_type = source_type
        self.source_id = source_id
        self.target_type = target_type
        self.target_id = target_id

    def __str__(self):
        return f"Transition from {self.source_type} with id {self.source_id} to {self.target_type} with id {self.target_id} not found"


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


def _find_node(abstra_json: AbstraJSON, node_type: str, node_id: str):
    if node_type == "forms":
        for form in abstra_json.forms:
            if form.path == node_id:
                return form
    elif node_type == "jobs":
        for job in abstra_json.jobs:
            if job.identifier == node_id:
                return job
    elif node_type == "hooks":
        for hook in abstra_json.hooks:
            if hook.path == node_id:
                return hook
    else:
        raise UnknownNodeTypeError(node_type)
    raise NodeNotFoundError(node_type, node_id)


def _find_transition_by_id(abstra_json: AbstraJSON, transition_id: str):
    for node in abstra_json.forms + abstra_json.jobs + abstra_json.hooks:
        for transition in node.workflow_transitions:
            if transition.id == transition_id:
                return transition
    raise Exception("Transition not found for id ", transition_id)


def _find_transition(
    abstra_json: AbstraJSON,
    source_type: str,
    source_id: str,
    target_type: str,
    target_id: str,
    raise_error: bool = True,
):
    for node in abstra_json.forms + abstra_json.jobs + abstra_json.hooks:
        for transition in node.workflow_transitions:
            if node.runner_type == "form":
                node_runner_type = "forms"
            elif node.runner_type == "job":
                node_runner_type = "jobs"
            elif node.runner_type == "hook":
                node_runner_type = "hooks"
            else:
                raise UnknownNodeTypeError(node.runner_type)
            if (
                transition.target_type == target_type
                and transition.target_path == target_id
                and node_runner_type == source_type
                and node.path == source_id
            ):
                return transition
    if raise_error:
        raise TransitionNotFoundError(source_type, source_id, target_type, target_id)


def _delete_transitions_pointing_to(
    abstra_json: AbstraJSON,
    node_type: str,
    node_id: str,
):
    if node_type == "forms":
        for form in abstra_json.forms:
            form.workflow_transitions = [
                t for t in form.workflow_transitions if t.target_path != node_id
            ]
    elif node_type == "jobs":
        for job in abstra_json.jobs:
            job.workflow_transitions = [
                t for t in job.workflow_transitions if t.target_path != node_id
            ]
    elif node_type == "hooks":
        for hook in abstra_json.hooks:
            hook.workflow_transitions = [
                t for t in hook.workflow_transitions if t.target_path != node_id
            ]


def _delete_transition_by_id(abstra_json: AbstraJSON, transition_id: str):
    for form in abstra_json.forms:
        form.workflow_transitions = [
            t for t in form.workflow_transitions if t.id != transition_id
        ]

    for job in abstra_json.jobs:
        job.workflow_transitions = [
            t for t in job.workflow_transitions if t.id != transition_id
        ]

    for hook in abstra_json.hooks:
        hook.workflow_transitions = [
            t for t in hook.workflow_transitions if t.id != transition_id
        ]


class API:
    def __init__(self):
        self.abstra_json_path = Settings.root_path.joinpath("abstra.json")
        if not self.abstra_json_path.exists():
            self.init_empty()

    def deploy(self):
        deploy()

    def init_empty(self):
        self.persist(AbstraJSON.make_empty())

    def persist(self, abstra_json: AbstraJSON):
        temp_file = Path(tempfile.mkdtemp()) / "abstra.json"

        with temp_file.open("w") as f:
            json.dump(abstra_json.__dict__, f, indent=2)
        temp_file.replace(self.abstra_json_path)

    def load_abstra_json(self) -> AbstraJSON:
        abstra_json_content = json.loads(
            self.abstra_json_path.read_text(encoding="utf-8")
        )
        return AbstraJSON.from_dict(abstra_json_content)

    def get_workspace(self) -> WorkspaceJSON:
        abstra_json = self.load_abstra_json()
        return abstra_json.workspace

    def get_page_runtime(self, path) -> Union[DashJSON, FormJSON, None]:
        abstra_json = self.load_abstra_json()

        for form in abstra_json.forms:
            if path == form.path:
                return form

        for dash in abstra_json.dashes:
            if path == dash.path:
                return dash

        return None

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
        abstra_json = self.load_abstra_json()
        abstra_json.workspace.update(changes, abstra_json.dashes, abstra_json.forms)
        self.persist(abstra_json)
        return abstra_json.workspace

    # Forms CLRUD

    def create_form(self) -> FormJSON:
        abstra_json = self.load_abstra_json()

        file_name = f"new_form_{random_id()}"
        file = f"{file_name}.py"
        Settings.root_path.joinpath(file).write_text(new_form_code, encoding="utf-8")
        form = FormJSON(
            file=file, path=file_name, title="Untitled Form", workflow_transitions=[]
        )

        abstra_json.forms.append(form)

        self.persist(abstra_json)

        return form

    def get_forms(self) -> List[FormJSON]:
        abstra_json = self.load_abstra_json()
        return abstra_json.forms

    def get_form(self, path: str) -> Optional[FormJSON]:
        abstra_json = self.load_abstra_json()

        for form in abstra_json.forms:
            if path == form.path:
                return form

        return None

    def delete_form(self, path: str):
        abstra_json = self.load_abstra_json()
        forms = abstra_json.forms
        abstra_json.forms = [f for f in forms if f.path != path]

        self.persist(abstra_json)

    # Dashes CLRUD

    def create_dash(self) -> DashJSON:
        abstra_json = self.load_abstra_json()

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

        self.persist(abstra_json)

        return dash

    def get_dashes(self) -> List[DashJSON]:
        abstra_json = self.load_abstra_json()
        return abstra_json.dashes

    def get_dash(self, path: str) -> Optional[DashJSON]:
        abstra_json = self.load_abstra_json()

        for dash in abstra_json.dashes:
            if path == dash.path:
                return dash

        return None

    def delete_dash(self, path: str):
        abstra_json = self.load_abstra_json()
        dashes = abstra_json.dashes
        abstra_json.dashes = [d for d in dashes if d.path != path]

        self.persist(abstra_json)

    # Hooks CLRUD

    def create_hook(self) -> HookJSON:
        abstract_json = self.load_abstra_json()

        file_name = f"new_hook_{random_id()}"
        file = f"{file_name}.py"
        Settings.root_path.joinpath(file).write_text(new_form_code, encoding="utf-8")
        hook = HookJSON(
            file=file, path=file_name, title="Untitled Hook", workflow_transitions=[]
        )

        abstract_json.hooks.append(hook)

        self.persist(abstract_json)

        return hook

    def get_hooks(self) -> List[HookJSON]:
        abstra_json = self.load_abstra_json()
        return abstra_json.hooks

    def get_hook(self, path: str) -> Optional[HookJSON]:
        abstra_json = self.load_abstra_json()

        for hook in abstra_json.hooks:
            if path == hook.path:
                return hook

        return None

    def delete_hook(self, path: str):
        abstra_json = self.load_abstra_json()
        hooks = abstra_json.hooks
        abstra_json.hooks = [h for h in hooks if h.path != path]

        self.persist(abstra_json)

    # Jobs CLRUD

    def get_jobs(self):
        abstra_json = self.load_abstra_json()
        return abstra_json.jobs

    def get_job(self, identifier: str):
        abstra_json = self.load_abstra_json()
        for job in abstra_json.jobs:
            if identifier == job.identifier:
                return job
        return None

    def create_job(self):
        abstra_json = self.load_abstra_json()

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

        self.persist(abstra_json)

        return job

    def update_runtime(
        self, path: str, changes: Dict[str, Any]
    ) -> Union[FormJSON, DashJSON, HookJSON, JobJSON]:
        abstra_json = self.load_abstra_json()
        runtime = abstra_json.update_runtime(path, changes)
        self.persist(abstra_json)

        return runtime

    def delete_job(self, identifier: str):
        abstra_json = self.load_abstra_json()
        jobs = abstra_json.jobs
        abstra_json.jobs = [j for j in jobs if j.identifier != identifier]

        self.persist(abstra_json)

    def get_stage_runs(self):
        stage = flask.request.args.get("stage")
        return [
            stage_run.to_dto()
            for stage_run in StageRunRepository.find(dict(stage=stage))
        ]

    # workflow visual editor

    def workflow_initial_data(self):
        abstra_json = self.load_abstra_json()
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

        return result

    def workflow_move(self, payload):
        abstra_json = self.load_abstra_json()
        for move in payload:
            node = _find_node(abstra_json, move["type"], move["id"])
            node.workflow_position = move["position"]
        self.persist(abstra_json)

    def workflow_duplicate_nodes(self, payload):
        abstra_json = self.load_abstra_json()
        for item in payload:
            node = _find_node(abstra_json, item["type"], item["original_id"])
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

        self.persist(abstra_json)

    def workflow_add_nodes(self, payload):
        abstra_json = self.load_abstra_json()
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
                    is_initial=True,
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
                    is_initial=True,
                    workflow_transitions=[],
                )
                abstra_json.hooks.append(hook)
                Settings.root_path.joinpath(hook.file).write_text(new_hook_code)
            else:
                raise UnknownNodeTypeError(node_type)
        self.persist(abstra_json)

    def workflow_delete(self, payload):
        abstra_json = self.load_abstra_json()

        for item in payload:
            if item["type"] == "transitions":
                transition = _find_transition_by_id(abstra_json, item["id"])
                _delete_transition_by_id(abstra_json, transition.id)
            else:
                node = _find_node(abstra_json, item["type"], item["id"])
                if Settings.root_path.joinpath(node.file).exists():
                    Settings.root_path.joinpath(node.file).unlink()
                if isinstance(node, FormJSON):
                    abstra_json.forms = [
                        f for f in abstra_json.forms if f.path != node.path
                    ]
                elif isinstance(node, JobJSON):
                    abstra_json.jobs = [
                        j for j in abstra_json.jobs if j.identifier != node.identifier
                    ]
                elif isinstance(node, HookJSON):
                    abstra_json.hooks = [
                        h for h in abstra_json.hooks if h.path != node.path
                    ]
                _delete_transitions_pointing_to(
                    abstra_json=abstra_json, node_type=item["type"], node_id=item["id"]
                )
        self.persist(abstra_json)

    def workflow_add_transition(self, payload):
        if len(payload) == 0:
            return
        abstra_json = self.load_abstra_json()
        for transition in payload:
            double_transition = _find_transition(
                abstra_json,
                transition["source"]["type"],
                transition["source"]["id"],
                transition["target"]["type"],
                transition["target"]["id"],
                raise_error=False,
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

            source = _find_node(
                abstra_json, transition["source"]["type"], transition["source"]["id"]
            )
            _find_node(
                abstra_json, transition["target"]["type"], transition["target"]["id"]
            )
            source.workflow_transitions.append(
                WorkflowTransitionJSON(
                    target_path=transition["target"]["id"],
                    id=random_id(),
                    label="",
                    target_type=transition["target"]["type"],
                )
            )
        self.persist(abstra_json)

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
