import sys, uuid, shutil, json, tempfile

from typing import Generator, List, Optional, Union, Any, Dict, Tuple
from dataclasses import dataclass
from pathlib import Path

from .compatibilty import strict_compatible
from ...utils import check_is_url
from ...utils.file import traverse_code
from ...settings import Settings

WorkflowStage = Union["FormStage", "HookStage", "JobStage", "ScriptStage"]


@dataclass
class WorkflowTransition:
    target_path: str
    target_type: str
    label: str
    id: str

    def __post_init__(self):
        self.id = str(uuid.uuid4()) if self.id is None else self.id

    @property
    def __dict__(self):
        return {
            "target_path": self.target_path,
            "target_type": self.target_type,
            "label": self.label,
            "id": self.id,
        }

    @staticmethod
    def from_dict(data: dict):
        return WorkflowTransition(
            target_path=data["target_path"],
            target_type=data["target_type"],
            label=data["label"],
            id=data["id"],
        )


@dataclass
class SidebarRuntime:
    title: str
    path: str


@dataclass
class HookStage:
    file: str
    path: str
    title: str
    workflow_transitions: List[WorkflowTransition]
    is_initial: bool = False
    enabled: bool = False
    workflow_position: Tuple[float, float] = (0, 0)

    @property
    def runner_type(self):
        return "hook"

    @property
    def __dict__(self):
        return {
            "file": self.file,
            "path": self.path,
            "title": self.title,
            "enabled": self.enabled,
            "workflow_position": self.workflow_position,
            "is_initial": self.is_initial,
            "transitions": [t.__dict__ for t in self.workflow_transitions],
        }

    @property
    def editor_dto(self):
        return self.__dict__

    @property
    def file_path(self):
        return Settings.root_path.joinpath(self.file)

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in ["path", "title", "enabled"]:
                setattr(self, attr, value)
            elif attr == "file":
                _update_file(self, value)
            else:
                raise Exception(f"Cannot update {attr} of hook")

    @staticmethod
    def from_dict(data: dict):
        x, y = data["workflow_position"]
        return HookStage(
            file=data["file"],
            path=data["path"],
            title=data["title"],
            enabled=data["enabled"],
            workflow_position=(x, y),
            workflow_transitions=[
                WorkflowTransition.from_dict(t) for t in data["transitions"]
            ],
            is_initial=data["is_initial"],
        )

    def duplicate(self):
        return self.from_dict(self.__dict__)


@dataclass
class ScriptStage:
    file: str
    title: str
    path: str
    workflow_transitions: List[WorkflowTransition]
    is_initial: bool = False
    workflow_position: Tuple[float, float] = (0, 0)

    @property
    def runner_type(self):
        return "script"

    @property
    def __dict__(self):
        return {
            "id": self.path,
            "file": self.file,
            "path": self.path,
            "title": self.title,
            "is_initial": self.is_initial,
            "workflow_position": self.workflow_position,
            "transitions": [t.__dict__ for t in self.workflow_transitions],
        }

    @property
    def editor_dto(self):
        return self.__dict__

    @property
    def file_path(self):
        return Settings.root_path.joinpath(self.file)

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in ["id", "title", "schedule"]:
                setattr(self, attr, value)
            elif attr == "file":
                _update_file(self, value)
            else:
                raise Exception(f"Cannot update {attr} of job")

    @staticmethod
    def from_dict(data: Dict):
        x, y = data["workflow_position"]
        return ScriptStage(
            file=data["file"],
            path=data["path"],
            title=data["title"],
            workflow_position=(x, y),
            is_initial=data["is_initial"],
            workflow_transitions=[
                WorkflowTransition.from_dict(t) for t in data["transitions"]
            ],
        )

    def duplicate(self):
        return self.from_dict(self.__dict__)


@dataclass
class JobStage:
    file: str
    title: str
    identifier: str
    schedule: str
    workflow_position: Tuple[float, float]
    workflow_transitions: List[WorkflowTransition]

    @property
    def runner_type(self):
        return "job"

    @property
    def __dict__(self):
        return {
            "file": self.file,
            "identifier": self.identifier,
            "title": self.title,
            "schedule": self.schedule,
            "workflow_position": self.workflow_position,
            "transitions": [t.__dict__ for t in self.workflow_transitions],
        }

    @property
    def editor_dto(self):
        return self.__dict__

    @property
    def file_path(self):
        return Settings.root_path.joinpath(self.file)

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in ["identifier", "title", "schedule"]:
                setattr(self, attr, value)
            elif attr == "file":
                _update_file(self, value)
            else:
                raise Exception(f"Cannot update {attr} of job")

    @staticmethod
    def from_dict(data: Dict):
        x, y = data["workflow_position"]
        return JobStage(
            file=data["file"],
            identifier=data["identifier"],
            title=data["title"],
            schedule=data["schedule"],
            workflow_position=(x, y),
            workflow_transitions=[
                WorkflowTransition.from_dict(t) for t in data["transitions"]
            ],
        )

    def duplicate(self):
        return self.from_dict(self.__dict__)

    @property
    def path(self):
        return self.identifier


@dataclass
class FormStage(SidebarRuntime):
    file: str
    title: str
    workflow_transitions: List[WorkflowTransition]
    is_initial: bool = False
    workflow_position: Tuple[float, float] = (0, 0)
    end_message: Optional[str] = None
    auto_start: Optional[bool] = False
    start_message: Optional[str] = None
    error_message: Optional[str] = None
    welcome_title: Optional[str] = None
    allow_restart: Optional[bool] = False
    timeout_message: Optional[str] = None
    start_button_text: Optional[str] = None
    restart_button_text: Optional[str] = None

    @property
    def runner_type(self):
        return "form"

    @property
    def browser_runner_dto(self):
        allow_restart = self.allow_restart if self.is_initial else False

        return {
            "id": self.path,
            "path": self.path,
            "title": self.title,
            "is_initial": self.is_initial,
            "auto_start": self.auto_start,
            "allow_restart": allow_restart,
            "end_message": self.end_message,
            "start_message": self.start_message,
            "error_message": self.error_message,
            "welcome_title": self.welcome_title,
            "timeout_message": self.timeout_message,
            "start_button_text": self.start_button_text,
            "restart_button_text": self.restart_button_text,
        }

    @property
    def editor_dto(self):
        return {
            **self.browser_runner_dto,
            "file": self.file,
            "workflow_position": self.workflow_position,
            "transitions": [t.__dict__ for t in self.workflow_transitions],
        }

    @property
    def __dict__(self):
        return self.editor_dto

    @property
    def file_path(self):
        return Settings.root_path.joinpath(self.file)

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in [
                "path",
                "title",
                "end_message",
                "auto_start",
                "start_message",
                "error_message",
                "welcome_title",
                "allow_restart",
                "timeout_message",
                "start_button_text",
                "restart_button_text",
            ]:
                setattr(self, attr, value)
            elif attr == "file":
                _update_file(self, value)
            else:
                raise Exception(f"Cannot update {attr} of form")

    @staticmethod
    def from_dict(data: dict):
        x, y = data["workflow_position"]
        return FormStage(
            file=data["file"],
            path=data["path"],
            title=data["title"],
            end_message=data["end_message"],
            auto_start=data["auto_start"],
            start_message=data["start_message"],
            error_message=data["error_message"],
            welcome_title=data["welcome_title"],
            allow_restart=data["allow_restart"],
            timeout_message=data["timeout_message"],
            start_button_text=data["start_button_text"],
            restart_button_text=data["restart_button_text"],
            workflow_position=(x, y),
            is_initial=data["is_initial"],
            workflow_transitions=[
                WorkflowTransition.from_dict(t) for t in data["transitions"]
            ],
        )

    def duplicate(self):
        return self.from_dict(self.__dict__)


def is_widget(x: Dict[str, Any]):
    return "slot" not in x


@dataclass
class SidebarItemJSON:
    id: str
    name: str
    path: str
    type: str
    visible: Optional[bool]

    @property
    def __dict__(self):
        return {
            "id": self.id,
            "name": self.name,
            "path": self.path,
            "type": self.type,
            "visible": self.visible,
        }


@dataclass
class SidebarJSON:
    items: List[SidebarItemJSON]

    @staticmethod
    def from_dict(
        sidebar_data: List[dict],
        forms: List[FormStage] = [],
    ):
        item_name = lambda path: [s.title for s in [*forms] if s.path == path][0]
        stored_items = []
        for item in sidebar_data:
            if item["path"] in [f.path for f in forms]:
                sidebar_item = SidebarItemJSON(
                    id=item["id"],
                    name=item_name(item["path"]),
                    path=item["path"],
                    type=item["type"],
                    visible=item.get("visible"),
                )
                stored_items.append(sidebar_item)

        for form in forms:
            if form.path not in [item.path for item in stored_items]:
                stored_items.append(
                    SidebarItemJSON(
                        id=form.path,
                        name=form.title,
                        path=form.path,
                        type="form",
                        visible=False,
                    )
                )
        return SidebarJSON(items=stored_items)

    @property
    def __dict__(self):
        return [item.__dict__ for item in self.items]


@dataclass
class WorkspaceJSON:
    name: str
    sidebar: SidebarJSON
    root: Optional[str] = None  # deprecated
    theme: Optional[str] = None
    logo_url: Optional[str] = None
    brand_name: Optional[str] = None
    main_color: Optional[str] = None
    font_family: Optional[str] = None
    font_color: Optional[str] = None

    @property
    def __dict__(self):
        return {
            "name": self.name,
            "sidebar": self.sidebar.__dict__,
            "root": self.root,  # deprecated
            "theme": self.theme,
            "logo_url": self.logo_url,
            "brand_name": self.brand_name,
            "main_color": self.main_color,
            "font_family": self.font_family,
            "font_color": self.font_color,
        }

    @property
    def browser_runner_dto(self):
        if isinstance(self.logo_url, str) and check_is_url(self.logo_url):
            logo_url = self.logo_url
        elif self.logo_url:
            logo_url = "/_assets/logo"
        else:
            logo_url = None
        return {**self.__dict__, "logo_url": logo_url}

    @property
    def editor_dto(self):
        return self.__dict__

    def update(
        self,
        changes: Dict[str, Any],
        forms: List[FormStage] = [],
    ):
        for attr, value in changes.items():
            if attr == "sidebar":
                self.sidebar = SidebarJSON.from_dict(changes["sidebar"], forms)
            else:
                setattr(self, attr, value)

    @staticmethod
    def from_dict(data: Dict, forms: List[FormStage] = []):
        return WorkspaceJSON(
            name=data.get("name", "Untitled Workspace"),
            sidebar=SidebarJSON.from_dict(
                data.get("sidebar", []),
                forms=forms,
            ),
            root=data.get("root"),  # deprecated
            theme=data.get("theme"),
            logo_url=data.get("logo_url"),
            brand_name=data.get("brand_name"),
            main_color=data.get("main_color"),
            font_family=data.get("font_family"),
            font_color=data.get("font_color"),
        )


class PathConflictError(Exception):
    pass


class RuntimeNotFoundError(KeyError):
    pass


class TransitionNotFoundError(KeyError):
    pass


@dataclass
class Project:
    version: str
    workspace: WorkspaceJSON
    scripts: List[ScriptStage]
    forms: List[FormStage]
    hooks: List[HookStage]
    jobs: List[JobStage]

    @property
    def __dict__(self):
        return {
            "version": self.version,
            "workspace": self.workspace.__dict__,
            "jobs": [job.__dict__ for job in self.jobs],
            "hooks": [hook.__dict__ for hook in self.hooks],
            "forms": [form.__dict__ for form in self.forms],
            "scripts": [script.__dict__ for script in self.scripts],
        }

    @property
    def workflow_runtimes(self) -> List[WorkflowStage]:
        return [*self.forms, *self.jobs, *self.hooks, *self.scripts]

    def iter_entrypoints(self) -> Generator[Path, None, None]:
        for runtime in self.workflow_runtimes:
            yield Path(runtime.file)

    @property
    def project_files(self) -> Generator[Path, None, None]:
        for entrypoint in self.iter_entrypoints():
            yield from traverse_code(entrypoint)

    @property
    def project_local_dependencies(self) -> Generator[Path, None, None]:
        entrypoints = list(self.iter_entrypoints())
        for file in self.project_files:
            if file not in entrypoints:
                yield file

    def get_runtime_by_path(self, path: str) -> Optional[WorkflowStage]:
        for form in self.forms:
            if form.path == path:
                return form

        for hook in self.hooks:
            if hook.path == path:
                return hook

        for job in self.jobs:
            if job.identifier == path:
                return job

        for script in self.scripts:
            if script.path == path:
                return script

        return None

    def get_workflow_runtime_by_path(self, path: str) -> WorkflowStage:
        for form in self.forms:
            if form.path == path:
                return form

        for job in self.jobs:
            if job.identifier == path:
                return job

        for hook in self.hooks:
            if hook.path == path:
                return hook

        for script in self.scripts:
            if script.path == path:
                return script

        raise RuntimeNotFoundError(f"Runtime with id '{path}' not found")

    def get_form_by_path(self, path: str) -> Optional[FormStage]:
        for form in self.forms:
            if form.path == path:
                return form

        return None

    def get_transition(self, id: str):
        for runtime in self.workflow_runtimes:
            for transition in runtime.workflow_transitions:
                if transition.id == id:
                    return transition

        raise TransitionNotFoundError(f"Transition with id '{id}' not found")

    def find_transition(
        self, source_id: str, target_id: str
    ) -> Optional[WorkflowTransition]:
        runtime = self.get_workflow_runtime_by_path(source_id)
        for transition in runtime.workflow_transitions:
            if transition.target_path == target_id:
                return transition

        return None

    def delete_transition(self, id: str):
        for runtime in self.workflow_runtimes:
            runtime.workflow_transitions = [
                t for t in runtime.workflow_transitions if t.id != id
            ]

    def delete_transition_by_target(self, target_id: str):
        for runtime in self.workflow_runtimes:
            runtime.workflow_transitions = [
                t for t in runtime.workflow_transitions if t.target_path != target_id
            ]

    def _update_path_refs(self, old_path: str, new_path: str):
        runtimes: List[Union[FormStage, HookStage, JobStage]] = [
            *self.forms,
            *self.hooks,
            *self.jobs,
        ]

        for runtime in runtimes:
            for wt in runtime.workflow_transitions:
                if wt.target_path == old_path:
                    wt.target_path = new_path

    def update_runtime(self, path: str, changes: Dict[str, Any]) -> WorkflowStage:
        new_path = changes.get("path") or changes.get("identifier")

        if new_path:
            if self.get_runtime_by_path(new_path):
                raise PathConflictError(f"Path {path} already exists")

            self._update_path_refs(path, changes["path"])

        runtime = self.get_runtime_by_path(path)

        if not runtime:
            raise Exception(f"Runtime {path} not found")

        runtime.update(changes)

        return runtime

    def delete_runtime(self, id: str):
        runtime = self.get_runtime_by_path(id)
        self.delete_transition_by_target(id)

        if isinstance(runtime, FormStage):
            self.forms = [f for f in self.forms if f.path != id]
        elif isinstance(runtime, HookStage):
            self.hooks = [h for h in self.hooks if h.path != id]
        elif isinstance(runtime, JobStage):
            self.jobs = [j for j in self.jobs if j.identifier != id]
        elif isinstance(runtime, ScriptStage):
            self.scripts = [s for s in self.scripts if s.path != id]

    def is_initial(self, runtime_path: str) -> bool:
        runtime = self.get_runtime_by_path(runtime_path)

        if not runtime:
            raise Exception(f"Runtime {runtime_path} not found")

        for runtime in self.workflow_runtimes:
            for wt in runtime.workflow_transitions:
                if wt.target_path == runtime_path:
                    return False

        return True

    @staticmethod
    def from_dict(data: dict):
        data = strict_compatible(data)

        for runtime in data["forms"] + data["hooks"] + data["jobs"] + data["scripts"]:
            if runtime.get("is_initial") is None:
                runtime["is_initial"] = True
            for transition in runtime["transitions"]:
                for tg_runtime in data["forms"] + data["hooks"] + data["scripts"]:
                    if tg_runtime["path"] == transition["target_path"]:
                        tg_runtime["is_initial"] = False

        try:
            scripts = [ScriptStage.from_dict(script) for script in data["scripts"]]
            forms = [FormStage.from_dict(form) for form in data["forms"]]
            hooks = [HookStage.from_dict(hook) for hook in data["hooks"]]
            jobs = [JobStage.from_dict(job) for job in data["jobs"]]

            workspace = WorkspaceJSON.from_dict(data["workspace"], forms=forms)

            return Project(
                version=data["version"],
                workspace=workspace,
                scripts=scripts,
                forms=forms,
                hooks=hooks,
                jobs=jobs,
            )
        except TypeError as e:
            print("Error: incompatible abstra.json file.")
            import traceback

            traceback.print_exc()
            sys.exit(1)

    @staticmethod
    def create():
        return Project(
            version="0.1",
            workspace=WorkspaceJSON(name="Untitled Workspace", sidebar=SidebarJSON([])),
            forms=[],
            hooks=[],
            jobs=[],
            scripts=[],
        )


def _update_file(
    runtime: WorkflowStage,
    new_file_relative: str,
):
    old_file = Settings.root_path.joinpath(runtime.file)
    new_file = Settings.root_path.joinpath(new_file_relative)

    if old_file.exists() and not new_file.exists():
        old_file.rename(new_file)

    runtime.file = new_file_relative


class ProjectRepository:
    @classmethod
    def get_file_path(cls):
        return Settings.root_path / "abstra.json"

    @classmethod
    def initialize(cls):
        if not cls.exists():  # double check
            cls.save(Project.create())

    @classmethod
    def exists(cls):
        return cls.get_file_path().exists()

    @classmethod
    def save(cls, project: Project):
        temp_file = Path(tempfile.mkdtemp()) / "abstra.json"

        with temp_file.open("w") as f:
            json.dump(project.__dict__, f, indent=2)
        shutil.move(str(temp_file), cls.get_file_path())

    @classmethod
    def load(cls) -> Project:
        project_content = json.loads(cls.get_file_path().read_text(encoding="utf-8"))
        return Project.from_dict(project_content)
