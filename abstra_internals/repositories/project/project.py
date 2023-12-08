import sys, uuid, shutil, json, tempfile, os
from typing import Generator, List, Optional, Union, Any, Dict, Tuple
from dataclasses import dataclass
from pathlib import Path

from abstra_internals.utils.format import normalize_path

from ...utils.file import traverse_code
from ...utils import check_is_url
from ...settings import Settings
from . import json_migrations

WorkflowStage = Union["FormStage", "HookStage", "JobStage", "ScriptStage"]
PathableStage = Union["FormStage", "HookStage"]


@dataclass
class WorkflowTransition:
    id: str
    target_id: str
    target_type: str
    label: str

    @property
    def as_dict(self) -> dict:
        return {
            "target_id": self.target_id,
            "target_type": self.target_type,
            "label": self.label,
            "id": self.id,
        }

    @staticmethod
    def from_dict(data: dict):
        return WorkflowTransition(
            target_id=data["target_id"],
            target_type=data["target_type"],
            label=data["label"],
            id=data["id"],
        )


@dataclass
class HookStage:
    id: str
    file: str
    path: str
    title: str
    workflow_transitions: List[WorkflowTransition]
    workflow_position: Tuple[float, float]
    is_initial: bool = True
    enabled: bool = False

    @staticmethod
    def from_dict(dto: dict):
        x, y = dto["workflow_position"]
        return HookStage(
            id=dto["id"],
            file=dto["file"],
            path=dto["path"],
            title=dto["title"],
            enabled=dto["enabled"],
            workflow_position=(x, y),
            workflow_transitions=[
                WorkflowTransition.from_dict(t) for t in dto["transitions"]
            ],
            is_initial=dto["is_initial"],
        )

    @staticmethod
    def create(
        id: Union[str, None] = None,
        workflow_position: Tuple[int, int] = (0, 0),
        title: str = "Untitled Hook",
    ):
        _id: str = id or str(uuid.uuid4())
        return HookStage(
            id=_id,
            file=f"new_hook_{_id[:8]}.py",
            path=f"new_hook_{_id[:8]}",
            title=title,
            is_initial=True,
            workflow_transitions=[],
            workflow_position=workflow_position,
        )

    @property
    def runner_type(self):
        return "hook"

    @property
    def admin_dto(self):
        return {
            "title": self.title,
            "id": self.id,
            "path": self.path,
            "type": "hook",
            "is_initial": self.is_initial,
        }

    @property
    def as_dict(self):
        return {
            "id": self.id,
            "file": self.file,
            "path": self.path,
            "title": self.title,
            "enabled": self.enabled,
            "workflow_position": self.workflow_position,
            "is_initial": self.is_initial,
            "transitions": [t.as_dict for t in self.workflow_transitions],
        }

    @property
    def editor_dto(self):
        return self.as_dict

    @property
    def file_path(self):
        return Settings.root_path.joinpath(self.file)

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in ["title", "enabled"]:
                setattr(self, attr, value)
            elif attr == "file":
                _update_file(self, value)
            elif attr == "path":
                setattr(self, attr, normalize_path(value))
            else:
                raise Exception(f"Cannot update {attr} of hook")

    def duplicate(self, new_id: str, new_position: Tuple[int, int] = (0, 0)):
        return self.from_dict(
            {
                **self.as_dict,
                "id": new_id,
                "workflow_position": new_position,
                "transitions": [],
            }
        )


@dataclass
class ScriptStage:
    id: str
    file: str
    title: str
    workflow_transitions: List[WorkflowTransition]
    workflow_position: Tuple[float, float]
    is_initial: bool = True

    @staticmethod
    def create(
        id: Union[str, None] = None,
        workflow_position: Tuple[int, int] = (0, 0),
        title: str = "Untitled Script",
    ):
        _id = id or str(uuid.uuid4())
        return ScriptStage(
            id=_id,
            file=f"new_script_{_id[:8]}.py",
            title=title,
            is_initial=True,
            workflow_transitions=[],
            workflow_position=workflow_position,
        )

    @staticmethod
    def from_dict(data: Dict):
        x, y = data["workflow_position"]
        return ScriptStage(
            id=data["id"],
            file=data["file"],
            title=data["title"],
            workflow_position=(x, y),
            is_initial=data["is_initial"],
            workflow_transitions=[
                WorkflowTransition.from_dict(t) for t in data["transitions"]
            ],
        )

    @property
    def runner_type(self):
        return "script"

    @property
    def admin_dto(self):
        return {
            "title": self.title,
            "id": self.id,
            "type": "script",
            "is_initial": self.is_initial,
        }

    @property
    def as_dict(self):
        return {
            "id": self.id,
            "file": self.file,
            "title": self.title,
            "is_initial": self.is_initial,
            "workflow_position": self.workflow_position,
            "transitions": [t.as_dict for t in self.workflow_transitions],
        }

    @property
    def editor_dto(self):
        return self.as_dict

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

    def duplicate(self, new_id: str, new_position: Tuple[int, int]):
        return self.from_dict(
            {
                **self.as_dict,
                "id": new_id,
                "workflow_position": new_position,
                "transitions": [],
            }
        )


@dataclass
class JobStage:
    id: str
    file: str
    title: str
    schedule: str
    workflow_position: Tuple[float, float]
    workflow_transitions: List[WorkflowTransition]

    @staticmethod
    def create(
        id: Union[str, None] = None,
        workflow_position: Tuple[int, int] = (0, 0),
        title: str = "Untitled Job",
    ):
        _id = id or str(uuid.uuid4())
        return JobStage(
            id=_id,
            file=f"new_job_{_id[:8]}.py",
            title=title,
            schedule="* * * * *",
            workflow_position=workflow_position,
            workflow_transitions=[],
        )

    @staticmethod
    def from_dict(data: Dict):
        x, y = data["workflow_position"]
        return JobStage(
            file=data["file"],
            id=data["id"],
            title=data["title"],
            schedule=data["schedule"],
            workflow_position=(x, y),
            workflow_transitions=[
                WorkflowTransition.from_dict(t) for t in data["transitions"]
            ],
        )

    @property
    def runner_type(self):
        return "job"

    @property
    def admin_dto(self):
        return {"title": self.title, "id": self.id, "type": "job", "is_initial": True}

    @property
    def as_dict(self):
        return {
            "id": self.id,
            "file": self.file,
            "title": self.title,
            "schedule": self.schedule,
            "workflow_position": self.workflow_position,
            "transitions": [t.as_dict for t in self.workflow_transitions],
        }

    @property
    def editor_dto(self):
        return self.as_dict

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

    def duplicate(self, new_id: str, new_position: Tuple[int, int]):
        return self.from_dict(
            {
                **self.as_dict,
                "id": new_id,
                "workflow_position": new_position,
                "transitions": [],
            }
        )


@dataclass
class FormStage:
    id: str
    file: str
    title: str
    path: str
    workflow_transitions: List[WorkflowTransition]
    workflow_position: Tuple[float, float]
    is_initial: bool = True
    end_message: Optional[str] = None
    auto_start: Optional[bool] = False
    start_message: Optional[str] = None
    error_message: Optional[str] = None
    welcome_title: Optional[str] = None
    allow_restart: Optional[bool] = False
    timeout_message: Optional[str] = None
    start_button_text: Optional[str] = None
    restart_button_text: Optional[str] = None

    @staticmethod
    def create(
        id: Union[str, None] = None,
        workflow_position: Tuple[int, int] = (0, 0),
        title: str = "Untitled Form",
    ):
        _id = id or str(uuid.uuid4())
        return FormStage(
            id=_id,
            file=f"new_form_{_id[:8]}.py",
            path=f"new_form_{_id[:8]}",
            title=title,
            is_initial=True,
            workflow_transitions=[],
            workflow_position=workflow_position,
        )

    @staticmethod
    def from_dict(data: dict):
        x, y = data["workflow_position"]
        return FormStage(
            id=data["id"],
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

    @property
    def runner_type(self):
        return "form"

    @property
    def admin_dto(self):
        return {
            "title": self.title,
            "id": self.id,
            "path": self.path,
            "type": "form",
            "is_initial": self.is_initial,
        }

    @property
    def browser_runner_dto(self):
        allow_restart = self.allow_restart if self.is_initial else False

        return {
            "id": self.id,
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
            "transitions": [t.as_dict for t in self.workflow_transitions],
        }

    @property
    def as_dict(self):
        return self.editor_dto

    @property
    def file_path(self):
        return Settings.root_path.joinpath(self.file)

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in [
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
            elif attr == "path":
                setattr(self, attr, normalize_path(value))
            else:
                raise Exception(f"Cannot update {attr} of form")

    def duplicate(self, new_id: str, new_position: Tuple[int, int]):
        return self.from_dict(
            {
                **self.as_dict,
                "id": new_id,
                "workflow_position": new_position,
                "transitions": [],
            }
        )


@dataclass
class SidebarItem:
    id: str
    name: str
    path: str
    type: str
    visible: Optional[bool]

    @property
    def as_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "path": self.path,
            "type": self.type,
            "visible": self.visible,
        }


@dataclass
class Sidebar:
    items: List[SidebarItem]

    @staticmethod
    def from_dict(
        sidebar_data: List[dict],
        forms: List[FormStage] = [],
    ):
        item_name = lambda path: [s.title for s in forms if s.path == path][0]
        stored_items = []

        initial_forms = [f for f in forms if f.is_initial]

        for item in sidebar_data:
            if item["path"] in [f.path for f in initial_forms]:
                sidebar_item = SidebarItem(
                    id=item["id"],
                    name=item_name(item["path"]),
                    path=item["path"],
                    type=item["type"],
                    visible=item.get("visible"),
                )
                stored_items.append(sidebar_item)

        for form in initial_forms:
            if form.path not in [item.path for item in stored_items]:
                stored_items.append(
                    SidebarItem(
                        id=form.path,
                        name=form.title,
                        path=form.path,
                        type="form",
                        visible=False,
                    )
                )
        return Sidebar(items=stored_items)

    @property
    def as_dict(self):
        return [item.as_dict for item in self.items]


@dataclass
class StyleSettings:
    name: str
    sidebar: Sidebar
    theme: Optional[str] = None
    logo_url: Optional[str] = None
    brand_name: Optional[str] = None
    main_color: Optional[str] = None
    font_family: Optional[str] = None
    font_color: Optional[str] = None

    @property
    def as_dict(self):
        return {
            "id": None,
            "name": self.name,
            "theme": self.theme,
            "logo_url": self.logo_url,
            "brand_name": self.brand_name,
            "main_color": self.main_color,
            "font_color": self.font_color,
            "font_family": self.font_family,
            "sidebar": self.sidebar.as_dict,
        }

    @property
    def browser_runner_dto(self):
        if isinstance(self.logo_url, str) and check_is_url(self.logo_url):
            logo_url = self.logo_url
        elif self.logo_url:
            logo_url = "/_assets/logo"
        else:
            logo_url = None
        return {**self.as_dict, "logo_url": logo_url}

    @property
    def editor_dto(self):
        return self.as_dict

    def update(
        self,
        changes: Dict[str, Any],
        forms: List[FormStage] = [],
    ):
        for attr, value in changes.items():
            if attr == "sidebar":
                self.sidebar = Sidebar.from_dict(changes["sidebar"], forms)
            else:
                setattr(self, attr, value)

    @staticmethod
    def from_dict(data: Dict, forms: List[FormStage] = []):
        return StyleSettings(
            sidebar=Sidebar.from_dict(data.get("sidebar", []), forms=forms),
            name=data.get("name", "Untitled Workspace"),
            font_family=data.get("font_family"),
            brand_name=data.get("brand_name"),
            main_color=data.get("main_color"),
            font_color=data.get("font_color"),
            logo_url=data.get("logo_url"),
            theme=data.get("theme"),
        )


class PathConflictError(Exception):
    pass


class StageNotFoundError(KeyError):
    pass


class TransitionNotFoundError(KeyError):
    pass


@dataclass
class VisualizationItem:
    name: str
    type: str

    def __eq__(self, __value: object) -> bool:
        if not isinstance(__value, VisualizationItem):
            return False
        return self.name == __value.name and self.type == __value.type

    @staticmethod
    def from_dict(data: dict):
        return VisualizationItem(
            name=data["name"],
            type=data["type"],
        )

    @property
    def as_dict(self):
        return {
            "name": self.name,
            "type": self.type,
        }


@dataclass
class VisualizationSettings:
    items: List[VisualizationItem]

    def __eq__(self, __value: object) -> bool:
        if not isinstance(__value, VisualizationSettings):
            return False
        return self.items == __value.items

    @staticmethod
    def create():
        return VisualizationSettings([])

    @staticmethod
    def from_dict(data: list):
        return VisualizationSettings(
            items=[VisualizationItem.from_dict(item) for item in data]
        )

    @property
    def as_dict(self):
        return [item.as_dict for item in self.items]


@dataclass
class Project:
    workspace: StyleSettings
    scripts: List[ScriptStage]
    forms: List[FormStage]
    hooks: List[HookStage]
    jobs: List[JobStage]

    @property
    def as_dict(self):
        return {
            "workspace": self.workspace.as_dict,
            "jobs": [job.as_dict for job in self.jobs],
            "hooks": [hook.as_dict for hook in self.hooks],
            "forms": [form.as_dict for form in self.forms],
            "scripts": [script.as_dict for script in self.scripts],
        }

    @property
    def stages(self) -> List[WorkflowStage]:
        return [*self.forms, *self.jobs, *self.hooks, *self.scripts]

    def add_stage(self, stage: WorkflowStage):
        if isinstance(stage, FormStage):
            self.forms.append(stage)
        elif isinstance(stage, HookStage):
            self.hooks.append(stage)
        elif isinstance(stage, JobStage):
            self.jobs.append(stage)
        elif isinstance(stage, ScriptStage):
            self.scripts.append(stage)
        else:
            raise Exception(f"Cannot add stage of type {type(stage)}")

    def get_stage(self, id: str) -> Optional[WorkflowStage]:
        for stage in self.stages:
            if stage.id == id:
                return stage

        return None

    def get_stage_raises(self, id: str) -> WorkflowStage:
        stage = self.get_stage(id)
        if not stage:
            raise StageNotFoundError(f"Stage with id '{id}' not found")
        return stage

    def get_form(self, id: str) -> Optional[FormStage]:
        for form in self.forms:
            if form.id == id:
                return form

        return None

    def get_hook(self, id: str) -> Optional[HookStage]:
        for hook in self.hooks:
            if hook.id == id:
                return hook

        return None

    def get_job(self, id: str) -> Optional[JobStage]:
        for job in self.jobs:
            if job.id == id:
                return job

        return None

    def get_script(self, id: str) -> Optional[ScriptStage]:
        for script in self.scripts:
            if script.id == id:
                return script

        return None

    def get_hook_by_path(self, path: str) -> Optional[HookStage]:
        for hook in self.hooks:
            if hook.path == path:
                return hook

        return None

    def get_form_by_path(self, path: str) -> Optional[FormStage]:
        for form in self.forms:
            if form.path == path:
                return form

    def get_stage_by_path(self, path: str) -> Optional[WorkflowStage]:
        for form in self.forms:
            if form.path == path:
                return form

        for hook in self.hooks:
            if hook.path == path:
                return hook

        return None

    def get_initial_stages(self) -> List[WorkflowStage]:
        return [r for r in self.stages if self.is_initial(r)]

    def get_transition(self, id: str) -> WorkflowTransition:
        for stage in self.stages:
            for transition in stage.workflow_transitions:
                if transition.id == id:
                    return transition

        raise TransitionNotFoundError(f"Transition with id '{id}' not found")

    def update_transition(self, id: str, changes: Dict[str, Any]) -> WorkflowTransition:
        transition = self.get_transition(id)
        transition.label = changes.get("label", transition.label)
        return transition

    def follow_transition(
        self, start_stage: str, transition_label: str
    ) -> WorkflowStage:
        stage = self.get_stage(start_stage)

        if not stage:
            raise StageNotFoundError(f"stage with id '{start_stage}' not found")

        for transition in stage.workflow_transitions:
            if transition.label == transition_label:
                stage = self.get_stage(transition.target_id)

                if not stage:
                    raise StageNotFoundError(
                        f"stage with id '{transition.target_id}' not found"
                    )

                return stage

        raise TransitionNotFoundError(
            f"Transition with label '{transition_label}' not found"
        )

    def find_transition(
        self, source_id: str, target_id: str
    ) -> Optional[WorkflowTransition]:
        stage = self.get_stage(source_id)

        if not stage:
            raise StageNotFoundError(f"stage with id '{source_id}' not found")

        for transition in stage.workflow_transitions:
            if transition.target_id == target_id:
                return transition

        return None

    def delete_transition(self, id: str):
        for stage in self.stages:
            stage.workflow_transitions = [
                t for t in stage.workflow_transitions if t.id != id
            ]

    def delete_transition_by_target(self, target_id: str):
        for stage in self.stages:
            stage.workflow_transitions = [
                t for t in stage.workflow_transitions if t.target_id != target_id
            ]

    def update_path(self, stage: PathableStage, new_path: str):
        old_path = stage.path

        if self.get_stage_by_path(new_path):
            raise PathConflictError(f"Path {new_path} already exists")

        all_stages: List[Union[FormStage, HookStage, JobStage]] = [
            *self.forms,
            *self.hooks,
            *self.jobs,
        ]

        for _ in all_stages:
            for transition in stage.workflow_transitions:
                if transition.target_id == old_path:
                    transition.target_id = new_path

        stage.path = new_path

    def update_stage(self, id: str, changes: Dict[str, Any]) -> WorkflowStage:
        stage = self.get_stage(id)
        new_path = changes.get("path")

        if not stage:
            raise Exception(f"Stage with id {id} not found")

        if new_path:
            if not isinstance(stage, FormStage) and not isinstance(stage, HookStage):
                raise Exception(
                    f"Stage with id {id} is a {type(stage)} does not have a path"
                )

            normalized_path = normalize_path(new_path)
            self.update_path(stage, normalized_path)

        stage.update(changes)

        return stage

    def delete_stage(self, id: str, remove_file: bool = False):
        stage = self.get_stage(id)
        if stage is None:
            return
        self.delete_transition_by_target(id)

        if isinstance(stage, FormStage):
            self.forms = [f for f in self.forms if f.id != id]
        elif isinstance(stage, HookStage):
            self.hooks = [h for h in self.hooks if h.id != id]
        elif isinstance(stage, JobStage):
            self.jobs = [j for j in self.jobs if j.id != id]
        elif isinstance(stage, ScriptStage):
            self.scripts = [s for s in self.scripts if s.id != id]

        if remove_file:
            path = Settings.root_path.joinpath(stage.file)
            if path.exists():
                os.remove(path.absolute())

    def is_initial(self, target_stage: WorkflowStage) -> bool:
        for stage in self.stages:
            for wt in stage.workflow_transitions:
                if wt.target_id == target_stage.id:
                    return False

        return True

    @staticmethod
    def from_dict(data: dict):
        non_only_initial_stages = data["forms"] + data["hooks"] + data["scripts"]
        stages = data["jobs"] + non_only_initial_stages

        for stage in stages:
            if stage.get("is_initial") is None:
                stage["is_initial"] = True
            for transition in stage["transitions"]:
                for tg_stage in non_only_initial_stages:
                    if tg_stage["id"] == transition["target_id"]:
                        tg_stage["is_initial"] = False

        try:
            scripts = [ScriptStage.from_dict(script) for script in data["scripts"]]
            forms = [FormStage.from_dict(form) for form in data["forms"]]
            hooks = [HookStage.from_dict(hook) for hook in data["hooks"]]
            jobs = [JobStage.from_dict(job) for job in data["jobs"]]

            workspace = StyleSettings.from_dict(data["workspace"], forms=forms)

            return Project(
                workspace=workspace,
                scripts=scripts,
                forms=forms,
                hooks=hooks,
                jobs=jobs,
            )

        except TypeError:
            print("Error: incompatible abstra.json file.")
            import traceback

            traceback.print_exc()
            sys.exit(1)

    @staticmethod
    def create():
        return Project(
            workspace=StyleSettings(name="Untitled Workspace", sidebar=Sidebar([])),
            scripts=[],
            forms=[],
            hooks=[],
            jobs=[],
        )

    @property
    def workflow_stages(self) -> List[WorkflowStage]:
        return [*self.forms, *self.jobs, *self.hooks, *self.scripts]

    def iter_entrypoints(self) -> Generator[Path, None, None]:
        for runtime in self.workflow_stages:
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


def _update_file(
    stage: WorkflowStage,
    new_file_relative: str,
):
    old_file = Settings.root_path.joinpath(stage.file)
    new_file = Settings.root_path.joinpath(new_file_relative)

    if old_file.exists() and not new_file.exists():
        old_file.rename(new_file)

    stage.file = new_file_relative


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

        project_data = project.as_dict
        project_data["version"] = json_migrations.get_latest_version()

        with temp_file.open("w") as f:
            json.dump(project_data, f, indent=2)

        shutil.move(str(temp_file), cls.get_file_path())

    @classmethod
    def load(cls) -> Project:
        data = json.loads(cls.get_file_path().read_text(encoding="utf-8"))

        initial_version = data.get("version")
        migrated_data = json_migrations.migrate(
            data,
            Settings.root_path,
        )

        if migrated_data["version"] != initial_version:
            cls.save(Project.from_dict(migrated_data))

        return Project.from_dict(migrated_data)
