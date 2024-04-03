"""
This file is auto generated. Do not edit this file manually.
Source code: [monorepo]/contracts/generator.py
Last generated: 2024-04-02 19:08:01.853669
"""

import typing
from dataclasses import dataclass
import datetime

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
    description: typing.Optional[CommonRoleDescription]
    project_id: CommonRoleProjectId
    created_at: CommonRoleCreatedAt

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "projectId": self.project_id,
            "createdAt": self.created_at,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "CommonRole":
        return CommonRole(
            id=str(data["id"]),
            name=str(data["name"]),
            description=str(data.get("description")),
            project_id=str(data["projectId"]),
            created_at=str(data["createdAt"]),
        )


CloudApiCliRoleUpdateResponse = CommonRole

CloudApiCliRoleListQueryOffset = int

CloudApiCliRoleListQueryLimit = int


@dataclass
class CloudApiCliRoleListQuery:
    offset: typing.Optional[CloudApiCliRoleListQueryOffset]
    limit: typing.Optional[CloudApiCliRoleListQueryLimit]

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
    description: typing.Optional[CloudApiCliRoleCreateRequestDescription]

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

CloudApiCliAuthInfoResponseAuthorId = str

CloudApiCliAuthInfoResponseProjectId = str


@dataclass
class CloudApiCliAuthInfoResponse:
    author_id: CloudApiCliAuthInfoResponseAuthorId
    project_id: CloudApiCliAuthInfoResponseProjectId

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "authorId": self.author_id,
            "projectId": self.project_id,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "CloudApiCliAuthInfoResponse":
        return CloudApiCliAuthInfoResponse(
            author_id=str(data["authorId"]),
            project_id=str(data["projectId"]),
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
        data: typing.Dict[str, typing.Any]
    ) -> "CloudApiCliBuildCreateResponse":
        return CloudApiCliBuildCreateResponse(
            url=str(data["url"]),
            build_id=str(data["buildId"]),
        )


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

AbstraLibApiVisualizationName = str

AbstraLibApiVisualizationType = typing.Union[
    typing.Literal["text"],
    typing.Literal["image"],
    typing.Literal["table"],
    typing.Literal["progress-bar"],
]

AbstraLibApiVisualizationTypeValues: typing.List[AbstraLibApiVisualizationType] = [
    "text",
    "image",
    "table",
    "progress-bar",
]


@dataclass
class AbstraLibApiVisualization:
    name: AbstraLibApiVisualizationName
    type: AbstraLibApiVisualizationType

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "name": self.name,
            "type": self.type,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiVisualization":
        return AbstraLibApiVisualization(
            name=str(data["name"]),
            type=data["type"],
        )


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
    parent_id: typing.Optional[AbstraLibApiStageRunParentId]
    execution_id: typing.Optional[AbstraLibApiStageRunExecutionId]

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
    updated_at: typing.Optional[AbstraLibApiStageRunCardUpdatedAt]
    assignee: typing.Optional[AbstraLibApiStageRunCardAssignee]
    status: AbstraLibApiStageRunCardStatus
    content: AbstraLibApiStageRunCardContent
    stage: typing.Optional[AbstraLibApiStageRunCardStage]

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "id": self.id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "assignee": self.assignee,
            "status": self.status,
            "content": self.content,
            "stage": self.stage,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiStageRunCard":
        return AbstraLibApiStageRunCard(
            id=str(data["id"]),
            created_at=str(data["created_at"]),
            updated_at=str(data.get("updated_at")),
            assignee=str(data.get("assignee")),
            status=data["status"],
            content=[
                AbstraLibApiStageCardContent.from_dict(item) for item in data["content"]
            ],
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
    typing.Literal["iterator"],
    typing.Literal["condition"],
]

AbstraLibApiStageTypeValues: typing.List[AbstraLibApiStageType] = [
    "form",
    "hook",
    "job",
    "script",
    "iterator",
    "condition",
]

AbstraLibApiStageTitle = str

AbstraLibApiStagePath = str

AbstraLibApiStageCanBeStarted = bool


@dataclass
class AbstraLibApiStage:
    id: AbstraLibApiStageId
    type: AbstraLibApiStageType
    title: AbstraLibApiStageTitle
    path: typing.Optional[AbstraLibApiStagePath]
    can_be_started: AbstraLibApiStageCanBeStarted

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "id": self.id,
            "type": self.type,
            "title": self.title,
            "path": self.path,
            "can_be_started": self.can_be_started,
        }

    @staticmethod
    def from_dict(data: typing.Dict[str, typing.Any]) -> "AbstraLibApiStage":
        return AbstraLibApiStage(
            id=str(data["id"]),
            type=data["type"],
            title=str(data["title"]),
            path=str(data.get("path")),
            can_be_started=bool(data["can_be_started"]),
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
    loading: typing.Optional[AbstraLibApiKanbanColumnLoading]

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "selected_stage": self.selected_stage,
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


AbstraLibApiVisualizationsItem = AbstraLibApiVisualization

AbstraLibApiVisualizations = typing.List[AbstraLibApiVisualizationsItem]

AbstraLibApiStagesItem = AbstraLibApiStage

AbstraLibApiStages = typing.List[AbstraLibApiStagesItem]

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
        data: typing.Dict[str, typing.Any]
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
        data: typing.Dict[str, typing.Any]
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
        data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorLintersFixResponse":
        return AbstraLibApiEditorLintersFixResponse(
            success=bool(data["success"]),
        )


AbstraLibApiEditorLintersCheckResponseItem = AbstraLibApiEditorLintersRule

AbstraLibApiEditorLintersCheckResponse = typing.List[
    AbstraLibApiEditorLintersCheckResponseItem
]

AbstraLibApiEditorEnvVarsModelKey = str

AbstraLibApiEditorEnvVarsModelValue = str


@dataclass
class AbstraLibApiEditorEnvVarsModel:
    key: AbstraLibApiEditorEnvVarsModelKey
    value: AbstraLibApiEditorEnvVarsModelValue

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "key": self.key,
            "value": self.value,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorEnvVarsModel":
        return AbstraLibApiEditorEnvVarsModel(
            key=str(data["key"]),
            value=str(data["value"]),
        )


AbstraLibApiEditorEnvVarsListResponseItem = AbstraLibApiEditorEnvVarsModel

AbstraLibApiEditorEnvVarsListResponse = typing.List[
    AbstraLibApiEditorEnvVarsListResponseItem
]

AbstraLibApiEditorEnvVarsCreateRequest = AbstraLibApiEditorEnvVarsModel

AbstraLibApiEditorEnvVarsCreateResponse = AbstraLibApiEditorEnvVarsModel

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
]

AbstraLibApiPlayerUserNavigationGuardStatusValues: typing.List[
    AbstraLibApiPlayerUserNavigationGuardStatus
] = ["ALLOWED", "UNAUTHORIZED", "FORBIDEN"]


@dataclass
class AbstraLibApiPlayerUserNavigationGuard:
    status: AbstraLibApiPlayerUserNavigationGuardStatus

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        return {
            "status": self.status,
        }

    @staticmethod
    def from_dict(
        data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiPlayerUserNavigationGuard":
        return AbstraLibApiPlayerUserNavigationGuard(
            status=data["status"],
        )
