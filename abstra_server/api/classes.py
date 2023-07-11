import sys
from typing import List, Optional, Union, Any, Dict
from dataclasses import dataclass


@dataclass
class SidebarRuntime:
    title: str
    path: str


@dataclass
class HookJSON:
    file: str
    path: str
    title: str
    enabled: bool = False

    @property
    def runner_type(self):
        return "hook"

    @property
    def runner_dto(self):
        return {
            "file": self.file,
            "path": self.path,
            "title": self.title,
            "enabled": self.enabled,
        }

    @property
    def editor_dto(self):
        return self.runner_dto

    @property
    def __dict__(self):
        return self.editor_dto

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in ["file", "path", "title", "enabled"]:
                setattr(self, attr, value)
            else:
                raise Exception(f"Cannot update {attr} of hook")

    @staticmethod
    def from_dict(data: dict):
        return HookJSON(
            file=data["file"],
            path=data["path"],
            title=data["title"],
            enabled=data["enabled"],
        )


@dataclass
class JobJSON:
    file: str
    title: str
    identifier: str
    schedule: str

    @property
    def runner_type(self):
        return "job"

    @property
    def runner_dto(self):
        return {
            "file": self.file,
            "identifier": self.identifier,
            "title": self.title,
            "schedule": self.schedule,
        }

    @property
    def editor_dto(self):
        return self.runner_dto

    @property
    def __dict__(self):
        return self.editor_dto

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in ["file", "identifier", "title", "schedule"]:
                setattr(self, attr, value)
            else:
                raise Exception(f"Cannot update {attr} of job")

    @staticmethod
    def from_dict(data: Dict):
        return JobJSON(
            file=data["file"],
            identifier=data["identifier"],
            title=data["title"],
            schedule=data["schedule"],
        )


@dataclass
class FormJSON(SidebarRuntime):
    file: str
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
    def runner_dto(self):
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
            **self.runner_dto,
            "file": self.file,
        }

    @property
    def __dict__(self):
        return {
            "file": self.file,
            "path": self.path,
            "title": self.title,
            "end_message": self.end_message,
            "auto_start": self.auto_start,
            "start_message": self.start_message,
            "error_message": self.error_message,
            "welcome_title": self.welcome_title,
            "allow_restart": self.allow_restart,
            "timeout_message": self.timeout_message,
            "start_button_text": self.start_button_text,
            "restart_button_text": self.restart_button_text,
        }

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in [
                "file",
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
            else:
                raise Exception(f"Cannot update {attr} of form")

    @staticmethod
    def from_dict(data: dict):
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
        )


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
    def runner_dto(self):
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

    def __post_init__(self):
        self.slot = SlotJSON(self.slot)

    @property
    def runner_dto(self):
        return {
            "id": self.id,
            "type": self.type,
            "position": {
                "row": self.row,
                "height": self.height,
                "order": self.order,
            },
            "props": [k for k in self.props.keys()],
            "slot": self.slot.runner_dto,
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
    def runner_dto(self):
        return {id: slottable.runner_dto for id, slottable in self.__data.items()}

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


@dataclass
class LayoutJSON:
    version: str
    props: Dict[str, str]
    slot: SlotJSON

    def __post_init__(self):
        self.slot = SlotJSON(self.slot)

    @property
    def runner_dto(self):
        if self.version != "0.2":
            raise ValueError("TODO: convert to 0.2")
        return {
            "props": [k for k in self.props.keys()],
            "version": self.version,
            "slot": self.slot.runner_dto,
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


@dataclass
class DashJSON(SidebarRuntime):
    file: str
    layout: LayoutJSON

    def __post_init__(self):
        if not isinstance(self.layout, LayoutJSON):
            self.layout = LayoutJSON(**self.layout)

    @property
    def runner_type(self):
        return "dash"

    @property
    def runner_dto(self):
        return {
            "path": self.path,
            "title": self.title,
            "layout": self.layout.runner_dto,
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

    def update(self, changes: Dict[str, Any]):
        if "path" in changes:
            self.path = changes["path"]
            del changes["path"]

        if "title" in changes:
            self.title = changes["title"]
            del changes["title"]

        if "layout" in changes:
            self.layout = LayoutJSON(**changes["layout"])
            del changes["layout"]

        if "file" in changes:
            self.file = changes["file"]
            del changes["file"]

        if len(changes) > 0:
            raise Exception("Invalid property update")

    @staticmethod
    def from_dict(data: dict):
        return DashJSON(
            path=data["path"],
            file=data["file"],
            title=data["title"],
            layout=data["layout"],
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
        sidebar_data=List, dashes: List[DashJSON] = [], forms: List[FormJSON] = []
    ):
        item_name = lambda path: [s.title for s in [*dashes, *forms] if s.path == path][
            0
        ]
        stored_items = []
        for item in sidebar_data:
            if item["path"] in [d.path for d in dashes] + [f.path for f in forms]:
                item = SidebarItemJSON(
                    id=item["id"],
                    name=item_name(item["path"]),
                    path=item["path"],
                    type=item["type"],
                    visible=item.get("visible"),
                )
                stored_items.append(item)

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
    root: Optional[str] = None
    theme: Optional[str] = None
    logo_url: Optional[str] = None
    brand_name: Optional[str] = None
    main_color: Optional[str] = None
    font_family: Optional[str] = None
    font_color: Optional[str] = None

    @property
    def runner_dto(self):
        return {"name": self.name, "sidebar": self.sidebar.__dict__}

    @property
    def __dict__(self):
        return {
            "name": self.name,
            "sidebar": self.sidebar.__dict__,
            "root": self.root,
            "theme": self.theme,
            "logo_url": self.logo_url,
            "brand_name": self.brand_name,
            "main_color": self.main_color,
            "font_family": self.font_family,
            "font_color": self.font_color,
        }

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
            root=data.get("root"),
            theme=data.get("theme"),
            logo_url=data.get("logo_url"),
            brand_name=data.get("brand_name"),
            main_color=data.get("main_color"),
            font_family=data.get("font_family"),
            font_color=data.get("font_color"),
        )


@dataclass
class AbstraJSON:
    version: str
    workspace: WorkspaceJSON
    forms: List[FormJSON]
    dashes: List[DashJSON]
    hooks: List[HookJSON]
    jobs: List[JobJSON]

    def __post_init__(self):
        self.forms = [FormJSON.from_dict(form) for form in self.forms]
        self.dashes = [DashJSON.from_dict(dash) for dash in self.dashes]
        self.hooks = [HookJSON.from_dict(hook) for hook in self.hooks]
        self.jobs = [JobJSON.from_dict(job) for job in self.jobs]
        self.workspace = WorkspaceJSON.from_dict(
            self.workspace, dashes=self.dashes, forms=self.forms
        )

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

    @staticmethod
    def from_dict(data: dict):
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

        try:
            return AbstraJSON(**data)
        except TypeError as e:
            print("Error: incompatible abstra.json file.")
            print(e)
            sys.exit(1)

    @staticmethod
    def make_empty():
        return AbstraJSON(
            version="0.1",
            workspace=dict(
                name="Untitled Workspace",
                sidebar=[],
            ),
            forms=[],
            dashes=[],
            hooks=[],
            jobs=[],
        )
