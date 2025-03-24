import json
import os
import shutil
import sys
import tempfile
import uuid
from abc import ABC, abstractmethod
from dataclasses import field
from pathlib import Path
from typing import Any, Dict, Generator, List, Literal, Optional, Tuple, Union

from pydantic.dataclasses import dataclass

from abstra_internals.constants import ABSTRA_LOGO_URL, get_project_url
from abstra_internals.contracts_generated import CommonUser
from abstra_internals.entities.agents import AgentEntrypoint
from abstra_internals.environment import IS_PRODUCTION
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.project import json_migrations
from abstra_internals.settings import Settings
from abstra_internals.templates import (
    abstra_favicon,
    abstra_logo,
    generate_getting_started_project,
)
from abstra_internals.utils import check_is_url, nested_get
from abstra_internals.utils.file import generate_conflictless_path, silent_traverse_code
from abstra_internals.utils.format import normalize_path
from abstra_internals.utils.graph import Edge, Graph, Node
from abstra_internals.utils.string import to_kebab_case

ServedStage = Union["FormStage", "HookStage"]
StageType = Literal["form", "hook", "job", "script", "agent", "client"]


class Stage(ABC):
    id: str
    title: str
    workflow_transitions: List["WorkflowTransition"]
    workflow_position: Tuple[float, float]
    type_name: StageType

    @property
    @abstractmethod
    def as_dict(self) -> dict:
        pass

    @property
    @abstractmethod
    def editor_dto(self) -> dict:
        pass

    @property
    @abstractmethod
    def admin_dto(self) -> dict:
        pass

    @abstractmethod
    def update(self, changes: Dict[str, Any]):
        pass

    @abstractmethod
    def duplicate(self, new_id: str, new_position: Tuple[int, int] = (0, 0)) -> "Stage":
        pass

    def __post_init__(self):
        self.workflow_transitions = self.workflow_transitions or []


class StageWithFile(Stage):
    file: str

    @property
    @abstractmethod
    def file_path(self) -> Path:
        pass


SecuredStage = Union["FormStage", "Home"]

Languages = Literal[
    "en",
    "pt",
    "de",
    "es",
    "fr",
    "hi",
]


@dataclass
class NotificationTrigger:
    variable_name: str
    enabled: bool

    def validate_email(self, email: str) -> bool:
        return isinstance(email, str) and "@" in email

    def get_recipients(self, task_payload: Dict[str, Any]) -> List[str]:
        variable_name = self.variable_name
        if not variable_name:
            return []

        raw_value = nested_get(task_payload, variable_name)
        if not raw_value:
            return []

        emails: List[str] = []
        if isinstance(raw_value, str):
            emails.append(raw_value)

        if isinstance(raw_value, list):
            emails = raw_value

        return [email for email in emails if self.validate_email(email)]

    def to_dto(self) -> Optional[Dict[str, Any]]:
        return {"variable_name": self.variable_name, "enabled": self.enabled}


@dataclass
class WorkflowTransition:
    id: str
    target_id: str
    target_type: str
    type: str
    task_type: Optional[str] = None

    def __post_init__(self):
        self.id = str(uuid.uuid4()) if self.id is None else self.id

    def matches(self, task_type: str):
        if self.task_type is None or self.task_type.strip() == "":
            return True
        elif isinstance(task_type, str):
            return self.task_type == task_type

    @property
    def as_dict(self) -> dict:
        return {
            "target_id": self.target_id,
            "target_type": self.target_type,
            "type": self.type,
            "id": self.id,
            "task_type": self.task_type,
        }

    @staticmethod
    def from_dict(data: dict):
        if "type" not in data:
            raise Exception("Transition type is required")
        return WorkflowTransition(
            target_id=data["target_id"],
            target_type=data["target_type"],
            type=data["type"],
            id=data["id"],
            task_type=data.get("task_type"),
        )

    @staticmethod
    def default_type(source_type: StageType) -> str:
        if source_type == "form":
            return "forms:finished"
        elif source_type == "hook":
            return "hooks:finished"
        elif source_type == "job":
            return "jobs:finished"
        elif source_type == "script":
            return "scripts:finished"
        else:
            raise Exception(f"Invalid source type {source_type}")


@dataclass
class HookStage(StageWithFile):
    id: str
    file: str
    path: str
    title: str
    workflow_transitions: List[WorkflowTransition]
    workflow_position: Tuple[float, float]
    is_initial: bool = True
    enabled: bool = False
    type_name = "hook"

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
        title: str,
        file: str,
        id: Union[str, None] = None,
        workflow_position: Tuple[int, int] = (0, 0),
    ):
        _id: str = id or str(uuid.uuid4())
        return HookStage(
            id=_id,
            file=file,
            path=to_kebab_case(file[:-3]),
            title=title,
            is_initial=True,
            workflow_transitions=[],
            workflow_position=workflow_position,
        )

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
class ScriptStage(StageWithFile):
    id: str
    file: str
    title: str
    workflow_transitions: List[WorkflowTransition]
    workflow_position: Tuple[float, float]
    is_initial: bool = True
    type_name = "script"

    @staticmethod
    def create(
        title: str,
        file: str,
        id: Union[str, None] = None,
        workflow_position: Tuple[int, int] = (0, 0),
    ):
        _id = id or str(uuid.uuid4())
        return ScriptStage(
            id=_id,
            file=file,
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
                raise Exception(f"Cannot update {attr} of script")

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
class AccessSettings:
    is_public: bool
    required_roles: List[str]

    def should_allow(self, user: Optional[CommonUser]) -> bool:
        if self.is_public:
            return True
        if not user:
            return False
        return len(self.required_roles) == 0 or any(
            role in user.roles for role in self.required_roles
        )

    @staticmethod
    def from_dict(data: dict):
        return AccessSettings(
            is_public=data.get("is_public", True),
            required_roles=data.get("required_roles", []),
        )

    @property
    def as_dict(self):
        return {
            "is_public": self.is_public,
            "required_roles": self.required_roles,
        }

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            setattr(self, attr, value)


@dataclass
class JobStage(StageWithFile):
    id: str
    file: str
    title: str
    schedule: str
    workflow_position: Tuple[float, float]
    workflow_transitions: List[WorkflowTransition]
    type_name = "job"

    is_initial = True

    @staticmethod
    def create(
        title: str,
        file: str,
        id: Union[str, None] = None,
        workflow_position: Tuple[int, int] = (0, 0),
    ):
        _id = id or str(uuid.uuid4())
        return JobStage(
            id=_id,
            file=file,
            title=title,
            schedule="0 0 * * *",
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
class FormStage(StageWithFile):
    id: str
    file: str
    title: str
    path: str
    workflow_transitions: List[WorkflowTransition]
    workflow_position: Tuple[float, float]
    notification_trigger: NotificationTrigger
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
    access_control: AccessSettings = field(
        default_factory=lambda: AccessSettings(is_public=False, required_roles=[])
    )

    type_name = "form"

    @staticmethod
    def create(
        title: str,
        file: str,
        id: Union[str, None] = None,
        workflow_position: Tuple[int, int] = (0, 0),
    ):
        _id = id or str(uuid.uuid4())
        return FormStage(
            id=_id,
            file=file,
            path=generate_conflictless_path(to_kebab_case(file[:-3])),
            title=title,
            is_initial=True,
            workflow_transitions=[],
            workflow_position=workflow_position,
            notification_trigger=NotificationTrigger(
                variable_name="assignee_emails", enabled=False
            ),
            access_control=AccessSettings(is_public=False, required_roles=[]),
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
            notification_trigger=NotificationTrigger(
                variable_name=data["notification_trigger"]["variable_name"],
                enabled=data["notification_trigger"]["enabled"],
            ),
            access_control=AccessSettings.from_dict(data.get("access_control", {})),
        )

    @property
    def admin_dto(self):
        return {
            "title": self.title,
            "id": self.id,
            "path": self.path,
            "type": "form",
        }

    @property
    def to_sidebar_item(self) -> "SidebarItem":
        return SidebarItem(
            id=self.id,
            name=self.title,
            path=self.path,
            type="form",
        )

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
            "notification_trigger": (
                self.notification_trigger.to_dto()
                if self.notification_trigger
                else None
            ),
            "access_control": self.access_control.as_dict,
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
            elif attr == "access_control":
                self.access_control = AccessSettings.from_dict(value)
            elif attr == "path":
                setattr(self, attr, generate_conflictless_path(normalize_path(value)))
            elif attr == "notification_trigger":
                self.notification_trigger = NotificationTrigger(
                    variable_name=value["variable_name"], enabled=value["enabled"]
                )
            else:
                raise Exception(f"Cannot update {attr} of form")

    def duplicate(self, new_id: str, new_position: Tuple[int, int] = (0, 0)):
        return self.from_dict(
            {
                **self.as_dict,
                "id": new_id,
                "workflow_position": new_position,
                "transitions": [],
            }
        )

    def to_access_dto(self):
        return {
            "id": self.id,
            "title": self.title,
            "type": self.type_name,
            "is_public": self.access_control.is_public,
            "required_roles": self.access_control.required_roles,
        }


@dataclass
class AgentStage(Stage):
    id: str
    title: str
    project_id: Optional[str]
    workflow_transitions: List[WorkflowTransition]
    workflow_position: Tuple[float, float]
    client_stage_id: Optional[str]
    type_name = "agent"

    @staticmethod
    def from_dict(data: Dict):
        x, y = data["workflow_position"]
        return AgentStage(
            id=data["id"],
            title=data["title"],
            project_id=data["project_id"],
            client_stage_id=data["client_stage_id"],
            workflow_position=(x, y),
            workflow_transitions=[
                WorkflowTransition.from_dict(t) for t in data["transitions"]
            ],
        )

    @property
    def as_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "project_id": self.project_id,
            "workflow_position": self.workflow_position,
            "transitions": [t.as_dict for t in self.workflow_transitions],
            "client_stage_id": self.client_stage_id,
        }

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in ["title", "project_id"]:
                setattr(self, attr, value)
            else:
                raise Exception(f"Cannot update {attr} of agent")

    @staticmethod
    def create(title: str, project_id: str, id: Union[str, None] = None):
        _id = id or str(uuid.uuid4())
        return AgentStage(
            id=_id,
            title=title,
            project_id=project_id,
            client_stage_id="",
            workflow_transitions=[],
            workflow_position=(0, 0),
        )

    @property
    def editor_dto(self):
        return self.as_dict

    @property
    def admin_dto(self):
        return {
            "title": self.title,
            "id": self.id,
            "type": "agent",
        }

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
class ClientStage(Stage):
    id: str
    title: str
    workflow_transitions: List[WorkflowTransition]
    workflow_position: Tuple[float, float]
    type_name = "client"

    @staticmethod
    def from_dict(data: Dict):
        x, y = data["workflow_position"]
        return ClientStage(
            id=data["id"],
            title=data["title"],
            workflow_position=(x, y),
            workflow_transitions=[
                WorkflowTransition.from_dict(t) for t in data["transitions"]
            ],
        )

    @property
    def as_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "workflow_position": self.workflow_position,
            "transitions": [t.as_dict for t in self.workflow_transitions],
        }

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr in ["id", "title"]:
                setattr(self, attr, value)
            else:
                raise Exception(f"Cannot update {attr} of script")

    @property
    def editor_dto(self):
        return self.as_dict

    @property
    def admin_dto(self):
        return {
            "title": self.title,
            "id": self.id,
            "type": "client",
        }

    def duplicate(self, new_id: str, new_position: Tuple[int, int] = (0, 0)):
        return self.from_dict(
            {
                **self.as_dict,
                "id": new_id,
                "workflow_position": new_position,
                "transitions": [],
            }
        )

    def get_agent_entrypoint(self):
        return AgentEntrypoint(
            title=self.title,
            client_stage_id=self.id,
            input_schemas=None,
            output_schemas=None,
        )


@dataclass
class SidebarItem:
    id: str
    name: str
    path: str
    type: str

    @property
    def as_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "path": self.path,
            "type": self.type,
        }

    @staticmethod
    def from_dict(data: dict):
        return SidebarItem(
            id=data["id"],
            name=data["name"],
            path=data["path"],
            type=data["type"],
        )


@dataclass
class Sidebar:
    items: List[SidebarItem]

    @staticmethod
    def from_dict(
        sidebar_data: List[dict],
    ):
        return Sidebar(items=[SidebarItem.from_dict(item) for item in sidebar_data])

    @property
    def as_dict(self):
        return [item.as_dict for item in self.items]


@dataclass
class StyleSettings:
    name: str
    language: Languages
    theme: Optional[str]
    logo_url: Optional[str]
    favicon_url: Optional[str]
    brand_name: Optional[str]
    main_color: Optional[str]
    font_family: Optional[str]
    font_color: Optional[str]

    @property
    def project_name(self):
        return self.brand_name or "Abstra Project"

    @property
    def project_logo_url(self):
        if self.logo_url:
            if check_is_url(self.logo_url):
                return self.logo_url

            if IS_PRODUCTION:
                return f"{get_project_url()}/_assets/logo"

        return ABSTRA_LOGO_URL

    @property
    def as_dict(self):
        default_value = StyleSettings.defaultValue()
        return {
            k: v or default_value.__dict__.get(k, v) for k, v in self.__dict__.items()
        }

    @property
    def browser_runner_dto(self):
        if isinstance(self.logo_url, str) and check_is_url(self.logo_url):
            logo_url = self.logo_url
        elif self.logo_url:
            logo_url = "/_assets/logo"
        else:
            logo_url = None

        if isinstance(self.favicon_url, str) and check_is_url(self.favicon_url):
            favicon_url = self.favicon_url
        elif self.favicon_url:
            favicon_url = "/_assets/favicon.ico"
        else:
            favicon_url = None

        return {**self.as_dict, "logo_url": logo_url, "favicon_url": favicon_url}

    def update(self, changes: Dict[str, Any]):
        for attr, value in changes.items():
            if attr == "sidebar":
                continue
            else:
                setattr(self, attr, value)

    @staticmethod
    def from_dict(data: Dict):
        defaultValue = StyleSettings.defaultValue()
        return StyleSettings(
            name=data.get("name", defaultValue.name),
            font_family=data.get("font_family", defaultValue.font_family),
            brand_name=data.get("brand_name", defaultValue.brand_name),
            main_color=data.get("main_color", defaultValue.main_color),
            font_color=data.get("font_color", defaultValue.font_color),
            logo_url=data.get("logo_url", defaultValue.logo_url),
            favicon_url=data.get("favicon_url", defaultValue.favicon_url),
            theme=data.get("theme", defaultValue.theme),
            language=data.get("language", defaultValue.language),
        )

    @staticmethod
    def create():
        return StyleSettings(
            name="Workspace",
            font_family=None,
            brand_name="Abstra Project",
            main_color=None,
            font_color=None,
            logo_url="./logo.png",
            favicon_url="./favicon.ico",
            theme=None,
            language="en",
        )

    @staticmethod
    def defaultValue():
        return StyleSettings(
            name="Workspace",
            font_family=None,
            brand_name="",
            main_color=None,
            font_color=None,
            logo_url=None,
            favicon_url=None,
            theme=None,
            language="en",
        )


@dataclass
class StyleSettingsWithSidebar(StyleSettings):
    sidebar: Sidebar

    @staticmethod
    def from_dict(data: Dict):
        child_data = StyleSettings.from_dict(data)
        return StyleSettingsWithSidebar(
            **{
                **child_data.__dict__,
                "sidebar": Sidebar.from_dict(data.get("sidebar", [])),
            }
        )

    @property
    def as_dict(self):
        return {
            **super().as_dict,
            "sidebar": self.sidebar.as_dict,
        }


class PathConflictError(Exception):
    pass


class StageNotFoundError(KeyError):
    pass


class TransitionNotFoundError(KeyError):
    pass


@dataclass
class Home:
    access_control: AccessSettings

    @staticmethod
    def from_dict(data: dict):
        return Home(
            access_control=AccessSettings.from_dict(
                data.get("access_control", {"is_public": False, "required_roles": []})
            ),
        )

    @staticmethod
    def create():
        return Home(
            access_control=AccessSettings(is_public=False, required_roles=[]),
        )

    @property
    def as_dict(self):
        return {"access_control": self.access_control.as_dict}

    @property
    def type_name(self):
        return "home"

    @property
    def path(self):
        return ""

    @property
    def title(self):
        return "Home"

    @property
    def id(self):
        return "home"

    def to_access_dto(self):
        return {
            "id": self.id,
            "title": self.title,
            "type": self.type_name,
            "is_public": self.access_control.is_public,
            "required_roles": self.access_control.required_roles,
        }

    @property
    def to_sidebar_item(self) -> SidebarItem:
        return SidebarItem(
            id=self.id,
            name=self.title,
            path=self.path,
            type=self.type_name,
        )

    def update(self, id, changes: Dict[str, Any]):
        if id == "access_control":
            setattr(self, id, AccessSettings.from_dict(changes))


@dataclass
class Project:
    workspace: StyleSettings
    home: Home
    scripts: List[ScriptStage]
    forms: List[FormStage]
    hooks: List[HookStage]
    jobs: List[JobStage]
    agents: List[AgentStage]
    clients: List[ClientStage]

    _graph: Graph

    @property
    def as_dict(self):
        target_stages = set()
        for stage in self.workflow_stages:
            for transition in stage.workflow_transitions:
                target_stages.add(transition.target_id)

        for stage in self.jobs + self.forms + self.scripts + self.hooks:
            if stage.id in target_stages:
                stage.is_initial = False
            else:
                stage.is_initial = True

        return {
            "workspace": self.workspace.as_dict,
            "home": self.home.as_dict,
            "jobs": [job.as_dict for job in self.jobs],
            "hooks": [hook.as_dict for hook in self.hooks],
            "forms": [form.as_dict for form in self.forms],
            "scripts": [script.as_dict for script in self.scripts],
            "agents": [agent.as_dict for agent in self.agents],
            "clients": [client.as_dict for client in self.clients],
        }

    @property
    def workflow_stages(self) -> List[Stage]:
        return [
            *self.forms,
            *self.jobs,
            *self.hooks,
            *self.scripts,
            *self.agents,
            *self.clients,
        ]

    def get_stages_by_file_path(self, file_path: Path) -> List[StageWithFile]:
        stage_with_file_classes = (FormStage, HookStage, JobStage, ScriptStage)
        return [
            stage
            for stage in self.workflow_stages
            if isinstance(stage, stage_with_file_classes)
            and stage.file_path.resolve() == file_path.resolve()
        ]

    def iter_entrypoints(self) -> Generator[Path, None, None]:
        for stage in self.workflow_stages:
            if isinstance(stage, StageWithFile):
                yield Path(stage.file)

    def iter_entrypointed_stages(self) -> Generator[Tuple[Path, Stage], None, None]:
        for stage in self.workflow_stages:
            if isinstance(stage, StageWithFile):
                yield Path(stage.file), stage

    @property
    def project_files(self) -> Generator[Path, None, None]:
        for entrypoint in self.iter_entrypoints():
            yield from silent_traverse_code(entrypoint)

    def get_local_dependencies(self) -> Generator[Path, None, None]:
        entrypoints = list(self.iter_entrypoints())
        for file in self.project_files:
            if file not in entrypoints:
                yield file

    def get_next_stages_ids(self, id: str) -> List[str]:
        return [node.id for node in self._graph.next_to(id)]

    def get_previous_stages_ids(self, id: str) -> List[str]:
        return [node.id for node in self._graph.previous_to(id)]

    def is_initial(self, target_stage: Stage) -> bool:
        return len(self._graph.previous_to(target_stage.id)) == 0

    def add_stage(self, stage: Stage):
        if isinstance(stage, FormStage):
            self.forms.append(stage)
        elif isinstance(stage, HookStage):
            self.hooks.append(stage)
        elif isinstance(stage, JobStage):
            self.jobs.append(stage)
        elif isinstance(stage, ScriptStage):
            self.scripts.append(stage)
        elif isinstance(stage, AgentStage):
            self.agents.append(stage)
        elif isinstance(stage, ClientStage):
            self.clients.append(stage)
        else:
            raise Exception(f"Cannot add stage of type {type(stage)}")

    def get_stage(self, id: str) -> Optional[Stage]:
        for stage in self.workflow_stages:
            if stage.id == id:
                return stage

        return None

    def get_workspace(self):
        sidebar = [stage.to_sidebar_item.as_dict for stage in self.secured_stages]
        return StyleSettingsWithSidebar.from_dict(
            {**self.workspace.as_dict, "sidebar": sidebar}
        )

    def default_sidebar(self) -> Sidebar:
        return Sidebar(items=[stage.to_sidebar_item for stage in self.secured_stages])

    def get_access_control_by_stage_id(self, id: str) -> Optional[AccessSettings]:
        for stage in [self.home, *self.forms, *self.jobs]:
            if stage.id == id:
                return stage.access_control
        return None

    def get_access_control_by_stage_path(self, path: str) -> Optional[AccessSettings]:
        for stage in self.secured_stages:
            if stage.path == path:
                return stage.access_control
        return None

    @property
    def secured_stages(self) -> List[SecuredStage]:
        return [self.home, *self.forms]

    def get_secured_stage(self, id: str) -> Optional[SecuredStage]:
        for stage in self.secured_stages:
            if stage.id == id:
                return stage

    def update_access_controls(self, changes: List[Dict[str, Any]]):
        response = []
        for change in changes:
            id = change["id"]
            del change["id"]
            response.append(self.update_access_control(id, change))

        return response

    def update_access_control(self, id: str, change: Dict[str, Any]):
        stage = self.get_secured_stage(id)
        if not stage:
            raise StageNotFoundError(f"Stage with id '{id}' not found")
        if isinstance(stage, Home):
            stage.update("access_control", change)
            return stage.to_access_dto()
        stage = self.update_stage(stage, {"access_control": change})
        if not isinstance(stage, (FormStage)):
            raise Exception(
                f"Stage with id {stage.id} is a {type(stage.type_name)} does not have access control"
            )

        return stage.to_access_dto()

    def get_stage_raises(self, id: str) -> Stage:
        stage = self.get_stage(id)
        if not stage:
            raise StageNotFoundError(f"Stage with id '{id}' not found")
        return stage

    def get_action(self, id: str) -> Optional[Stage]:
        for stage in self.workflow_stages:
            if stage.id == id:
                return stage

        return None

    def get_action_raises(self, id: str) -> Stage:
        stage = self.get_action(id)
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

    def get_stage_by_path(self, path: str) -> Optional[Stage]:
        for form in self.forms:
            if form.path == path:
                return form

        for hook in self.hooks:
            if hook.path == path:
                return hook

        return None

    def get_initial_stages(self) -> List[Stage]:
        return [r for r in self.workflow_stages if self.is_initial(r)]

    def delete_transition_by_target(self, target_id: str):
        for stage in self.workflow_stages:
            stage.workflow_transitions = [
                t for t in stage.workflow_transitions if t.target_id != target_id
            ]

    def get_agent_entrypoints(self) -> List[AgentEntrypoint]:
        return [client.get_agent_entrypoint() for client in self.clients]

    def update_path(self, stage: ServedStage, new_path: str):
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

    def update_stage(self, stage: Stage, changes: Dict[str, Any]) -> Stage:
        # This guarantees that the updated stage will be the one from the project
        project_stage = self.get_action(stage.id)

        if project_stage is None:
            raise StageNotFoundError(f"Stage with id '{stage.id}' not found")

        new_path = changes.get("path")

        if new_path:
            if not isinstance(project_stage, FormStage) and not isinstance(
                project_stage, HookStage
            ):
                raise Exception(
                    f"Stage with id {id} is a {type(project_stage)} does not have a path"
                )

            normalized_path = normalize_path(new_path)
            self.update_path(project_stage, normalized_path)

        project_stage.update(changes)

        return project_stage

    def delete_stage(self, id: str, remove_file: bool = False):
        stage = self.get_action(id)

        if remove_file and isinstance(stage, StageWithFile):
            if not stage:
                return
            path = Settings.root_path.joinpath(stage.file)
            if path.exists():
                os.remove(path.absolute())

        self.delete_transition_by_target(id)
        self.forms = [f for f in self.forms if f.id != id]
        self.hooks = [h for h in self.hooks if h.id != id]
        self.jobs = [j for j in self.jobs if j.id != id]
        self.scripts = [s for s in self.scripts if s.id != id]
        self.agents = [a for a in self.agents if a.id != id]
        self.clients = [c for c in self.clients if c.id != id]

    @staticmethod
    def __from_dict(data: dict):
        target_stages = set()
        nodes = []
        edges = []

        stage_keys = ["forms", "hooks", "scripts", "jobs", "agents", "clients"]

        for key in stage_keys:
            for stage in data[key]:
                nodes.append(Node(id=stage["id"]))
                for transition in stage.get("transitions", []):
                    target_stages.add(transition.get("target_id"))
                    edges.append(
                        Edge(source_id=stage["id"], target_id=transition["target_id"])
                    )

        for key in stage_keys:
            for index, stage in enumerate(data[key]):
                if stage["id"] in target_stages:
                    data[key][index]["is_initial"] = False
                else:
                    data[key][index]["is_initial"] = True

        scripts = [ScriptStage.from_dict(script) for script in data["scripts"]]
        forms = [FormStage.from_dict(form) for form in data["forms"]]
        hooks = [HookStage.from_dict(hook) for hook in data["hooks"]]
        jobs = [JobStage.from_dict(job) for job in data["jobs"]]
        agents = [AgentStage.from_dict(agent) for agent in data["agents"]]
        clients = [ClientStage.from_dict(client) for client in data["clients"]]

        workspace = StyleSettings.from_dict(data["workspace"])
        home = Home.from_dict(data.get("home", {}))

        return Project(
            workspace=workspace,
            scripts=scripts,
            forms=forms,
            hooks=hooks,
            jobs=jobs,
            agents=agents,
            clients=clients,
            home=home,
            _graph=Graph.from_primitives(nodes=nodes, edges=edges),
        )

    @staticmethod
    def validate(data: dict):
        try:
            Project.__from_dict(data)
            return True
        except Exception:
            return False

    @staticmethod
    def from_dict(data: dict):
        try:
            return Project.__from_dict(data)
        except Exception as e:
            print("Error: incompatible abstra.json file.")
            AbstraLogger.capture_exception(e)
            sys.exit(1)

    @staticmethod
    def create():
        return Project(
            workspace=StyleSettings.create(),
            scripts=[],
            forms=[],
            hooks=[],
            jobs=[],
            agents=[],
            clients=[],
            home=Home.create(),
            _graph=Graph.from_primitives([], []),
        )


def _update_file(
    stage: Stage,
    new_file_relative: str,
):
    if not isinstance(stage, StageWithFile):
        return

    old_file = Settings.root_path.joinpath(stage.file)
    new_file = Settings.root_path.joinpath(new_file_relative)

    if old_file.exists() and not new_file.exists():
        new_file.parent.mkdir(parents=True, exist_ok=True)
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
            cls.add_assets()

    @classmethod
    def add_assets(cls):
        logo_path = Settings.root_path / "logo.png"
        if not logo_path.exists():
            logo_path.write_bytes(abstra_logo)

        favicon_path = Settings.root_path / "favicon.ico"
        if not favicon_path.exists():
            favicon_path.write_bytes(abstra_favicon)

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
        Path.rmdir(temp_file.parent)

    @classmethod
    def migrate_config_file(cls, verbose=True):
        if not cls.exists():
            return
        data = json.loads(cls.get_file_path().read_text(encoding="utf-8"))
        initial_version = data.get("version")

        migrated_data = json_migrations.migrate(
            data,
            Settings.root_path,
            verbose=verbose,
        )

        if migrated_data["version"] != initial_version:
            cls.save(Project.from_dict(migrated_data))

    @classmethod
    def load(cls) -> Project:
        data = json.loads(cls.get_file_path().read_text(encoding="utf-8"))

        return Project.from_dict(data)

    @classmethod
    def initialize_or_migrate(cls, verbose=True):
        if not cls.exists():
            cls.initialize()
        else:
            cls.migrate_config_file(verbose=verbose)

    @classmethod
    def generate_getting_started_project(cls):
        generate_getting_started_project(Settings.root_path)
