from dataclasses import dataclass

from abstra_internals.environment import (
    CLOUD_API_CLI_URL,
    EDITOR_MODE,
    RABBITMQ_CONNECTION_URI,
    SIDECAR_URL,
)
from abstra_internals.repositories.agents import (
    AgentsRepository,
    LocalAgentsRepository,
    ProductionAgentsRepository,
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
from abstra_internals.repositories.linter.repository import (
    LinterRepository,
    LocalLinterRepository,
    ProductionLinterRepository,
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
from abstra_internals.repositories.project.disabled_stages_loader import (
    ProductionDisabledStagesLoader,
)
from abstra_internals.repositories.project.project import (
    LocalProjectRepository,
    ProductionProjectRepository,
    ProjectRepository,
)
from abstra_internals.repositories.roles import (
    LocalRolesRepository,
    ProductionRolesRepository,
    RolesRepository,
)
from abstra_internals.repositories.services import (
    LocalRoleAgentRepository,
    LocalRoleClientRepository,
    ProductionRoleAgentRepository,
    ProductionRoleClientRepository,
)
from abstra_internals.repositories.services.roles.agent import RoleAgentRepository
from abstra_internals.repositories.services.roles.client import RoleClientRepository
from abstra_internals.repositories.tables import (
    LocalTablesApiHttpClient,
    ProductionTablesApiHttpClient,
    TablesApiHttpClient,
)
from abstra_internals.repositories.tasks import (
    LocalTasksRepository,
    ProductionTasksRepository,
    TasksRepository,
)
from abstra_internals.repositories.users import (
    LocalUsersRepository,
    ProductionUsersRepository,
    UsersRepository,
)


@dataclass
class Repositories:
    project: ProjectRepository
    execution_logs: ExecutionLogsRepository
    connectors: ConnectorsRepository
    execution: ExecutionRepository
    mp_context: MPContextReposity
    producer: ProducerRepository
    tables: TablesApiHttpClient
    email: EmailRepository
    users: UsersRepository
    roles: RolesRepository
    ai: AiApiHttpClient
    jwt: JWTRepository
    kv: KVRepository
    roles: RolesRepository
    tasks: TasksRepository
    tables: TablesApiHttpClient
    users: UsersRepository
    editor_jwt: EditorJWTRepository
    role_agents: RoleAgentRepository
    role_clients: RoleClientRepository
    agents: AgentsRepository
    linter: LinterRepository


def get_editor_repositories():
    mp_context = SpawnContextReposity()

    linter = LocalLinterRepository()

    return Repositories(
        project=LocalProjectRepository(),
        execution=LocalExecutionRepository(mp_context.get_context()),
        producer=LocalProducerRepository(mp_context.get_context()),
        connectors=LocalConnectorsRepository(CLOUD_API_CLI_URL),
        tasks=LocalTasksRepository(mp_context.get_context()),
        tables=LocalTablesApiHttpClient(CLOUD_API_CLI_URL),
        email=LocalEmailRepository(CLOUD_API_CLI_URL),
        roles=LocalRolesRepository(CLOUD_API_CLI_URL),
        ai=LocalAiApiHttpClient(CLOUD_API_CLI_URL),
        execution_logs=LocalExecutionLogsRepository(),
        users=LocalUsersRepository(),
        jwt=LocalJWTRepository(),
        kv=LocalKVRepository(),
        role_agents=LocalRoleAgentRepository(CLOUD_API_CLI_URL),
        role_clients=LocalRoleClientRepository(CLOUD_API_CLI_URL),
        editor_jwt=get_editor_jwt_repository(EDITOR_MODE),
        mp_context=mp_context,
        agents=LocalAgentsRepository(CLOUD_API_CLI_URL),
        linter=linter,
    )


def get_prodution_app_repositories():
    if SIDECAR_URL is None or RABBITMQ_CONNECTION_URI is None:
        raise Exception("Production urls are not set")

    disabled_stages_loader = ProductionDisabledStagesLoader()

    return Repositories(
        project=ProductionProjectRepository(disabled_stages_loader),
        producer=ProductionProducerRepository(RABBITMQ_CONNECTION_URI),
        execution_logs=ProductionExecutionLogsRepository(SIDECAR_URL),
        connectors=ProductionConnectorsRepository(SIDECAR_URL),
        execution=ProductionExecutionRepository(SIDECAR_URL),
        tables=ProductionTablesApiHttpClient(SIDECAR_URL),
        email=ProductionEmailRepository(SIDECAR_URL),
        roles=ProductionRolesRepository(SIDECAR_URL),
        users=ProductionUsersRepository(SIDECAR_URL),
        tasks=ProductionTasksRepository(SIDECAR_URL),
        ai=ProductionAiApiHttpClient(SIDECAR_URL),
        jwt=ProductionJWTRepository(SIDECAR_URL),
        kv=ProductionKVRepository(SIDECAR_URL),
        role_agents=ProductionRoleAgentRepository(SIDECAR_URL),
        role_clients=ProductionRoleClientRepository(SIDECAR_URL),
        editor_jwt=get_editor_jwt_repository(EDITOR_MODE),
        mp_context=ForkserverContextRepository(),
        agents=ProductionAgentsRepository(SIDECAR_URL),
        linter=ProductionLinterRepository(),
    )
