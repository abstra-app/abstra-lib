"""
This file is auto generated. Do not edit this file manually.
Source code: [monorepo]/contracts/generator.py
"""

import datetime
import typing
from dataclasses import dataclass, field

CommonTablesSnapshotTablesItemId = str

CommonTablesSnapshotTablesItemName = str

CommonTablesSnapshotTablesItemColumnsItemId = str

CommonTablesSnapshotTablesItemColumnsItemPrimaryKey = bool

CommonTablesSnapshotTablesItemColumnsItemName = str

CommonTablesPgTypes = typing.Literal[
    "bigint",
    "int8",
    "bigserial",
    "serial8",
    "bit",
    "bit varying",
    "varbit",
    "boolean",
    "bool",
    "box",
    "bytea",
    "character",
    "char",
    "character varying",
    "varchar",
    "cidr",
    "circle",
    "date",
    "double precision",
    "float8",
    "inet",
    "integer",
    "int",
    "int4",
    "interval",
    "json",
    "jsonb",
    "line",
    "lseg",
    "macaddr",
    "money",
    "numeric",
    "decimal",
    "path",
    "pg_lsn",
    "point",
    "polygon",
    "real",
    "float4",
    "smallint",
    "int2",
    "smallserial",
    "serial2",
    "serial",
    "serial4",
    "text",
    "time",
    "time with time zone",
    "timetz",
    "timestamp",
    "timestamp with time zone",
    "timestamptz",
    "tsquery",
    "tsvector",
    "txid_snapshot",
    "uuid",
    "xml",
]

CommonTablesSnapshotTablesItemColumnsItemType = CommonTablesPgTypes

CommonTablesSnapshotTablesItemColumnsItemUnique = bool

CommonTablesSnapshotTablesItemColumnsItemNullable = bool

CommonTablesSnapshotTablesItemColumnsItemDefault = str

CommonTablesSnapshotTablesItemColumnsItemForeignKeyColumnId = str


@dataclass
class CommonTablesSnapshotTablesItemColumnsItemForeignKey:
    column_id: CommonTablesSnapshotTablesItemColumnsItemForeignKeyColumnId

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        data["columnId"] = self.column_id
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "CommonTablesSnapshotTablesItemColumnsItemForeignKey":
        return cls(
            column_id=str(data["columnId"]),
        )


@dataclass
class CommonTablesSnapshotTablesItemColumnsItem:
    id: CommonTablesSnapshotTablesItemColumnsItemId
    primary_key: CommonTablesSnapshotTablesItemColumnsItemPrimaryKey
    name: CommonTablesSnapshotTablesItemColumnsItemName
    type: CommonTablesSnapshotTablesItemColumnsItemType
    unique: typing.Optional[CommonTablesSnapshotTablesItemColumnsItemUnique] = field(
        default_factory=lambda: None
    )
    nullable: typing.Optional[CommonTablesSnapshotTablesItemColumnsItemNullable] = (
        field(default_factory=lambda: None)
    )
    default: typing.Optional[CommonTablesSnapshotTablesItemColumnsItemDefault] = field(
        default_factory=lambda: None
    )
    foreign_key: typing.Optional[
        CommonTablesSnapshotTablesItemColumnsItemForeignKey
    ] = field(default_factory=lambda: None)

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        data["id"] = self.id
        data["primaryKey"] = self.primary_key
        data["name"] = self.name
        data["type"] = self.type
        if self.unique is not None:
            data["unique"] = self.unique
        if self.nullable is not None:
            data["nullable"] = self.nullable
        if self.default is not None:
            data["default"] = self.default
        if self.foreign_key is not None:
            data["foreignKey"] = self.foreign_key.to_dict()
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "CommonTablesSnapshotTablesItemColumnsItem":
        return cls(
            id=str(data["id"]),
            primary_key=bool(data["primaryKey"]),
            name=str(data["name"]),
            type=data["type"],
            unique=None if data.get("unique") is None else bool(data["unique"]),
            nullable=None if data.get("nullable") is None else bool(data["nullable"]),
            default=None if data.get("default") is None else str(data["default"]),
            foreign_key=None
            if data.get("foreignKey") is None
            else CommonTablesSnapshotTablesItemColumnsItemForeignKey.from_dict(
                data["foreignKey"]
            ),
        )


CommonTablesSnapshotTablesItemColumns = typing.List[
    CommonTablesSnapshotTablesItemColumnsItem
]

CommonTablesSnapshotTablesItemDataItem = typing.Dict[str, typing.Any]

CommonTablesSnapshotTablesItemData = typing.List[CommonTablesSnapshotTablesItemDataItem]


@dataclass
class CommonTablesSnapshotTablesItem:
    id: CommonTablesSnapshotTablesItemId
    name: CommonTablesSnapshotTablesItemName
    columns: CommonTablesSnapshotTablesItemColumns
    data: CommonTablesSnapshotTablesItemData

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        data["id"] = self.id
        data["name"] = self.name
        data["columns"] = [item.to_dict() for item in self.columns]
        data["data"] = self.data
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "CommonTablesSnapshotTablesItem":
        return cls(
            id=str(data["id"]),
            name=str(data["name"]),
            columns=[
                CommonTablesSnapshotTablesItemColumnsItem.from_dict(item)
                for item in data["columns"]
            ],
            data=[dict(**item) for item in data["data"]],
        )


CommonTablesSnapshotTables = typing.List[CommonTablesSnapshotTablesItem]


@dataclass
class CommonTablesSnapshot:
    tables: CommonTablesSnapshotTables

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        data["tables"] = [item.to_dict() for item in self.tables]
        return data

    @classmethod
    def from_dict(cls, data: typing.Dict[str, typing.Any]) -> "CommonTablesSnapshot":
        return cls(
            tables=[
                CommonTablesSnapshotTablesItem.from_dict(item)
                for item in data["tables"]
            ],
        )


CloudApiCliTablesDumpResponse = CommonTablesSnapshot

CloudApiCliTablesRestoreRequest = CommonTablesSnapshot

CommonRoleDescription = str

CloudApiCliRoleUpdateRequestDescription = CommonRoleDescription


@dataclass
class CloudApiCliRoleUpdateRequest:
    description: CloudApiCliRoleUpdateRequestDescription

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        data["description"] = self.description
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "CloudApiCliRoleUpdateRequest":
        return cls(
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
        data = {}
        data["id"] = self.id
        data["name"] = self.name
        data["projectId"] = self.project_id
        data["createdAt"] = self.created_at
        if self.description is not None:
            data["description"] = self.description
        return data

    @classmethod
    def from_dict(cls, data: typing.Dict[str, typing.Any]) -> "CommonRole":
        return cls(
            id=str(data["id"]),
            name=str(data["name"]),
            project_id=str(data["projectId"]),
            created_at=str(data["createdAt"]),
            description=None
            if data.get("description") is None
            else str(data["description"]),
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
        data = {}
        if self.offset is not None:
            data["offset"] = self.offset
        if self.limit is not None:
            data["limit"] = self.limit
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "CloudApiCliRoleListQuery":
        return cls(
            offset=None if data.get("offset") is None else int(data["offset"]),
            limit=data.get("limit", 10),
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
        data = {}
        data["name"] = self.name
        if self.description is not None:
            data["description"] = self.description
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "CloudApiCliRoleCreateRequest":
        return cls(
            name=str(data["name"]),
            description=None
            if data.get("description") is None
            else str(data["description"]),
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
        data = {}
        data["id"] = self.id
        data["email"] = self.email
        data["roles"] = self.roles
        data["projectId"] = self.project_id
        data["createdAt"] = self.created_at
        return data

    @classmethod
    def from_dict(cls, data: typing.Dict[str, typing.Any]) -> "CommonUser":
        return cls(
            id=str(data["id"]),
            email=str(data["email"]),
            roles=[str(item) for item in data["roles"]],
            project_id=str(data["projectId"]),
            created_at=str(data["createdAt"]),
        )


CloudApiCliUserGetResponse = CommonUser

CloudApiCliBuildCreateResponseUrl = str

CloudApiCliBuildCreateResponseBuildId = str


@dataclass
class CloudApiCliBuildCreateResponse:
    url: CloudApiCliBuildCreateResponseUrl
    build_id: CloudApiCliBuildCreateResponseBuildId

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        data["url"] = self.url
        data["buildId"] = self.build_id
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "CloudApiCliBuildCreateResponse":
        return cls(
            url=str(data["url"]),
            build_id=str(data["buildId"]),
        )


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
        data = {}
        data["authorId"] = self.author_id
        data["projectId"] = self.project_id
        data["email"] = self.email
        data["intercomHash"] = self.intercom_hash
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "CloudApiCliApiKeyInfoResponse":
        return cls(
            author_id=str(data["authorId"]),
            project_id=str(data["projectId"]),
            email=str(data["email"]),
            intercom_hash=str(data["intercomHash"]),
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
        data = {}
        data["key"] = self.key
        data["value"] = self.value
        data["type"] = self.type
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiStageCardContent":
        return cls(
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
        data = {}
        data["id"] = self.id
        data["stage"] = self.stage
        data["data"] = self.data
        data["status"] = self.status
        data["created_at"] = self.created_at
        data["updated_at"] = self.updated_at
        if self.parent_id is not None:
            data["parent_id"] = self.parent_id
        if self.execution_id is not None:
            data["execution_id"] = self.execution_id
        return data

    @classmethod
    def from_dict(cls, data: typing.Dict[str, typing.Any]) -> "AbstraLibApiStageRun":
        return cls(
            id=str(data["id"]),
            stage=str(data["stage"]),
            data=dict(**data["data"]),
            status=data["status"],
            created_at=str(data["created_at"]),
            updated_at=str(data["updated_at"]),
            parent_id=None if data.get("parent_id") is None else str(data["parent_id"]),
            execution_id=None
            if data.get("execution_id") is None
            else str(data["execution_id"]),
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
        data = {}
        data["id"] = self.id
        data["created_at"] = self.created_at
        data["status"] = self.status
        data["content"] = self.content
        if self.updated_at is not None:
            data["updated_at"] = self.updated_at
        if self.assignee is not None:
            data["assignee"] = self.assignee
        if self.stage is not None:
            data["stage"] = self.stage
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiStageRunCard":
        return cls(
            id=str(data["id"]),
            created_at=str(data["created_at"]),
            status=data["status"],
            content=[
                AbstraLibApiStageCardContent.from_dict(item) for item in data["content"]
            ],
            updated_at=None
            if data.get("updated_at") is None
            else str(data["updated_at"]),
            assignee=None if data.get("assignee") is None else str(data["assignee"]),
            stage=None if data.get("stage") is None else str(data["stage"]),
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
        data = {}
        data["id"] = self.id
        data["type"] = self.type
        data["title"] = self.title
        data["can_be_started"] = self.can_be_started
        if self.path is not None:
            data["path"] = self.path
        return data

    @classmethod
    def from_dict(cls, data: typing.Dict[str, typing.Any]) -> "AbstraLibApiStage":
        return cls(
            id=str(data["id"]),
            type=data["type"],
            title=str(data["title"]),
            can_be_started=bool(data["can_be_started"]),
            path=None if data.get("path") is None else str(data["path"]),
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
        data = {}
        data["selected_stage"] = self.selected_stage.to_dict()
        data["stage_run_cards"] = self.stage_run_cards
        data["total_count"] = self.total_count
        if self.loading is not None:
            data["loading"] = self.loading
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiKanbanColumn":
        return cls(
            selected_stage=AbstraLibApiStage.from_dict(data["selected_stage"]),
            stage_run_cards=[
                AbstraLibApiStageRunCard.from_dict(item)
                for item in data["stage_run_cards"]
            ],
            total_count=int(data["total_count"]),
            loading=None if data.get("loading") is None else bool(data["loading"]),
        )


AbstraLibApiKanbanColumnsItem = AbstraLibApiKanbanColumn

AbstraLibApiKanbanColumns = typing.List[AbstraLibApiKanbanColumnsItem]

AbstraLibApiKanbanDataColumns = AbstraLibApiKanbanColumns


@dataclass
class AbstraLibApiKanbanData:
    columns: AbstraLibApiKanbanDataColumns

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        data["columns"] = self.columns
        return data

    @classmethod
    def from_dict(cls, data: typing.Dict[str, typing.Any]) -> "AbstraLibApiKanbanData":
        return cls(
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
        data = {}
        data["stage_run_cards"] = self.stage_run_cards
        data["not_found_stages"] = self.not_found_stages
        data["total_count"] = self.total_count
        return data

    @classmethod
    def from_dict(cls, data: typing.Dict[str, typing.Any]) -> "AbstraLibApiThreads":
        return cls(
            stage_run_cards=[
                AbstraLibApiStageRunCard.from_dict(item)
                for item in data["stage_run_cards"]
            ],
            not_found_stages=[str(item) for item in data["not_found_stages"]],
            total_count=int(data["total_count"]),
        )


AbstraLibApiStagesItem = AbstraLibApiStage

AbstraLibApiStages = typing.List[AbstraLibApiStagesItem]

AbstraLibApiEditorFilesSettingsResponseSeparator = str


@dataclass
class AbstraLibApiEditorFilesSettingsResponse:
    separator: AbstraLibApiEditorFilesSettingsResponseSeparator

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        data["separator"] = self.separator
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorFilesSettingsResponse":
        return cls(
            separator=str(data["separator"]),
        )


AbstraLibApiEditorFilesDeleteResponseOk = bool


@dataclass
class AbstraLibApiEditorFilesDeleteResponse:
    ok: typing.Optional[AbstraLibApiEditorFilesDeleteResponseOk] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        if self.ok is not None:
            data["ok"] = self.ok
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorFilesDeleteResponse":
        return cls(
            ok=None if data.get("ok") is None else bool(data["ok"]),
        )


AbstraLibApiEditorFilesEditResponseOk = bool


@dataclass
class AbstraLibApiEditorFilesEditResponse:
    ok: typing.Optional[AbstraLibApiEditorFilesEditResponseOk] = field(
        default_factory=lambda: None
    )

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        if self.ok is not None:
            data["ok"] = self.ok
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorFilesEditResponse":
        return cls(
            ok=None if data.get("ok") is None else bool(data["ok"]),
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
        data = {}
        data["pathParts"] = self.path_parts
        data["size"] = self.size
        data["lastModified"] = self.last_modified.isoformat()
        data["type"] = self.type
        if self.children is not None:
            data["children"] = self.children
        return data

    @classmethod
    def from_dict(cls, data: typing.Dict[str, typing.Any]) -> "CommonFileNode":
        return cls(
            path_parts=[str(item) for item in data["pathParts"]],
            size=int(data["size"]),
            last_modified=datetime.datetime.fromisoformat(data["lastModified"]),
            type=data["type"],
            children=None
            if data.get("children") is None
            else [[str(item) for item in item] for item in data["children"]],
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
        data = {}
        data["type"] = self.type
        data["id"] = self.id
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorFilesListResponseItemStagesItem":
        return cls(
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
        data = {}
        data["file"] = self.file.to_dict()
        data["stages"] = [item.to_dict() for item in self.stages]
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorFilesListResponseItem":
        return cls(
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
        data = {}
        if self.ok is not None:
            data["ok"] = self.ok
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorFilesMkdirResponse":
        return cls(
            ok=None if data.get("ok") is None else bool(data["ok"]),
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
        data = {}
        data["pathParts"] = self.path_parts
        data["newPathParts"] = self.new_path_parts
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorFilesRenameRequest":
        return cls(
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
        data = {}
        if self.ok is not None:
            data["ok"] = self.ok
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorFilesRenameResponse":
        return cls(
            ok=None if data.get("ok") is None else bool(data["ok"]),
        )


AbstraLibApiEditorFilesCreateResponse = CommonFileNode

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
        data = {}
        data["name"] = self.name
        data["label"] = self.label
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorLintersFix":
        return cls(
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
        data = {}
        data["label"] = self.label
        data["fixes"] = self.fixes
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorLintersIssue":
        return cls(
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
        data = {}
        data["name"] = self.name
        data["label"] = self.label
        data["type"] = self.type
        data["issues"] = self.issues
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorLintersRule":
        return cls(
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
        data = {}
        data["success"] = self.success
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorLintersFixResponse":
        return cls(
            success=bool(data["success"]),
        )


AbstraLibApiEditorLintersCheckResponseItem = AbstraLibApiEditorLintersRule

AbstraLibApiEditorLintersCheckResponse = typing.List[
    AbstraLibApiEditorLintersCheckResponseItem
]

AbstraLibApiEditorEnvVarsModelName = str

AbstraLibApiEditorEnvVarsModelValue = str


@dataclass
class AbstraLibApiEditorEnvVarsModel:
    name: AbstraLibApiEditorEnvVarsModelName
    value: AbstraLibApiEditorEnvVarsModelValue

    def to_dict(self) -> typing.Dict[str, typing.Any]:
        data = {}
        data["name"] = self.name
        data["value"] = self.value
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiEditorEnvVarsModel":
        return cls(
            name=str(data["name"]),
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
        data = {}
        data["email"] = self.email
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiPlayerUserSignup":
        return cls(
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
        data = {}
        data["status"] = self.status
        return data

    @classmethod
    def from_dict(
        cls, data: typing.Dict[str, typing.Any]
    ) -> "AbstraLibApiPlayerUserNavigationGuard":
        return cls(
            status=data["status"],
        )
