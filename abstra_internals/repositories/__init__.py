from .connectors import connectors_api_http_client_factory
from .stage_run import get_stage_run_repository
from .tables import tables_api_http_client_factory

connectors_api_http_client = connectors_api_http_client_factory()
tables_api_http_client = tables_api_http_client_factory()

StageRunRepository = get_stage_run_repository()
