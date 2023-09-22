import sys, warnings
from typing import List, Optional, Union, Any, Dict, Tuple
from dataclasses import dataclass
from ...settings import Settings
from ...utils import check_is_url
import uuid


def strict_compatible_missing_entities(data):
    if "hooks" not in data:
        data["hooks"] = []

    if "jobs" not in data:
        data["jobs"] = []

    if "forms" not in data:
        data["forms"] = []

    if "dashes" not in data:
        data["dashes"] = []

    if "workspace" not in data:
        data["workspace"] = {
            "name": "Untitled Workspace",
            "sidebar": [],
        }

    if "workflow_transitions" not in data:
        data["workflow_transitions"] = []
    return data


def strict_compatible_workflow_positions(data: dict):
    # On release v{TBD} we added workflow positions to the abstra.json file.
    # By default, positions should be placed in columns
    size = 110
    forms = data["forms"]
    for idx, form in enumerate(forms):
        if "workflow_position" not in form:
            form["workflow_position"] = [0, idx * size]

    for idx, job in enumerate(data["jobs"]):
        if "workflow_position" not in job:
            job["workflow_position"] = [size, idx * size]

    for idx, hook in enumerate(data["hooks"]):
        if "workflow_position" not in hook:
            hook["workflow_position"] = [2 * size, idx * size]
    return data


def strict_compatible_is_initial(data: dict):
    for form in data["forms"]:
        if "is_initial" not in form:
            form["is_initial"] = True

    for job in data["jobs"]:
        if "is_initial" not in job:
            job["is_initial"] = True

    for hook in data["hooks"]:
        if "is_initial" not in hook:
            hook["is_initial"] = True
    return data


def strict_compatible_transitions(data: dict):
    for form in data["forms"]:
        if "transitions" not in form:
            form["transitions"] = []

    for job in data["jobs"]:
        if "transitions" not in job:
            job["transitions"] = []

    for hook in data["hooks"]:
        if "transitions" not in hook:
            hook["transitions"] = []
    return data


def _find_transition_target(data: dict, target_path: str, target_type: str, warn: bool):
    for form in data["forms"]:
        if form["path"] == target_path and target_type == "forms":
            return form

    for job in data["jobs"]:
        if job["identifier"] == target_path and target_type == "jobs":
            return job

    for hook in data["hooks"]:
        if hook["path"] == target_path and target_type == "hooks":
            return hook

    if warn:
        warnings.warn(
            f"Could not find transition target {target_type}:{target_path}. This will be ignored, but please, make sure to remove it from your abstra.json file"
        )
    return None


def strict_compatible_remove_dangling_transitions(data: dict):
    for form in data["forms"]:
        form["transitions"] = [
            transition
            for transition in form["transitions"]
            if _find_transition_target(
                data, transition["target_path"], transition["target_type"], warn=True
            )
            is not None
        ]

    for job in data["jobs"]:
        job["transitions"] = [
            transition
            for transition in job["transitions"]
            if _find_transition_target(
                data, transition["target_path"], transition["target_type"], warn=True
            )
            is not None
        ]

    for hook in data["hooks"]:
        hook["transitions"] = [
            transition
            for transition in hook["transitions"]
            if _find_transition_target(
                data, transition["target_path"], transition["target_type"], warn=True
            )
            is not None
        ]

    return data


def strict_compatible(data: dict):
    data = strict_compatible_missing_entities(data)
    data = strict_compatible_workflow_positions(data)
    data = strict_compatible_is_initial(data)
    data = strict_compatible_transitions(data)
    data = strict_compatible_remove_dangling_transitions(data)
    return data


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
    enabled: bool = False
    is_initial: bool = True
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

    @property
    def is_initial(self):
        return True


@dataclass
class FormJSON(SidebarRuntime):
    file: str
    title: str
    workflow_transitions: List[WorkflowTransitionJSON]
    workflow_position: Tuple[float, float] = (0, 0)
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
        }

    @property
    def editor_dto(self):
        return {
            **self.browser_runner_dto,
            "file": self.file,
            "workflow_position": self.workflow_position,
            "is_initial": self.is_initial,
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


@dataclass
class AbstraJSON:
    version: str
    workspace: WorkspaceJSON
    forms: List[FormJSON]
    dashes: List[DashJSON]
    hooks: List[HookJSON]
    jobs: List[JobJSON]

    @property
    def __dict__(self):
        return {
            "version": self.version,
            "workspace": self.workspace.__dict__,
            "forms": [form.__dict__ for form in self.forms],
            "dashes": [dash.__dict__ for dash in self.dashes],
            "hooks": [hook.__dict__ for hook in self.hooks],
            "jobs": [job.__dict__ for job in self.jobs],
        }

    def get_runtime_by_path(
        self, path: str
    ) -> Optional[Union[FormJSON, DashJSON, HookJSON, JobJSON]]:
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

        return None

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

    def update_runtime(
        self, path: str, changes: Dict[str, Any]
    ) -> Union[FormJSON, DashJSON, HookJSON, JobJSON]:
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

    @staticmethod
    def from_dict(data: dict):
        data = strict_compatible(data)

        try:
            dashes = [DashJSON.from_dict(dash) for dash in data["dashes"]]
            forms = [FormJSON.from_dict(form) for form in data["forms"]]
            return AbstraJSON(
                version=data["version"],
                forms=forms,
                dashes=dashes,
                hooks=[HookJSON.from_dict(hook) for hook in data["hooks"]],
                jobs=[JobJSON.from_dict(job) for job in data["jobs"]],
                workspace=WorkspaceJSON.from_dict(
                    data["workspace"], dashes=dashes, forms=forms
                ),
            )
        except TypeError as e:
            print("Error: incompatible abstra.json file.")
            import traceback

            traceback.print_exc()
            sys.exit(1)

    @staticmethod
    def make_empty():
        return AbstraJSON(
            version="0.1",
            workspace=WorkspaceJSON(
                name="Untitled Workspace",
                sidebar=SidebarJSON([]),
            ),
            forms=[],
            dashes=[],
            hooks=[],
            jobs=[],
        )


def _update_file(
    runtime: Union[DashJSON, FormJSON, HookJSON, JobJSON],
    new_file_relative: str,
):
    old_file = Settings.root_path.joinpath(runtime.file)
    new_file = Settings.root_path.joinpath(new_file_relative)

    if old_file.exists() and not new_file.exists():
        old_file.rename(new_file)

    runtime.file = new_file_relative
