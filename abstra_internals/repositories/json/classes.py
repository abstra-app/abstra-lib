import sys, uuid, shutil
from dataclasses import dataclass
from typing import List, Optional, Union, Any, Dict, Tuple
import json
from pathlib import Path
from ...utils import check_is_url
from ...settings import Settings
import tempfile
from .compatibilty import strict_compatible
from ...settings import Settings
from ...utils import check_is_url


RuntimeJSON = Union["FormJSON", "DashJSON", "HookJSON", "JobJSON", "ScriptJSON"]
WorkflowRuntimeJSON = Union["FormJSON", "HookJSON", "JobJSON", "ScriptJSON"]


@dataclass
class WorkflowTransitionJSON:
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
        return WorkflowTransitionJSON(
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
class HookJSON:
    file: str
    path: str
    title: str
    workflow_transitions: List[WorkflowTransitionJSON]
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
        return HookJSON(
            file=data["file"],
            path=data["path"],
            title=data["title"],
            enabled=data["enabled"],
            workflow_position=(x, y),
            workflow_transitions=[
                WorkflowTransitionJSON.from_dict(t) for t in data["transitions"]
            ],
            is_initial=data["is_initial"],
        )

    def duplicate(self):
        return self.from_dict(self.__dict__)


@dataclass
class ScriptJSON:
    file: str
    title: str
    path: str
    workflow_transitions: List[WorkflowTransitionJSON]
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
        return ScriptJSON(
            file=data["file"],
            path=data["path"],
            title=data["title"],
            workflow_position=(x, y),
            is_initial=data["is_initial"],
            workflow_transitions=[
                WorkflowTransitionJSON.from_dict(t) for t in data["transitions"]
            ],
        )

    def duplicate(self):
        return self.from_dict(self.__dict__)


@dataclass
class JobJSON:
    file: str
    title: str
    identifier: str
    schedule: str
    workflow_position: Tuple[float, float]
    workflow_transitions: List[WorkflowTransitionJSON]

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
        return JobJSON(
            file=data["file"],
            identifier=data["identifier"],
            title=data["title"],
            schedule=data["schedule"],
            workflow_position=(x, y),
            workflow_transitions=[
                WorkflowTransitionJSON.from_dict(t) for t in data["transitions"]
            ],
        )

    def duplicate(self):
        return self.from_dict(self.__dict__)

    @property
    def path(self):
        return self.identifier


@dataclass
class FormJSON(SidebarRuntime):
    file: str
    title: str
    workflow_transitions: List[WorkflowTransitionJSON]
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
        return {
            "id": self.path,
            "path": self.path,
            "title": self.title,
            "auto_start": self.auto_start,
            "allow_restart": self.allow_restart,
            "end_message": self.end_message,
            "start_message": self.start_message,
            "error_message": self.error_message,
            "welcome_title": self.welcome_title,
            "timeout_message": self.timeout_message,
            "start_button_text": self.start_button_text,
            "restart_button_text": self.restart_button_text,
            "is_initial": self.is_initial,
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
        return FormJSON(
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
                WorkflowTransitionJSON.from_dict(t) for t in data["transitions"]
            ],
        )

    def duplicate(self):
        return self.from_dict(self.__dict__)


def is_widget(x: Dict[str, Any]):
    return "slot" not in x


@dataclass
class DashWidgetJSON:
    id: str
    type: str
    colStart: int
    colEnd: int
    rowStart: int
    rowEnd: int
    props: Dict[str, str]
    events: Dict[str, str]
    variable: Optional[str] = None
    name: Optional[str] = None

    @property
    def browser_runner_dto(self):
        return {
            "id": self.id,
            "type": self.type,
            "name": self.name,
            "variable": self.variable,
            "position": {
                "colStart": self.colStart,
                "colEnd": self.colEnd,
                "rowStart": self.rowStart,
                "rowEnd": self.rowEnd,
            },
            "props": [k for k in self.props.keys()],
            "events": [k for k in self.events.keys()],
        }

    @property
    def editor_dto(self):
        return {
            "id": self.id,
            "type": self.type,
            "variable": self.variable,
            "position": {
                "colStart": self.colStart,
                "colEnd": self.colEnd,
                "rowStart": self.rowStart,
                "rowEnd": self.rowEnd,
            },
            "props": self.props,
            "events": self.events,
        }

    @property
    def __dict__(self):
        return {
            "id": self.id,
            "type": self.type,
            "colStart": self.colStart,
            "colEnd": self.colEnd,
            "rowStart": self.rowStart,
            "rowEnd": self.rowEnd,
            "props": self.props,
            "events": self.events,
            "variable": self.variable,
        }

    def update(self, changes: Dict[str, Any]):
        if "id" in changes:
            self.id = changes["id"]

        if "type" in changes:
            self.type = changes["type"]

        if "variable" in changes:
            self.variable = changes["variable"]

        if "colStart" in changes:
            self.colStart = changes["colStart"]

        if "colEnd" in changes:
            self.colEnd = changes["colEnd"]

        if "rowStart" in changes:
            self.rowStart = changes["rowStart"]

        if "rowEnd" in changes:
            self.rowEnd = changes["rowEnd"]

        if "props" in changes:
            self.props = changes["props"]

        if "events" in changes:
            self.events = changes["events"]

        if "position" in changes:
            self.colStart = changes["position"]["colStart"]
            self.colEnd = changes["position"]["colEnd"]
            self.rowStart = changes["position"]["rowStart"]
            self.rowEnd = changes["position"]["rowEnd"]

    @staticmethod
    def from_dict(obj):
        if "position" in obj:
            obj["colStart"] = obj["position"]["colStart"]
            obj["colEnd"] = obj["position"]["colEnd"]
            obj["rowStart"] = obj["position"]["rowStart"]
            obj["rowEnd"] = obj["position"]["rowEnd"]
            del obj["position"]
        return DashWidgetJSON(**obj)


@dataclass
class SlottableJSON:
    id: str
    type: str
    row: int
    height: int
    order: int
    props: Dict[str, str]
    slot: "SlotJSON"

    @property
    def browser_runner_dto(self):
        return {
            "id": self.id,
            "type": self.type,
            "position": {
                "row": self.row,
                "height": self.height,
                "order": self.order,
            },
            "props": [k for k in self.props.keys()],
            "slot": self.slot.browser_runner_dto,
        }

    @property
    def editor_dto(self):
        return {
            "id": self.id,
            "type": self.type,
            "row": self.row,
            "height": self.height,
            "order": self.order,
            "props": self.props,
            "slot": self.slot.editor_dto,
        }

    @property
    def __dict__(self):
        return {
            "id": self.id,
            "type": self.type,
            "position": {
                "row": self.row,
                "height": self.height,
                "order": self.order,
            },
            "props": self.props,
            "slot": self.slot.editor_dto,
        }

    def update(self, changes: Dict[str, Any]):
        if "id" in changes:
            self.id = changes["id"]

        if "type" in changes:
            self.type = changes["type"]

        if "row" in changes:
            self.row = changes["row"]

        if "height" in changes:
            self.height = changes["height"]

        if "order" in changes:
            self.order = changes["order"]

        if "props" in changes:
            self.props = changes["props"]

        if "slot" in changes:
            self.slot.update(changes["slot"])

        if "position" in changes:
            self.row = changes["position"]["row"]
            self.height = changes["position"]["height"]
            self.order = changes["position"]["order"]

    @staticmethod
    def from_dict(obj):
        if "position" in obj:
            obj["row"] = obj["position"]["row"]
            obj["height"] = obj["position"]["height"]
            obj["order"] = obj["position"]["order"]
            del obj["position"]
        return SlottableJSON(**obj)


class SlotJSON:
    __data: Dict[str, Union[SlottableJSON, DashWidgetJSON]]

    def __init__(self, slot: Dict[str, dict]):
        self.__data = {}
        for id, slottable in slot.items():
            if is_widget(slottable):
                self.__data[id] = DashWidgetJSON.from_dict(slottable)
            else:
                self.__data[id] = SlottableJSON.from_dict(slottable)

    def get(self, id: str):
        if id in self.__data:
            return self.__data[id]

    def items(self):
        return self.__data.items()

    def values(self):
        return self.__data.values()

    @property
    def browser_runner_dto(self):
        return {
            id: slottable.browser_runner_dto for id, slottable in self.__data.items()
        }

    @property
    def editor_dto(self):
        return {id: slottable.editor_dto for id, slottable in self.__data.items()}

    @property
    def __dict__(self):
        return {id: slottable.__dict__ for id, slottable in self.__data.items()}

    def update(self, changes: Dict[str, Any]):
        for id, slottable in self.__data.items():
            if id in changes:
                slottable.update(changes[id])

    @staticmethod
    def from_dict(data: dict):
        return SlotJSON(data)


@dataclass
class LayoutJSON:
    version: str
    props: Dict[str, str]
    slot: SlotJSON

    @property
    def browser_runner_dto(self):
        if self.version != "0.2":
            raise ValueError("TODO: convert to 0.2")
        return {
            "props": [k for k in self.props.keys()],
            "version": self.version,
            "slot": self.slot.browser_runner_dto,
        }

    @property
    def editor_dto(self):
        return {
            "props": self.props,
            "version": self.version,
            "slot": self.slot.editor_dto,
        }

    @property
    def __dict__(self):
        return {
            "props": self.props,
            "version": self.version,
            "slot": self.slot.__dict__,
        }

    @staticmethod
    def from_dict(data: dict):
        return LayoutJSON(
            version=data["version"],
            props=data["props"],
            slot=SlotJSON.from_dict(data["slot"]),
        )


@dataclass
class DashJSON(SidebarRuntime):
    file: str
    layout: LayoutJSON

    @property
    def runner_type(self):
        return "dash"

    @property
    def browser_runner_dto(self):
        return {
            "path": self.path,
            "title": self.title,
            "layout": self.layout.browser_runner_dto,
        }

    @property
    def editor_dto(self):
        return {
            "path": self.path,
            "title": self.title,
            "layout": self.layout.editor_dto,
            "file": self.file,
        }

    @property
    def __dict__(self):
        return {
            "path": self.path,
            "title": self.title,
            "layout": self.layout.__dict__,
            "file": self.file,
        }

    @property
    def file_path(self):
        return Settings.root_path.joinpath(self.file)

    def update(self, changes: Dict[str, Any]):
        if "path" in changes:
            self.path = changes["path"]
            del changes["path"]

        if "title" in changes:
            self.title = changes["title"]
            del changes["title"]

        if "layout" in changes:
            self.layout = LayoutJSON.from_dict(changes["layout"])
            del changes["layout"]

        if "file" in changes:
            _update_file(self, changes["file"])
            del changes["file"]

        if len(changes) > 0:
            raise Exception("Invalid property update")

    @staticmethod
    def from_dict(data: dict):
        return DashJSON(
            path=data["path"],
            file=data["file"],
            title=data["title"],
            layout=LayoutJSON.from_dict(data["layout"]),
        )


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
        dashes: List[DashJSON] = [],
        forms: List[FormJSON] = [],
    ):
        item_name = lambda path: [s.title for s in [*dashes, *forms] if s.path == path][
            0
        ]
        stored_items = []
        for item in sidebar_data:
            if item["path"] in [d.path for d in dashes] + [f.path for f in forms]:
                sidebar_item = SidebarItemJSON(
                    id=item["id"],
                    name=item_name(item["path"]),
                    path=item["path"],
                    type=item["type"],
                    visible=item.get("visible"),
                )
                stored_items.append(sidebar_item)

        for dash in dashes:
            if dash.path not in [item.path for item in stored_items]:
                stored_items.append(
                    SidebarItemJSON(
                        id=dash.path,
                        name=dash.title,
                        path=dash.path,
                        type="dash",
                        visible=False,
                    )
                )

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
        dashes: List[DashJSON] = [],
        forms: List[FormJSON] = [],
    ):
        for attr, value in changes.items():
            if attr == "sidebar":
                self.sidebar = SidebarJSON.from_dict(changes["sidebar"], dashes, forms)
            else:
                setattr(self, attr, value)

    @staticmethod
    def from_dict(data: Dict, dashes: List[DashJSON] = [], forms: List[FormJSON] = []):
        return WorkspaceJSON(
            name=data.get("name", "Untitled Workspace"),
            sidebar=SidebarJSON.from_dict(
                data.get("sidebar", []),
                dashes=dashes,
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
class AbstraJSON:
    version: str
    workspace: WorkspaceJSON
    scripts: List[ScriptJSON]
    dashes: List[DashJSON]
    forms: List[FormJSON]
    hooks: List[HookJSON]
    jobs: List[JobJSON]

    @property
    def __dict__(self):
        return {
            "version": self.version,
            "workspace": self.workspace.__dict__,
            "jobs": [job.__dict__ for job in self.jobs],
            "hooks": [hook.__dict__ for hook in self.hooks],
            "forms": [form.__dict__ for form in self.forms],
            "dashes": [dash.__dict__ for dash in self.dashes],
            "scripts": [script.__dict__ for script in self.scripts],
        }

    @property
    def runtimes(self) -> List[RuntimeJSON]:
        return [*self.forms, *self.dashes, *self.hooks, *self.jobs]

    @property
    def workflow_runtimes(self) -> List[WorkflowRuntimeJSON]:
        return [*self.forms, *self.jobs, *self.hooks, *self.scripts]

    def get_runtime_by_path(self, path: str) -> Optional[RuntimeJSON]:
        for form in self.forms:
            if form.path == path:
                return form

        for dash in self.dashes:
            if dash.path == path:
                return dash

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

    def get_workflow_runtime_by_path(self, path: str) -> WorkflowRuntimeJSON:
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

    def get_page_by_path(self, path: str) -> Optional[Union[DashJSON, FormJSON]]:
        for form in self.forms:
            if form.path == path:
                return form

        for dash in self.dashes:
            if dash.path == path:
                return dash

        return None

    def get_transition(self, id: str):
        for runtime in self.workflow_runtimes:
            for transition in runtime.workflow_transitions:
                if transition.id == id:
                    return transition

        raise TransitionNotFoundError(f"Transition with id '{id}' not found")

    def find_transition(
        self, source_id: str, target_id: str
    ) -> Optional[WorkflowTransitionJSON]:
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
        runtimes: List[Union[FormJSON, HookJSON, JobJSON]] = [
            *self.forms,
            *self.hooks,
            *self.jobs,
        ]

        for runtime in runtimes:
            for wt in runtime.workflow_transitions:
                if wt.target_path == old_path:
                    wt.target_path = new_path

    def update_runtime(self, path: str, changes: Dict[str, Any]) -> RuntimeJSON:
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
        if isinstance(runtime, DashJSON):
            self.dashes = [d for d in self.dashes if d.path != id]
        elif isinstance(runtime, FormJSON):
            self.forms = [f for f in self.forms if f.path != id]
        elif isinstance(runtime, HookJSON):
            self.hooks = [h for h in self.hooks if h.path != id]
        elif isinstance(runtime, JobJSON):
            self.jobs = [j for j in self.jobs if j.identifier != id]
        elif isinstance(runtime, ScriptJSON):
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
            scripts = [ScriptJSON.from_dict(script) for script in data["scripts"]]
            dashes = [DashJSON.from_dict(dash) for dash in data["dashes"]]
            forms = [FormJSON.from_dict(form) for form in data["forms"]]
            hooks = [HookJSON.from_dict(hook) for hook in data["hooks"]]
            jobs = [JobJSON.from_dict(job) for job in data["jobs"]]

            workspace = WorkspaceJSON.from_dict(
                data["workspace"], dashes=dashes, forms=forms
            )

            return AbstraJSON(
                version=data["version"],
                workspace=workspace,
                scripts=scripts,
                dashes=dashes,
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
        return AbstraJSON(
            version="0.1",
            workspace=WorkspaceJSON(name="Untitled Workspace", sidebar=SidebarJSON([])),
            forms=[],
            dashes=[],
            hooks=[],
            jobs=[],
            scripts=[],
        )


def _update_file(
    runtime: RuntimeJSON,
    new_file_relative: str,
):
    old_file = Settings.root_path.joinpath(runtime.file)
    new_file = Settings.root_path.joinpath(new_file_relative)

    if old_file.exists() and not new_file.exists():
        old_file.rename(new_file)

    runtime.file = new_file_relative


class AbstraJSONRepository:
    @classmethod
    def get_file_path(cls):
        return Settings.root_path / "abstra.json"

    @classmethod
    def initialize_on_empty(cls):
        if not cls.get_file_path().exists():
            cls.save(AbstraJSON.create())

    @classmethod
    def save(cls, abstra_json: AbstraJSON):
        temp_file = Path(tempfile.mkdtemp()) / "abstra.json"

        with temp_file.open("w") as f:
            json.dump(abstra_json.__dict__, f, indent=2)
        shutil.move(str(temp_file), cls.get_file_path())

    @classmethod
    def load(cls) -> AbstraJSON:
        abstra_json_content = json.loads(
            cls.get_file_path().read_text(encoding="utf-8")
        )
        return AbstraJSON.from_dict(abstra_json_content)
