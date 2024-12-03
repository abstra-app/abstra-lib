from dataclasses import dataclass

from abstra_internals.environment import (
    CLOUD_API_CLI_URL,
    EDITOR_MODE,
    RABBITMQ_CONNECTION_URI,
    SIDECAR_URL,
)
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
    EditorJWTRepository,
    JWTRepository,
    LocalJWTRepository,
    ProductionJWTRepository,
    get_editor_jwt_repository,
)
from abstra_internals.repositories.keyvalue import (
    KVRepository,
    LocalKVRepository,
    ProductionKVRepository,
)
from abstra_internals.repositories.multiprocessing import (
    ForkserverContextRepository,
    MPContextReposity,
    SpawnContextReposity,
)
from abstra_internals.repositories.producer import (
    LocalProducerRepository,
    ProducerRepository,
    ProductionProducerRepository,
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
    execution_logs: ExecutionLogsRepository
    connectors: ConnectorsRepository
    execution: ExecutionRepository
    mp_context: MPContextReposity
    stage_run: StageRunRepository
    producer: ProducerRepository
    tables: TablesApiHttpClient
    email: EmailRepository
    users: UsersRepository
    roles: RolesRepository
    ai: AiApiHttpClient
    jwt: JWTRepository
    kv: KVRepository
    roles: RolesRepository
    stage_run: StageRunRepository
    tables: TablesApiHttpClient
    users: UsersRepository
    editor_jwt: EditorJWTRepository


def get_editor_repositories():
    mp_context = SpawnContextReposity()

    return Repositories(
        execution=LocalExecutionRepository(mp_context.get_context()),
        stage_run=LocalStageRunRepository(mp_context.get_context()),
        producer=LocalProducerRepository(mp_context.get_context()),
        connectors=LocalConnectorsRepository(CLOUD_API_CLI_URL),
        tables=LocalTablesApiHttpClient(CLOUD_API_CLI_URL),
        email=LocalEmailRepository(CLOUD_API_CLI_URL),
        roles=LocalRolesRepository(CLOUD_API_CLI_URL),
        ai=LocalAiApiHttpClient(CLOUD_API_CLI_URL),
        execution_logs=LocalExecutionLogsRepository(),
        users=LocalUsersRepository(),
        jwt=LocalJWTRepository(),
        kv=LocalKVRepository(),
        editor_jwt=get_editor_jwt_repository(EDITOR_MODE),
        mp_context=mp_context,
    )


def get_prodution_app_repositories():
    if SIDECAR_URL is None or RABBITMQ_CONNECTION_URI is None:
        raise Exception("Production urls are not set")

    return Repositories(
        producer=ProductionProducerRepository(RABBITMQ_CONNECTION_URI),
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
        editor_jwt=get_editor_jwt_repository(EDITOR_MODE),
        mp_context=ForkserverContextRepository(),
    )
