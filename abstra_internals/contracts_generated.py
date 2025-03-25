"""
This file is auto generated. Do not edit this file manually.
Source code: [monorepo]/contracts/generator.py
"""

import datetime
import typing
from dataclasses import dataclass, field

CloudApiCliApiKeyInfoResponseAuthorId = str

CloudApiCliApiKeyInfoResponseProjectId = str

CloudApiCliApiKeyInfoResponseEmail = str

CloudApiCliApiKeyInfoResponseIntercomHash = str


@dataclass
class CloudApiCliApiKeyInfoResponse:
    author_id: CloudApiCliApiKeyInfoResponseAuthorId
    project_id: CloudApiCliApiKeyInfoResponseProjectId
    email: CloudApiCliApiKeyInfoResponseEmail
    intercom_hash: CloudApiCliApiKeyInfoResponseIntercomHash

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "authorId": self.author_id,
            "projectId": self.project_id,
            "email": self.email,
            "intercomHash": self.intercom_hash,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "CloudApiCliApiKeyInfoResponse":
        return CloudApiCliApiKeyInfoResponse(
            author_id=str(data["authorId"]),
            project_id=str(data["projectId"]),
            email=str(data["email"]),
            intercom_hash=str(data["intercomHash"]),
        )


CloudApiCliBuildCreateResponseUrl = str

CloudApiCliBuildCreateResponseBuildId = str


@dataclass
class CloudApiCliBuildCreateResponse:
    url: CloudApiCliBuildCreateResponseUrl
    build_id: CloudApiCliBuildCreateResponseBuildId

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "url": self.url,
            "buildId": self.build_id,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "CloudApiCliBuildCreateResponse":
        return CloudApiCliBuildCreateResponse(
            url=str(data["url"]),
            build_id=str(data["buildId"]),
        )


CommonUserId = str

CommonUserEmail = str

CommonUserRolesItem = str

CommonUserRoles = typing.List[CommonUserRolesItem]

CommonUserProjectId = str

CommonUserCreatedAt = str


@dataclass
class CommonUser:
    id: CommonUserId
    email: CommonUserEmail
    roles: CommonUserRoles
    project_id: CommonUserProjectId
    created_at: CommonUserCreatedAt

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "id": self.id,
            "email": self.email,
            "roles": self.roles,
            "projectId": self.project_id,
            "createdAt": self.created_at,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "CommonUser":
        return CommonUser(
            id=str(data["id"]),
            email=str(data["email"]),
            roles=[str(item) for item in data["roles"]],
            project_id=str(data["projectId"]),
            created_at=str(data["createdAt"]),
        )


CloudApiCliUserGetResponse = CommonUser

CommonRoleDescription = str

CloudApiCliRoleUpdateRequestDescription = CommonRoleDescription


@dataclass
class CloudApiCliRoleUpdateRequest:
    description: CloudApiCliRoleUpdateRequestDescription

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "description": self.description,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "CloudApiCliRoleUpdateRequest":
        return CloudApiCliRoleUpdateRequest(
            description=str(data["description"]),
        )


CommonRoleId = str

CommonRoleName = str

CommonRoleProjectId = str

CommonRoleCreatedAt = str


@dataclass
class CommonRole:
    id: CommonRoleId
    name: CommonRoleName
    project_id: CommonRoleProjectId
    created_at: CommonRoleCreatedAt
    description: typing.Optional[CommonRoleDescription] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "id": self.id,
            "name": self.name,
            "projectId": self.project_id,
            "createdAt": self.created_at,
            "description": self.description,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "CommonRole":
        return CommonRole(
            id=str(data["id"]),
            name=str(data["name"]),
            project_id=str(data["projectId"]),
            created_at=str(data["createdAt"]),
            description=str(data.get("description")),
        )


CloudApiCliRoleUpdateResponse = CommonRole

CloudApiCliRoleListQueryOffset = int

CloudApiCliRoleListQueryLimit = int


@dataclass
class CloudApiCliRoleListQuery:
    offset: typing.Optional[CloudApiCliRoleListQueryOffset] = field(
        default_factory=lambda: 0
    )
    limit: typing.Optional[CloudApiCliRoleListQueryLimit] = field(
        default_factory=lambda: 10
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "offset": self.offset,
            "limit": self.limit,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "CloudApiCliRoleListQuery":
        return CloudApiCliRoleListQuery(
            offset=int(data.get("offset", 0)),
            limit=int(data.get("limit", 10)),
        )


CloudApiCliRoleListResponseItem = CommonRole

CloudApiCliRoleListResponse = typing.List[CloudApiCliRoleListResponseItem]

CloudApiCliRoleCreateRequestName = CommonRoleName

CloudApiCliRoleCreateRequestDescription = CommonRoleDescription


@dataclass
class CloudApiCliRoleCreateRequest:
    name: CloudApiCliRoleCreateRequestName
    description: typing.Optional[CloudApiCliRoleCreateRequestDescription] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "name": self.name,
            "description": self.description,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "CloudApiCliRoleCreateRequest":
        return CloudApiCliRoleCreateRequest(
            name=str(data["name"]),
            description=str(data.get("description")),
        )


CloudApiCliRoleCreateResponse = CommonRole

AbstraLibApiStageCardContentKey = str

AbstraLibApiStageCardContentValue = typing.Dict[str, typing.Any]

AbstraLibApiStageCardContentType = str


@dataclass
class AbstraLibApiStageCardContent:
    key: AbstraLibApiStageCardContentKey
    value: AbstraLibApiStageCardContentValue
    type: AbstraLibApiStageCardContentType

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "key": self.key,
            "value": self.value,
            "type": self.type,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiStageCardContent":
        return AbstraLibApiStageCardContent(
            key=str(data["key"]),
            value=dict(**data["value"]),
            type=str(data["type"]),
        )


AbstraLibApiStageCardContentsItem = AbstraLibApiStageCardContent

AbstraLibApiStageCardContents = typing.List[AbstraLibApiStageCardContentsItem]

AbstraLibApiStageRunId = str

AbstraLibApiStageRunStage = str

AbstraLibApiStageRunData = typing.Dict[str, typing.Any]

AbstraLibApiStageRunStatus = typing.Union[
    typing.Literal["waiting"],
    typing.Literal["running"],
    typing.Literal["processing"],
    typing.Literal["finished"],
    typing.Literal["failed"],
    typing.Literal["abandoned"],
]

AbstraLibApiStageRunStatusValues: typing.List[AbstraLibApiStageRunStatus] = [
    "waiting",
    "running",
    "processing",
    "finished",
    "failed",
    "abandoned",
]

AbstraLibApiStageRunCreatedAt = str

AbstraLibApiStageRunUpdatedAt = str

AbstraLibApiStageRunParentId = str

AbstraLibApiStageRunExecutionId = str


@dataclass
class AbstraLibApiStageRun:
    id: AbstraLibApiStageRunId
    stage: AbstraLibApiStageRunStage
    data: AbstraLibApiStageRunData
    status: AbstraLibApiStageRunStatus
    created_at: AbstraLibApiStageRunCreatedAt
    updated_at: AbstraLibApiStageRunUpdatedAt
    parent_id: typing.Optional[AbstraLibApiStageRunParentId] = field(
        default_factory=lambda: None
    )
    execution_id: typing.Optional[AbstraLibApiStageRunExecutionId] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "id": self.id,
            "stage": self.stage,
            "data": self.data,
            "status": self.status,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "parent_id": self.parent_id,
            "execution_id": self.execution_id,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiStageRun":
        return AbstraLibApiStageRun(
            id=str(data["id"]),
            stage=str(data["stage"]),
            data=dict(**data["data"]),
            status=data["status"],
            created_at=str(data["created_at"]),
            updated_at=str(data["updated_at"]),
            parent_id=str(data.get("parent_id")),
            execution_id=str(data.get("execution_id")),
        )


AbstraLibApiStageRunCardId = str

AbstraLibApiStageRunCardCreatedAt = str

AbstraLibApiStageRunCardUpdatedAt = str

AbstraLibApiStageRunCardAssignee = str

AbstraLibApiStageRunCardStatus = AbstraLibApiStageRunStatus

AbstraLibApiStageRunCardContent = AbstraLibApiStageCardContents

AbstraLibApiStageRunCardStage = str


@dataclass
class AbstraLibApiStageRunCard:
    id: AbstraLibApiStageRunCardId
    created_at: AbstraLibApiStageRunCardCreatedAt
    status: AbstraLibApiStageRunCardStatus
    content: AbstraLibApiStageRunCardContent
    updated_at: typing.Optional[AbstraLibApiStageRunCardUpdatedAt] = field(
        default_factory=lambda: None
    )
    assignee: typing.Optional[AbstraLibApiStageRunCardAssignee] = field(
        default_factory=lambda: None
    )
    stage: typing.Optional[AbstraLibApiStageRunCardStage] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "id": self.id,
            "created_at": self.created_at,
            "status": self.status,
            "content": self.content,
            "updated_at": self.updated_at,
            "assignee": self.assignee,
            "stage": self.stage,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiStageRunCard":
        return AbstraLibApiStageRunCard(
            id=str(data["id"]),
            created_at=str(data["created_at"]),
            status=data["status"],
            content=[
                AbstraLibApiStageCardContent.from_dict(item) for item in data["content"]
            ],
            updated_at=str(data.get("updated_at")),
            assignee=str(data.get("assignee")),
            stage=str(data.get("stage")),
        )


AbstraLibApiStageRunCardsItem = AbstraLibApiStageRunCard

AbstraLibApiStageRunCards = typing.List[AbstraLibApiStageRunCardsItem]

AbstraLibApiStageId = str

AbstraLibApiStageType = typing.Union[
    typing.Literal["form"],
    typing.Literal["hook"],
    typing.Literal["job"],
    typing.Literal["script"],
    typing.Literal["agents"],
    typing.Literal["clients"],
]

AbstraLibApiStageTypeValues: typing.List[AbstraLibApiStageType] = [
    "form",
    "hook",
    "job",
    "script",
    "agents",
    "clients",
]

AbstraLibApiStageTitle = str

AbstraLibApiStagePath = str

AbstraLibApiStageCanBeStarted = bool


@dataclass
class AbstraLibApiStage:
    id: AbstraLibApiStageId
    type: AbstraLibApiStageType
    title: AbstraLibApiStageTitle
    can_be_started: AbstraLibApiStageCanBeStarted
    path: typing.Optional[AbstraLibApiStagePath] = field(default_factory=lambda: None)

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "id": self.id,
            "type": self.type,
            "title": self.title,
            "can_be_started": self.can_be_started,
            "path": self.path,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiStage":
        return AbstraLibApiStage(
            id=str(data["id"]),
            type=data["type"],
            title=str(data["title"]),
            can_be_started=bool(data["can_be_started"]),
            path=str(data.get("path")),
        )


AbstraLibApiKanbanColumnSelectedStage = AbstraLibApiStage

AbstraLibApiKanbanColumnStageRunCards = AbstraLibApiStageRunCards

AbstraLibApiKanbanColumnTotalCount = int

AbstraLibApiKanbanColumnLoading = bool


@dataclass
class AbstraLibApiKanbanColumn:
    selected_stage: AbstraLibApiKanbanColumnSelectedStage
    stage_run_cards: AbstraLibApiKanbanColumnStageRunCards
    total_count: AbstraLibApiKanbanColumnTotalCount
    loading: typing.Optional[AbstraLibApiKanbanColumnLoading] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "selected_stage": self.selected_stage.to_dict(),
            "stage_run_cards": self.stage_run_cards,
            "total_count": self.total_count,
            "loading": self.loading,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiKanbanColumn":
        return AbstraLibApiKanbanColumn(
            selected_stage=AbstraLibApiStage.from_dict(data["selected_stage"]),
            stage_run_cards=[
                AbstraLibApiStageRunCard.from_dict(item)
                for item in data["stage_run_cards"]
            ],
            total_count=int(data["total_count"]),
            loading=bool(data.get("loading")),
        )


AbstraLibApiKanbanColumnsItem = AbstraLibApiKanbanColumn

AbstraLibApiKanbanColumns = typing.List[AbstraLibApiKanbanColumnsItem]

AbstraLibApiKanbanDataColumns = AbstraLibApiKanbanColumns


@dataclass
class AbstraLibApiKanbanData:
    columns: AbstraLibApiKanbanDataColumns

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "columns": self.columns,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiKanbanData":
        return AbstraLibApiKanbanData(
            columns=[
                AbstraLibApiKanbanColumn.from_dict(item) for item in data["columns"]
            ],
        )


AbstraLibApiThreadsStageRunCards = AbstraLibApiStageRunCards

AbstraLibApiThreadsNotFoundStagesItem = str

AbstraLibApiThreadsNotFoundStages = typing.List[AbstraLibApiThreadsNotFoundStagesItem]

AbstraLibApiThreadsTotalCount = int


@dataclass
class AbstraLibApiThreads:
    stage_run_cards: AbstraLibApiThreadsStageRunCards
    not_found_stages: AbstraLibApiThreadsNotFoundStages
    total_count: AbstraLibApiThreadsTotalCount

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "stage_run_cards": self.stage_run_cards,
            "not_found_stages": self.not_found_stages,
            "total_count": self.total_count,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiThreads":
        return AbstraLibApiThreads(
            stage_run_cards=[
                AbstraLibApiStageRunCard.from_dict(item)
                for item in data["stage_run_cards"]
            ],
            not_found_stages=[str(item) for item in data["not_found_stages"]],
            total_count=int(data["total_count"]),
        )


AbstraLibApiStagesItem = AbstraLibApiStage

AbstraLibApiStages = typing.List[AbstraLibApiStagesItem]

AbstraLibApiPlayerUserSignupEmail = CommonUserEmail


@dataclass
class AbstraLibApiPlayerUserSignup:
    email: AbstraLibApiPlayerUserSignupEmail

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "email": self.email,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiPlayerUserSignup":
        return AbstraLibApiPlayerUserSignup(
            email=str(data["email"]),
        )


AbstraLibApiPlayerUserNavigationGuardStatus = typing.Union[
    typing.Literal["ALLOWED"],
    typing.Literal["UNAUTHORIZED"],
    typing.Literal["FORBIDEN"],
    typing.Literal["NOT_FOUND"],
]

AbstraLibApiPlayerUserNavigationGuardStatusValues: typing.List[
    AbstraLibApiPlayerUserNavigationGuardStatus
] = ["ALLOWED", "UNAUTHORIZED", "FORBIDEN", "NOT_FOUND"]


@dataclass
class AbstraLibApiPlayerUserNavigationGuard:
    status: AbstraLibApiPlayerUserNavigationGuardStatus

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "status": self.status,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiPlayerUserNavigationGuard":
        return AbstraLibApiPlayerUserNavigationGuard(
            status=data["status"],
        )


AbstraLibApiEditorLintersRuleName = str

AbstraLibApiEditorLintersRuleLabel = str

AbstraLibApiEditorLintersRuleType = typing.Literal["bug"]

AbstraLibApiEditorLintersRuleTypeValues: typing.List[
    AbstraLibApiEditorLintersRuleType
] = ["bug"]

AbstraLibApiEditorLintersIssueLabel = str

AbstraLibApiEditorLintersFixName = str

AbstraLibApiEditorLintersFixLabel = str


@dataclass
class AbstraLibApiEditorLintersFix:
    name: AbstraLibApiEditorLintersFixName
    label: AbstraLibApiEditorLintersFixLabel

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "name": self.name,
            "label": self.label,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiEditorLintersFix":
        return AbstraLibApiEditorLintersFix(
            name=str(data["name"]),
            label=str(data["label"]),
        )


AbstraLibApiEditorLintersIssueFixesItem = AbstraLibApiEditorLintersFix

AbstraLibApiEditorLintersIssueFixes = typing.List[
    AbstraLibApiEditorLintersIssueFixesItem
]


@dataclass
class AbstraLibApiEditorLintersIssue:
    label: AbstraLibApiEditorLintersIssueLabel
    fixes: AbstraLibApiEditorLintersIssueFixes

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "label": self.label,
            "fixes": self.fixes,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorLintersIssue":
        return AbstraLibApiEditorLintersIssue(
            label=str(data["label"]),
            fixes=[
                AbstraLibApiEditorLintersFix.from_dict(item) for item in data["fixes"]
            ],
        )


AbstraLibApiEditorLintersRuleIssuesItem = AbstraLibApiEditorLintersIssue

AbstraLibApiEditorLintersRuleIssues = typing.List[
    AbstraLibApiEditorLintersRuleIssuesItem
]


@dataclass
class AbstraLibApiEditorLintersRule:
    name: AbstraLibApiEditorLintersRuleName
    label: AbstraLibApiEditorLintersRuleLabel
    type: AbstraLibApiEditorLintersRuleType
    issues: AbstraLibApiEditorLintersRuleIssues

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "name": self.name,
            "label": self.label,
            "type": self.type,
            "issues": self.issues,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorLintersRule":
        return AbstraLibApiEditorLintersRule(
            name=str(data["name"]),
            label=str(data["label"]),
            type=data["type"],
            issues=[
                AbstraLibApiEditorLintersIssue.from_dict(item)
                for item in data["issues"]
            ],
        )


AbstraLibApiEditorEnvVarsModelName = str

AbstraLibApiEditorEnvVarsModelValue = str


@dataclass
class AbstraLibApiEditorEnvVarsModel:
    name: AbstraLibApiEditorEnvVarsModelName
    value: AbstraLibApiEditorEnvVarsModelValue

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "name": self.name,
            "value": self.value,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorEnvVarsModel":
        return AbstraLibApiEditorEnvVarsModel(
            name=str(data["name"]),
            value=str(data["value"]),
        )


AbstraLibApiEditorEnvVarsListResponseItem = AbstraLibApiEditorEnvVarsModel

AbstraLibApiEditorEnvVarsListResponse = typing.List[
    AbstraLibApiEditorEnvVarsListResponseItem
]

AbstraLibApiEditorEnvVarsCreateRequest = AbstraLibApiEditorEnvVarsModel

AbstraLibApiEditorEnvVarsCreateResponse = AbstraLibApiEditorEnvVarsModel

AbstraLibApiEditorLintersFixResponseSuccess = bool


@dataclass
class AbstraLibApiEditorLintersFixResponse:
    success: AbstraLibApiEditorLintersFixResponseSuccess

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "success": self.success,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorLintersFixResponse":
        return AbstraLibApiEditorLintersFixResponse(
            success=bool(data["success"]),
        )


AbstraLibApiEditorLintersCheckResponseItem = AbstraLibApiEditorLintersRule

AbstraLibApiEditorLintersCheckResponse = typing.List[
    AbstraLibApiEditorLintersCheckResponseItem
]

AbstraLibApiEditorFilesSettingsResponseSeparator = str


@dataclass
class AbstraLibApiEditorFilesSettingsResponse:
    separator: AbstraLibApiEditorFilesSettingsResponseSeparator

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "separator": self.separator,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorFilesSettingsResponse":
        return AbstraLibApiEditorFilesSettingsResponse(
            separator=str(data["separator"]),
        )


AbstraLibApiEditorFilesDeleteResponseOk = bool


@dataclass
class AbstraLibApiEditorFilesDeleteResponse:
    ok: typing.Optional[AbstraLibApiEditorFilesDeleteResponseOk] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "ok": self.ok,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorFilesDeleteResponse":
        return AbstraLibApiEditorFilesDeleteResponse(
            ok=bool(data.get("ok")),
        )


AbstraLibApiEditorFilesEditResponseOk = bool


@dataclass
class AbstraLibApiEditorFilesEditResponse:
    ok: typing.Optional[AbstraLibApiEditorFilesEditResponseOk] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "ok": self.ok,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorFilesEditResponse":
        return AbstraLibApiEditorFilesEditResponse(
            ok=bool(data.get("ok")),
        )


CommonFileNodePathPartsItem = str

CommonFileNodePathParts = typing.List[CommonFileNodePathPartsItem]

CommonFileNodeSize = int

CommonFileNodeLastModified = datetime.datetime

CommonFileNodeType = typing.Literal["file", "directory"]

CommonFileNodeChildrenItemItem = str

CommonFileNodeChildrenItem = typing.List[CommonFileNodeChildrenItemItem]

CommonFileNodeChildren = typing.List[CommonFileNodeChildrenItem]


@dataclass
class CommonFileNode:
    path_parts: CommonFileNodePathParts
    size: CommonFileNodeSize
    last_modified: CommonFileNodeLastModified
    type: CommonFileNodeType
    children: typing.Optional[CommonFileNodeChildren] = field(
        default_factory=lambda: []
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "pathParts": self.path_parts,
            "size": self.size,
            "lastModified": self.last_modified.isoformat(),
            "type": self.type,
            "children": self.children,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "CommonFileNode":
        return CommonFileNode(
            path_parts=[str(item) for item in data["pathParts"]],
            size=int(data["size"]),
            last_modified=datetime.datetime.fromisoformat(data["lastModified"]),
            type=data["type"],
            children=[
                [str(item) for item in item] for item in data.get("children", [])
            ],
        )


AbstraLibApiEditorFilesListResponseItemFile = CommonFileNode

AbstraLibApiEditorFilesListResponseItemStagesItemType = typing.Literal[
    "form", "hook", "job", "script"
]

AbstraLibApiEditorFilesListResponseItemStagesItemId = str


@dataclass
class AbstraLibApiEditorFilesListResponseItemStagesItem:
    type: AbstraLibApiEditorFilesListResponseItemStagesItemType
    id: AbstraLibApiEditorFilesListResponseItemStagesItemId

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "type": self.type,
            "id": self.id,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorFilesListResponseItemStagesItem":
        return AbstraLibApiEditorFilesListResponseItemStagesItem(
            type=data["type"],
            id=str(data["id"]),
        )


AbstraLibApiEditorFilesListResponseItemStages = typing.List[
    AbstraLibApiEditorFilesListResponseItemStagesItem
]


@dataclass
class AbstraLibApiEditorFilesListResponseItem:
    file: AbstraLibApiEditorFilesListResponseItemFile
    stages: AbstraLibApiEditorFilesListResponseItemStages

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "file": self.file.to_dict(),
            "stages": [item.to_dict() for item in self.stages],
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorFilesListResponseItem":
        return AbstraLibApiEditorFilesListResponseItem(
            file=CommonFileNode.from_dict(data["file"]),
            stages=[
                AbstraLibApiEditorFilesListResponseItemStagesItem.from_dict(item)
                for item in data["stages"]
            ],
        )


AbstraLibApiEditorFilesListResponse = typing.List[
    AbstraLibApiEditorFilesListResponseItem
]

AbstraLibApiEditorFilesMkdirResponseOk = bool


@dataclass
class AbstraLibApiEditorFilesMkdirResponse:
    ok: typing.Optional[AbstraLibApiEditorFilesMkdirResponseOk] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "ok": self.ok,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorFilesMkdirResponse":
        return AbstraLibApiEditorFilesMkdirResponse(
            ok=bool(data.get("ok")),
        )


AbstraLibApiEditorFilesRenameRequestPathPartsItem = str

AbstraLibApiEditorFilesRenameRequestPathParts = typing.List[
    AbstraLibApiEditorFilesRenameRequestPathPartsItem
]

AbstraLibApiEditorFilesRenameRequestNewPathPartsItem = str

AbstraLibApiEditorFilesRenameRequestNewPathParts = typing.List[
    AbstraLibApiEditorFilesRenameRequestNewPathPartsItem
]


@dataclass
class AbstraLibApiEditorFilesRenameRequest:
    path_parts: AbstraLibApiEditorFilesRenameRequestPathParts
    new_path_parts: AbstraLibApiEditorFilesRenameRequestNewPathParts

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "pathParts": self.path_parts,
            "newPathParts": self.new_path_parts,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorFilesRenameRequest":
        return AbstraLibApiEditorFilesRenameRequest(
            path_parts=[str(item) for item in data["pathParts"]],
            new_path_parts=[str(item) for item in data["newPathParts"]],
        )


AbstraLibApiEditorFilesRenameResponseOk = bool


@dataclass
class AbstraLibApiEditorFilesRenameResponse:
    ok: typing.Optional[AbstraLibApiEditorFilesRenameResponseOk] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "ok": self.ok,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any],
    ) -> "AbstraLibApiEditorFilesRenameResponse":
        return AbstraLibApiEditorFilesRenameResponse(
            ok=bool(data.get("ok")),
        )


AbstraLibApiEditorFilesCreateResponse = CommonFileNode
