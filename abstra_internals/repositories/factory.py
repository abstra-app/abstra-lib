from dataclasses import dataclass
from multiprocessing import Queue
from typing import Optional

from abstra_internals.cloud_api.http_client import HTTPClient
from abstra_internals.credentials import resolve_headers_raise
from abstra_internals.environment import (
    CLOUD_API_CLI_URL,
    CLOUD_API_PROD_HEADERS,
    CLOUD_API_PROD_URL,
    RABBITMQ_CONNECTION_URI,
)
from abstra_internals.repositories.ai import (
    AIRepository,
    LocalAIRepository,
    ProductionAIRepository,
)
from abstra_internals.repositories.connectors import (
    ConnectorsRepository,
)
from abstra_internals.repositories.email import (
    EmailRepository,
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
    MPContextReposity,
    SpawnContextReposity,
)
from abstra_internals.repositories.passwordless import (
    LocalPasswordlessRepository,
    PasswordlessRepository,
    ProductionPasswordlessRepository,
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
from abstra_internals.repositories.tables import (
    LocalTablesRepository,
    ProductionTablesRepository,
    TablesRepository,
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
    tables: TablesRepository
    email: EmailRepository
    users: UsersRepository
    roles: RolesRepository
    ai: AIRepository
    passwordless: PasswordlessRepository
    kv: KVRepository
    roles: RolesRepository
    tasks: TasksRepository
    tables: TablesRepository
    users: UsersRepository
    linter: LinterRepository


def build_editor_repositories(local_queue: Optional[Queue] = None):
    mp_context = SpawnContextReposity()

    http_client = HTTPClient(
        base_url=CLOUD_API_CLI_URL, base_headers_resolver=resolve_headers_raise
    )

    linter = LocalLinterRepository()
    local_queue = local_queue or mp_context.get_context().Queue()

    return Repositories(
        project=LocalProjectRepository(),
        execution=LocalExecutionRepository(mp_context.get_context()),
        producer=LocalProducerRepository(local_queue=local_queue),
        connectors=ConnectorsRepository(client=http_client),
        tasks=LocalTasksRepository(mp_context.get_context()),
        tables=LocalTablesRepository(client=http_client),
        email=EmailRepository(client=http_client),
        roles=LocalRolesRepository(client=http_client),
        ai=LocalAIRepository(client=http_client),
        execution_logs=LocalExecutionLogsRepository(),
        users=LocalUsersRepository(),
        passwordless=LocalPasswordlessRepository(),
        kv=LocalKVRepository(),
        mp_context=mp_context,
        linter=linter,
    )


def build_prod_repositories():
    if CLOUD_API_PROD_URL is None or RABBITMQ_CONNECTION_URI is None:
        raise Exception("Production urls are not set")

    disabled_stages_loader = ProductionDisabledStagesLoader()

    http_client = HTTPClient(
        base_url=CLOUD_API_PROD_URL, base_headers=CLOUD_API_PROD_HEADERS
    )

    return Repositories(
        project=ProductionProjectRepository(disabled_stages_loader),
        producer=ProductionProducerRepository(RABBITMQ_CONNECTION_URI),
        execution_logs=ProductionExecutionLogsRepository(client=http_client),
        connectors=ConnectorsRepository(client=http_client),
        execution=ProductionExecutionRepository(client=http_client),
        tables=ProductionTablesRepository(client=http_client),
        email=EmailRepository(client=http_client),
        roles=ProductionRolesRepository(),
        users=ProductionUsersRepository(client=http_client),
        tasks=ProductionTasksRepository(client=http_client),
        ai=ProductionAIRepository(client=http_client),
        passwordless=ProductionPasswordlessRepository(client=http_client),
        kv=ProductionKVRepository(client=http_client),
        mp_context=SpawnContextReposity(),
        linter=ProductionLinterRepository(),
    )
