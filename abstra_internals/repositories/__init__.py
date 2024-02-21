from .execution_logs import execution_logs_repository_factory
from .connectors import connectors_api_http_client_factory
from .stage_run import stage_run_repository_factory
from .execution import execution_repository_factory
from .tables import tables_api_http_client_factory
from .authn import authn_repository_factory
from .notifications import notification_repository_factory
from .env_vars import env_vars_repository_factory
from .requirements import RequirementsRepository

connectors_api_http_client = connectors_api_http_client_factory()
execution_logs_repository = execution_logs_repository_factory()
tables_api_http_client = tables_api_http_client_factory()
stage_run_repository = stage_run_repository_factory()
execution_repository = execution_repository_factory()
authn_repository = authn_repository_factory()
notification_repository = notification_repository_factory()
env_vars_repository = env_vars_repository_factory()
requirements_repository = RequirementsRepository()

__all__ = [
    "connectors_api_http_client",
    "execution_logs_repository",
    "tables_api_http_client",
    "stage_run_repository",
    "execution_repository",
    "authn_repository",
    "notification_repository",
    "env_vars_repository",
]
