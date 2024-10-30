from dataclasses import dataclass

from abstra_internals.environment import CLOUD_API_CLI_URL, SIDECAR_URL
from abstra_internals.repositories.ai import (
    AiApiHttpClient,
    LocalAiApiHttpClient,
    ProductionAiApiHttpClient,
)
from abstra_internals.repositories.connectors import (
    ConnectorsRepository,
    LocalConnectorsRepository,
    ProductionConnectorsRepository,
)
from abstra_internals.repositories.email import (
    EmailRepository,
    LocalEmailRepository,
    ProductionEmailRepository,
)
from abstra_internals.repositories.execution import (
    ExecutionRepository,
    LocalExecutionRepository,
    ProductionExecutionRepository,
)
from abstra_internals.repositories.execution_logs import (
    ExecutionLogsRepository,
    LocalExecutionLogsRepository,
    ProductionExecutionLogsRepository,
)
from abstra_internals.repositories.jwt_signer import (
    JWTRepository,
    LocalJWTRepository,
    ProductionJWTRepository,
)
from abstra_internals.repositories.keyvalue import (
    KVRepository,
    LocalKVRepository,
    ProductionKVRepository,
)
from abstra_internals.repositories.roles import (
    LocalRolesRepository,
    ProductionRolesRepository,
    RolesRepository,
)
from abstra_internals.repositories.stage_run import (
    LocalStageRunRepository,
    ProductionStageRunRepository,
    StageRunRepository,
)
from abstra_internals.repositories.tables import (
    LocalTablesApiHttpClient,
    ProductionTablesApiHttpClient,
    TablesApiHttpClient,
)
from abstra_internals.repositories.users import (
    LocalUsersRepository,
    ProductionUsersRepository,
    UsersRepository,
)


@dataclass
class Repositories:
    ai: AiApiHttpClient
    connectors: ConnectorsRepository
    email: EmailRepository
    execution_logs: ExecutionLogsRepository
    execution: ExecutionRepository
    jwt: JWTRepository
    kv: KVRepository
    roles: RolesRepository
    stage_run: StageRunRepository
    tables: TablesApiHttpClient
    users: UsersRepository


def get_local_repositories():
    return Repositories(
        connectors=LocalConnectorsRepository(CLOUD_API_CLI_URL),
        tables=LocalTablesApiHttpClient(CLOUD_API_CLI_URL),
        email=LocalEmailRepository(CLOUD_API_CLI_URL),
        roles=LocalRolesRepository(CLOUD_API_CLI_URL),
        ai=LocalAiApiHttpClient(CLOUD_API_CLI_URL),
        execution_logs=LocalExecutionLogsRepository(),
        execution=LocalExecutionRepository(),
        stage_run=LocalStageRunRepository(),
        users=LocalUsersRepository(),
        jwt=LocalJWTRepository(),
        kv=LocalKVRepository(),
    )


def get_prodution_repositories():
    if SIDECAR_URL is None:
        raise Exception("Sidecar URL is not set")

    return Repositories(
        execution_logs=ProductionExecutionLogsRepository(SIDECAR_URL),
        connectors=ProductionConnectorsRepository(SIDECAR_URL),
        execution=ProductionExecutionRepository(SIDECAR_URL),
        tables=ProductionTablesApiHttpClient(SIDECAR_URL),
        stage_run=ProductionStageRunRepository(SIDECAR_URL),
        email=ProductionEmailRepository(SIDECAR_URL),
        roles=ProductionRolesRepository(SIDECAR_URL),
        users=ProductionUsersRepository(SIDECAR_URL),
        ai=ProductionAiApiHttpClient(SIDECAR_URL),
        jwt=ProductionJWTRepository(SIDECAR_URL),
        kv=ProductionKVRepository(SIDECAR_URL),
    )
